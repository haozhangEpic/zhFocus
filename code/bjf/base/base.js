
(function (w_){

//以下一行是自动打包脚本识别的特殊tag注释，勿改勿删
//--------------------BuildTagStart------------------
    if (undefined != w_.bjf) {
        return;
    }
    if (!document.body) {
        throw 'bjf jsfile needs to be placed at the bottom of the body TestTag';
    }
    document.body.setAttribute('probe', 'Greetings from Mars BJF');
    var _env = {
        ua         : navigator.userAgent,
        h5class    : "object" != typeof(document.body.classList) ? 0 : 1,
        h5selector : "function" != typeof(document.querySelector) ? 0 : 1,
        androidV   : '1'
    }
    var _attr_setable = document.body.getAttribute('probe') ? 1 : 0;
    
    // if ('undefined' == typeof(Authentication)) { //CTCGetAuthInfo方法只有IPTV环境才有，排除IPTV
    //     if ('undefined' == typeof(MediaPlayer)) { //只有PC或手机环境下，才没有MediaPlayer对象。排除OTT，文广
    //         if (-1 < _env.ua.indexOf('Android')) { //Android手机
    //             _env.type     = 'android';
    //             _env.androidV = getAndroidVersion(_env.ua);
    //         }
    //         else if (-1 < _env.ua.indexOf('Mac OS')) {
    //             _env.type     = 'ios';
    //             _env.androidV = '98';
    //         }
    //         else {
    //             _env.type     = 'pc';
    //             _env.androidV = '99';
    //         }
    //     }
    //     else if('undefined' == typeof(Broadband)) { //Broadband对象在OCN等文广中间件内存在，排除文广

    //         _env.type     = 'ott';
    //         _env.androidV = getAndroidVersion(_env.ua);
            
    //     }
    //     else {
    //         _env.type = 'ocn';
    //     }
    // }
    // else {
    //     _env.type = 'iptv';
    // }

    if('undefined' == typeof(Broadband)) {//Broadband对象在OCN等文广中间件内存在,排除文广
        if('undefined' == typeof(Authentication)) {//CTCGetAuthInfo方法只有IPTV环境才有,排除iptv
            if('undefined' == typeof(MediaPlayer)) {//只有PC或手机环境下，才没有MediaPlayer对象，排除ott
                if (-1 < _env.ua.indexOf('Android')) { //Android手机
                    _env.type     = 'android';
                    _env.androidV = getAndroidVersion(_env.ua);
                }
                else if (-1 < _env.ua.indexOf('Mac OS')) {
                    _env.type     = 'ios';
                    _env.androidV = '98';
                }
                else {
                    _env.type     = 'pc';
                    _env.androidV = '99';
                }
            }else {
                _env.type = 'ott';
                _env.androidV = getAndroidVersion(_env.ua);
            }
        }else {
            _env.type = 'iptv';
        }
    }else {
        _env.type = 'ocn';
    }

    if (!Function.prototype.bind) {
        (function () {
            var ArrayPrototypeSlice = Array.prototype.slice;
            Function.prototype.bind = function (otherThis) {
                if (typeof this !== 'function') {
                    // closest thing possible to the ECMAScript 5
                    // internal IsCallable function
                    throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
                }

                var baseArgs = ArrayPrototypeSlice.call(arguments, 1),
                    baseArgsLength = baseArgs.length,
                    fToBind = this,
                    fNOP = function () {},
                    fBound = function () {
                        baseArgs.length = baseArgsLength; // reset to default base arguments
                        baseArgs.push.apply(baseArgs, arguments);
                        return fToBind.apply(
                            fNOP.prototype.isPrototypeOf(this) ? this : otherThis, baseArgs
                        );
                    };

                if (this.prototype) {
                    // Function.prototype doesn't have a prototype property
                    fNOP.prototype = this.prototype;
                }
                fBound.prototype = new fNOP();

                return fBound;
            };
        })();
    }
    if (!Object.freeze) {
        Object.freeze = function (obj_) {
            obj_.BJF_freezeID = Math.random();
            return obj_;
        }
        Object.isFrozen = function (obj_) {
            return !!obj_.BJF_freezeID;
        }
    }
    if (!Object.isExtensible) {
        Object.isExtensible = function (obj_) {
            return true;
        }
    }
    /**
     * 根据userAgent抓取Android版本号
     * @author Derong.zeng
     * @param {string} ua_  userAgent
     * @return {float} 0表示未知版本，正数表示正常的android版本
     */
    function getAndroidVersion (ua_) {
        var _version = '0', _ua = ua_, _pattern, _match;
        if (-1 < _ua.indexOf('Android')) { //是安卓系统
            _pattern = /Android [0-9]{1,3}\.[0-9]{1,3}(\.[0-9]{1,3})?/;
            _match   = _pattern.exec(_ua);
            if (_match) {
                _version = _match[0].substr(8);
            }
        }
        return _version;
    }
        
    /**
     * Ajax 对象封装
     * @author Derong.zeng
     * @param {string} url  需要请求的url
     * @param {object} args 参数与设定
     */
    function Ajax(url, args) {
        this.url        = url || "";
        this.params     = args.parameters || "";
        this.mime       = args.mime || "text/html";
        this.onComplete = args.onComplete || this.defaultOnCompleteFunc;
        this.onLoading  = args.onLoading || this.defaultOnLoadingFunc;
        this.onError    = args.onError || this.defaultOnErrorFunc;
        this.method     = args.method || "get";
        //REMIND: yinwm -- 2007/03/30  Cost to much code, refine it later.
        if (typeof(args.sync) == "undefined" || args.sync == null) { 
            this.sync = true;
        }
        else {
            this.sync = args.sync ? true : false; //NOTE: yinwm -- 2007/03/30 Convert all other ones like string, number to boolean value.
        }
        this.loadData();
        // 针对屏保需求,bjf框架添加AJAX心跳请求功能
        getVerson('AJAXEVENT');
    }

    Ajax.prototype = {
        READY_STATE_COMPLETE : 4,
        getRequest : function () {
            var req = null;
            if (window.XMLHttpRequest) {
                req = new XMLHttpRequest();
            }
            else if (window.ActiveXObject) {
                req = new ActiveXObject("Microsoft.XMLHTTP");
            }
            return req || false;
        },

        //NOTE: yinwm -- convert paramater map to string 
        parseParams : function () {
            if (typeof (this.params) == "string") {
                return this.params;
            }
            else {
                var s = [];
                for (var k in this.params) {
                    s.push(k + "=" + this.params[k]);
                }
                return s.join('&');
            }
        },

        loadData : function () {
            this.req = this.getRequest();
            
            if (this.req) {
                this.onLoading();
                try {
                    if (this.params) {
                        var _params = this.parseParams();
                        if (this.method == "get") {
                            if (0 < this.url.indexOf('?')) {
                                if (_params == '') {
                                    this.url;
                                } else {
                                    this.url += '&' + _params;
                                }
                            }
                            else {
                                this.url += '?' + _params;
                            }
                        }
                        else {
                            this.params = _params;
                        }
                    }
                    var loader = this;
                    this.req.onreadystatechange = function () {
                        if (loader.req.readyState == loader.READY_STATE_COMPLETE) {
                            if(loader.req.status==200){
                                loader.onComplete.call(loader, loader.req.responseText);
                            }else{
                                loader.onError.call(loader, loader.req.status);
                            }
                        }
                    }
                    this.req.open(this.method, this.url, this.sync);
        
                    if (this.method == "post") {
                        this.req.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
                    }
        
                    if (this.req.overrideMimeType) {
                        this.req.overrideMimeType(this.mime);
                    }
                    this.req.setRequestHeader("VIS-AJAX","AjaxHttpRequest");//Vis Ajax特殊请求头
                    this.req.send(this.method == "post" ? this.params : null);
                }
                catch (e) {
                    // throw e
                    this.onError.call(this, e);
                }
            }
            else {
                throw 'Ajax Object Get Failed';
            }
        },

        defaultOnCompleteFunc : function () {
        },

        defaultOnLoadingFunc : function () {
        },

        defaultOnErrorFunc : function (error) {
            throw error;
        }
    };
    
    
    w_.bjf = {
        /**
         * JS运行环境。
         * env = {
         *     type       : android | ios | iptv | ott | pc
         *     ua         : 原始的userAgent
         *     h5class    : 是否支持classList对象来操作class的更新
         *     h5selector : 是否支持querySelector等选择器
         *     androidV   : 0未知版本 | 1 iptv众盒子 | 4.x - 6.x 当前设备的安卓版本 | 98 ios设备 | 99 PC
         * }
         */
        env : _env,
        
        /**
         * 查询单个Dom元素
         * @param  query_    查询的字符串
         * @param  parent_   查询目标的父节点，默认是document
         * @return Dom Node
         */
        $ : (function () {
            if (_env.h5selector) {
                return function (query_, parent_) {
                    parent_ = parent_ || document;
                    if ('@' == query_.substr(0, 1)) {
                        query_ = '[name=' + query_.replace('@', '') + ']';
                    }
                    return parent_.querySelector(query_);
                };
            }
            else {
                return function (query_, parent_) {
                    var _ele;
                    parent_ = parent_ || document;
                    if ('.' == query_.substr(0, 1)) {
                        query_ = query_.substr(1);
                        query_ = query_.split('.');
                        _ele = parent_.getElementsByClassName(query_[0]);
                        var _j = query_.length - 1, _filter, _elen;
                        while (_j > 0) {
                            _elen   = _ele.length;
                            _filter = []
                            for(i = 0; i < _elen; i++) {
                                if (bjf.hasClass(_ele[i], query_[_j])) {
                                    _filter.push(_ele[i]);
                                }
                            }
                            _ele = _filter;
                            _j--
                        }
                        if (0 < _ele.length) {
                            _ele = _ele[0];
                        }
                        else {
                            _ele = null;
                        }
                    }
                    else if ('@' == query_.substr(0, 1)) { //By Name只能由document查找
                        _ele = document.getElementsByName(query_.substr(1));
                        if (0 < _ele.length) {
                            _ele = _ele[0];
                        }
                        else {
                            _ele = null;
                        }
                    }
                    else if ('#' == query_.substr(0, 1)) {
                        _ele = parent_.getElementById(query_.substr(1));
                    }
                    else {
                        _ele = parent_.getElementsByTagName(query_);
                        if (0 < _ele.length) {
                            _ele = _ele[0];
                        }
                        else {
                            _ele = null;
                        }
                    }
                    return _ele;
                };
            }
        }()),
        $$ : (function () {
            if (_env.h5selector) {
                return function (query_, parent_) {
                    parent_ = parent_ || document;
                    if ('@' == query_.substr(0, 1)) {
                        query_ = '[name=' + query_.replace('@', '') + ']';
                    }
                    return parent_.querySelectorAll(query_);
                };
            }
            else {
                return function (query_, parent_) {
                    parent_ = parent_ || document;
                    if ('.' == query_.substr(0, 1)) {
                        return parent_.getElementsByClassName(query_.substr(1));
                    }
                    else if ('@' == query_.substr(0, 1)) { //By Name只能由document查找
                        return document.getElementsByName(query_.substr(1));
                    }
                    else {
                        return parent_.getElementsByTagName(query_);
                    }
                };
            }
        }()),
        addClass : (function () {
            if (_env.h5class) {
                return function (ele_, class_) {
                    ele_.classList.add(class_);
                    return this;
                };
            }
            else {
                return function (ele_, class_) {
                    var _name = ele_.className, _currClass = _name.split(' '), _len = _currClass.length;
                    for (var i = 0; i < _len; i++) {
                        if (class_ == _currClass[i]) {
                            return;
                        }
                    }
                    ele_.className = ele_.className + ' ' + class_;
                    return this;
                };
            }
        }()),
        delClass : (function () {
            if (_env.h5class) {
                return function (ele_, class_) {
                    ele_.classList.remove(class_);
                    return this;
                };
            }
            else {
                return function (ele_, class_) {
                    var _name = ele_.className, _currClass = _name.split(' '), _len = _currClass.length, _newClass = [];
                    for (var i = 0; i < _len; i++) {
                        var _c = _currClass[i].trim();
                        if (class_ != _c && '' != _c) {
                            _newClass.push(_c);
                        }
                    }
                    ele_.className = _newClass.join(' ');
                    return this;
                };
            }
        }()),
        hasClass : (function () {
            if (_env.h5class) {
                return function (ele_, class_) {
                    return ele_.classList.contains(class_);
                };
            }
            else {
                return function (ele_, class_) {
                    return (-1 < ele_.className.indexOf(class_)) ? true : false;
                };
            }
        }()),
        setAttribute : (function (){
            if (_attr_setable) {
                return function(ele_, name_, value_) {
                    return ele_.setAttribute(name_, value_);
                };
            }
            else {
                BJF_ALL_ATTRS = {};
                return function(ele_, name_, value_) {
                    if ('name' == name_) {
                        ele_.name = value_;
                    }
                    else if ('id' == name_) {
                        ele_.id = value_;
                    }
                    else if ('class' == name_) {
                        ele_.className = value_;
                    }
                    else if ('title' == name_) {
                        ele_.title = value_;
                    }
                    else {
                        if (!ele_.title) {
                            ele_.title = Math.random().toString().replace('.', 'w');
                            BJF_ALL_ATTRS[ele_.title] = {};
                        }
                        else if (!BJF_ALL_ATTRS[ele_.title]) {
                            BJF_ALL_ATTRS[ele_.title] = {};
                        }
                        BJF_ALL_ATTRS[ele_.title][name_] = value_;
                    }
                    return true;
                };
            }
        }()),
        getAttribute : (function () {
            if (_attr_setable) {
                return function(ele_, name_) {
                    return ele_.getAttribute(name_);
                };
            }
            else {
                return function(ele_, name_) {
                    if ('name' == name_) {
                        return ele_.name;
                    }
                    else if ('id' == name_) {
                        return ele_.id;
                    }
                    else if ('class' == name_) {
                        return ele_.className;
                    }
                    else if ('title' == name_) {
                        return ele_.title;
                    }
                    else if (ele_.title && 'undefined' != typeof(BJF_ALL_ATTRS[ele_.title]) && 'undefined' != typeof(BJF_ALL_ATTRS[ele_.title][name_])) {
                        return BJF_ALL_ATTRS[ele_.title][name_]
                    }
                    return '' === ele_.getAttribute(name_) ? null : ele_.getAttribute(name_);
                };
            }
        }()),
        
        /**
         * Ajax get方式获取数据，只提供异步方式调用
         * 注意，UT要写全路径的url
         * 可变参数
         * 当出入两个参数时，参数应该为：url，call_back_func 或 url，data
         * 当出入三个参数时，参数应该为：url，data，call_back_func
         */
        get : function () {
            if (1 > arguments.length) {
                return false;
            }
            var _url  = arguments[0],
                _data = {};
            if (2 == arguments.length) {
                if ('function' == typeof(arguments[1])) {
                    _data.onComplete = arguments[1];
                }
                else {
                    _data.parameters = arguments[1];
                }
            }
            else if (3 == arguments.length) {
                if ('function' == typeof(arguments[1])) {
                    _data.onComplete = arguments[1];
                    if('function' == typeof(arguments[2])){
                        _data.onError = arguments[2];//将回调方法传递给onError;
                    }
                }else{
                    _data.parameters = arguments[1];
                    if ('function' == typeof(arguments[2])) {
                        _data.onComplete = arguments[2];
                    }
                }
            }
            else if(4 == arguments.length){//增加一个参数
                _data.parameters = arguments[1];
                if ('function' == typeof(arguments[2])) {
                    _data.onComplete = arguments[2];//将这个回调方法传给onComplete
                }
                if('function' == typeof(arguments[3])){
                    _data.onError = arguments[3];//将回调方法传递给onError;
                }
            }
            _data.method = 'get';
            new Ajax(_url, _data);
        },
        
        /**
         * Ajax post方式获取数据，只提供异步方式调用
         * 注意，UT要写全路径的url
         * 可变参数
         * 当出入两个参数时，参数应该为：url，call_back_func 或 url，data
         * 当出入三个参数时，参数应该为：url，data，call_back_func
         */
        post : function () {
            if (1 > arguments.length) {
                return false;
            }
            var _url  = arguments[0],
                _data = {};
            if (2 == arguments.length) {
                if ('function' == typeof(arguments[1])) {
                    _data.onComplete = arguments[1];
                }
                else {
                    _data.parameters = arguments[1];
                }
            }
            else if (3 == arguments.length) {
                _data.parameters = arguments[1];
                if ('function' == typeof(arguments[2])) {
                    _data.onComplete = arguments[2];
                }
            }
            else if(4 == arguments.length){//增加一个参数，用于接收抛错误异常信息
                _data.parameters = arguments[1];
                if ('function' == typeof(arguments[2])) {
                    _data.onComplete = arguments[2];//将这个回调方法传给onComplete
                }
                if('function' == typeof(arguments[3])){
                    _data.onError = arguments[3];//将回调方法传递给onError;
                }
            }
            _data.method = 'post';
            new Ajax(_url, _data);//post方式new一个Ajax
        },

        //_data.sync = 'false' 同步get
        syncGet:function(){
            if (1 > arguments.length) {
                return false;
            }
            var _url  = arguments[0],//第一个参数为url;
                _data = {};
            if (2 == arguments.length) {
                if ('function' == typeof(arguments[1])) {//方法
                    _data.onComplete = arguments[1];
                }
                else {
                    _data.parameters = arguments[1];//参数
                }
            }
            else if (3 == arguments.length) {
                if ('function' == typeof(arguments[1])) {
                    _data.onComplete = arguments[1];
                    if('function' == typeof(arguments[2])){
                        _data.onError = arguments[2];//将回调方法传递给onError;
                    }
                }else{
                    _data.parameters = arguments[1];
                    if ('function' == typeof(arguments[2])) {
                        _data.onComplete = arguments[2];
                    }
                }
            }
            else if(4 == arguments.length){//增加一个参数
                _data.parameters = arguments[1];
                if ('function' == typeof(arguments[2])) {
                    _data.onComplete = arguments[2];//将这个回调方法传给onComplete
                }
                if('function' == typeof(arguments[3])){
                    _data.onError = arguments[3];//将回调方法传递给onError;
                }
            }
            _data.method = 'get';
            _data.sync = false;
            new Ajax(_url, _data);//get方式new一个Ajax
        },
        
        //_data.sync = 'false' 同步post
        syncPost:function(){
            if (1 > arguments.length) {
                return false;
            }
            var _url  = arguments[0],
                _data = {};
            if (2 == arguments.length) {
                if ('function' == typeof(arguments[1])) {
                    _data.onComplete = arguments[1];
                }
                else {
                    _data.parameters = arguments[1];
                }
            }
            else if (3 == arguments.length) {
                _data.parameters = arguments[1];
                if ('function' == typeof(arguments[2])) {
                    _data.onComplete = arguments[2];
                }
            }else if(4 == arguments.length){//增加一个参数，用于接收抛错误异常信息
                _data.parameters = arguments[1];
                if ('function' == typeof(arguments[2])) {
                    _data.onComplete = arguments[2];//将这个回调方法传给onComplete
                }
                if('function' == typeof(arguments[3])){
                    _data.onError = arguments[3];//将回调方法传递给onError;
                }
            }
            _data.method = 'post';
            _data.sync = false;
            new Ajax(_url, _data);//post方式new一个Ajax
        },
        /**
         * Ajax 方式获取Json数据，只提供异步方式调用
         * 注意，UT要写全路径的url
         * 可变参数
         * 当出入两个参数时，参数应该为：url，call_back_func 或 url，data 或 url，get|post协议
         * 当出入三个参数时，参数应该为：url，get|post协议，data 或 url，get|post|jsonp协议，call_back_func
         * 当出入三个参数时，参数应该为：url，data，call_back_func
         *
         *
         *
         * 当传入五个参数时:参数应该为：url，get|post协议，data，call_back_func, error_call_back_func
         */
        getJson : function () {
            if (1 > arguments.length) {
                return false;
            }
            var _url  = arguments[0],
                _data = {parameters:{}},
                _cb, _onError_cb = function () {}; //防止当用户没有传入错误回调参数,而发生错误时,oError_cb为undefined;
            if (2 == arguments.length) {
                if ('function' == typeof(arguments[1])) {
                    _cb = arguments[1];//callback回调
                }
                else if ('get' == arguments[1] || 'post' == arguments[1]|| 'jsonp' == arguments[1]) {
                    _data.method = arguments[1];//方式;
                }
                else {
                    _data.parameters = arguments[1];//参数
                }
            }
            else if (3 == arguments.length) {
                if ('get' == arguments[1] || 'post' == arguments[1] || 'jsonp' == arguments[1]) {
                    _data.method = arguments[1];//方法
                    if ('function' == typeof(arguments[2])) {
                        _cb = arguments[2];//回调;
                    }
                }
                else if ('function' == typeof(arguments[1])) {
                    _cb = arguments[1];//成功回调
                    if ('function' == typeof(arguments[2])) {
                        _onError_cb = arguments[2];//失败回调;
                    }
                }else {
                 _data.parameters = arguments[1];//参数;
                    if ('function' == typeof(arguments[2])) {
                        _cb = arguments[2];//回调;
                    }
                }

            }
            else if (4 == arguments.length) {
                if ('get' == arguments[1] || 'post' == arguments[1] || 'jsonp' == arguments[1]) {
                    _data.method = arguments[1];
                    if ('function' == typeof(arguments[2])) {//传入四个参数的情况下,如果第三个参数为成功回调方法,则第四个参数为失败回调;
                        _cb = arguments[2];
                        _onError_cb = arguments[3];
                    } else {
                        _data.parameters = arguments[2];
                        if ('function' == typeof(arguments[3])) {
                            _cb = arguments[3];
                        }
                    }
                }else{
                    _data.parameters = arguments[1];
                    if ('function' == typeof(arguments[2])) {
                        _cb = arguments[2];
                    }
                    if ('function' == typeof(arguments[3])) {
                        _onError_cb = arguments[3];//错误回调函数;
                    }
                }
            }
            else if (5 == arguments.length) {//0:url , 1:请求方法 2 _data 3:callBack 4:orError_callBack
                if ('get' == arguments[1] || 'post' == arguments[1] || 'jsonp' == arguments[1]) {
                    _data.method = arguments[1];
                }
                _data.parameters = arguments[2];
                if ('function' == typeof(arguments[3])) {
                    _cb = arguments[3];//回调;
                }
                if ('function' == typeof(arguments[4])) {
                    _onError_cb = arguments[4];//错误回调函数;
                }
            }
            if ('jsonp' == _data.method) {//方法是jsonp
                var _tag       = document.createElement('script'),
                    _cbname    = _data.parameters.callback || 'jsonpCallback_' + Math.random().toString().substr(2, 13),
                    _exec_flag = 0;
                _tag.async = true;
                _cb = _cb || function () {};
                _data.parameters.callback = _cbname;
                w_[_cbname] = function (data_) {
                    _exec_flag = 1;
                    document.head.removeChild(_tag);
                    w_[_cbname] = null;
                    _cb(data_);
                };
                _tag.onerror = function (e) {
                    document.head.removeChild(_tag);
                    w_[_cbname] = null;
                    _onError_cb({ret: 0, msg: 'bad request!'});//传入错误回调;
                }
                setTimeout(function(){
                    if (0 == _exec_flag) {
                        document.head.removeChild(_tag);
                        w_[_cbname] = null;
                        _onError_cb({ret: 0, msg: 'bad data!'});
                    }
                }, 3000);
                document.head.appendChild(_tag);
                //发送请求
                var _getstr = Ajax.prototype.parseParams.call({params : _data.parameters});
                if ('' != _getstr) {
                    if (0 < _url.indexOf('?')) {
                        _tag.src   = _url + '&' + Ajax.prototype.parseParams.call({params : _data.parameters});
                    }
                    else {
                        _tag.src   = _url + '?' + Ajax.prototype.parseParams.call({params : _data.parameters});
                    }
                }
                // 针对屏保需求,bjf框架添加AJAX心跳请求功能
                getVerson('AJAXEVENT');
                return;
            }
            if (_cb) {//callback不为空
                _data.onComplete = function (data_) {//数据一完成就执行回调;
                    //XXX 中兴的高清机顶盒，没有JSON对象
                    try {
                        //需要增加如果数据不匹配处理报错;
                        if (!window.JSON || JSON.parse == 'undefined'||IS_UT) {
                            data_ = eval('('+data_+')');
                        }
                        else {
                                data_ = JSON.parse(data_);
                            }
                    }catch(error) {
                        _onError_cb(error);
                        return;
                    }
                    if("object"!==typeof(data_)){
                        //如果浏览器不兼容,导致解析不了Json
                        _onError_cb(data_);
                        return;
                    }
                    return _cb(data_);
                }
            }
            if (_onError_cb){
                _data.onError = function(data_){//数据一报异常,就执行onError的回调;
                    return _onError_cb(data_);
                }
            }
            new Ajax(_url, _data);
        },
        /**
         * Ajax 方式获取Json数据，只同步方式调用
         * 当传入五个参数时:参数应该为：url，get|post协议，data，call_back_func, error_call_back_func
         */
        syncGetJson : function () {
            if (1 > arguments.length) {
                return false;
            }
            var _url  = arguments[0],
                _data = {parameters:{}},
                _cb, _onError_cb = function () {
                };//防止当用户没有传入错误回调参数,而发生错误时,oError_cb为undefined;
            if (2 == arguments.length) {
                if ('function' == typeof(arguments[1])) {
                    _cb = arguments[1];//callback回调
                }
                else if ('get' == arguments[1] || 'post' == arguments[1]) {
                    _data.method = arguments[1];//方式;
                }
                else {
                    _data.parameters = arguments[1];//参数
                }
            }
            else if (3 == arguments.length) {
                if ('get' == arguments[1] || 'post' == arguments[1]) {
                    _data.method = arguments[1];//方法
                    if ('function' == typeof(arguments[2])) {
                        _cb = arguments[2];//回调;
                    }
                }
            else if ('function' == typeof(arguments[1])) {
                    _cb = arguments[1];//成功回调
                    if ('function' == typeof(arguments[2])) {
                        _onError_cb = arguments[2];//失败回调;
                    }
                }else {
                    _data.parameters = arguments[1];//参数;
                    if ('function' == typeof(arguments[2])) {
                        _cb = arguments[2];//回调;
                    }
                }

            }
            else if (4 == arguments.length) {
                if ('get' == arguments[1] || 'post' == arguments[1]) {
                    _data.method = arguments[1];
                    _data.parameters = arguments[2];
                    if ('function' == typeof(arguments[3])) {
                        _cb = arguments[3];
                    }
                }else{
                    _data.parameters = arguments[1];
                    if ('function' == typeof(arguments[2])) {
                        _cb = arguments[2];
                    }
                    if ('function' == typeof(arguments[3])) {
                        _onError_cb = arguments[3];//错误回调函数;
                    }
                }
            }
            else if (5 == arguments.length) {//0:url , 1:请求方法 2 _data 3:callBack 4:orError_callBack
                if ('get' == arguments[1] || 'post' == arguments[1]) {
                    _data.method = arguments[1];
                }
                _data.parameters = arguments[2];
                if ('function' == typeof(arguments[3])) {
                    _cb = arguments[3];//回调;
                }
                if ('function' == typeof(arguments[4])) {
                    _onError_cb = arguments[4];//错误回调函数;
                }
            }
            if (_cb) {//callback不为空
                _data.onComplete = function (data_) {//数据一完成就执行回调;
                    //XXX 中兴的高清机顶盒，没有JSON对象
                    try {
                        //需要增加如果数据不匹配处理报错;
                    if (!window.JSON || JSON.parse == 'undefined') {
                        data_ = eval(data_);
                    }
                    else {
                            data_ = JSON.parse(data_);
                        }
                    }catch(error) {
                        _onError_cb(error);
                        return;
                    }
                    if("object"!==typeof(data_)){
                        //如果浏览器不兼容,导致解析不了Json
                        _onError_cb(data_);
                        return;
                    }
                    return _cb(data_);
                }
            }
            if (_onError_cb){
                _data.onError = function(data_){//数据一报异常,就执行onError的回调;
                    return _onError_cb(data_);
                }
            }
			_data.sync = false;
            new Ajax(_url, _data);
        },
        /**
         * 当按遥控器首页，刷新时，某些型号的机顶盒可能会失去焦点，导致刷新后遥控器onkeydown监听失效。
         * 用此方法，可在需要的页面，检测机顶盒型号，并修复页面焦点。
         */
        repairIndexFocus : function() {
            if ('B700-V3K|Mozilla|5.0|ztebw|1.2.0;Resolution(PAL,720p)' == _env.ua) {
                focus();
                return true;
            }
            else {
                return false;
            }
        }
    };
    /**
     * 当页面请求AJAX，按键onkeydown触发，以及视频播放起流与停止时向top页面传递参数
     * 激活用户操作type, 触发操作类型（'KEYEVENT', 'PLAYEVENT', 'AJAXEVENT'）
     * 且判定top页面所处层级
     */
    function getVerson(type){
        var _top_type;
        try {
            _top_type = window.parent.activateHeartBeat;
        } catch (error) {
            _top_type = undefined;
        }
        if(typeof _top_type!=="undefined"){
            window.parent.activateHeartBeat(type)
        }else{
            if('undefined' !== typeof(activateHeartBeat)){
                activateHeartBeat(type)
            }
        }
    }

//以下一行是自动打包脚本识别的特殊tag注释，勿改勿删
//--------------------BuildTagEnd------------------

}(window));