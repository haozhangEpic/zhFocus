/**
 *
 * @auth    derong.zeng 20161027
 * @charset utf-8
 * @indent  空格*4
 * @depend  bjf.focus
 */

(function (w_) {
    if (undefined == w_.bjf) {
        w_.bjf = {};
    }
    else if (undefined != w_.bjf.focusUI) {
        return;
    }

    if (!w_.bjf.focus) {
        throw new Error('depend bjf.focus!');
    }
//以下一行是自动打包脚本识别的特殊tag注释，勿改勿删
//--------------------BuildTagStart------------------


    //光标框
    w_.bjf.focusUI = {
        x: 0,
        y: 0,
        top: 0,
        left: 0,
        x_gap: 0, //光标框之间x轴上的间距
        y_gap: 0, //光标框之间y轴上的间距
        moving: 0,
        border: 0, //光标框边的宽度
        display: 0,
        w: 0, //光标框的宽度
        h: 0, //光标框的长度
        duration: '150',
        pos_mov: 0,
        ta_support: 1,
        box: null,
        /**
         * 初始化光标框，设置外框大小
         * @param border_     光标边框宽度
         * @param className_  光标样式name，可对光标框的“宽度/颜色/发光效果/圆角”做自定义
         */
        init: function (border_, className_, userStyle_) {
            var _div = document.createElement('div'), _p = this;
            var _3Dexception = new Array('Mozilla/4.0 (compatible; MSIE 6.0; EIS iPanel 3.0 ; unknown)', 'Mozilla/5.0 (X11; Linux i686; en-US) AppleWebKit/534.0 (KHTML, like Gecko) Ranger/3.0.88127.2615 EC2108 Sunniwell; Resolution(PAL,720P,1080i); EIS iPanel 2.0', 'Mozilla/5.0 (X11; Linux x86_64; SkyworthBrowser) AppleWebKit/534.24 (KHTML, like Gecko) Safari/534.24 SkWebKit-HE-CU', 'Mozilla/5.0 (X11; Linux x86_64; SkyworthBrowser) AppleWebKit/534.24 (KHTML, like Gecko) Safari/534.24 SkWebKit-SN-CTC', 'Mozilla/5.0 (X11; Linux x86_64; SkyworthBrowser) AppleWebKit/534.24 (KHTML, like Gecko) Safari/534.24 SkWebKit-JS-CTC');
            this.border = border_ || 4;
            //添加默认光标响应
            /*
             bjf.focus.eventDefault.on = function () {
             _p.setPostBy(this.x, this.y);
             };
             */
            _div.style.webkitBackfaceVisibility = 'hidden';
            _div.style.borderWidth = this.border + 'px';
            _div.style.position = 'absolute';
            _div.style.top = '0px';
            _div.style.left = '0px';
            _div.style.zIndex = '99998';
            _div.id = 'focus';
            if (className_) {
                _div.className = className_;
            }
            else if (userStyle_) {
                for (var style_name in userStyle_) {
                    _div.style[style_name] = userStyle_[style_name];
                }
            }
            else {
                //UT的盒子，不能有发光和阴影效果，否则会挂掉，另外UT盒子虽然支持动画，但是会有残影，所以关掉动画
                if ('undefined' == typeof(IS_UT) || !IS_UT) {
                    _div.style.boxShadow = '0 0 20px #000000';
                }
                else {
                    this.duration = '0';
                }
                _div.style.borderStyle = 'solid';
                _div.style.borderColor = '#ffffff';
            }
            // XXX 创维E8100 & EC2108某款 机顶盒，程序支持translate3d，但是实际显示会花屏，此处用UA做屏蔽
            for (var i = 0, len = _3Dexception.length; i < len; i++) {
                if (_3Dexception[i] == bjf.env.ua) {
                    this.ta_support = 0;
                }
            }
            if (this.ta_support == 1) {
                _div.style.webkitTransform = 'translate3d(0px,0px,0px)';
            }
            document.body.appendChild(_div);
            if (!this.ta_support || "function" != typeof(window.getComputedStyle) || 'matrix(1, 0, 0, 1, 0, 0)' != window.getComputedStyle(_div, null).webkitTransform) {
                _div.style.left = '-' + (this.border * 8) + 'px';
                _div.style.webkitTransitionProperty = 'left,top';
                this.ta_support = 0;
            }
            else {
                _div.style.webkitTransform = 'translate3d(-' + (this.border * 8) + 'px,0px,0px)';
                _div.style.webkitTransitionProperty = '-webkit-transform';
            }
            _div.addEventListener("webkitTransitionEnd", function () {
                _p.moving = 0;
            });
            this.box = _div;
        },
        /**
         * 将光标框设置为可见
         */
        on: function () {
            if (this.ta_support) {
                this.box.style.webkitTransform = 'translate3d(' + this.x + 'px, ' + this.y + 'px, 0)';
            }
            else {
                this.box.style.visibility = 'visible';
            }
            this.display = 1;
            return;
        },
        /**
         * 隐藏光标框
         */
        lost: function () {
            if (0 < parseInt(this.duration)) {
                this.box.style.webkitTransitionDuration = '0ms';
            }
            if (this.ta_support) {
                this.box.style.webkitTransform = 'translate3d(0px,0px,0px) scaleX(0)';
            }
            else {
                this.box.style.visibility = 'hidden';
            }

            this.display = 0;
        },
        /**
         * 设置光标框的大小
         * @param w  光标框的宽度
         * @param h  光标框的长度
         */
        setSize: function (w, h) {
            if (0 >= w) {
                w = 1;
            }
            if (0 >= h) {
                h = 1;
            }
            if (this.h == h && this.w == w) {
                return;
            }
            this.pos_mov = 1;
            this.h = h;
            this.w = w;
            // XXX UT类盒子，当光标隐藏时，设置宽度和高度不会生效，此处先缓存起来，等到显示的时候再设置
            if (this.ta_support || this.display) {
                this.box.style.width = w + 'px';
                this.box.style.height = h + 'px';
            }
        },
        /**
         * 设置光标集合左上角与页面[0,0]的偏移位置
         * @param left_  x轴上的偏移量
         * @param top_   y轴上的偏移量
         */
        setOffset: function (left_, top_) {
            this.left = left_;
            this.top = top_;
        },
        /**
         * 计算光标框的位置
         * @param x_ 光标节点x坐标
         * @param y_ 光标节点y坐标
         */
        setPostBy: function (x_, y_) {
            x_ = x_ * (this.w + this.x_gap) + this.left;
            y_ = y_ * (this.h + this.y_gap) + this.top;
            return this.setPost(x_, y_);
        },
        /**
         * 设置光标集合下光标框之间的间距
         * @param x_ 光标框之间x轴上的间距
         * @param y_ 光标框之间y轴上的间距
         */
        setGap: function (x_, y_) {
            this.x_gap = x_;
            this.y_gap = y_;
        },
        /**
         * 设置光标框的位置
         * @param x_ 光标框x轴上的位置
         * @param y_ 光标框y轴上的位置
         */
        setPost: function (x, y) {
            var _buff_x = this.x, _buff_y = this.y, _p = this;
            y = y - this.border;
            x = x - this.border;
            if (x == this.x && y == this.y) {
                if (1 == this.display) {
                    return;
                }
            }
            if (1 == this.display) {
                if (this.moving) {
                    if (x != this.x) {
                        _buff_x = (x > this.x) ? this.x + 1 : this.x - 1;
                    }
                    if (y != this.y) {
                        _buff_y = (y > this.y) ? this.y + 1 : this.y - 1;
                    }
                    if (0 < parseInt(this.duration)) {
                        this.box.style.webkitTransitionDuration = '0ms';
                    }
                    if (this.ta_support) {
                        this.box.style.webkitTransform = 'translate3d(' + _buff_x + 'px, ' + _buff_y + 'px, 0)';
                    }
                    else {
                        this.box.style.left = _buff_x + 'px';
                        this.box.style.top = _buff_y + 'px';
                    }
                    this.box.offsetHeight;
                    if (0 < parseInt(this.duration)) {
                        this.box.style.webkitTransitionDuration = this.duration + "ms";
                    }
                    if (this.ta_support) {
                        this.box.style.webkitTransform = "translate3d(" + x + "px, " + y + "px, 0)";
                    } else {
                        this.box.style.left = x + "px";
                        this.box.style.top = y + "px";
                    }
                    this.moving = 1;
                }
                else {//还未移动

                    //判断flag,根据位移过程中大小是否变化了决定打开或关闭动画
                    if (this.pos_mov == 1) {//位移了,动画关闭
                        if (0 < parseInt(this.duration)) {
                            this.box.style.webkitTransitionDuration = '0ms';
                        }

                    } else if (0 < parseInt(this.duration)) {
                        this.box.style.webkitTransitionDuration = this.duration + "ms";
                    }
                    if (this.ta_support) {
                        this.box.style.webkitTransform = 'translate3d(' + x + 'px, ' + y + 'px, 0)';
                    }
                    else {
                        this.box.style.left = x + 'px';
                        this.box.style.top = y + 'px';
                    }
                    if (this.pos_mov !== 1) {
                        this.moving = 1;
                    }
                    this.pos_mov = 0;//判断位移标记还原
                }
            }
            else {
                if (this.ta_support) {
                    this.box.style.webkitTransform = 'translate3d(' + x + 'px, ' + y + 'px, 0)';
                }
                else {
                    this.box.style.visibility = 'visible';
                    this.box.style.width = this.w + 'px';
                    this.box.style.height = this.h + 'px';
                    this.box.style.left = x + 'px';
                    this.box.style.top = y + 'px';
                }
                this.display = 1;
            }
            this.x = x;
            this.y = y;
        }
    };
//以下一行是自动打包脚本识别的特殊tag注释，勿改勿删
//--------------------BuildTagEnd------------------
}(window));