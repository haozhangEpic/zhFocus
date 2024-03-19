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
    else if (undefined != w_.bjf.storage) {
        return;
    }

//以下一行是自动打包脚本识别的特殊tag注释，勿改勿删
//--------------------BuildTagStart------------------
    var _ls, _api_type;
    try {
        if (top.location && top.location.href !== location.href) {
            if (undefined === top._BJF_STORAGE_SPACE) {
                top._BJF_STORAGE_SPACE = {};
            }
            if ('object' === typeof(top._BJF_STORAGE_SPACE)) {
                _api_type = 'topSpace';
            }
        }
    }
    catch (e) {
        _api_type = undefined;
    }
    if ('topSpace' === _api_type) {
        var _data = top._BJF_STORAGE_SPACE;
        _ls = {
            setItem : function (key_, value_) {
                _data[key_] = value_;
                return true;
            },
            getItem : function (key_) {
                if (undefined === _data[key_]) {
                    return null;
                }
                return _data[key_];
            },
            removeItem : function (key_) {
                if (undefined == _data[key_]) {
                    return false;
                }
                delete _data[key_];
                return true;
            },
            clear : function () {
                _data = {};
                top._BJF_STORAGE_SPACE = {};
            },
            getData : function () {
                return _data;
            }
        }
    }
    else if (window.sessionStorage) {
        _api_type = 'sessionStorage';
        _ls = window.sessionStorage;
    }
    else if (window.localStorage) {
        _api_type = 'localStorage';
        _ls = window.localStorage;
    }
    //某些驻地没有top页面，或者浏览器内核限制不允许访问top层变量空间，就只能由cookie来实现存储
    else if (window.JSON) {
        var _start = document.cookie.indexOf('bjfs='), _cookie_len = document.cookie.length, _bjfs;
        if (0 > _start || 4000 < _cookie_len) {
            _bjfs = {};
        }
        else {
            var _p2, _p3;
            _start  = _start + 5;
            _p2     = document.cookie.substr(_start, _cookie_len);
            _start2 = _p2.indexOf(';')
            if (0 <= _start2) {
                _p2     = _p2.substr(0, _start2);
            }
            _bjfs = _p2 ? JSON.parse(unescape(_p2)) : {};
        }
        _ls = {
            setItem : function (key_, value_) {
                _bjfs[key_] = value_;
                document.cookie = 'bjfs=' + escape(JSON.stringify(_bjfs));
                return true;
            },
            getItem : function (key_) {
                if (undefined === _bjfs[key_]) {
                    return null;
                }
                return _bjfs[key_];
            },
            removeItem : function (key_) {
                if (undefined == _bjfs[key_]) {
                    return false;
                }
                delete _bjfs[key_];
                for (var i in _bjfs) {
                    document.cookie = 'bjfs=' + escape(JSON.stringify(_bjfs));
                    return;
                }
                document.cookie = 'bjfs=';
            },
            clear : function () {
                _bjfs = {};
                document.cookie = 'bjfs=';
            },
            getData : function () {
                return _bjfs;
            }
        };
        _api_type = 'cookie';
    }
    if (!_ls) {
        if (w_.bjf.debug) {
            w_.bjf.debug(new Error('warning localStorage is unsupported'));
        }
        w_.bjf.storageType = 'none';
        w_.bjf.storage = {
            get : function(){if (w_.bjf.debug) w_.bjf.debug(new Error('warning localStorage is unsupported'));},
            set : function(){if (w_.bjf.debug) w_.bjf.debug(new Error('warning localStorage is unsupported'));},
            remove : function(){if (w_.bjf.debug) w_.bjf.debug(new Error('warning localStorage is unsupported'));},
            clear : function(){if (w_.bjf.debug) w_.bjf.debug(new Error('warning localStorage is unsupported'));},
            getAll : function(){if (w_.bjf.debug) w_.bjf.debug(new Error('warning localStorage is unsupported'));},
            pageSet : function(){if (w_.bjf.debug) w_.bjf.debug(new Error('warning localStorage is unsupported'));},
            pageGet : function(){if (w_.bjf.debug) w_.bjf.debug(new Error('warning localStorage is unsupported'));},
            pageRemove : function(){if (w_.bjf.debug) w_.bjf.debug(new Error('warning localStorage is unsupported'));},
            pageClear : function(){if (w_.bjf.debug) w_.bjf.debug(new Error('warning localStorage is unsupported'));},
            pageGetAll : function(){if (w_.bjf.debug) w_.bjf.debug(new Error('warning localStorage is unsupported'));},
            vSet: function () {
                if (w_.bjf.debug) w_.bjf.debug(new Error('warning localStorage is unsupported'));
            },
            vGet: function () {
                if (w_.bjf.debug) w_.bjf.debug(new Error('warning localStorage is unsupported'));
            },
            vRemove: function () {
                if (w_.bjf.debug) w_.bjf.debug(new Error('warning localStorage is unsupported'));
            },
            vClear: function () {
                if (w_.bjf.debug) w_.bjf.debug(new Error('warning localStorage is unsupported'));
            },
            vGetAll: function () {
                if (w_.bjf.debug) w_.bjf.debug(new Error('warning localStorage is unsupported'));
            }
        };
    }
    else {
        var _href          = location.href,
            _page_key_pref = _href.substring(_href.indexOf('/')+1),
            _v_key = "vis_storage_bd718",//设定一个不太容易重复的标记以辨别vSet和pageSet
            _epg_info_post = _page_key_pref.indexOf('epg_info=');
        if (1 < _epg_info_post) {
            _page_key_pref = _page_key_pref.substring(0, _epg_info_post - 1);
        }
        if ('/' == _page_key_pref.substr(-1)) {
            _page_key_pref = _page_key_pref.substr(0, _page_key_pref.length-1);
        }
        w_.bjf.storageType = _api_type;
        w_.bjf.storage = {
            get        : function (key_) {return _ls.getItem(key_)},
            set        : function (key_, _value) {return _ls.setItem(key_, _value)},
            remove     : function (key_) {return _ls.removeItem(key_)},
            clear      : function () {return _ls.clear()},
            getAll     : function () {
                //浏览器原生接口
                if (_ls.key && 'function' == typeof(_ls.key)) {
                    var _d = {}
                    for (var i = 0; i < _ls.length; i++) {
                        var _key = _ls.key(i);
                        _d[_key] = _ls.getItem(_key);
                    }
                    return _d;
                }
                else {
                    return _ls.getData();
                }
            },
            pageSet    : function (key_, value_) {
                var _new_key = _page_key_pref + '*' + key_;
                return _ls.setItem(_new_key, value_);
            },
            pageGet    : function (key_) {
                return _ls.getItem(_page_key_pref + '*' + key_);
            },
            pageRemove : function (key_) {
                var _new_key = _page_key_pref + '*' + key_;
                return _ls.removeItem(_new_key);
            },
            pageClear  : function () {
                //浏览器原生接口
                if (_ls.key && 'function' == typeof(_ls.key)) {
                    for (var i = _ls.length - 1; i >= 0; i--) {
                        var _key = _ls.key(i);
                        if (_key && 0 <= _key.indexOf(_page_key_pref)) {
                            _ls.removeItem(_key);
                        }
                    }
                }
                else {
                    var _d = _ls.getData(), _del_keys = [];
                    for (var i in _d) {
                        if (0 <= i.indexOf(_page_key_pref)) {
                            _del_keys.push(i);
                        }
                    }
                    for (var i = _del_keys.length - 1; i >= 0; i--) {
                        _ls.removeItem(_del_keys[i]);
                    }
                }
                return true;
            },
            pageGetAll    : function () {
                //浏览器原生接口
                if (_ls.key && 'function' == typeof(_ls.key)) {
                    var _d = {}
                    for (var i = 0; i < _ls.length; i++) {
                        var _key   = _ls.key(i);
                        var _index = _key.indexOf(_page_key_pref);
                        if (0 <= _index) {
                            var _new_key = _key.replace(_page_key_pref + '*', '');
                            _d[_new_key] = _ls.getItem(_key);
                        }
                    }
                    return _d;
                }
                else {
                    var _d = _ls.getData();
                    var _p = {};
                    for (var i in _d) {
                        var _index = _key.indexOf(_page_key_pref);
                        if (0 <= _index) {
                            var _new_key = _key.replace(_page_key_pref + '*', '');
                            _p[_new_key] = _d[_key];
                        }
                    }
                }
                return _p;
            },
            vSet: function (key_, value_) {
                var _new_key = _v_key + '*' + key_;
                return _ls.setItem(_new_key, value_);
            },
            vGet: function (key_) {
                return _ls.getItem(_v_key + '*' + key_);
            },
            vRemove: function (key_) {
                var _new_key = _v_key + '*' + key_;
                return _ls.removeItem(_new_key);
            },
            vClear: function () {
                //浏览器原生接口
                if (_ls.key && 'function' == typeof(_ls.key)) {
                    for (var i = _ls.length - 1; i >= 0; i--) {
                        var _key = _ls.key(i);
                        if (_key && 0 <= _key.indexOf(_v_key)) {
                            _ls.removeItem(_key);
                        }
                    }
                }
                else {
                    var _d = _ls.getData(), _del_keys = [];
                    for (var i in _d) {
                        if (0 <= i.indexOf(_v_key)) {
                            _del_keys.push(i);
                        }
                    }
                    for (var i = _del_keys.length - 1; i >= 0; i--) {
                        _ls.removeItem(_del_keys[i]);
                    }
                }
                return true;
            },
            vGetAll: function () {
                //浏览器原生接口
                if (_ls.key && 'function' == typeof(_ls.key)) {
                    var _d = {}
                    for (var i = 0; i < _ls.length; i++) {
                        var _key = _ls.key(i);
                        var _index = _key.indexOf(_v_key);
                        if (0 <= _index) {
                            var _new_key = _key.replace(_v_key + '*', '');
                            _d[_new_key] = _ls.getItem(_key);
                        }
                    }
                    return _d;
                }
                else {
                    var _d = _ls.getData();
                    var _p = {};
                    for (var i in _d) {
                        var _index = _key.indexOf(_v_key);
                        if (0 <= _index) {
                            var _new_key = _key.replace(_v_key + '*', '');
                            _p[_new_key] = _d[_key];
                        }
                    }
                    return _p;
                }
            }
        };
    }
//以下一行是自动打包脚本识别的特殊tag注释，勿改勿删
//--------------------BuildTagEnd------------------
}(window));