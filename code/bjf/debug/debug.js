/**
 * 
 * @auth    derong.zeng 20161027
 * @charset utf-8
 * @indent  空格*4
 */

(function (w_) {
    if (undefined == w_.bjf) {
        w_.bjf = {};
    }
    else if (undefined != w_.bjf.debug) {
        return;
    }
    
//以下一行是自动打包脚本识别的特殊tag注释，勿改勿删
//--------------------BuildTagStart------------------

    var IS_UT = false;
    if (0 < navigator.userAgent.indexOf('JETU')) {
        IS_UT = true;
    }
    
    var _debug = {
        is_open    : 0,
        empty     : 1,
        args      : [],
        div       : null,
        box       : null,
        init      : function () {
            var _div    = document.createElement("div"),
                _box    = document.createElement("div");
            _box.id = "debug_box";
            _div.id = "debug_div";
            if (IS_UT) {
                _box.style.cssText = "margin: 0;color: #00ff00; word-wrap: break-word; word-break: normal;";
                _div.style.cssText = "position:absolute;border: 1px solid green; right:38px;left:38px; top:38px; height:auto; font-size: 12px; z-index:99999; padding: 6px; background-color: rgba(0, 0, 0, 0.6);";
            }
            else {
                _box.style.margin          = '0';
                _box.style.color           = '#00ff00';
                _div.style.display         = 'none';
                _div.style.position        = 'absolute';
                _div.style.border          = '1px solid green';
                _div.style.padding         = '6px';
                _div.style.right           = '38px';
                _div.style.left            = '38px';
                _div.style.top             = '38px';
                _div.style.height          = 'auto';
                _div.style.fontSize        = '12px';
                _div.style.zIndex          = '99999';
                _div.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
            }
            _div.appendChild(_box);
            document.body.appendChild(_div);
            this.div = _div;
            this.box = _box;
        },
        write     : function () {
            if (0 == this.is_open) {
                return;
            }
            if (null === this.div) {
                this.init();
            }
            var _msgs = [],
                _str  = '',
                _args = this.args;
            for(var i = 0; i < _args.length; i++) {
                _msgs.push(this.parse(_args[i], 0));
            }
            if (!this.empty) {
                if (670 < this.div.offsetHeight) {
                    this.box.innerText = '';
                }
                else {
                    _str = "\r\n<br />------------------------------\r\n<br />" + _str;
                }
            }
            else {
                this.div.style.display = 'block';
            }
            this.box.innerHTML = this.box.innerHTML + _str + _msgs.join(',');
            this.args  = [];
            this.empty = 0;
            return true;
        },
        parse : function (variable_, level_) {
            var _str = '';
            if ('undefined' == typeof(variable_)) {
                _str += '[undefined]';
            }
            else if (variable_ === null) {
                _str += '[null]';
            }
            else if ('function' == typeof(variable_)) {
                _str += '[function]' + variable_.toString();
            }
            else if (variable_.nodeType && 1 == variable_.nodeType) {
                _str += '[HTML node]';
            }
            else if (variable_ instanceof Error) {
                if (variable_.stack) {
                    _str += '<span style="color:#ff0000">' + variable_.stack + '<span>';
                }
                else {
                    _str += '<span style="color:#ff0000">' + variable_.toString() + '<span>';
                }
            }
            else if (variable_ instanceof Array) {
                if (variable_[0] instanceof Array || variable_[0] instanceof Object) {
                    _str += "[\r\n<br />";
                    for(var i = 0; i < variable_.length; i++) {
                        _str += new Array(level_ + 2).join('&nbsp;&nbsp;&nbsp;&nbsp;') + arguments.callee(variable_[i], level_ + 1);
                        _str += "\r\n<br />";
                    }
                    _str += new Array(level_ + 1).join('&nbsp;&nbsp;&nbsp;&nbsp;') + "]";
                }
                else {
                    _str = '[' + variable_.toString() + ']';
                }
            }
            else if (variable_ instanceof Object) {
                if (variable_.Infinity) {
                    _str += '[Infinity Object]';
                }
                else if (2 < level_) {
                  //最多只支持循环3层，否则容易进入死循环
                    _str += '[Object]';
                }
                else {
                    _str += '{';
                    //Event对象，只能循环一次，要不然会进入死循环
                    //TODO UT没有Event对象
                    try{
                        if (window.Event && variable_ instanceof Event) {
                            for(var i in variable_) {
                                _str += "\r\n<br />";
                                _str += new Array(level_ + 2).join('&nbsp;&nbsp;&nbsp;&nbsp;') + i + ':' + variable_[i];
                            }
                        }
                        else {
                            for(var i in variable_) {
                                _str += "\r\n<br />";
                                _str += new Array(level_ + 2).join('&nbsp;&nbsp;&nbsp;&nbsp;') + i + ':' + arguments.callee(variable_[i], level_ + 1);
                            }
                        }
                    }catch(e){}
                    if ('undefined' == typeof(i)) {
                        _str += '}';
                    }
                    else {
                        _str += "\r\n<br />" + new Array(level_ + 1).join('&nbsp;&nbsp;&nbsp;&nbsp;') + '}';
                    }
                }
            }
            else {
                if (!variable_ && 0 !== variable_ && '0' !== variable_) {
                    _str += "[empty]";
                }
                else {
                    _str += variable_;
                }
            }
            return _str;
        },
        clean : function () {
            if (null === this.div) {
                this.init();
            }
            this.div.style.display = 'none';
            this.box.innerText = '';
            this.empty = 1;
            return true;
        }
    };
    
    w_.bjf.openDebug = function () {
        _debug.is_open = 1;
    };
    w_.bjf.debug = function () {
        _debug.args = arguments;
        _debug.write();
    };
    w_.bjf.cdebug = function () {
        _debug.clean();
        _debug.args = arguments;
        _debug.write();
    };
//以下一行是自动打包脚本识别的特殊tag注释，勿改勿删
//--------------------BuildTagEnd------------------
    
}(window));