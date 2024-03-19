(function (w_) {
    if (undefined == w_.bjf) {
        w_.bjf = {};
    } else if (undefined != w_.bjf.playerUI) {
        return;
    }

    //以下一行是自动打包脚本识别的特殊tag注释，勿改勿删
    //--------------------BuildTagStart------------------
    var _playerUI = {
        flag: "",
        win: {},
        DISPLAY: function () { },
    };

    _playerUI.DISPLAY = function (N) {
        this.base = {};
        this.base.name = N;
        this.base.path = "";
        this.base.errorShowFlag = "off";
        this.base.loadShowFlag = "on";
        this.base.loadTxtShowFlag = "on";
        this.base.loadImgShowFlag = "on";
        this.base.txtShowFlag = "on";
        this.base.barShowFlag = "on";

        this.base.UIShowFlag = "on";
        this.base.volUIShowFlag = "on";
        this.base.allUIShowFlag = "on";
        this.base.TSUIShowFlag = "on";
        this.base.TvodUIShowFlag = "on";

        this.base.volUIShowStyle = "round"; //line|round

        this.area = {};
        this.area.w = 0;
        this.area.h = 0;
        this.area.t = 0;
        this.area.l = 0;

        this.page = {};
        this.page.w = 0;
        this.page.h = 0;
        this.page.t = 0;
        this.page.l = 0;

        this.speedBar = {};
        this.speedBar.barLength = 0;
        this.speedBar.left = 0;

        this.info = {};
        this.info.showFlag = "false";

        this.info.title = {};
        this.info.title.name = "";
        this.info.title.fontSize = "";
        this.info.title.colour = "";

        //this.info.timer = null;

        this.info.rate = {};
        this.info.rate.name = "";
        this.info.rate.fontSize = "";
        this.info.rate.colour = "";

        this.info.castRoles = {};
        this.info.castRoles.name = "";
        this.info.castRoles.fontSize = "";
        this.info.castRoles.colour = "";

        this.info.tipPath = "";

        this.pauseShowFlag = "false";

        this.muteShowFlag = "false";

        this.speedShowFlag = "false";
        this.speedTimer = null;
        this.speedRate = 1;
        this.speedJishu = 0;

        this.audioChannelShowTimer = null;
    };

    _playerUI.DISPLAY.prototype.infoShow = function (s_, b_, e_, c_) {
        try {
            this.info.showFlag = "true";
            this.infoTxtShow();
            this.infoSpeedShow(s_, b_, e_, c_);
            /*var o = this;
			this.info.timer = setTimeout(function() {
				o.infoHide();
			},5000);*/
        } catch (e) {
            bjf.debug("_playerUI.DISPLAY.prototype.infoShow function error：" + e);
        }
    };

    _playerUI.DISPLAY.prototype.infoHide = function () {
        try {
            if (this.info.showFlag === "false") return;
            //clearTimeout(this.info.timer);
            //this.info.timer = null;
            this.info.showFlag = "false";
            this.infoTxtHide();
            this.infoSpeedHide();
        } catch (e) {
            bjf.debug("_playerUI.DISPLAY.prototype.infoHide function error：" + e);
        }
    };

    _playerUI.DISPLAY.prototype.infoTxtShow = function () {
        try {
            if (this.base.txtShowFlag !== "on" || this.base.UIShowFlag !== "on" || this.base.allUIShowFlag !== "on") return;

            var N = this.base.name;
            var path = this.base.path;

            var name = this.info.title.name;
            var rate = this.info.rate.name;
            var castRoles = this.info.castRoles.name;

            if (name === '' && rate === '' && castRoles === '') return;

            var radius = parseInt(8 / 720 * this.area.h, 10);

            var size1 = parseInt(28 / 720 * this.area.h, 10);
            if (this.info.title.fontSize !== "") {
                size1 = this.info.title.fontSize;
            }

            var colour1 = "#FFFFFF";
            if (this.info.title.colour !== "") {
                colour1 = this.info.title.colour;
            }

            var size2 = parseInt(20 / 720 * this.area.h, 10);
            if (this.info.rate.fontSize !== "") {
                size2 = this.info.rate.fontSize;
            }

            var colour2 = "#000000";
            if (this.info.rate.colour !== "") {
                colour2 = this.info.rate.colour;
            }

            var size3 = parseInt(20 / 720 * this.area.h, 10);
            if (this.info.castRoles.fontSize !== "") {
                size3 = this.info.castRoles.fontSize;
            }

            var colour3 = "#999999";
            if (this.info.castRoles.colour !== "") {
                colour3 = this.info.castRoles.colour;
            }

            var l1 = _playerUI.tool.getLength(name);
            var l2 = _playerUI.tool.getLength(rate);
            var left = this.speedBar.left;
            var width = this.area.w - left * 2;
            var width1 = 0,
                width2 = 0,
                width3 = 0;
            width2 = parseInt((size2 / 2 + 4) * l2, 10) + radius * 2;

            if (castRoles === "") {
                width1 = width - width2;
            } else if (l1 > 30) {
                width1 = size1 * 15;
            } else {
                width1 = parseInt(size1 / 2 * (l1 + 2), 10);
            }

            if (castRoles !== "") {
                width3 = width - width1 - width2 - 20;
            }

            if (bjf.$("#_playerUI_" + N + "_info_txt") === null) {
                var barLength = this.speedBar.barLength;
                var height = parseInt(360 / 1080 * this.area.h, 10);
                var top = parseInt(height / 6, 10);

                var node_ = document.createElement("div");
                node_.id = "_playerUI_" + N + "_info_txt_parent";
                node_.style.position = "absolute";
                node_.style.left = "0px";
                node_.style.right = "0px";
                node_.style.zIndex = "1";
                //文字需要比进程条的层级略高一级
                node_.innerHTML = '<div id="_playerUI_' + N + '_info_txt" style="position:absolute; z-index:99997; left:' + this.area.l + 'px; top:' + (this.area.t + parseInt(505 / 720 * this.area.h, 10)) + 'px; width:' + width + 'px; height:' + (height - top) + 'px; padding-top:' + top + 'px; padding:0 ' + left + 'px; -webkit-transition-duration:0.3s; -moz-transition-duration:0.3s;" ><div id="_playerUI_' + N + '_info_txt_name" style="float:left; margin-right:10px; width:' + width1 + 'px; color:' + colour1 + '; font-size:' + size1 + 'px; height:' + (size1 + 10) + 'px; line-height:' + (size1 + 10) + 'px; text-align:left; white-space: nowrap; text-overflow: ellipsis; overflow: hidden; position: relative;"></div><div id="_playerUI_' + N + '_info_txt_rate" style="float:left; width:' + width2 + 'px; margin-top:5px; margin-right:10px; color:' + colour2 + '; background:#FFFFFF; border-radius:' + radius + 'px; font-size:' + size2 + 'px; height:' + size1 + 'px; line-height:' + size1 + 'px; text-align:center; font-weight:bold;"></div><div id="_playerUI_' + N + '_info_txt_castRoles" style="float:left; width:' + width3 + 'px; font-size:' + size3 + 'px; height:' + (size1 + 10) + 'px; line-height:' + (size1 + 10) + 'px; text-align:left; color:' + colour3 + '; white-space: nowrap; text-overflow: ellipsis; overflow: hidden; position: relative;"></div></div>';
                document.body.appendChild(node_);
            } else if (parseInt(bjf.$("#_playerUI_" + N + "_info_txt_name").style.width, 10) !== width1 || parseInt(bjf.$("#_playerUI_" + N + "_info_txt_rate").style.width, 10) !== width2 || parseInt(bjf.$("#_playerUI_" + N + "_info_txt_castRoles").style.width, 10) !== width3) {
                bjf.$("#_playerUI_" + N + "_info_txt_name").style.width = width1 + "px";
                bjf.$("#_playerUI_" + N + "_info_txt_rate").style.width = width2 + "px";
                bjf.$("#_playerUI_" + N + "_info_txt_castRoles").style.width = width3 + "px";
            }

            if (typeof name !== "undefined" && name !== "" && name !== null) {
                bjf.$("#_playerUI_" + N + "_info_txt_name").innerHTML = name;
                bjf.$("#_playerUI_" + N + "_info_txt_name").style.opacity = 1;
            } else {
                bjf.$("#_playerUI_" + N + "_info_txt_name").style.opacity = 0;
            }

            if (typeof rate !== "undefined" && rate !== "" && rate !== null) {
                bjf.$("#_playerUI_" + N + "_info_txt_rate").innerHTML = rate;
                bjf.$("#_playerUI_" + N + "_info_txt_rate").style.opacity = 0.7;
            } else {
                bjf.$("#_playerUI_" + N + "_info_txt_rate").style.opacity = 0;
            }

            if (typeof castRoles !== "undefined" && castRoles !== "" && castRoles !== null) {
                bjf.$("#_playerUI_" + N + "_info_txt_castRoles").innerHTML = castRoles;
                bjf.$("#_playerUI_" + N + "_info_txt_castRoles").style.opacity = 1;
            } else {
                bjf.$("#_playerUI_" + N + "_info_txt_castRoles").style.opacity = 0;
            }

            bjf.$("#_playerUI_" + N + "_info_txt").style.opacity = 1;
        } catch (e) {
            bjf.debug("_playerUI.DISPLAY.prototype.infoTxtShow function error：" + e);
        }
    };

    _playerUI.DISPLAY.prototype.infoTxtHide = function () {
        try {
            var N = this.base.name;
            if (bjf.$("#_playerUI_" + N + "_info_txt") !== null) bjf.$("#_playerUI_" + N + "_info_txt").style.opacity = 0;
        } catch (e) {
            bjf.debug("_playerUI.DISPLAY.prototype.infoTxtHide function error：" + e);
        }
    };

    _playerUI.DISPLAY.prototype.infoSpeedShow = function (s_, b_, e_, c_) {
        try {
            if (this.base.barShowFlag !== "on" || this.base.UIShowFlag !== "on" || this.base.allUIShowFlag !== "on") return;

            var N = this.base.name;
            var barLength = this.speedBar.barLength;
            var width = this.area.w;
            var height = this.area.h;
            this.buildSpeedUI("info_speed");

            //bjf.$("#_playerUI_info_sTime").innerHTML = b_;
            bjf.$("#_playerUI_" + N + "_info_speed_eTime").innerHTML = e_;

            var bTime = _playerUI.timeCtrl.formatToS(b_);
            var eTime = _playerUI.timeCtrl.formatToS(e_);
            var cTime = _playerUI.timeCtrl.formatToS(c_);

            var arr = _playerUI.timeCtrl.getBEC(bTime, eTime, cTime);

            var curSpeedBarLength = parseInt((arr.bc * barLength) / arr.be, 10);

            if (curSpeedBarLength < 1) {
                curSpeedBarLength = 1;
            } else if (curSpeedBarLength >= barLength) {
                curSpeedBarLength = barLength;
            }

            bjf.$("#_playerUI_" + N + "_info_speed_bar").style.width = curSpeedBarLength + "px";
            bjf.$("#_playerUI_" + N + "_info_speed_cTime").innerHTML = arr.cTimeDis + " /";
            bjf.$("#_playerUI_" + N + "_info_speed").style.opacity = 1;
        } catch (e) {
            bjf.debug("_playerUI.DISPLAY.prototype.infoSpeedShow function error：" + e);
        }
    };

    _playerUI.DISPLAY.prototype.infoSpeedHide = function () {
        try {
            var N = this.base.name;
            if (bjf.$("#_playerUI_" + N + "_info_speed") !== null) bjf.$("#_playerUI_" + N + "_info_speed").style.opacity = 0;
        } catch (e) {
            bjf.debug("_playerUI.DISPLAY.prototype.infoSpeedHide function error：" + e);
        }
    };

    _playerUI.DISPLAY.prototype.buildSpeedUI = function (str) {
        try {
            var N = this.base.name;
            if (bjf.$("#_playerUI_" + N + "_" + str) !== null) return;

            var path = this.base.path;
            var barLength = this.speedBar.barLength;
            var left = this.speedBar.left;
            var width = this.area.w;
            var height = parseInt(300 / 720 * this.area.h, 10);
            var top = this.area.t + this.area.h - height;
            var iconW = parseInt(39 / 720 * this.area.h, 10);
            var iconH = iconW;
            var tipW = parseInt(206 / 720 * this.area.h, 10);
            var timeTop = parseInt(222 / 1080 * this.area.h, 10);
            var timeWidth = parseInt(200 / 1080 * this.area.h, 10);
            var timeSize = parseInt(36 / 1080 * this.area.h, 10);
            var CTLeft = iconW + parseInt(30 / 1080 * this.area.h, 10);
            var ETLeft = CTLeft + parseInt(180 / 1080 * this.area.h, 10);
            var iconT = timeTop - parseInt((iconH - timeSize) / 2, 10);
            var barT = iconT + iconH + parseInt(34 / 1080 * this.area.h, 10);
            //var tipT = barT + parseInt(33/1080*this.area.h,10);
            var numWidth = parseInt(110 / 720 * this.area.h, 10);
            var numLeft = parseInt((width - ETLeft - timeWidth - tipW - numWidth) / 2, 10) + ETLeft + timeWidth;
            var numSize = parseInt(22 / 720 * this.area.h, 10);

            var node_ = document.createElement("div");
            node_.id = "_playerUI_" + N + "_" + str + "_parent";
            node_.innerHTML = '<div id="_playerUI_' + N + '_' + str + '" style="z-index:99997; position:absolute; top:' + top + 'px; left:' + this.area.l + 'px; width:' + width + 'px; height:' + height + 'px; -webkit-transition-duration:0.3s;"><img src="' + path + 'playBar/playBar.png" style="position:absolute; top:0px; left:0px; width:' + width + 'px; height:' + height + 'px;"  /> <img id="_playerUI_' + N + '_' + str + '_icon" style="position: absolute; left:' + left + 'px; top:' + iconT + 'px; height:' + iconW + 'px; width:' + iconH + 'px;" src="' + path + 'playBar/play.png" /><div id="_playerUI_' + N + '_' + str + '_num" style="position: absolute; left:' + numLeft + 'px; top:' + timeTop + 'px; width:' + numWidth + 'px; font-size:' + numSize + 'px; color:#FFFFFF; height:' + numSize + 'px; line-height:' + numSize + 'px; text-align:center;"></div><div id="_playerUI_' + N + '_' + str + '_sTime" style="opacity:0; position: absolute; left:' + (left + 100) + 'px; top:' + timeTop + 'px; width:' + timeWidth + 'px; height:' + timeSize + 'px; color: #FFFFFF; font-size:' + timeSize + 'px; line-height:' + timeSize + 'px; text-align:left;">00:00:00</div>  <div id="_playerUI_' + N + '_' + str + '_eTime" style="position: absolute; left:' + (left + ETLeft) + 'px; top:' + timeTop + 'px; width:' + timeWidth + 'px; height:' + timeSize + 'px; color: #CCCCCC; font-size:' + timeSize + 'px; line-height:' + timeSize + 'px; text-align:left;" >00:00:00</div><div id="_playerUI_' + N + '_' + str + '_cTime" style="position: absolute; left:' + (left + CTLeft) + 'px; top:' + timeTop + 'px; width:' + timeWidth + 'px; height: 39px; color: #FFFFFF; font-weight:bold; font-size:' + timeSize + 'px; line-height:' + timeSize + 'px; text-align:left;">00:00:00</div>  <div id="_playerUI_' + N + '_' + str + '_progressBg" style="left:' + left + 'px; top:' + barT + 'px; width:' + barLength + 'px; height: 3px; position: absolute; background:rgba(255,255,255,0.3)"></div>  <div id="_playerUI_' + N + '_' + str + '_barWhite" style="left:' + left + 'px; top:' + barT + 'px; width: 0px; height: 3px; position: absolute; background:#FFFFFF;"></div> <div id="_playerUI_' + N + '_' + str + '_bar" style="left:' + left + 'px; top:' + barT + 'px; width: 0px; height: 3px; position: absolute; background:#00a0e9;"></div><img id="_playerUI_' + N + '_' + str + '_tip" style="position: absolute; top:' + timeTop + 'px; right:' + left + 'px; width:' + tipW + 'px;" src="' + this.info.tipPath + '" /></div>';
            document.body.appendChild(node_);
        } catch (e) {
            bjf.debug("_playerUI.DISPLAY.prototype.buildSpeedUI function error：" + e);
        }
    };

    _playerUI.DISPLAY.prototype.speedShow = function (b_, e_, c_, r_) { //显示快进快退进程条
        try {
            if (this.base.barShowFlag !== "on" || this.base.UIShowFlag !== "on" || this.base.allUIShowFlag !== "on") return;

            var N = this.base.name;
            var path = this.base.path;
            this.infoTxtShow(N);
            this.buildSpeedUI("speed");

            var ff = decodeURI("%e5%bf%ab%e8%bf%9b", "utf-8"); //快进			
            var fr = decodeURI("%e5%bf%ab%e9%80%80", "utf-8"); //快退
            this.speedRate = r_;
            var speedIcon = this.speedRate > 0 ? "ff.png" : "rew.png";
            var speedNum = this.speedRate > 0 ? ff : fr;
            bjf.$("#_playerUI_" + N + "_speed_num").style.opacity = 1;
            bjf.$("#_playerUI_" + N + "_speed_num").innerHTML = Math.abs(this.speedRate) + "X " + speedNum;
            bjf.$("#_playerUI_" + N + "_speed_icon").src = path + "playBar/" + speedIcon;
            bjf.$("#_playerUI_" + N + "_speed").style.opacity = 1;
            this.speedShowFlag = "true";
            this.speedBarTime(b_, e_);

            this.speedSetBarLength(b_, e_, c_, 0);
            var o = this;
            setTimeout(function () {
                if (o.speedTimer !== null) {
                    clearTimeout(o.speedTimer);
                    o.speedTimer = null;
                }
                o.speedSetBarLength(b_, e_, c_, r_);
            }, 1000);
        } catch (e) {
            bjf.debug("_playerUI.DISPLAY.prototype.speedShow function error：" + e);
        }
    };

    _playerUI.DISPLAY.prototype.speedBarTime = function (b_, e_) {
        try {
            var N = this.base.name;
            bjf.$("#_playerUI_" + N + "_speed_sTime").innerHTML = b_;
            bjf.$("#_playerUI_" + N + "_speed_eTime").innerHTML = e_;
        } catch (e) {
            bjf.debug("_playerUI.DISPLAY.prototype.speedBarTime function error：" + e);
        }
    };

    _playerUI.DISPLAY.prototype.speedSetBarLength = function (b_, e_, c_, r_) {
        try {
            var N = this.base.name;

            var barLength = this.speedBar.barLength;

            var bTime = _playerUI.timeCtrl.formatToS(b_);
            var eTime = _playerUI.timeCtrl.formatToS(e_);
            var cTime = _playerUI.timeCtrl.formatToS(c_) + r_ * 1;
            var arr = _playerUI.timeCtrl.getBEC(bTime, eTime, cTime);

            var curSpeedBarLength = parseInt((arr.bc * barLength) / arr.be, 10);

            if (curSpeedBarLength < 1) {
                curSpeedBarLength = 1;
            } else if (curSpeedBarLength >= barLength) {
                curSpeedBarLength = barLength;
            }

            if (this.speedJishu === 0) {
                var oldSpeedBarLength = curSpeedBarLength;
                this.speedJishu = 1;
            }

            bjf.$("#_playerUI_" + N + "_speed_bar").style.width = curSpeedBarLength + "px";
            bjf.$("#_playerUI_" + N + "_speed_barWhite").style.opacity = 0;
            bjf.$("#_playerUI_" + N + "_speed_cTime").innerHTML = arr.cTimeDis + " /";

            if (parseInt(r_, 10) !== 0) {
                var o = this;
                this.speedTimer = window.setTimeout(function () {
                    o.speedSetBarLength(b_, e_, arr.cTimeDis, r_);
                },
                    1000);
            }
        } catch (e) {
            bjf.debug("_playerUI.DISPLAY.prototype.speedSetBarLength function error：" + e);
        }
    };

    _playerUI.DISPLAY.prototype.speedShowHttp = function (b_, e_, c_, n_, r_, m_, t1_, t2_) { //显示快进快退进程条
        try {
            if (this.base.barShowFlag !== "on" || this.base.UIShowFlag !== "on" || this.base.allUIShowFlag !== "on") return;

            var N = this.base.name;
            var path = this.base.path;
            this.infoTxtShow(N);
            this.buildSpeedUI("speed");

            var ff = decodeURI("%e5%bf%ab%e8%bf%9b%e4%b8%ad", "utf-8"); //快进中			
            var fr = decodeURI("%e5%bf%ab%e9%80%80%e4%b8%ad", "utf-8"); //快退中
            var speedIcon = m_ === "FF" ? "ff.png" : "rew.png";
            var speedNum = m_ === "FF" ? ff : fr;
            bjf.$("#_playerUI_" + N + "_speed_icon").src = path + "playBar/" + speedIcon;
            bjf.$("#_playerUI_" + N + "_speed_num").style.opacity = 1;
            bjf.$("#_playerUI_" + N + "_speed_num").innerHTML = speedNum;
            bjf.$("#_playerUI_" + N + "_speed").style.opacity = 1;
            this.speedShowFlag = "true";
            this.speedBarTime(b_, e_);
            if (Math.abs(n_) === 1) {
                this.speedSetBarLengthHttp(b_, e_, c_, 0, r_, t1_, t2_);
                var o = this;
                setTimeout(function () {
                    o.speedSetBarLengthHttp(b_, e_, c_, n_, r_, t1_, t2_);
                },
                    100);
            } else this.speedSetBarLengthHttp(b_, e_, c_, n_, r_, t1_, t2_);
        } catch (e) {
            bjf.debug("_playerUI.DISPLAY.prototype.speedShowHttp function error：" + e);
        }
    };

    _playerUI.DISPLAY.prototype.speedSetBarLengthHttp = function (b_, e_, c_, n_, r_, t1_, t2_) {
        try {
            var N = this.base.name;

            var barLength = this.speedBar.barLength;

            var bTime = _playerUI.timeCtrl.formatToS(b_);
            var eTime = _playerUI.timeCtrl.formatToS(e_);
            var ccTime = _playerUI.timeCtrl.formatToS(c_);
            var t = 0;
            if (n_ === 1 || n_ === -1) t = n_ * t1_;
            else if (n_ > 0) t = n_ * t2_ - t1_;
            else if (n_ < 0) t = n_ * t2_ + t1_;
            else t = 0;
            var cTime = _playerUI.timeCtrl.formatToS(c_) + t;
            var cTimeDis = _playerUI.timeCtrl.formatToT(cTime);

            var arr = _playerUI.timeCtrl.getBEC(bTime, eTime, cTime);
            var arr2 = _playerUI.timeCtrl.getBEC(bTime, eTime, ccTime);

            var curSpeedBarLength = parseInt((arr.bc * barLength) / arr.be, 10);
            var oldSpeedBarLength = parseInt((arr2.bc * barLength) / arr2.be, 10);

            if (curSpeedBarLength < 1) {
                curSpeedBarLength = 1;
            } else if (curSpeedBarLength >= barLength) {
                curSpeedBarLength = barLength;
            }

            if (oldSpeedBarLength < curSpeedBarLength) {
                bjf.$("#_playerUI_" + N + "_speed_bar").style.width = oldSpeedBarLength + "px";
                bjf.$("#_playerUI_" + N + "_speed_barWhite").style.width = curSpeedBarLength + "px";
            } else {
                bjf.$("#_playerUI_" + N + "_speed_bar").style.width = curSpeedBarLength + "px";
                bjf.$("#_playerUI_" + N + "_speed_barWhite").style.width = curSpeedBarLength + "px";
            }
            bjf.$("#_playerUI_" + N + "_speed_barWhite").style.opacity = 1;
            bjf.$("#_playerUI_" + N + "_speed_cTime").innerHTML = arr.cTimeDis + " /";
        } catch (e) {
            bjf.debug("_playerUI.DISPLAY.prototype.speedSetBarLengthHttp function error：" + e);
        }
    };

    _playerUI.DISPLAY.prototype.speedHide = function () {
        try {
            var N = this.base.name;
            if (bjf.$("#_playerUI_" + N + "_speed") === null) return;
            if (this.speedShowFlag === "false") return;
            if (this.speedTimer !== null) {
                clearTimeout(this.speedTimer);
                this.speedTimer = null;
            }
            bjf.$("#_playerUI_" + N + "_speed_bar").style.width = parseInt(bjf.$("#_playerUI_" + N + "_speed_barWhite").style.width, 10) + "px";
            var o = this;
            setTimeout(function () {
                bjf.$("#_playerUI_" + N + "_speed").style.opacity = 0;
                o.speedShowFlag = "false";
                o.infoTxtHide(N);
            },
                200);
        } catch (e) {
            bjf.debug("_playerUI.DISPLAY.prototype.speedHidep function error：" + e);
        }
    };

    _playerUI.DISPLAY.prototype.TSShow = function () {
        try {
            if (this.base.TSUIShowFlag !== "on" || this.base.UIShowFlag !== "on" || this.base.allUIShowFlag !== "on") return;
            var N = this.base.name;
            if (bjf.$("#_playerUI_" + N + "_timeShift") === null) {
                var node_ = document.createElement("div");
                node_.id = "_playerUI_" + N + "_timeShift_parent";
                var path = this.base.path;
                var w = parseInt(45 / 720 * this.area.h, 10);
                var h = parseInt(78 / 720 * this.area.h, 10);
                var offset = parseInt(32 / 720 * this.area.h, 10);
                var left = this.area.l + this.area.w - this.speedBar.left - w - 20;
                var top = this.area.t + offset;
                node_.innerHTML = '<img id="_playerUI_' + N + '_timeShift" style="position: absolute; left:' + left + 'px; top: ' + top + 'px; height:' + h + 'px; width:' + w + 'px; z-index:99997;" src="' + path + 'timeShift.png"></div>';
                document.body.appendChild(node_);
            } else bjf.$("#_playerUI_" + N + "_timeShift").style.opacity = 1;
        } catch (e) {
            bjf.debug("_playerUI.DISPLAY.prototype.TSShow function error：" + e);
        }
    };

    _playerUI.DISPLAY.prototype.TSHide = function () {
        try {
            var N = this.base.name;
            if (bjf.$("#_playerUI_" + N + "_timeShift") !== null) bjf.$("#_playerUI_" + N + "_timeShift").style.opacity = 0;
        } catch (e) {
            bjf.debug("_playerUI.DISPLAY.prototype.TSHide function error：" + e);
        }
    };

    _playerUI.DISPLAY.prototype.TvodShow = function () {
        try {
            if (this.base.TvodUIShowFlag !== "on" || this.base.UIShowFlag !== "on" || this.base.allUIShowFlag !== "on") return;
            var N = this.base.name;
            if (bjf.$("#_playerUI_" + N + "_tvod") === null) {
                var node_ = document.createElement("div");
                node_.id = "_playerUI_" + N + "_tvod_parent";
                var path = this.base.path;
                var w = parseInt(45 / 720 * this.area.h, 10);
                var h = parseInt(78 / 720 * this.area.h, 10);
                var offset = parseInt(32 / 720 * this.area.h, 10);
                var left = this.area.l + this.area.w - this.speedBar.left - w - 20;
                var top = this.area.t + offset;
                node_.innerHTML = '<img id="_playerUI_' + N + '_tvod" style="position: absolute; left:' + left + 'px; top: ' + top + 'px; height:' + h + 'px; width:' + w + 'px; z-index:99997;" src="' + path + 'tvod.png"></div>';
                document.body.appendChild(node_);
            } else bjf.$("#_playerUI_" + N + "_tvod").style.opacity = 1;
        } catch (e) {
            bjf.debug("_playerUI.DISPLAY.prototype.TvodShow function error：" + e);
        }
    };

    _playerUI.DISPLAY.prototype.TvodHide = function () {
        try {
            var N = this.base.name;
            if (bjf.$("#_playerUI_" + N + "_tvod") !== null) bjf.$("#_playerUI_" + N + "_tvod").style.opacity = 0;
        } catch (e) {
            bjf.debug("_playerUI.DISPLAY.prototype.TvodHide function error：" + e);
        }
    };

    _playerUI.DISPLAY.prototype.errorShow = function (str_) {
        try {
            var N = this.base.name;
            if (this.base.errorShowFlag !== "on" || this.base.UIShowFlag !== "on" || this.base.allUIShowFlag !== "on") return;
            if (bjf.$("#_playerUI_" + N + "_error") === null) {
                var node_ = document.createElement("div");
                node_.id = "_playerUI_" + N + "_error_parent";
                var top = parseInt(this.area.h - 70, 10);
                var w = this.area.w;
                node_.innerHTML = '<div id="_playerUI_' + N + '_error" style="position:absolute; left:' + this.area.l + 'px; top:' + top + 'px; width:' + w + 'px; height:50px; line-height:50px; color:#FFFFFF; font-size:28px; text-align:center; -webkit-transition-duration:0.3s; -moz-transition-duration:0.3s; z-index:99997;" >' + str_ + '</div>';
                document.body.appendChild(node_);
            } else {
                bjf.$("#_playerUI_" + N + "_error").innerHTML = str_;
            }
            bjf.$("#_playerUI_" + N + "_error").style.opacity = 1;
            setTimeout(function () {
                _playerUI.errorHide();
            }, 5000);
        } catch (e) {
            bjf.debug("_playerUI.DISPLAY.prototype.errorShow function error：" + e);
        }
    };

    _playerUI.DISPLAY.prototype.errorHide = function () {
        try {
            var N = this.base.name;
            if (bjf.$("#_playerUI_" + N + "_error") !== null) bjf.$("#_playerUI_" + N + "_error").style.opacity = 0;
        } catch (e) {
            bjf.debug("_playerUI.DISPLAY.prototype.errorHide function error：" + e);
        }
    };

    _playerUI.DISPLAY.prototype.pauseShow = function (b_, e_, c_) {
        try {
            if (this.base.barShowFlag !== "on" || this.base.UIShowFlag !== "on" || this.base.allUIShowFlag !== "on") return;

            var N = this.base.name;
            var path = this.base.path;
            var barLength = this.speedBar.barLength;
            this.infoTxtShow(N);
            this.buildSpeedUI("pause");

            var p = decodeURI("%e6%9a%82%e5%81%9c%e4%b8%ad", "utf-8"); //暂停中
            bjf.$("#_playerUI_" + N + "_pause_num").style.opacity = 1;
            bjf.$("#_playerUI_" + N + "_pause_num").innerHTML = p;
            bjf.$("#_playerUI_" + N + "_pause_icon").src = path + "playBar/pause.png";
            bjf.$("#_playerUI_" + N + "_pause_sTime").innerHTML = b_;
            bjf.$("#_playerUI_" + N + "_pause_eTime").innerHTML = e_;

            var bTime = _playerUI.timeCtrl.formatToS(b_);
            var eTime = _playerUI.timeCtrl.formatToS(e_);
            var cTime = _playerUI.timeCtrl.formatToS(c_);

            var arr = _playerUI.timeCtrl.getBEC(bTime, eTime, cTime);

            var curSpeedBarLength = parseInt((arr.bc * barLength) / arr.be, 10);

            if (curSpeedBarLength < 1) {
                curSpeedBarLength = 1;
            } else if (curSpeedBarLength >= barLength) {
                curSpeedBarLength = barLength;
            }

            bjf.$("#_playerUI_" + N + "_pause_bar").style.width = curSpeedBarLength + "px";
            bjf.$("#_playerUI_" + N + "_pause_cTime").innerHTML = arr.cTimeDis + " /";
            bjf.$("#_playerUI_" + N + "_pause").style.opacity = 1;
            this.pauseShowFlag = "true";
        } catch (e) {
            bjf.debug("_playerUI.DISPLAY.prototype.pauseShow function error：" + e);
        }
    };

    _playerUI.DISPLAY.prototype.pauseHide = function () {
        try {
            var N = this.base.name;
            if (bjf.$("#_playerUI_" + N + "_pause") === null) return;
            if (this.pauseShowFlag === "false") return;
            bjf.$("#_playerUI_" + N + "_pause").style.opacity = 0;
            this.pauseShowFlag = "false";
            this.infoTxtHide(N);
        } catch (e) {
            bjf.debug("_playerUI.DISPLAY.prototype.pauseHide function error：" + e);
        }
    };

    _playerUI.DISPLAY.prototype.volShow = function (v) { //音量UI显示
        try {
            if (this.base.volUIShowFlag !== "on" || this.base.allUIShowFlag !== "on") return;

            var N = this.base.name;

            clearTimeout(this.volHideTimer);
            this.volHideTimer = null;

            this.muteHide();
            if (this.base.volUIShowStyle === "round") {
                var volWidth = 228;
                if (bjf.$("#_playerUI_" + N + "_volume") === null) {
                    var node_ = document.createElement("div");
                    node_.id = "_playerUI_" + N + "_volume_parent";
                    var path = this.base.path;
                    var volHeight = 228;
                    var top = this.page.t + parseInt((this.page.h - volHeight) / 2, 10);
                    var left = this.page.l + parseInt((this.page.w - volWidth) / 2, 10);
                    node_.innerHTML = '<div id="_playerUI_' + N + '_volume" style="position: absolute; left:' + left + 'px; top:' + top + 'px; width:' + volWidth + 'px; height:' + volHeight + 'px; z-index: 99997; background:url(' + path + 'volume/vol.png) 0px 0px;"></div>';
                    document.body.appendChild(node_);
                }

                var _v = bjf.$("#_playerUI_" + N + "_volume");
                _v.style.opacity = 1;

                v = v > 100 ? 100 : v;
                v = v < 0 ? 0 : v;

                if (0 == v) {
                    _v.style.backgroundPosition = '0px 0px';
                } else if (100 == v) {
                    _v.style.backgroundPosition = '-' + 10 * volWidth + 'px 0px';
                } else {
                    var n = Math.ceil(v / 10);
                    _v.style.backgroundPosition = '-' + n * volWidth + 'px 0px';
                }

            } else if (this.base.volUIShowStyle === "line") {
                var volWidth = 228;
                if (bjf.$("#_playerUI_" + N + "_volume_line") === null) {
                    var node_ = document.createElement("div");
                    node_.id = "_playerUI_" + N + "_volume_line_parent";
                    var path = this.base.path;
                    var volWidth = parseInt(690 / 1280 * this.page.w);
                    var volHeight = parseInt(76 / 720 * this.page.h);
                    var top = this.page.t + this.page.h - volHeight;
                    var left = this.page.l + parseInt((this.page.w - volWidth) / 2, 10);
                    var barLeft = parseInt(94 / 1280 * this.page.w);
                    var barTop = parseInt(33 / 1280 * this.page.w);
                    var barHeight = parseInt(9 / 1280 * this.page.w);

                    var numLeft = parseInt(615 / 1280 * this.page.w);
                    var numTop = parseInt(20 / 1280 * this.page.w);
                    var numW = parseInt(60 / 1280 * this.page.w);
                    var numH = parseInt(40 / 1280 * this.page.w);
                    var numFont = parseInt(28 / 1280 * this.page.w);
                    node_.innerHTML = '<div id="_playerUI_' + N + '_volume_line" style="position: absolute; left:' + left + 'px; top:' + top + 'px; width:' + volWidth + 'px; height:' + volHeight + 'px; z-index: 99998;"><img width="' + volWidth + '" height="' + volHeight + '" src="' + path + 'volume/volBg.png" style="position: absolute; left:0px; top:0px" /><div id="_playerUI_' + N + '_volume_line_bar" style="position: absolute; left:' + barLeft + 'px; top:' + barTop + 'px; width:0px; height:' + barHeight + 'px; background:#007eff;"></div><div id="_playerUI_' + N + '_volume_line_num" style="position: absolute; left:' + numLeft + 'px; top:' + numTop + 'px; width:' + numW + 'px; height:' + numH + 'px; line-height:' + numH + 'px; font-size:' + numFont + 'px; color:#FFFFFF; text-align:center;"></div></div>';
                    document.body.appendChild(node_);
                }

                v = v > 100 ? 100 : v;
                v = v < 0 ? 0 : v;

                var barLength = parseInt(497 / 1280 * this.page.w);

                var w = parseInt(v / 100 * barLength, 10);

                bjf.$("#_playerUI_" + N + "_volume_line_bar").style.width = w + "px";
                bjf.$("#_playerUI_" + N + "_volume_line_num").innerHTML = v;
                bjf.$("#_playerUI_" + N + "_volume_line").style.opacity = 1;
            }
            var o = this;
            this.volHideTimer = setTimeout(function () {
                o.volHideTimer = null;
                o.volHide();
            }, 3000);
        } catch (e) {
            bjf.debug("_playerUI.DISPLAY.prototype.volShow function error：" + e);
        }
    };

    _playerUI.DISPLAY.prototype.volHide = function () {
        try {
            var N = this.base.name;
            if (this.base.volUIShowStyle === "round") {
                if (bjf.$("#_playerUI_" + N + "_volume") !== null) bjf.$("#_playerUI_" + N + "_volume").style.opacity = 0;
            } else if (this.base.volUIShowStyle === "line") {
                if (bjf.$("#_playerUI_" + N + "_volume") !== null) bjf.$("#_playerUI_" + N + "_volume_line").style.opacity = 0;
            }
        } catch (e) {
            bjf.debug("_playerUI.DISPLAY.prototype.volHide function error：" + e);
        }
    };

    _playerUI.DISPLAY.prototype.muteShow = function () {
        try {
            if (this.base.volUIShowStyle === "round") {
                if (this.base.volUIShowFlag !== "on" || this.base.allUIShowFlag !== "on") {
                    return;
                }
                if (this.muteShowFlag === "true") {
                    return;
                }
                this.muteShowFlag = "true";

                clearTimeout(this.muteShowTimer);
                this.muteShowTimer = null;

                var N = this.base.name;
                if (bjf.$("#_playerUI_" + N + "_mute_big") !== null) {
                    bjf.$("#_playerUI_" + N + "_mute_big").style.opacity = 1;
                } else {
                    var node_ = document.createElement("div");
                    node_.id = "_playerUI_" + N + "_mute_parent";
                    var path = this.base.path;
                    var muteWidth = 228;
                    var muteHeight = 228;
                    var mW = 88;
                    var mH = 88;
                    var top = this.page.t + parseInt((this.page.h - muteHeight) / 2, 10);
                    var left = this.page.l + parseInt((this.page.w - muteWidth) / 2, 10);
                    var top2 = this.page.t + 20;
                    var left2 = this.page.l + this.page.w - mW;
                    node_.innerHTML = '<div id="_playerUI_' + N + '_mute_big" style="position: absolute; left:' + left + 'px; top:' + top + 'px; width:' + muteWidth + 'px; height:' + muteHeight + 'px; background: url(' + path + 'volume/vol.png) -' + muteWidth * 11 + 'px 0px no-repeat; z-index:99997;"></div><div id="_playerUI_' + N + '_mute_small" style="position: absolute; left:' + left2 + 'px; top:' + top2 + 'px; width:' + mW + 'px; height:' + mH + 'px; background: url(' + path + 'volume/muteSmall.png) no-repeat; z-index:99997;"></div>';
                    document.body.appendChild(node_);
                }
                bjf.$("#_playerUI_" + N + "_mute_big").style.opacity = 1;
                bjf.$("#_playerUI_" + N + "_mute_small").style.opacity = 0;

                var o = this;
                this.muteShowTimer = setTimeout(function () {
                    o.muteShowTimer = null;
                    o.muteBigHide();
                    o.muteSmallShow();
                },
                    1500);

            } else if (this.base.volUIShowStyle === "line") {
                if (this.base.volUIShowFlag !== "on" || this.base.allUIShowFlag !== "on") return;
                if (this.muteShowFlag === "true") return;
                this.muteShowFlag = "true";

                var N = this.base.name;

                if (bjf.$("#_playerUI_" + N + "_mute") === null) {
                    var node_ = document.createElement("div");
                    node_.id = "_playerUI_" + N + "_mute_parent";
                    var path = this.base.path;
                    var muteWidth = parseInt(78 / 1280 * this.page.w);;
                    var muteHeight = muteWidth;
                    var top = this.page.t + this.page.h - muteHeight - 20;
                    var left = this.page.l + this.page.w - muteWidth - 20;
                    node_.innerHTML = '<img id="_playerUI_' + N + '_mute" style="position: absolute; left:' + left + 'px; top:' + top + 'px; width:' + muteWidth + 'px; height:' + muteHeight + 'px;z-index:99998;" src="' + path + 'volume/muteIcon.png" />';
                    document.body.appendChild(node_);
                }
                bjf.$("#_playerUI_" + N + "_mute").style.opacity = 1;
            }
        } catch (e) {
            bjf.debug("_playerUI.DISPLAY.prototype.muteShow function error：" + e);
        }
    };

    _playerUI.DISPLAY.prototype.muteSmallShow = function () {
        var N = this.base.name;
        if (bjf.$("#_playerUI_" + N + "_mute_small") !== null) {
            bjf.$("#_playerUI_" + N + "_mute_small").style.opacity = 1;
        }
    };
    _playerUI.DISPLAY.prototype.muteSmallHide = function () {
        var N = this.base.name;
        if (bjf.$("#_playerUI_" + N + "_mute_small") !== null) {
            bjf.$("#_playerUI_" + N + "_mute_small").style.opacity = 0;
        }
    };
    _playerUI.DISPLAY.prototype.muteBigShow = function () {
        var N = this.base.name;
        if (bjf.$("#_playerUI_" + N + "_mute_big") !== null) {
            bjf.$("#_playerUI_" + N + "_mute_big").style.opacity = 1;
        }
    };
    _playerUI.DISPLAY.prototype.muteBigHide = function () {
        var N = this.base.name;
        if (bjf.$("#_playerUI_" + N + "_mute_big") !== null) {
            bjf.$("#_playerUI_" + N + "_mute_big").style.opacity = 0;
        }
    };

    _playerUI.DISPLAY.prototype.muteHide = function () {
        try {
            if (this.muteShowFlag === "false") return;
            this.muteShowFlag = "false";
            if (this.base.volUIShowStyle === "round") {
                clearTimeout(this.muteShowTimer);
                this.muteShowTimer = null;
                this.muteSmallHide();
                this.muteBigHide();
            } else if (this.base.volUIShowStyle === "line") {
                var N = this.base.name;
                if (bjf.$("#_playerUI_" + N + "_mute") !== null) bjf.$("#_playerUI_" + N + "_mute").style.opacity = 0;
            }
        } catch (e) {
            bjf.debug("_playerUI.DISPLAY.prototype.muteHide function error：" + e);
        }
    };

    _playerUI.DISPLAY.prototype.loadTxtShow = function () {
        try {
            var N = this.base.name;
            if (this.base.loadShowFlag !== "on" || this.base.loadTxtShowFlag !== "on" || this.base.UIShowFlag !== "on" || this.base.allUIShowFlag !== "on") return;

            if (bjf.$("#_playerUI_" + N + "_loadTxt") === null) {
                var node_ = document.createElement("div");
                node_.id = "_playerUI_" + N + "_loadTxt_parent";
                var width = this.area.w;
                var height = this.area.h;
                var left = this.area.l;
                var top = this.area.t;
                var size1 = parseInt(32 / 1080 * this.area.h, 10);
                var size2 = parseInt(32 / 1080 * this.area.h, 10);
                var height_loadImg = 40;
                var top1 = parseInt(height / 2 - height_loadImg / 2 - size1 - 5, 10);
                var top2 = parseInt(height / 2 + height_loadImg / 2 + 2, 10);
                var txt = decodeURI("%E5%8D%B3%E5%B0%86%E6%92%AD%E6%94%BE", "utf-8"); //即将播放

                node_.innerHTML = '<div id="_playerUI_' + N + '_loadTxt" style="position:absolute; z-index:99997; left:' + left + 'px; top:' + top + 'px; width:' + width + 'px; height:' + height + 'px; -webkit-transition-duration:0.3s; -moz-transition-duration:0.3s;"><div style="position:absolute; left:0px; top:' + top1 + 'px; width:' + width + 'px; height:' + size1 + 'px; line-height:' + size1 + 'px; color:#FFFFFF; font-size:' + size1 + 'px; text-align:center;">' + txt + '</div><div id="_playerUI_' + N + '_loadTxt_name" style="position:absolute; left:0px; top:' + top2 + 'px; width:' + width + 'px; height:' + size2 + 'px; line-height:' + size2 + 'px; color:#FFFFFF; font-size:' + size2 + 'px; text-align:center;"></div></div>';
                document.body.appendChild(node_);
            }

            bjf.$("#_playerUI_" + N + "_loadTxt").style.opacity = 1;
            bjf.$("#_playerUI_" + N + "_loadTxt_name").innerHTML = this.info.title.name;
        } catch (e) {
            bjf.debug("_playerUI.DISPLAY.prototype.loadTxtShow function error：" + e);
        }
    };

    _playerUI.DISPLAY.prototype.loadTxtHide = function () {
        var N = this.base.name;
        if (bjf.$("#_playerUI_" + N + "_loadTxt") === null) return;
        bjf.$("#_playerUI_" + N + "_loadTxt").style.opacity = 0;
    };

    _playerUI.DISPLAY.prototype.loadImgShow = function () {
        try {
            var N = this.base.name;
            if (this.base.loadShowFlag !== "on" || this.base.loadImgShowFlag !== "on" || this.base.UIShowFlag !== "on" || this.base.allUIShowFlag !== "on") return;

            if (bjf.$("#_playerUI_" + N + "_loadImgOuter") === null) {
                var node_ = document.createElement("div");
                node_.id = "_playerUI_" + N + "_loadImg_parent";
                var width = this.area.w;
                var height = this.area.h;
                var left = this.area.l;
                var top = this.area.t;
                var height_loadImg = 40;
                var top_loadImg = parseInt(height / 2 - height_loadImg / 2, 10);

                node_.innerHTML = '<div id="_playerUI_' + N + '_loadImgOuter" style="position:absolute; z-index:99997; left:' + left + 'px; top:' + top + 'px; width:' + width + 'px; height:' + height + 'px; -webkit-transition-duration:0.3s; -moz-transition-duration:0.3s;"><div id="_playerUI_' + N + '_loadImg" style="position:absolute; left:0px; top:' + top_loadImg + 'px; width:' + width + 'px; height:' + height_loadImg + 'px; background:center center no-repeat;"></div></div>';
                document.body.appendChild(node_);
            }

            bjf.$("#_playerUI_" + N + "_loadImg").style.backgroundImage = 'url(' + this.base.path + 'loading.gif)';
            bjf.$("#_playerUI_" + N + "_loadImgOuter").style.opacity = 1;
        } catch (e) {
            bjf.debug("_playerUI.DISPLAY.prototype.loadImgShow function error：" + e);
        }
    };

    _playerUI.DISPLAY.prototype.loadImgHide = function () {
        var N = this.base.name;
        if (bjf.$("#_playerUI_" + N + "_loadImgOuter") === null) return;
        //福建B860盒子，动图gif图必须置空
        bjf.$("#_playerUI_" + N + "_loadImg").style.backgroundImage = '';
        bjf.$("#_playerUI_" + N + "_loadImgOuter").style.opacity = 0;
    };

    _playerUI.DISPLAY.prototype.audioChannelShow = function (ch_) {
        try {
            if (this.base.volUIShowFlag !== "on" || this.base.allUIShowFlag !== "on") return;
            var N = this.base.name;
            var audioChannel = "";
            if (ch_ === "Left") audioChannel = "L-CH"; //左声道
            else if (ch_ === "Right") audioChannel = "R-CH"; //右声道
            else if (ch_ === "Stereo") audioChannel = "Stereo"; //立体声
            else if (ch_ === "JointStereo") audioChannel = "Joint Stereo"; //联合立体声
            if (audioChannel === "") return;

            if (bjf.$("#_playerUI_" + N + "_audio") === null) {
                var node_ = document.createElement("div");
                node_.id = "_playerUI_" + N + "_audio_parent";
                var left = this.area.l + this.area.w - 450;
                var top = this.area.t + 100;
                var size = parseInt(40 / 1080 * this.area.h, 10);
                node_.innerHTML = '<div id="_playerUI_' + N + '_audio" style="position:absolute; z-index:99997; left:' + left + 'px; top:' + top + 'px; height:' + size + 'px; line-height:' + size + 'px; width:350px; color:#00AC0C; font-size:' + size + 'px; text-align:right; overflow:hidden; -webkit-transition-duration:1s; "></div>';
                document.body.appendChild(node_);
            } else bjf.$("#_playerUI_" + N + "_audio").style.opacity = 1;

            bjf.$("#_playerUI_" + N + "_audio").innerHTML = audioChannel;

            if (_playerUI.win[N].audioChannelShowTimer !== null) clearTimeout(_playerUI.win[N].audioChannelShowTimer);
            var o = this;
            _playerUI.win[N].audioChannelShowTimer = setTimeout(function () {
                o.audioChannelHide();
                _playerUI.win[N].audioChannelShowTimer = null;
            }, 5000);
        } catch (e) {
            bjf.debug("_playerUI.DISPLAY.prototype.audioChannelShow function error：" + e);
        }
    };

    _playerUI.DISPLAY.prototype.audioChannelHide = function () {
        var N = this.base.name;
        if (bjf.$("#_playerUI_" + N + "_audio") !== null) bjf.$("#_playerUI_" + N + "_audio").style.opacity = 0;
    };

    _playerUI.DISPLAY.prototype.clearUI = function () {
        try {
            var N = this.base.name;
            this.info.showFlag = "false";
            this.pauseShowFlag = "false";
            this.muteShowFlag = "false";
            this.speedShowFlag = "false";
            _playerUI.remove("_playerUI_" + N + "_info_txt_parent");
            _playerUI.remove("_playerUI_" + N + "_info_speed_parent");
            _playerUI.remove("_playerUI_" + N + "_speed_parent");
            _playerUI.remove("_playerUI_" + N + "_pause_parent");
            _playerUI.remove("_playerUI_" + N + "_timeShift_parent");
            _playerUI.remove("_playerUI_" + N + "_error_parent");
            _playerUI.remove("_playerUI_" + N + "_volume_parent");
            _playerUI.remove("_playerUI_" + N + "_mute_parent");
            _playerUI.remove("_playerUI_" + N + "_loadTxt_parent");
            _playerUI.remove("_playerUI_" + N + "_loadImg_parent");
            _playerUI.remove("_playerUI_" + N + "_audio_parent");
        } catch (e) {
            bjf.debug("_playerUI.DISPLAY.prototype.clearUI function error：" + e);
        }
    };

    _playerUI.winExistByName = function (N) {
        try {
            if (N === "undefined" || typeof N === null || typeof N === "") return "N";
            for (var i in _playerUI.win) {
                if (_playerUI.win[i].display.base.name === N) {
                    return "Y"
                }
            }
            return "N";
        } catch (e) {
            bjf.debug("_playerUI.winExistByName function error：" + e);
        }
    };

    _playerUI.timeCtrl = {};

    _playerUI.timeCtrl.formatToS = function (t_) { //00:00:00 ->  s
        try {
            var arr_ = t_.split(":");
            var s_ = parseInt(arr_[0], 10) * 3600 + parseInt(arr_[1], 10) * 60 + parseInt(arr_[2], 10);
            return s_;
        } catch (e) {
            bjf.debug("_playerUI.timeCtrl.formatToS function error：" + e);
        }
    }

    _playerUI.timeCtrl.formatToT = function (s_) { //秒 -> 00:00:00
        try {
            if (s_ > 86399) s_ = s_ - 86400;
            else if (s_ < 0) s_ = 86400 + s_;
            var hours = parseInt(s_ / 3600, 10);
            var minutes = parseInt((s_ - hours * 3600) / 60, 10);
            var seconds = parseInt(s_ % 60, 10);
            var temp = _playerUI.timeCtrl.pad(hours, 2) + ":" + _playerUI.timeCtrl.pad(minutes, 2) + ":" + _playerUI.timeCtrl.pad(seconds, 2);
            return temp;
        } catch (e) {
            bjf.debug("_playerUI.timeCtrl.formatToT function error：" + e);
        }
    };

    _playerUI.timeCtrl.pad = function (num, n) {
        try {
            var len = num.toString().length;
            for (var i = 0; i < n; i++) {
                if (len < n) {
                    num = "0" + num;
                    len++;
                }
            }
            return num;
        } catch (e) {
            bjf.debug("_playerUI.timeCtrl.pad function error：" + e);
        }
    };

    _playerUI.timeCtrl.getBEC = function (bTime, eTime, cTime) { //秒	
        try {
            var be = 0;
            var bc = 0;
            var cTimeDis = "";
            var isOut = "N";
            if (2 < arguments.length) {
                if (bTime > eTime) { //跨0点
                    be = eTime + 24 * 3600 - bTime;
                    if (bTime > cTime && cTime > eTime && cTime > 12 * 3600) { //在bTime左边
                        cTime = bTime;
                        isOut = "Y";
                    } else if (bTime > cTime && cTime > eTime && cTime < 12 * 3600) { //在eTime右边
                        cTime = eTime;
                        isOut = "Y";
                    } else if (bTime > cTime && cTime <= eTime && cTime < 12 * 3600) { //0点后
                        bc = cTime + 24 * 3600 - bTime;
                    } else { //0点前
                        bc = cTime - bTime;
                    }
                } else {
                    if (cTime > eTime) { //播放时间晚于结束时间
                        cTime = eTime;
                        isOut = "Y";
                    } else if (cTime < bTime) { //播放时间早于开始时间
                        cTime = bTime;
                        isOut = "Y";
                    }
                    be = eTime - bTime;
                    bc = cTime - bTime;
                }
                cTimeDis = _playerUI.timeCtrl.formatToT(cTime);
            } else {
                if (bTime > eTime) { //跨0点
                    be = eTime + 24 * 3600 - bTime;
                } else {
                    be = eTime - bTime;
                }
            }
            var arr = {
                "be": be,
                "bc": bc,
                "cTimeDis": cTimeDis,
                "isOut": isOut,
            };
            return arr;
        } catch (e) {
            bjf.debug("_playerUI.timeCtrl.getBEC function error：" + e);
        }
    };

    _playerUI.tool = {};

    _playerUI.tool.getLength = function (str) {
        try {
            ///获得字符串实际长度，中文2，英文1
            ///要获得长度的字符串
            //str=str.replace(/<(?:.|\s)*?>/g,"");//?去掉<>
            var realLength = 0,
                len = str.length,
                charCode = -1;
            for (var i = 0; i < len; i++) {
                charCode = str.charCodeAt(i);
                if (charCode >= 0 && charCode <= 128) realLength += 1;
                else realLength += 2;
            }
            return realLength;
        } catch (e) {
            bjf.debug("_playerUI.tool.getLength function error：" + e);
        }
    };
    /*
	_playerUI.tool.getSize = function(str,n){
		///获得字符串实际长度，中文2，英文1
		var realLength = 0, len = str.length, charCode = -1, realSize = 0;
		for (var i = 0; i < len; i++) {
			if( realLength < n ){
			  charCode = str.charCodeAt(i);
			  if (charCode >= 0 && charCode <= 128) realLength += 1;
			  else realLength += 2;
			  realSize ++;
			} 
		}
		if( realLength === (n+1) ){ //第15个字节后是一个2个字节的字符
				realSize --;
			}
		return realSize;
	};
    */
    _playerUI.tool.isEmpty = function (s) {
        if (typeof s === "undefined" || s === "undefined" || s === null || s === 'null' || s === "" || s.length < 1) {
            return true;
        } else {
            return false;
        }
    };

    _playerUI.remove = function (id) {
        var thisNode = bjf.$("#" + id);
        if (thisNode === null) return;
        thisNode.parentNode.removeChild(thisNode);
    };

    w_.bjf.playerUI.errorShow = function (s_, N) {
        if (_playerUI.winExistByName(N) === "N") return;
        _playerUI.win[N].display.errorShow(s_);
    };

    w_.bjf.playerUI.errorHide = function (N) {
        if (_playerUI.winExistByName(N) === "N") return;
        _playerUI.win[N].display.errorHide();
    };

    w_.bjf.playerUI.volShow = function (v, N) {
        if (_playerUI.winExistByName(N) === "N") return;
        _playerUI.win[N].display.volShow(v);
    };

    w_.bjf.playerUI.volHide = function (N) {
        if (_playerUI.winExistByName(N) === "N") return;
        _playerUI.win[N].display.volHide();
    };

    w_.bjf.playerUI.muteShow = function (N) {
        if (_playerUI.winExistByName(N) === "N") return;
        _playerUI.win[N].display.muteShow();
    };

    w_.bjf.playerUI.muteHide = function (N) {
        if (_playerUI.winExistByName(N) === "N") return;
        _playerUI.win[N].display.muteHide();
    };

    w_.bjf.playerUI.TSShow = function (N) {
        if (_playerUI.winExistByName(N) === "N") return;
        _playerUI.win[N].display.TSShow();
    };

    w_.bjf.playerUI.TSHide = function (N) {
        if (_playerUI.winExistByName(N) === "N") return;
        _playerUI.win[N].display.TSHide();
    };

    w_.bjf.playerUI.TvodShow = function (N) {
        if (_playerUI.winExistByName(N) === "N") return;
        _playerUI.win[N].display.TvodShow();
    };

    w_.bjf.playerUI.TvodHide = function (N) {
        if (_playerUI.winExistByName(N) === "N") return;
        _playerUI.win[N].display.TvodHide();
    };

    w_.bjf.playerUI.infoShow = function (s_, b_, e_, c_, N) {
        if (_playerUI.winExistByName(N) === "N") return;
        _playerUI.win[N].display.infoShow(s_, b_, e_, c_);
    };

    w_.bjf.playerUI.infoHide = function (N) {
        if (_playerUI.winExistByName(N) === "N") return;
        _playerUI.win[N].display.infoHide();
    };

    w_.bjf.playerUI.infoTxtShow = function (N) {
        if (_playerUI.winExistByName(N) === "N") return;
        _playerUI.win[N].display.infoTxtShow();
    };

    w_.bjf.playerUI.infoTxtHide = function (N) {
        if (_playerUI.winExistByName(N) === "N") return;
        _playerUI.win[N].display.infoTxtHide();
    };

    w_.bjf.playerUI.speedShow = function (b_, e_, c_, r_, N) {
        if (_playerUI.winExistByName(N) === "N") return;
        _playerUI.win[N].display.speedShow(b_, e_, c_, r_);
    };

    w_.bjf.playerUI.speedShowHttp = function (b_, e_, c_, n_, r_, m_, N, t1_, t2_) {
        if (_playerUI.winExistByName(N) === "N") return;
        _playerUI.win[N].display.speedShowHttp(b_, e_, c_, n_, r_, m_, t1_, t2_);
    };

    w_.bjf.playerUI.speedHide = function (N) {
        if (_playerUI.winExistByName(N) === "N") return;
        _playerUI.win[N].display.speedHide();
    };

    w_.bjf.playerUI.pauseShow = function (b_, e_, c_, N) {
        if (_playerUI.winExistByName(N) === "N") return;
        _playerUI.win[N].display.pauseShow(b_, e_, c_);
    };

    w_.bjf.playerUI.pauseHide = function (N) {
        if (_playerUI.winExistByName(N) === "N") return;
        _playerUI.win[N].display.pauseHide();
    };

    w_.bjf.playerUI.loadShow = function (N) {
        if (_playerUI.winExistByName(N) === "N") return;
        _playerUI.win[N].display.loadTxtShow(N);
        _playerUI.win[N].display.loadImgShow(N);
    };

    w_.bjf.playerUI.loadHide = function (N) {
        if (_playerUI.winExistByName(N) === "N") return;
        _playerUI.win[N].display.loadTxtHide(N);
        _playerUI.win[N].display.loadImgHide(N);
    };

    w_.bjf.playerUI.setLoadShow = function (n_, N) {
        if (_playerUI.winExistByName(N) === "N") return;
        _playerUI.win[N].display.base.loadShowFlag = n_;
    };

    w_.bjf.playerUI.setLoadTxtShow = function (n_, N) {
        if (_playerUI.winExistByName(N) === "N") return;
        _playerUI.win[N].display.base.loadTxtShowFlag = n_;
    };

    w_.bjf.playerUI.setLoadImgShow = function (n_, N) {
        if (_playerUI.winExistByName(N) === "N") return;
        _playerUI.win[N].display.base.loadImgShowFlag = n_;
    };

    w_.bjf.playerUI.setSpeedTxtShow = function (n_, N) {
        if (_playerUI.winExistByName(N) === "N") return;
        _playerUI.win[N].display.base.txtShowFlag = n_;
    };

    w_.bjf.playerUI.setSpeedBarShow = function (n_, N) {
        if (_playerUI.winExistByName(N) === "N") return;
        _playerUI.win[N].display.base.barShowFlag = n_;
    };

    w_.bjf.playerUI.setAllUIShow = function (n_, N) {
        if (_playerUI.winExistByName(N) === "N") return;
        _playerUI.win[N].display.base.allUIShowFlag = n_;
    };

    w_.bjf.playerUI.setUIShow = function (n_, N) {
        if (_playerUI.winExistByName(N) === "N") return;
        _playerUI.win[N].display.base.UIShowFlag = n_;
    };

    w_.bjf.playerUI.setVolUIShow = function (n_, N) {
        if (_playerUI.winExistByName(N) === "N") return;
        _playerUI.win[N].display.base.volUIShowFlag = n_;
    };

    w_.bjf.playerUI.setTSUIShow = function (n_, N) {
        if (_playerUI.winExistByName(N) === "N") return;
        _playerUI.win[N].display.base.TSUIShowFlag = n_;
    };

    w_.bjf.playerUI.setTvodUIShow = function (n_, N) {
        if (_playerUI.winExistByName(N) === "N") return;
        _playerUI.win[N].display.base.TvodUIShowFlag = n_;
    };

    w_.bjf.playerUI.setVolUIStyle = function (n_, N) {
        if (_playerUI.winExistByName(N) === "N") return;
        _playerUI.win[N].display.base.volUIShowStyle = n_;
    };

    w_.bjf.playerUI.setTipPath = function (s_, N) {
        if (_playerUI.winExistByName(N) === "N") return;
        _playerUI.win[N].display.info.tipPath = s_;
    };

    w_.bjf.playerUI.setTitle = function (title_, fontSize_, colour_, N) {
        if (_playerUI.winExistByName(N) === "N") return;
        if (!_playerUI.tool.isEmpty(title_) || title_ === "") {
            _playerUI.win[N].display.info.title.name = title_;
        }
        if (!_playerUI.tool.isEmpty(fontSize_)) {
            _playerUI.win[N].display.info.title.fontSize = fontSize_;
        }
        if (!_playerUI.tool.isEmpty(colour_)) {
            _playerUI.win[N].display.info.title.colour = colour_;
        }
    };

    w_.bjf.playerUI.setRate = function (str_, fontSize_, colour_, N) {
        if (_playerUI.winExistByName(N) === "N") return;
        if (!_playerUI.tool.isEmpty(str_) || str_ === "") {
            _playerUI.win[N].display.info.rate.name = str_;
        }
        if (!_playerUI.tool.isEmpty(fontSize_)) {
            _playerUI.win[N].display.info.rate.fontSize = fontSize_;
        }
        if (!_playerUI.tool.isEmpty(colour_)) {
            _playerUI.win[N].display.info.rate.colour = colour_;
        }
    };

    w_.bjf.playerUI.setCastRoles = function (str_, fontSize_, colour_, N) {
        if (_playerUI.winExistByName(N) === "N") return;
        if (!_playerUI.tool.isEmpty(str_) || str_ === "") {
            _playerUI.win[N].display.info.castRoles.name = str_;
        }
        if (!_playerUI.tool.isEmpty(fontSize_)) {
            _playerUI.win[N].display.info.castRoles.fontSize = fontSize_;
        }
        if (!_playerUI.tool.isEmpty(colour_)) {
            _playerUI.win[N].display.info.castRoles.colour = colour_;
        }
    };

    w_.bjf.playerUI.audioChannelShow = function (ch_, N) {
        if (_playerUI.winExistByName(N) === "N") return;
        _playerUI.win[N].display.audioChannelShow(ch_);
    };

    w_.bjf.playerUI.setImagePath = function (p_, N) {
        if (_playerUI.winExistByName(N) === "N") return;
        _playerUI.win[N].display.base.path = p_;
        _playerUI.win[N].display.info.tipPath = p_ + "infoTip.png";
    };

    w_.bjf.playerUI.setErrorShow = function (s_, N) {
        if (_playerUI.winExistByName(N) === "N") return;
        _playerUI.win[N].display.base.errorShowFlag = s_;
    };

    w_.bjf.playerUI.setNewWin = function (N) {
        if (typeof N !== "undefined" && N !== null && N !== "") {
            var j = _playerUI.winExistByName(N);
            if (j === "Y") return; //存在该窗口
        }
        _playerUI.win[N] = {};
        _playerUI.win[N].display = new _playerUI.DISPLAY(N);
    };

    w_.bjf.playerUI.setDisplayArea = function (w_, h_, t_, l_, N) {
        if (_playerUI.winExistByName(N) === "N") return;

        _playerUI.win[N].display.area.w = parseInt(w_, 10);
        _playerUI.win[N].display.area.h = parseInt(h_, 10);
        _playerUI.win[N].display.area.t = parseInt(t_, 10);
        _playerUI.win[N].display.area.l = parseInt(l_, 10);

        var b = parseInt(w_ / 10 * 9, 10);
        _playerUI.win[N].display.speedBar.barLength = b;
        _playerUI.win[N].display.speedBar.left = parseInt((w_ - b) / 2, 10);

        _playerUI.win[N].display.clearUI();
    };

    w_.bjf.playerUI.setPageViewSize = function (w_, h_, t_, l_, N) { //主要用于确定音量的位置
        if (_playerUI.winExistByName(N) === "N") return;

        _playerUI.win[N].display.page.w = parseInt(w_, 10);
        _playerUI.win[N].display.page.h = parseInt(h_, 10);
        _playerUI.win[N].display.page.t = parseInt(t_, 10);
        _playerUI.win[N].display.page.l = parseInt(l_, 10);
    };

    w_.bjf.playerUI.releaseWin = function (N) {
        if (_playerUI.winExistByName(N) === "N") return;
        _playerUI.win[N].display.clearUI();
        delete _playerUI.win[N];
    };

    w_.bjf.playerUI.hideWin = function (N, str) {
        if (_playerUI.winExistByName(N) === "N") return;
        _playerUI.win[N].display.infoHide();
        _playerUI.win[N].display.speedHide();
        _playerUI.win[N].display.pauseHide();
        _playerUI.win[N].display.errorHide();
        _playerUI.win[N].display.volHide();
        if (str !== "keepMuteUI") {
            _playerUI.win[N].display.muteHide();
            _playerUI.win[N].display.TSHide();
        }
        _playerUI.win[N].display.loadTxtHide();
        _playerUI.win[N].display.loadImgHide();
        _playerUI.win[N].display.audioChannelHide();
    };

    //以下一行是自动打包脚本识别的特殊tag注释，勿改勿删
    //--------------------BuildTagEnd------------------
})(window);