/**
 * 
 * @auth    zhang.hao03 20240314
 * @charset utf-8
 * @indent  空格*4
 * @description bjf请求扩展，作为js文件在bjf后引入覆盖原方法
 */


(function (w_) {
    var timeout_ = 1000
    var IS_UT = false;
    if (0 < navigator.userAgent.indexOf("JETU")) {
        IS_UT = true;
    }
    function getVerson(type) {
        var _top_type;
        try {
            _top_type = window.parent.activateHeartBeat;
        } catch (error) {
            _top_type = undefined;
        }
        if (typeof _top_type !== "undefined") {
            window.parent.activateHeartBeat(type);
        } else {
            if ("undefined" !== typeof activateHeartBeat) {
                activateHeartBeat(type);
            }
        }
    }
    function Ajax(url, args) {
        var parameters = args.parameters;
        var header = {};
        var timeout = null;
        var flag = null
        if (args.parameters.$$type === this.AJAX_CONFIG_KEY) {
            if (args.method === 'get') {
                parameters = JSON.parse(args.parameters.data)
            } else {
                parameters = args.parameters.data
            }
            header = args.parameters.header || {}
            timeout = args.parameters.timeout * 1000 || timeout_
            flag = args.parameters.$$type
        }

        this.url = url || "";
        this.params = parameters || "";
        this.mime = args.mime || "text/html";
        this.onComplete = args.onComplete || this.defaultOnCompleteFunc;
        this.onLoading = args.onLoading || this.defaultOnLoadingFunc;
        this.onError = args.onError || this.defaultOnErrorFunc;
        this.method = args.method || "get";
        this.timeout = timeout || timeout_;
        this.header = header
        this.timeouter = null
        this.flag = flag
        if (timeout) {
            this.timeout = timeout;
            delete this.params.timeout;
            if (JSON.stringify(this.params) == "{}") {
                this.params = "";
            }
        }
        if (typeof args.sync == "undefined" || args.sync == null) {
            this.sync = true;
        } else {
            this.sync = args.sync ? true : false;
        }
        this.loadData();
        getVerson("AJAXEVENT");
    }
    Ajax.prototype = {
        READY_STATE_COMPLETE: 4,
        AJAX_CONFIG_KEY: "AJAX_CONFIG_" + Math.ceil(Math.random() * 10000),
        getRequest: function () {
            var req = null;
            if (window.XMLHttpRequest) {
                req = new XMLHttpRequest();
            } else {
                if (window.ActiveXObject) {
                    req = new ActiveXObject("Microsoft.XMLHTTP");
                }
            }
            return req || false;
        },
        parseParams: function () {
            if (typeof this.params == "string") {
                return this.params;
            } else {
                var s = [];
                for (var k in this.params) {
                    s.push(k + "=" + this.params[k]);
                }
                return s.join("&");
            }
        },
        setRequestHeader: function () {
            if (!this.req) {
                return;
            }
            if (this.method == "post") {
                if (this.flag != this.AJAX_CONFIG_KEY) {
                    this.req.setRequestHeader(
                        "Content-Type",
                        "application/x-www-form-urlencoded"
                    );
                }
            }
            if (this.flag == this.AJAX_CONFIG_KEY) {
                for (var head in this.header) {
                    if (this.header[head]) {
                        this.req.setRequestHeader(head, this.header[head])
                    }
                }
            }
            this.req.setRequestHeader("VIS-AJAX", "AjaxHttpRequest");
        },
        loadData: function () {
            this.req = this.getRequest();
            if (this.req) {
                this.onLoading();
                try {
                    if (this.params) {
                        var _params = this.parseParams();
                        if (this.method == "get") {
                            if (0 < this.url.indexOf("?")) {
                                if (_params == "") {
                                    this.url;
                                } else {
                                    this.url += "&" + _params;
                                }
                            } else {
                                this.url += "?" + _params;
                            }
                        } else {
                            this.params = _params;
                        }
                    }
                    var loader = this;
                    var exc_flag = 0;
                    this.req.onreadystatechange = function () {
                        if (!loader.req || exc_flag) {
                            return;
                        }
                        if (loader.req.readyState == loader.READY_STATE_COMPLETE) {
                            exc_flag = 1
                            clearTimeout(this.timeouter)
                            if (loader.req.status == 200) {
                                loader.onComplete.call(loader, loader.req.responseText);
                            } else {
                                loader.onError.call(loader, loader.req.status);
                            }
                        }
                    };
                    this.req.open(this.method, this.url, this.sync);
                    this.setRequestHeader()
                    if (this.req.overrideMimeType) {
                        this.req.overrideMimeType(this.mime);
                    }
                    if (this.sync) {
                        this.timeouter = setTimeout(() => {
                            this.timeouter = null;
                            if (exc_flag) {
                                return
                            }
                            exc_flag = 1
                            try {
                                loader.req.abort()
                            } catch (error) {
                                
                            }
                            var timeoutErrorMessage =
                                "timeout of " + loader.timeout + "ms exceeded";
                            loader.onError.call(loader, timeoutErrorMessage);
                        }, this.timeout)
                        // this.req.timeout = this.timeout;
                        // this.req.ontimeout = function handleTimeout() {
                        //     var timeoutErrorMessage =
                        //         "timeout of " + loader.timeout + "ms exceeded";
                        //         console.log("timeout=================>")
                        //     loader.onError.call(loader, timeoutErrorMessage);
                        //     loader.req.onreadystatechange = null;
                        //     loader.req = null;
                        // };
                    }
                    this.req.send(this.method == "post" ? this.params : null);
                } catch (e) {
                    this.onError.call(this, e);
                }
            } else {
                throw "Ajax Object Get Failed";
            }
        },
        defaultOnCompleteFunc: function () { },
        defaultOnLoadingFunc: function () { },
        defaultOnErrorFunc: function (error) {
            throw error;
        },
    };
    if (w_.bjf) {
        w_.bjf.setDefaultTimeout = function (time) {
            if (typeof time === 'number') {
                timeout_ = time
            }
        }
        w_.bjf.createAjaxOptions = function (config) {
            try {
                if (typeof config === "string") {
                    return config;
                }
                if (config instanceof Array) {
                    if (config.length > 0) {
                        var _config = {
                            data: JSON.stringify(config[0]),
                            header: config[1],
                            timeout: config[2],
                        };
                        config.$$type = Ajax.prototype.AJAX_CONFIG_KEY;
                        return _config;
                    } else {
                        return {};
                    }
                }
                if (config instanceof Object) {
                    var _config = JSON.parse(JSON.stringify(config))
                    _config.data = JSON.stringify(config.data)
                    _config.$$type = Ajax.prototype.AJAX_CONFIG_KEY;
                    return _config;
                }
            } catch (error) {
                throw new Error("Unsupported Ajax configuration");
            }

        };
        w_.bjf.get = function () {
            if (1 > arguments.length) {
                return false;
            }
            var _url = arguments[0],
                _data = {};
            if (2 == arguments.length) {
                if ("function" == typeof arguments[1]) {
                    _data.onComplete = arguments[1];
                } else {
                    _data.parameters = arguments[1];
                }
            } else {
                if (3 == arguments.length) {
                    if ("function" == typeof arguments[1]) {
                        _data.onComplete = arguments[1];
                        if ("function" == typeof arguments[2]) {
                            _data.onError = arguments[2];
                        }
                    } else {
                        _data.parameters = arguments[1];
                        if ("function" == typeof arguments[2]) {
                            _data.onComplete = arguments[2];
                        }
                    }
                } else {
                    if (4 == arguments.length) {
                        _data.parameters = arguments[1];
                        if ("function" == typeof arguments[2]) {
                            _data.onComplete = arguments[2];
                        }
                        if ("function" == typeof arguments[3]) {
                            _data.onError = arguments[3];
                        }
                    }
                }
            }
            _data.method = "get";
            new Ajax(_url, _data);
        };
        w_.bjf.post = function () {
            if (1 > arguments.length) {
                return false;
            }
            var _url = arguments[0],
                _data = {};
            if (2 == arguments.length) {
                if ("function" == typeof arguments[1]) {
                    _data.onComplete = arguments[1];
                } else {
                    _data.parameters = arguments[1];
                }
            } else {
                if (3 == arguments.length) {
                    _data.parameters = arguments[1];
                    if ("function" == typeof arguments[2]) {
                        _data.onComplete = arguments[2];
                    }
                } else {
                    if (4 == arguments.length) {
                        _data.parameters = arguments[1];
                        if ("function" == typeof arguments[2]) {
                            _data.onComplete = arguments[2];
                        }
                        if ("function" == typeof arguments[3]) {
                            _data.onError = arguments[3];
                        }
                    }
                }
            }
            _data.method = "post";
            new Ajax(_url, _data);
        };
        w_.bjf.syncGet = function () {
            if (1 > arguments.length) {
                return false;
            }
            var _url = arguments[0],
                _data = {};
            if (2 == arguments.length) {
                if ("function" == typeof arguments[1]) {
                    _data.onComplete = arguments[1];
                } else {
                    _data.parameters = arguments[1];
                }
            } else {
                if (3 == arguments.length) {
                    if ("function" == typeof arguments[1]) {
                        _data.onComplete = arguments[1];
                        if ("function" == typeof arguments[2]) {
                            _data.onError = arguments[2];
                        }
                    } else {
                        _data.parameters = arguments[1];
                        if ("function" == typeof arguments[2]) {
                            _data.onComplete = arguments[2];
                        }
                    }
                } else {
                    if (4 == arguments.length) {
                        _data.parameters = arguments[1];
                        if ("function" == typeof arguments[2]) {
                            _data.onComplete = arguments[2];
                        }
                        if ("function" == typeof arguments[3]) {
                            _data.onError = arguments[3];
                        }
                    }
                }
            }
            _data.method = "get";
            _data.sync = false;
            new Ajax(_url, _data);
        };
        w_.bjf.syncPost = function () {
            if (1 > arguments.length) {
                return false;
            }
            var _url = arguments[0],
                _data = {};
            if (2 == arguments.length) {
                if ("function" == typeof arguments[1]) {
                    _data.onComplete = arguments[1];
                } else {
                    _data.parameters = arguments[1];
                }
            } else {
                if (3 == arguments.length) {
                    _data.parameters = arguments[1];
                    if ("function" == typeof arguments[2]) {
                        _data.onComplete = arguments[2];
                    }
                } else {
                    if (4 == arguments.length) {
                        _data.parameters = arguments[1];
                        if ("function" == typeof arguments[2]) {
                            _data.onComplete = arguments[2];
                        }
                        if ("function" == typeof arguments[3]) {
                            _data.onError = arguments[3];
                        }
                    }
                }
            }
            _data.method = "post";
            _data.sync = false;
            new Ajax(_url, _data);
        };
        w_.bjf.getJson = function () {
            if (1 > arguments.length) {
                return false;
            }
            var _url = arguments[0],
                _data = { parameters: {} },
                _cb,
                _onError_cb = function () { };
            if (2 == arguments.length) {
                if ("function" == typeof arguments[1]) {
                    _cb = arguments[1];
                } else {
                    if (
                        "get" == arguments[1] ||
                        "post" == arguments[1] ||
                        "jsonp" == arguments[1]
                    ) {
                        _data.method = arguments[1];
                    } else {
                        _data.parameters = arguments[1];
                    }
                }
            } else {
                if (3 == arguments.length) {
                    if (
                        "get" == arguments[1] ||
                        "post" == arguments[1] ||
                        "jsonp" == arguments[1]
                    ) {
                        _data.method = arguments[1];
                        if ("function" == typeof arguments[2]) {
                            _cb = arguments[2];
                        }
                    } else {
                        if ("function" == typeof arguments[1]) {
                            _cb = arguments[1];
                            if ("function" == typeof arguments[2]) {
                                _onError_cb = arguments[2];
                            }
                        } else {
                            _data.parameters = arguments[1];
                            if ("function" == typeof arguments[2]) {
                                _cb = arguments[2];
                            }
                        }
                    }
                } else {
                    if (4 == arguments.length) {
                        if (
                            "get" == arguments[1] ||
                            "post" == arguments[1] ||
                            "jsonp" == arguments[1]
                        ) {
                            _data.method = arguments[1];
                            if ("function" == typeof arguments[2]) {
                                _cb = arguments[2];
                                _onError_cb = arguments[3];
                            } else {
                                _data.parameters = arguments[2];
                                if ("function" == typeof arguments[3]) {
                                    _cb = arguments[3];
                                }
                            }
                        } else {
                            _data.parameters = arguments[1];
                            if ("function" == typeof arguments[2]) {
                                _cb = arguments[2];
                            }
                            if ("function" == typeof arguments[3]) {
                                _onError_cb = arguments[3];
                            }
                        }
                    } else {
                        if (5 == arguments.length) {
                            if (
                                "get" == arguments[1] ||
                                "post" == arguments[1] ||
                                "jsonp" == arguments[1]
                            ) {
                                _data.method = arguments[1];
                            }
                            _data.parameters = arguments[2];
                            if ("function" == typeof arguments[3]) {
                                _cb = arguments[3];
                            }
                            if ("function" == typeof arguments[4]) {
                                _onError_cb = arguments[4];
                            }
                        }
                    }
                }
            }
            if ("jsonp" == _data.method) {
                var _tag = document.createElement("script"),
                    _cbname =
                        _data.parameters.callback ||
                        "jsonpCallback_" + Math.random().toString().substr(2, 13),
                    _exec_flag = 0,
                    timeout = null,
                    parameters = {},
                    timeouter = null;
                _tag.async = true;
                _cb = _cb || function () { };
                function clearTimeout_() {
                    clearTimeout(timeouter)
                }
                if (_data.parameters.$$type === Ajax.prototype.AJAX_CONFIG_KEY) {
                    try {
                        parameters = JSON.parse(_data.parameters.data)
                    } catch (error) {
                        parameters = {}
                    }
                    if (_data.parameters.timeout || _data.parameters.timeout == 0) {
                        timeout = _data.parameters.timeout
                    }
                    parameters.callback = _cbname
                } else {
                    parameters = _data.parameters
                    parameters.callback = _cbname
                }
                _data.parameters = parameters;
                w_[_cbname] = function (data_) {
                    _exec_flag = 1;
                    document.head.removeChild(_tag);
                    w_[_cbname] = null;
                    clearTimeout_()
                    _cb(data_);
                };
                _tag.onerror = function (e) {
                    document.head.removeChild(_tag);
                    w_[_cbname] = null;
                    clearTimeout_()
                    _onError_cb({ ret: 0, msg: "bad request!" });
                };
                _tag.onload = _tag.onreadystatechange = function () {
                    if (
                        !this.readyState ||
                        this.readyState == "loaded" ||
                        this.readyState == "complete"
                    ) {
                        if (0 == _exec_flag) {
                            clearTimeout_()
                            _onError_cb({ ret: 0, msg: "bad data!" });
                        }
                    }
                };
                document.head.appendChild(_tag);
                var _getstr = Ajax.prototype.parseParams.call({
                    params: _data.parameters,
                });
                if ("" != _getstr) {
                    if (0 < _url.indexOf("?")) {
                        _tag.src =
                            _url +
                            "&" +
                            Ajax.prototype.parseParams.call({ params: _data.parameters });
                    } else {
                        _tag.src =
                            _url +
                            "?" +
                            Ajax.prototype.parseParams.call({ params: _data.parameters });
                    }
                }
                function resetTag() {
                    _tag.onerror = null
                    _tag.onload = _tag.onreadystatechange = null
                    w_[_cbname] = null;
                    document.head.removeChild(_tag);
                    _onError_cb({ ret: 0, msg: "timeout of " + timeout + "ms exceeded" });
                    _tag.src = ''
                    _tag = null;
                }
                if (timeout !== null) {
                    timeouter = setTimeout(() => {
                        clearTimeout_()
                        resetTag()
                    }, timeout * 1000)
                }
                getVerson("AJAXEVENT");
                return;
            }
            if (_cb) {
                _data.onComplete = function (data_) {
                    try {
                        if (!window.JSON || JSON.parse == "undefined" || IS_UT) {
                            data_ = eval("(" + data_ + ")");
                        } else {
                            data_ = JSON.parse(data_);
                        }
                    } catch (error) {
                        _onError_cb(error);
                        return;
                    }
                    if ("object" !== typeof data_) {
                        _onError_cb(data_);
                        return;
                    }
                    return _cb(data_);
                };
            }
            if (_onError_cb) {
                _data.onError = function (data_) {
                    return _onError_cb(data_);
                };
            }
            new Ajax(_url, _data);
        };
        w_.bjf.syncGetJson = function () {
            if (1 > arguments.length) {
                return false;
            }
            var _url = arguments[0],
                _data = { parameters: {} },
                _cb,
                _onError_cb = function () { };
            if (2 == arguments.length) {
                if ("function" == typeof arguments[1]) {
                    _cb = arguments[1];
                } else {
                    if ("get" == arguments[1] || "post" == arguments[1]) {
                        _data.method = arguments[1];
                    } else {
                        _data.parameters = arguments[1];
                    }
                }
            } else {
                if (3 == arguments.length) {
                    if ("get" == arguments[1] || "post" == arguments[1]) {
                        _data.method = arguments[1];
                        if ("function" == typeof arguments[2]) {
                            _cb = arguments[2];
                        }
                    } else {
                        if ("function" == typeof arguments[1]) {
                            _cb = arguments[1];
                            if ("function" == typeof arguments[2]) {
                                _onError_cb = arguments[2];
                            }
                        } else {
                            _data.parameters = arguments[1];
                            if ("function" == typeof arguments[2]) {
                                _cb = arguments[2];
                            }
                        }
                    }
                } else {
                    if (4 == arguments.length) {
                        if ("get" == arguments[1] || "post" == arguments[1]) {
                            _data.method = arguments[1];
                            _data.parameters = arguments[2];
                            if ("function" == typeof arguments[3]) {
                                _cb = arguments[3];
                            }
                        } else {
                            _data.parameters = arguments[1];
                            if ("function" == typeof arguments[2]) {
                                _cb = arguments[2];
                            }
                            if ("function" == typeof arguments[3]) {
                                _onError_cb = arguments[3];
                            }
                        }
                    } else {
                        if (5 == arguments.length) {
                            if ("get" == arguments[1] || "post" == arguments[1]) {
                                _data.method = arguments[1];
                            }
                            _data.parameters = arguments[2];
                            if ("function" == typeof arguments[3]) {
                                _cb = arguments[3];
                            }
                            if ("function" == typeof arguments[4]) {
                                _onError_cb = arguments[4];
                            }
                        }
                    }
                }
            }
            if (_cb) {
                _data.onComplete = function (data_) {
                    try {
                        if (!window.JSON || JSON.parse == "undefined") {
                            data_ = eval(data_);
                        } else {
                            data_ = JSON.parse(data_);
                        }
                    } catch (error) {
                        _onError_cb(error);
                        return;
                    }
                    if ("object" !== typeof data_) {
                        _onError_cb(data_);
                        return;
                    }
                    return _cb(data_);
                };
            }
            if (_onError_cb) {
                _data.onError = function (data_) {
                    return _onError_cb(data_);
                };
            }
            _data.sync = false;
            new Ajax(_url, _data);
        };
    }
})(window);


