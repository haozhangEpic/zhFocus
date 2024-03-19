/**
 * 
 * @auth    xiao 20161101
 * @charset utf-8
 * @indent  空格*4
 * @description  遥控器键值捕捉
 */

(function (w_) {
    if (undefined == w_.bjf) {
        w_.bjf = {};
    }
    else if (undefined != w_.bjf.remoter) {
        return;
    }
//以下一行是自动打包脚本识别的特殊tag注释，勿改勿删
//--------------------BuildTagStart------------------
    /**
     * Remote 遥控器按键控制
     */
    
    var Remote = {
        KEY_BACK         : 8,
        KEY_OKey         : 13,
        KEY_OKey2        : 4097,//OCN KEY OK
        KEY_BACK2        : 18,//OTT KEY BACK
        KEY_BACK3        : 4096,//OCN KEY BACK
        KEY_BACK4        : 27,//SICHUAN KEY BACK
        KEY_PREV         : 33,
        KEY_NEXT         : 34,
        KEY_LEFT         : 37,
        KEY_UP           : 38,
        KEY_RIGHT        : 39,
        KEY_DOWN         : 40,
        KEY_CHANNEL_UP   : 257,
        KEY_CHANNEL_DOWN : 258,
        KEY_VOL_UP       : 259,
        KEY_VOL_DOWN     : 260,
        KEY_MUTE         : 261,
        KEY_AUDIO        : 262,
        KEY_PAUSE        : 263,
        KEY_PAUSE2       : 2306,//OCN KEY PAUSE
        KEY_FF           : 264,//Fast Forward
        KEY_FR           : 265,//Fast Rewind
        KEY_FF2          : 2308,//OCN KEY FF
        KEY_FR2          : 2305,//OCN KEY FR
        KEY_DELETE       : 271,
        KEY_HOME         : 272,
        KEY_REFRESH      : 280,
        KEY_HOME2        : 613,
        KEY_VIRTUAL      : 768,
        LP_DURATION      : 1000,
        dispatchEvent : function(eventName, e) {
            this._eventRegistry = this._eventRegistry || {};
            this._defaultHandlers = this._defaultHandlers || {};
            var listeners = this._eventRegistry[eventName] || [];
            var defaultHandler = this._defaultHandlers[eventName];
            if (!listeners.length && !defaultHandler) {
                return;
            }
            e = e || document.createEvent('HTMLEvents');
            e.type = eventName;
            //还原事件冒泡设置
            if (e.propagationStopped) {
                e.propagationStopped = null;
            }
            if (!e.stopPropagation) {
                e.stopPropagation = function() {
                    this.propagationStopped = true;
                };
            }
            if (!e.preventDefault) {
                e.preventDefault = function() {
                    this.defaultPrevented = true;
                };
            }
            
            //XXX 有些中兴的盒子,stopPropagation和preventDefault不允许被修改
            //而且执行后不会改变 propagationStopped 和  defaultPrevented的值
            //看吧可以用safeStopPropagation 和 safePreventDefault代替之
            if (!e.safeStopPropagation) {
                e.safeStopPropagation = function() {
                    this.stopPropagation();
                    this.propagationStopped = true;
                };
            }
            if (!e.safePreventDefault) {
                e.safePreventDefault = function() {
                    this.preventDefault();
                    this.defaultPrevented = true;
                };
            }
            for (var i=0; i<listeners.length; i++) {
                listeners[i](e);
                if (e.propagationStopped)
                    break;
            }
            if (defaultHandler && !e.defaultPrevented)
                defaultHandler(e);
        },
        
        setDefaultHandler : function(eventName, callback) {
            this._defaultHandlers = this._defaultHandlers || {};
            if (this._defaultHandlers[eventName]) {
                throw new Error("The default handler for '" + eventName + "' is already set");
            }
            this._defaultHandlers[eventName] = callback;
        },
        
        addEventListener : function(eventName, callback) {
            this._eventRegistry = this._eventRegistry || {};
    
            var listeners = this._eventRegistry[eventName];
            if (!listeners) {
                var listeners = this._eventRegistry[eventName] = [];
            }
            //TODO 部分中兴机顶盒不支持indexOf查找function，此处先不进行重复检测
            //if (listeners.indexOf(callback) == -1)
            listeners.push(callback);
        },
        
        removeListener : function(eventName, callback) {
            this._eventRegistry = this._eventRegistry || {};

            var listeners = this._eventRegistry[eventName];
            if (!listeners)
                return;

            var index = listeners.indexOf(callback);
            if (index !== -1)
                listeners.splice(index, 1);
        },
        
        removeAllListeners : function(eventName) {
            if (this._eventRegistry) this._eventRegistry[eventName] = [];
        }
    }
    w_.bjf.Remote  = Remote;
    w_.bjf.remoter = {
        onKeyUp : function (cb) {
            Remote.addEventListener('KeyUp', cb);
        },
        //长按键的统一处理,用e来判断;
        onLongKeyPress : function (cb) {
            Remote.addEventListener('onLongKeyPress', cb);
        },
        onLongKeyEnd : function (cb) {
            Remote.addEventListener('onLongKeyEnd', cb);
        },
        onKeyDown : function (cb) {
            Remote.addEventListener('KeyDown', cb);
        },
        onKeyLeft : function (cb) {
            Remote.addEventListener('KeyLeft', cb);
        },
        onKeyRight : function (cb) {
            Remote.addEventListener('KeyRight', cb);
        },
        onKeyOk : function (cb) {
            Remote.addEventListener('KeyOk', cb);
        },
        onKeyBack : function (cb) {
            Remote.addEventListener('KeyBack', cb);
        },
        onKeyPrev : function (cb) {
            Remote.addEventListener('KeyPrev', cb);
        },
        onKeyNext : function (cb) {
            Remote.addEventListener('KeyNext', cb);
        },
        onKeyVolUp : function (cb) {
            Remote.addEventListener('KeyVolUp', cb);
        },
        onKeyVolDown : function (cb) {
            Remote.addEventListener('KeyVolDown', cb);
        },
        onKeyMute : function (cb) {
            Remote.addEventListener('KeyMute', cb);
        },
        onKeyAudio : function (cb) {
            Remote.addEventListener('KeyAudio', cb);
        },
        onKeyHome : function (cb) {
            Remote.addEventListener('KeyHome', cb);
        },
        onKeyVirtual : function (cb) {
            Remote.addEventListener('KeyVirtual', cb);
        },
        onKeyInput : function (cb) {
            Remote.addEventListener('KeyInput', cb);
        },
        onKeyChannelUp : function (cb) {
            Remote.addEventListener('KeyChannelUp', cb);
        },
        onKeyChannelDown : function (cb) {
            Remote.addEventListener('KeyChannelDown', cb);
        },
        onKeyFf : function (cb) {
            Remote.addEventListener('KeyFf', cb);
        },
        onKeyFr : function (cb) {
            Remote.addEventListener('KeyFr', cb);
        },
        onKeyDelete : function (cb) {
            Remote.addEventListener('KeyDelete', cb);
        },
        onKeyRefresh : function (cb) {
            Remote.addEventListener('KeyRefresh', cb);
        },
        onKeyPause : function (cb) {
            Remote.addEventListener('KeyPause', cb);
        },
        on : function(events) {
            for (var name in events) {
                Remote.addEventListener(name, events[name]);
            }
        },
        setDefaultHandler : function (event_, cb_) {
            Remote.setDefaultHandler(event_, cb_);
        },
        removeListener     : function (eventName, callback) {return Remote.removeListener(eventName, callback)},
        removeAllListeners : function (eventName) {return Remote.removeAllListeners(eventName)}
    };
    var lp_timer = 0;
    var lp_excuted=false;
    document.onkeydown = function (e) {
        e = e || w_.event;
        if (!e && !event) {
            
            return false;
        }
        var _R        = bjf.Remote;
        var _key_code = e.keyCode || e.which;
        //XXX UT的盒子，在第一次停止默认事件后，以后每一次都会停止
        if (0 < navigator.userAgent.indexOf('JETU')) {
            e.defaultPrevented = undefined;
        }
        if(!lp_excuted && 0 == lp_timer && 768 != _key_code && 'mob' != e.fromtype) {
            lp_timer = setTimeout(function() {
                lp_excuted = true;
                lp_timer = 0;
                _R.dispatchEvent('onLongKeyPress', e);
            }, bjf.Remote.LP_DURATION);
            // 针对屏保需求,bjf框架添加按键心跳请求功能
            //getVerson('KEYEVENT');
        }
        switch (_key_code) {
        case _R.KEY_UP :
            _R.dispatchEvent('KeyUp', e);
            if (e.preventDefault) {
                //禁止默认事件响应
                e.preventDefault();
            }
            break;
        case _R.KEY_DOWN : 
            _R.dispatchEvent('KeyDown', e);
            if (e.preventDefault) {
                //禁止默认事件响应
                e.preventDefault();
            }
            break;
        case _R.KEY_LEFT : 
            _R.dispatchEvent('KeyLeft', e);
            if (e.preventDefault) {
                //禁止默认事件响应
                e.preventDefault();
            }
            break;
        case _R.KEY_RIGHT : 
            _R.dispatchEvent('KeyRight', e);
            if (e.preventDefault) {
                //禁止默认事件响应
                e.preventDefault();
            }
            break;
        case _R.KEY_OKey : 
        case _R.KEY_OKey2 : 
            _R.dispatchEvent('KeyOk', e);
            if (e.preventDefault) {
                //禁止默认事件响应
                e.preventDefault();
            }
            break;
        case _R.KEY_PREV : 
            _R.dispatchEvent('KeyPrev', e);
            if (e.preventDefault) {
                //禁止默认事件响应
                e.preventDefault();
            }
            break;
        case _R.KEY_NEXT : 
            _R.dispatchEvent('KeyNext', e);
            if (e.preventDefault) {
                //禁止默认事件响应
                e.preventDefault();
            }
            break;
        case _R.KEY_BACK : 
        case _R.KEY_BACK2 : 
        case _R.KEY_BACK3 :
        case _R.KEY_BACK4 :
            _R.dispatchEvent('KeyBack', e);
            break;
        case _R.KEY_VOL_UP : 
            _R.dispatchEvent('KeyVolUp', e);
            break;
        case _R.KEY_VOL_DOWN : 
            _R.dispatchEvent('KeyVolDown', e);
            break;
        case _R.KEY_MUTE : 
            _R.dispatchEvent('KeyMute', e);
            break;
        case _R.KEY_VIRTUAL : 
            _R.dispatchEvent('KeyVirtual', e);
            break;
        case _R.KEY_HOME : 
        case _R.KEY_HOME2 : 
            _R.dispatchEvent('KeyHome', e);
            break;
        case _R.KEY_CHANNEL_UP :
            _R.dispatchEvent('KeyChannelUp', e);
            break;
        case _R.KEY_CHANNEL_DOWN :
            _R.dispatchEvent('KeyChannelDown', e);
            break;
        case _R.KEY_FF :
        case _R.KEY_FF2 :
            _R.dispatchEvent('KeyFf', e);
            break;
        case _R.KEY_FR :
        case _R.KEY_FR2 :
            _R.dispatchEvent('KeyFr', e);
            break;
        case _R.KEY_AUDIO :
            _R.dispatchEvent('KeyAudio', e);
            break;
        case _R.KEY_PAUSE :
        case _R.KEY_PAUSE2 :
            _R.dispatchEvent('KeyPause', e);
            break;
        case _R.KEY_REFRESH :
            _R.dispatchEvent('KeyRefresh', e);
            break;
        case _R.KEY_DELETE :
            _R.dispatchEvent('KeyDelete', e);
            break;
        default :
            if (bjf.env.type === "ocn") {
                if (_R.KEY_OKey2 == _key_code) {
                    _R.dispatchEvent('KeyOk', e);
                    if (e.preventDefault) {
                        //禁止默认事件响应
                        e.preventDefault();
                    }
                    break;
                }
                else if (_R.KEY_BACK3 == _key_code) {
                    _R.dispatchEvent('KeyBack', e);
                    break;
                }
                else if (_R.KEY_PAUSE2 == _key_code) {
                    _R.dispatchEvent('KeyPause', e);
                    break;
                }
                else if (_R.KEY_FF2 == _key_code) {
                    _R.dispatchEvent('KeyFf', e);
                    break;
                }
                else if (_R.KEY_FR2 == _key_code) {
                    _R.dispatchEvent('KeyFr', e);
                    break;
                }
            }
            _R.dispatchEvent('KeyInput', e);
            break;
        }
        //停止事件冒泡
        
        if(e && e.stopPropagation) {
            e.stopPropagation();
        }
        else if (w_.event && w_.event.cancelBubble) {
            w_.event.cancelBubble = true;
        }
        //某些有封套的盒子，必须返回false才能阻止封套默认的事件
        return false;
 
    };
    document.onkeyup = function (e) {
        if (lp_timer) {
            clearTimeout(lp_timer);
            lp_timer = 0;
        }
        if (lp_excuted) {
            bjf.Remote.dispatchEvent('onLongKeyEnd', e);
            lp_excuted = false;
        }
    }
    var _page_load_listeners = [];
    w_.bjf.onload = function(cb_) {
        _page_load_listeners.push(cb_);
    },
    w_.onload = function () {
        var _len = _page_load_listeners.length;
        for (var i = 0; i < _len; i++) {
            if ('function' == typeof(_page_load_listeners[i])) {
                _page_load_listeners[i]();
            }
        }
    };
    
//以下一行是自动打包脚本识别的特殊tag注释，勿改勿删
//--------------------BuildTagEnd------------------
})(window);