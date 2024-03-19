/**
 *
 * @auth    derong.zeng 20161027
 * @charset utf-8
 * @indent  空格*4
 * @depend  bjf.base,bjf.remoter
 */

(function (w_) {
    if (undefined == w_.bjf) {
        throw new Error('depend bjf.base!');
    }
    if (undefined == w_.bjf.remoter) {
        throw new Error('depend bjf.remoter!');
    }
    else if (undefined != w_.bjf.focus) {
        return;
    }

//以下一行是自动打包脚本识别的特殊tag注释，勿改勿删
//--------------------BuildTagStart------------------

    /**
     * getDomAttribute和getDomBody方法，用来从html字符串中扣出对应的属性，来修复UT的盒子不能获取属性的问题
     */
    function getDomAttribute(body_, name_) {
        var _nlen = name_.length, _start = body_.indexOf(' ' + name_+'="'), _end, _value;
        if (_start < 0) {
            return null;
        }
        _end = body_.indexOf('"', _start + _nlen + 4);
        _value = body_.substr(_start + _nlen + 3, _end - _start  - _nlen - 3);
        return _value;
    }
    function getDomBody(html_, name_, ele_, attrs_, offset_) {
        offset_ = offset_ || 0;
        var _post = html_.indexOf(name_, offset_), _start, _end, _content, _len = attrs_.length, _v;
        if (_post < 0) {
            return false;
        }
        _start = html_.lastIndexOf('<', _post);
        _end   = html_.indexOf('>', _post+1);
        _content = html_.substr(_start + 1, _end - _start - 1);
        for (var i=0; i < _len; i++) {
            _v = getDomAttribute(_content, attrs_[i]);
            if (null !== _v && null === bjf.getAttribute(ele_, attrs_[i])) {
                bjf.setAttribute(ele_, attrs_[i], _v);
            }
        }
        return _end;
    }
    
    /**
     * 光标节点构造器，
     * 光标节点可以是一个按钮，也可以是一堆按钮的集合
     * @param args 设置参数
     */
    FocusNode = function (args) {
        args        = args || {};
        this.x      = args.x || 0; //光标在坐标系中的x值
        this.y      = args.y || 0; //光标在坐标系中的y值
        this.status = ('undefined' == typeof(args.status)) ? 1 : args.status;//光标状态，是否可用
        this.data   = args.data || null;//光标节点需要保存的数据
        this.id     = args.id || null;//节点id
        //以下几个事件，只有focus集合才会被执行
        this.cache          = args.cache || 0;//光标跳出该集合时，是否记住光标所在子结点的ID
        this.saved_id       = args.saved_id || null;//光标跳出该集合时，所在子结点的ID，当光标再次跳入此集合是恢复该节点的亮起状态
        this.saved_dir      = args.saved_dir || null;//
        this.default_node   = args.default_node || null; //第一次进来默认高亮的子结点
        //子结点
        this.children       = [];
        //活着的子结点
        this.alive_children = null;
        //父节点
        this.parent         = null;
        //是否是光标集合，通过是否有子结点来判断，如果有调用过addChild说明是一个实体光标节点，没有则说明是一个光标集合
        this.is_collection  = 0;
        if (args.maxX) {
            this.maxX = args.maxX;
        }
        if (args.maxY) {
            this.maxY = args.maxY;
        }
    };

    FocusNode.prototype = {
        /**
         * 为当前光标集添加一个子结点，并绑定父子关系
         * @param node 待添加的子节点
         */
        addChild : function (node) {
            if (!(node instanceof FocusNode)) {
                var _e = new Error('addChild failed: node is not a FocusNode Object');
                if (bjf.debug) {
                    bjf.debug(_e);
                }
                else {
                    throw _e;
                }
            }
            var _x = node.x, _y = node.y, _maxX = node.maxX || _x, _maxY = node.maxY || node.y;
            node.parent = this;
            for (var i = _y; i <= _maxY; i++) {
                if (!this.children[i]) {
                    this.children[i] = [];
                }
                for (var j = _x; j <= _maxX; j++) {
                    this.children[i][j] = node;
                }
            }
            //继承保存历史开关
            if (0 == node.cache && 1 == this.cache) {
                node.cache = 1;
            }
            this.is_collection = 1;
        },
        /**
         * 替换指定位置的子结点，该位置原来的结点会和parent解除父子关系
         * @param x     要替换位置的x值
         * @param y     要替换位置的y值
         * @param node  新的节点对象
         */
        replaceChild : function (x, y, node) {
            if (!this.children[y]) {
                return false;
            }
            if (this.children[y][x]) {
                this.children[y][x].parent = null;
            }
            node.x = x;
            node.y = y;
            node.parent = this;
            this.children[y][x] = node;
            return true;
        },
        /**
         * 获取指定位置(或方向)的子结点，会向里层递归
         * @param x     要获取位置的x值
         * @param y     要获取位置的y值
         * @param dir   搜索方向。默认为''(空)获取第一个子节点，-1获取最后一个子节点
         */
        getPosterity : function (x, y, dir) {
            if (!this.children[y]) {
                return null;
            }
            var _child = this.children[y][x];
            if (!_child) {
                return null;
            }
            //如果子结点的status不为1，则不再进入深层搜索
            if (0 < _child.children.length && 1 == _child.status) {
                //如果历史记录开关打开，且有历史记录
                if (1 == _child.cache && _child.saved_id && (0 == bjf.focus.dir || _child.saved_dir == -bjf.focus.dir)) {
                    var ret = _child.dispatchEvent('enter');
                    if (false === ret) {
                        return false;
                    }
                    return _child.getPosterity(_child.saved_id[0], _child.saved_id[1]);
                }
                if (_child.alive_children) {
                    var ret = _child.dispatchEvent('enter');
                    if (false === ret) {
                        return false;
                    }
                    //启动异次元搜索
                    return _child.getAliveChild(0, 0);
                }
                if (null !== _child.default_node) {
                    var ret = _child.dispatchEvent('enter');
                    if (false === ret) {
                        return false;
                    }
                    var _x = _child.default_node[0];
                    var _y = _child.default_node[1];
                    _child.default_node = null;
                    return _child.getChild(_x, _y);
                }

                //dir=-1 的时候，返回最后一个子元素
                if (-1 == dir) {
                    return _child.getLastChild();
                }
                else if (-2 == dir) { //dir=-2 的时候，模拟B光标集左移转到A光标集合
                    if (1 < _child.children.length) { //模拟A光标集合中有多行子光标
                        return _child.getFirstChild();
                    }
                    else { //模拟A光标集合中只有一行子光标
                        return _child.getLastChild();
                    }
                }
                else if (-3 == dir) { //dir=-3 的时候，模拟B光标集上移转到A光标集合
                    if (1 == _child.children.length && 1 < _child.children[0].length) {//模拟A光标集合中只有一行且有多列子光标
                        return _child.getFirstChild();
                    }
                    else {
                        return _child.getLastChild();
                    }
                }
                else {
                    return _child.getFirstChild();
                }
            }
            return _child;
        },
        /**
         * 获取当前光标集下的某个子结点，不向里层递归
         * @param x     要获取子结点的x值
         * @param y     要获取子结点的y值
         */
        getChild : function (x, y) {
            if (!this.children[y]) {
                return null;
            }
            var _child = this.children[y][x];
            if (!_child) {
                return null;
            }
            return _child;
        },
        /**
         * 获取当前光标集下的某个可用子结点，不向里层递归
         * 此方法主要针对光标集下存在不可用子结点(status = 0)的情况
         * @param x     要获取子结点的x值
         * @param y     要获取子结点的y值
         */
        getAliveChild : function (x, y) {
            if (!this.alive_children) {
                return null;
            }
            if (!this.alive_children[y]) {
                return null;
            }
            var _len = this.alive_children[y].length - 1;
            if (x > _len) {
                return this.alive_children[y][_len]
            }
            return this.alive_children[y][x] || null;
        },
        /**
         * 过滤当前光标集下所以不可用的子结点
         */
        filterDisabled : function () {
            var _c = this.children,
                _x = 0,
                _y = -1,
                _z = -1;
            this.alive_children = [];
            for(var i = 0; i < _c.length; i++) {
                if (_c[i]) {
                    for (var j = 0; j < _c[i].length; j++) {
                        if (_c[i][j] && 1 == _c[i][j].status) {
                            if (_z != i) {
                                _y++;
                                _x = 0;
                                this.alive_children[_y] = [];
                                _z = i;
                            }
                            var _node = _c[i][j];
                            _node.aX = _x;
                            _node.aY = _y;
                            this.alive_children[_y][_x] = _node;
                            _x++;
                        }
                    }
                }
            }
        },
        /**
         * 获得第一个子结点
         */
        getFirstChild : function () {
            var ret = this.dispatchEvent('enter');
            if (false === ret) {
                return false;
            }
            if(this.alive_children){
                return this.getAliveChild(0, 0);
            }
            return this.getPosterity(0, 0);
        },
        /**
         * 获得最后一个子结点
         */
        getLastChild : function () {
            var ret = this.dispatchEvent('enter');
            if (false === ret) {
                return false;
            }
            if(this.alive_children){
                var _lengthY = this.alive_children.length;
                if (0 == _lengthY) {
                    return null
                }
                var _lengthX = this.alive_children[_lengthY - 1].length;
                if (0 == _lengthX) {
                    return null
                }
                return this.getAliveChild(_lengthX - 1, _lengthY - 1);
            }
            var _lengthY = this.children.length;
            if (0 == _lengthY) {
                return null;
            }
            var _lengthX = this.children[_lengthY - 1].length;
            if (0 == _lengthX) {
                return null;
            }
            return this.getPosterity(_lengthX - 1, _lengthY - 1, -1);
        },
        /**
         * 移除所有子结点，并断开父子关系
         */
        removeChildren : function () {
            for(var i = 0; i < this.children.length; i++) {
                var _child_row = this.children[i];
                for (var j = 0; j < _child_row.length; j++) {
                    _child_row[j].parent = null;
                }
            }
            this.children = [];
        },
        /**
         * 获取父节点的兄弟节点，会向里层递归
         * @param offsetX     x轴上的偏移值
         * @param offsetY     y轴上的偏移值
         */
        _getUncle : function (offsetX, offsetY) {
            var _p   = this.parent,
                _x   = _p.x + offsetX,
                _y   = _p.y + offsetY,
                _dir = 1;
            if (!_p.parent) {
                return null;
            }
            var _pp  = _p.parent;
            if (-1 == offsetX) {
                //左移
                _dir = -2;
            }
            else if (1 == offsetX) {
                //右移
                if (_p.maxX) {
                    //跨步移动
                    _x = _p.maxX + offsetX;
                }
            }
            else if (-1 == offsetY) {
                //上移
                _dir = -3;
            }
            else if (1 == offsetY) {
                //下移
                if (_p.maxY) {
                    //跨步移动
                    _y = _p.maxY + offsetY;
                }
            }
            //如果上下移动中，上一个x坐标超过了下一个x坐标的最大值，则调整为下一个x左边的最大值
            if (0 != offsetY && _pp.children[_y] && _x >= _pp.children[_y].length) {
                var _uncle = _pp.getPosterity(_pp.children[_y].length - 1, _y, _dir);
            }
            else {
                var _uncle =  _pp.getPosterity(_x, _y, _dir);
            }
            if (false === _uncle) {
                return false;
            }
            if (_uncle) {
                //找到的不可用或者是个空壳
                if (1 != _uncle.status || _uncle.is_collection) {
                    return _uncle.getByOffset(offsetX, offsetY);
                }
                return _uncle;
            }

            if(_pp){//uncle节点不存在，而且本身的父节点存在，则先触发边界事件，再偏移一下找父节点的兄弟节点;
                var ret = true;
                if (0 == offsetY) {
                    if (0 > offsetX) {
                        //左移到边界
                        ret = _pp.dispatchEvent('left');
                        if (1 == _p.cache) {
                         _p.saveId(this.x, this.y);
                         }
                    }
                    else if (0 < offsetX) {
                        //右移到边界
                        ret = _pp.dispatchEvent('right');
                         if (1 == _p.cache) {
                         _p.saveId(this.x, this.y);
                         }
                    }
                }
                else if (0 == offsetX) {
                    if (0 > offsetY) {
                        //上移到边界
                        ret = _pp.dispatchEvent('top');
                        if (1 == _p.cache) {
                         _p.saveId(this.x, this.y);
                         }
                    }
                    else if (0 < offsetY) {
                        //下移到边界
                        ret = _pp.dispatchEvent('bottom');
                        if (1 == _p.cache) {
                         _p.saveId(this.x, this.y);
                         }
                    }
                }
                if (false === ret) {
                    return false;
                }
            }
            return _p._getUncle(offsetX, offsetY);//爷爷节点不存在去找父节点的叔叔节点,不会触发边界事件;
        },
        /**
         * 将节点所在的坐标路由转换成字符串
         */
        coordTostr : function () {
            var _str = this.x + '-' + this.y;
            if (this.parent) {
                _str += ':' + this.parent.coordTostr();
            }
            return _str;
        },
        /**
         * 根据当前节点的偏移量来获取兄弟结点
         * @param offsetX     x轴上的偏移值；-1左移、1右移
         * @param offsetY     y轴上的偏移值；-1上移、1下移
         */
        getByOffset : function (offsetX, offsetY) {
            var _p   = this.parent,
                _x   = this.x + offsetX,
                _y   = this.y + offsetY,
                _dir = 1,
                _p_children = _p.children;
            if (!_p) {
                return null;
            }
            if (-1 == offsetX) {
                //左移
                _dir = -2;
            }
            else if (1 == offsetX) {
                //右移
                if (this.maxX) {
                    //跨步移动
                    _x = this.maxX + offsetX;
                }
            }
            else if (-1 == offsetY) {
                //上移
                _dir = -3;
            }
            else if (1 == offsetY) {
                //下移
                if (this.maxY) {
                    //跨步移动
                    _y = this.maxY + offsetY;
                }
            }
            if(_p.alive_children){
                _p_children = _p.alive_children;
            }
            //如果上下移动中，上一个x坐标超过了下一个x坐标的最大值，则调整为下一个x左边的最大值
            if (0 != offsetY && _p_children[_y] && _x >= _p_children[_y].length) {
                var _next = _p.getPosterity(_p_children[_y].length - 1, _y, _dir);
            }
            else {
                var _next = _p.getPosterity(_x, _y, _dir);
            }
            if (false === _next) {
                return false;
            }
			if (_next) {
                if (0 == _next.status) {
                    return _next.getByOffset(offsetX, offsetY);
                }
                return _next;
            }
            //触发事件
            var ret = true;
            if (0 == offsetY) {
                if (0 > offsetX) {
                    //左移到边界
                    ret = _p.dispatchEvent('left');
                    if (1 == _p.cache) {
                        _p.saveId(this.x, this.y);
                    }
                }
                else if (0 < offsetX) {
                    //右移到边界
                    ret = _p.dispatchEvent('right');
                    if (1 == _p.cache) {
                        _p.saveId(this.x, this.y);
                    }
                }
            }
            else if (0 == offsetX) {
                if (0 > offsetY) {
                    //上移到边界
                    ret = _p.dispatchEvent('top');
                    if (1 == _p.cache) {
                        _p.saveId(this.x, this.y);
                    }
                }
                else if (0 < offsetY) {
                    //下移到边界
                    ret = _p.dispatchEvent('bottom');
                    if (1 == _p.cache) {
                        _p.saveId(this.x, this.y);
                    }
                }
            }
            if (false === ret) {
                return false;
            }
            var _uncle = this._getUncle(offsetX, offsetY);
            if (_uncle) {
                _p.dispatchEvent('leave');
                //跳出
            }
            return _uncle;
        },
        /**
         * 在当前光标集中记录节点的位置
         * @param x     要记录的位置x值
         * @param y     要记录的位置y值
         */
        saveId : function (x, y) {
            this.saved_id  = [x, y];
            this.saved_dir = bjf.focus.dir;
            if (this.parent.cache) {
                this.parent.saveId(this.x, this.y);
            }
        },
        /**
         * 获取左兄弟节点
         */
        getLeft : function () {
            var _node = this.getByOffset(-1, 0);
            if(_node === false){
                return null;
            }
            if (!_node && undefined != this.aX && this.parent && this.parent.alive_children) {
                _node = this.parent.getAliveChild(this.aX - 1, this.aY);
            }
            return _node;
        },
        /**
         * 获取右兄弟节点
         */
        getRight : function () {
            var _node = this.getByOffset(1, 0);
            if(_node === false){
                return null;
            }
            if (!_node && undefined != this.aX && this.parent && this.parent.alive_children) {
                _node = this.parent.getAliveChild(this.aX + 1, this.aY);
            }
            return _node;
        },
        /**
         * 获取上兄弟节点
         */
        getAbove : function () {
            var _node = this.getByOffset(0, -1);
            if(_node === false){
                return null;
            }
            if (!_node && undefined != this.aX && this.parent && this.parent.alive_children) {
                _node = this.parent.getAliveChild(this.aX, this.aY - 1);
            }
            return _node;
        },
        /**
         * 获取下兄弟节点
         */
        getUnder : function () {
            var _node = this.getByOffset(0, 1);
            if(_node === false){
                return null;
            }
            if (!_node && undefined != this.aX && this.parent && this.parent.alive_children) {
                _node = this.parent.getAliveChild(this.aX, this.aY + 1);
            }
            return _node;
        },
        /**
         * 调用执行方法。
         * 按照"当前光标节点的'name_'方法、当前光标父节点集的'child_name_'方法、当前光标父节点集的'name_'方法"的优先级来执行。
         * @param name_  方法名
         * @param e_     参数集
         */
        dispatchEvent : function (name_, e_) {
            var _func;
            if (this.id && bjf.focus.eventRegistry[this.id]) {
                _func = bjf.focus.eventRegistry[this.id][name_];
            }
            if (!_func && !this.is_collection) { //实体节点事件
                if (this.parent && bjf.focus.eventRegistry[this.parent.id]) {
                    _func = bjf.focus.eventRegistry[this.parent.id]['child_' + name_]?bjf.focus.eventRegistry[this.parent.id]['child_' + name_]:bjf.focus.eventRegistry[this.parent.id][name_];//容错当父集传入的状态不带'child_'
                }
                if (!_func) {
                    if (bjf.focus.eventDefault[name_]) {
                        _func = bjf.focus.eventDefault[name_];
                    }
                }
            }
            if (_func) {
                return _func.call(this, e_);
            }
        },
        /**
         * 在当前光标集中查找id对应节点
         * @param id_  方法名
         */
        getNodeById: function(id_) {
            var _result = "";
            if(!this.is_collection){
                return;
            }
            var _children = this.children;

            for(var y = 0;y < _children.length;y++){
                for( var x = 0; x < _children[y].length;x++ ){  
                    var _p = _children[y][x];
                    if(id_ == _p.id){
                        _result = _p
                    }else if(_p.is_collection){
                        _result =  _p.getNodeById(id_)    
                    }
                    if(_result){
                        return _result;
                    }
                }
            }
            return null;
        }
    };
    //end FocusNode

    //光标管理对象
    w_.bjf.focus = {
        locked        : 0, //光标是否锁定，锁定后不可移动。手工change也无效
        node          : null, //当前亮起的光标节点
        dir           : 0, //1上，2下，3左，4右
        DIR_UP        : 1,
        DIR_DOWN      : 2,
        DIR_LEFT      : 3,
        DIR_RIGHT     : 4,
        eventDefault  : {
            on : function(){
                if(IS_UT){
                    var env = window.getComputedStyle(this.data.ele, null);
                    bjf.focusUI.setSize(parseInt(env.width),parseInt(env.height));
                    bjf.focusUI.setPost(parseInt(env.left),parseInt(env.top));
                }else{
                    var env = this.data.ele.getBoundingClientRect();
                    bjf.focusUI.setSize(parseInt(env.width), parseInt(env.height));
                    bjf.focusUI.setPost(parseInt(env.left), parseInt(env.top));
                }
            }
        }, //默认的光标事件响应
        eventRegistry : {}, //光标事件管理器
        /**
         * 初始化光标节点，在一开始页面还没有光标时，调用此方法
         * @param node_ 选定的光标节点
         */
        init    : function (node_) {
            if (!this.node) {
                this.node = node_;
                this.node.dispatchEvent('on', 0);
            }
            return true;
        },
        _getHistoryNode : function (main_node, history) {
            var _track     = history,
                _track_arr = _track.split(':'),
                _node;
            _track_arr.pop();
            var coord_str = _track_arr.pop();
            _node = main_node;
            while(coord_str) {
                var coord = coord_str.split('-');
                var _x = coord[0];
                var _y = coord[1];
                _node.dispatchEvent('enter');
                var _node = _node.getChild(_x, _y);
                if (!_node) {
                    break;
                }
                coord_str = _track_arr.pop();
            }
            return _node;
        },
        /**
         * 根据历史记录注册一个光标节点
         * 因为有些光标所在的按钮，一开始是隐藏的，需要点击另一个按钮(开启按钮)才能显示。
         * 所以这种情况下，一定要记录开启按钮的坐标，而且执行点击函数才可让光标显示。
         * @param main_node  光标根节点
         * @param history    是历史记录的字符串，格式是光标节点坐标值，和他的父节点的坐标值
         * "x-y:parent.x-parent.y....top.x-top.y" 如："0-2:0-0:0-1:1-1:0-0"
         */
        initByhistory : function (main_node, history) {
            var _node = this._getHistoryNode(main_node, history);
            if (_node) {
                if (_node.is_collection) {
                    _node = _node.getFirstChild();
                }
                if (!_node) {
                    _node = main_node.getFirstChild();
                }
                this.node = _node;
                _node.dispatchEvent('on', 0);
                return true;
            }
            else {
                this.init(main_node.getFirstChild());
                return false;
            }
        },
        /**
         * 光标移动，让一个按钮的光标消失，让下一个按钮的光标亮起
         * @param next_  需要点亮的光标节点
         * @param direction_ 移动方向
         */
        change : function (next_, direction_) {
            if (this.locked) {
                return;
            }
            var _e = '';
            if (!next_) {
                _e = new Error('node can not be empty');
                return;
            }else {
                if (!(next_ instanceof FocusNode)) {
                    _e = new Error('change failed: node is not a FocusNode Object');
                }else {
                    if (next_.is_collection) {
                        _e = new Error('node can not be a collection');
                    }
                }
            }
            if(_e){
                if (bjf.debug) {
                    bjf.debug(_e);
                }
                else {
                    throw _e;
                }
                return;
            }
            //next_有可能是一个空壳(底下还没有添加任何子元素的节点集合，这种情况下next_.is_collection应该为1)
            //理论上应该要杜绝只取空壳的情况。应当把空壳和status=0的情况做同样处理
            direction_ = direction_ || null;
            this.node && this.node.dispatchEvent('lost', direction_);
            this.node = next_;
            this.node.dispatchEvent('on', direction_);
            return;
        },
        /**
         * 光标向上移动
         */
        up : function () {
            if (this.locked) {
                return;
            }
            this.dir = 1;
            this.change(this.node.getAbove(), this.DIR_UP);
        },
        /**
         * 光标向下移动
         */
        down : function () {
            if (this.locked) {
                return;
            }
            this.dir = -1;
            this.change(this.node.getUnder(), this.DIR_DOWN);
        },
        /**
         * 光标向左移动
         */
        left : function () {
            if (this.locked) {
                return;
            }
            this.dir = 2;
            this.change(this.node.getLeft(), this.DIR_LEFT);
        },
        /**
         * 光标向右移动
         */
        right : function () {
            if (this.locked) {
                return;
            }
            this.dir = -2;
            this.change(this.node.getRight(), this.DIR_RIGHT);
        },
        /**
         * 光标所在的按钮被点击ok
         */
        ok : function () {
            if (this.locked) {
                return;
            }
            this.node.dispatchEvent('ok');
        },
        /**
         * 获取当前光标节点的路径，以供保存历史记录
         */
        getHistory : function () {
            var _coord = this.node.coordTostr();
            return _coord;
        },
        /**
         * 为光标集或光标节点添加监听方法
         * @param id_       光标集或光标节点的id
         * @param name_     方法组或方法名。
         * @param listener_ 方法。当为方法组时，listener_可为空；当为方法名时，listener_为方法
         */
        addEventListener : function (id_, name_, listener_) {
            if (!this.eventRegistry[id_]) {
                this.eventRegistry[id_] = {};
            }
            var _node_events = this.eventRegistry[id_];
            if ('object' == typeof(name_)) {
                for(var i in name_) {
                    _node_events[i] = name_[i];
                }
            }
            else {
                _node_events[name_] = listener_;
            }
        },
        /**
         * 为ele_下所有元素创建光标
         * @param ele_ div元素
         * @param parent_ 父节点
         */
        build : function (ele_, parent_) {
            var _id   = parent_.id,
                _node = bjf.$$('@fnode-' + _id, ele_),
                _set  = bjf.$$('@fset-' + _id, ele_),
                _slen = _set.length,
                _nlen = _node.length, _item, _p_node, _x, _y, _focus, _y_list, _anchor;
            parent_.children = [];   //清空原有节点
            parent_.alive_children = null ;//清除活子节点
            if (0 < _slen) {
                _anchor = 0;
                for(var i = 0; i < _slen; i++) {
                    _item = _set[i];
                    if ('undefined' != typeof(IS_UT) && true == IS_UT) {
                        _anchor = getDomBody(ele_.innerHTML, 'fset-' + _id, _item, ['x', 'y', 'status', 'default', 'filter', 'cache', 'title', 'tag', 'code'], _anchor+1);
                    }
                    _x    = bjf.getAttribute(_item, 'x');
                    _y    = bjf.getAttribute(_item, 'y');
                    var _p_node = new FocusNode({
                        x           : parseInt(_x) || 0,
                        y           : parseInt(_y) || 0,
                        cache       : bjf.getAttribute(_item, 'cache') ? 1 : 0, 
                        status      : '0' == bjf.getAttribute(_item, 'status') ? 0 : 1,
                        id          : _item.id || _id + '_' + _x + '_' + _y
                    });
                    if (bjf.getAttribute(_item, 'default')) {
                        var _point = bjf.getAttribute(_item, 'default').split(',');
                        _p_node.default_node = [parseInt(_point[0]), parseInt(_point[1])];
                    }
                    this.build(_item, _p_node);
                    if (bjf.getAttribute(_item, 'filter')) {
                        _p_node.filterDisabled();
                    }
                    if (bjf.getAttribute(_item, 'tag')) {
                        if (!_p_node.data) {
                            _p_node.data = {};
                        }
                        _p_node.data.tag = bjf.getAttribute(_item, 'tag');
                    }
                    if (bjf.getAttribute(_item, 'code')) {
                        if (!_p_node.data) {
                            _p_node.data = {};
                        }
                        _p_node.data.code = bjf.getAttribute(_item, 'code');
                    }
                    _p_node.is_collection = 1;
                    parent_.addChild(_p_node);
                    _y_list = [_p_node.y];
                    if ('string' == typeof(_y) && -1 < _y.indexOf(',')) {
                        var _mult_y = _y.split(','), _mult_len = _mult_y.length, _y_index, _max_y = 0;
                        for (var k = 1; k < _mult_len; k++) {
                            _y_index = parseInt(_mult_y[k]);
                            if (!parent_.children[_y_index]) {
                                parent_.children[_y_index] = [];
                            }
                            parent_.children[_y_index][_p_node.x] = _p_node;
                            _max_y = _y_index;
                            _y_list.push(_y_index);
                        }
                        _p_node.maxY = _max_y;
                    }
                    if ('string' == typeof(_x) && -1 < _x.indexOf(',')) {
                        var _mult_x = _x.split(','), _mult_len = _mult_x.length, _x_index, _max_x = 0, _y_list_len = _y_list.length;
                        for (var k = 1; k < _mult_len; k++) {
                            _x_index = parseInt(_mult_x[k]);
                            for (var l = 0; l < _y_list_len; l++) {
                                parent_.children[_y_list[l]][_x_index] = _p_node;
                            }
                            _max_x = _x_index;
                        }
                        _p_node.maxX = _max_x;
                    }
                }
            }
            _anchor = 0;
            for(var j = 0; j < _nlen; j++) {
                _item  = _node[j];
                if ('undefined' != typeof(IS_UT) && true == IS_UT) {
                    _anchor = getDomBody(ele_.innerHTML, 'fnode-' + _id, _item, ['x', 'y', 'status', 'url', 'tag', 'code', 'history', 'auth', 'title'], _anchor+1);
                }
                _x     = bjf.getAttribute(_item, 'x');
                _y     = bjf.getAttribute(_item, 'y');
                _focus = new FocusNode({
                    x      : parseInt(_x) || 0,
                    y      : parseInt(_y) || 0,
                    id     : _item.id || null,
                    status : '0' == bjf.getAttribute(_item, 'status') ? 0 : 1,
                    data   : {
                        ele : _item
                    }
                });
                if (bjf.getAttribute(_item, 'url')) {
                    _focus.data.url = bjf.getAttribute(_item, 'url');
                    _focus.data.history = 1;
                }
                if (bjf.getAttribute(_item, 'tag')) {
                    _focus.data.tag = bjf.getAttribute(_item, 'tag');
                }
                if (bjf.getAttribute(_item, 'history')) {
                    _focus.data.history = parseInt(bjf.getAttribute(_item, 'history'));
                }
                if (bjf.getAttribute(_item, 'auth')) {
                    _focus.data.auth = parseInt(bjf.getAttribute(_item, 'auth'));
                }
                if (_item.title) {
                    _focus.data.title = _item.title;
                }
                if (bjf.getAttribute(_item, 'code')) {
                    _focus.data.code = bjf.getAttribute(_item, 'code');
                }
                _focus.is_collection = 0;
                parent_.addChild(_focus);
                _y_list = [_focus.y];
                if (_y && -1 < _y.indexOf(',')) {
                    var _mult_y = _y.split(','), _mult_len = _mult_y.length, _y_index, _max_y = 0;
                    for (var k = 1; k < _mult_len; k++) {
                        _y_index = parseInt(_mult_y[k]);
                        if (!parent_.children[_y_index]) {
                            parent_.children[_y_index] = [];
                        }
                        parent_.children[_y_index][_focus.x] = _focus;
                        _max_y = _y_index;
                        _y_list.push(_y_index);
                    }
                    _focus.maxY = _max_y;
                }
                if (_x && -1 < _x.indexOf(',')) {
                    var _mult_x = _x.split(','), _mult_len = _mult_x.length, _x_index, _max_x = 0, _y_list_len = _y_list.length;
                    for (var k = 1; k < _mult_len; k++) {
                        _x_index = parseInt(_mult_x[k]);
                        for (var l = 0; l < _y_list_len; l++) {
                            parent_.children[_y_list[l]][_x_index] = _focus;
                        }
                        _max_x = _x_index;
                    }
                    _focus.maxX = _max_x;
                }
            }
        }
    };

    /**
     * 光标控制
     * 添加遥控器事件默认监听函数
     *
     */
    bjf.remoter.setDefaultHandler('KeyUp', function () {
        if (bjf.focus.node) {
            bjf.focus.up();
        }
    });
    bjf.remoter.setDefaultHandler('KeyDown', function () {
        if (bjf.focus.node) {
            bjf.focus.down();
        }
    });
    bjf.remoter.setDefaultHandler('KeyLeft', function () {
        if (bjf.focus.node) {
            bjf.focus.left();
        }
    });
    bjf.remoter.setDefaultHandler('KeyRight', function () {
        if (bjf.focus.node) {
            bjf.focus.right();
        }
    });
    bjf.remoter.setDefaultHandler('KeyOk', function () {
        if (bjf.focus.node) {
            bjf.focus.ok();
        }
    });
    
//以下一行是自动打包脚本识别的特殊tag注释，勿改勿删
//--------------------BuildTagEnd------------------

}(window));