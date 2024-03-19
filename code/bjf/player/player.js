/**
 *
 * @auth    xiao 20161101 
 * @charset utf-8
 * @indent  空格*4
 */

(function (w_) {
    if (undefined == w_.bjf) {
        w_.bjf = {};
    } else if (undefined != w_.bjf.player) {
        return;
    }
    //以下一行是自动打包脚本识别的特殊tag注释，勿改勿删
    //--------------------BuildTagStart------------------
    /* 播放控制 */
    var _player = {
        media: {},
        common: {},
        mpNameFocus: "",
        virtualEvent: {},
        ott: {},
        timeCtrl: {},
        zoneOffset: -480,
        MP: function () { },
        BEHAVIOR: function () { },
        ocnPlayCallback: function () { }
    };

    if (bjf.env.type === "iptv" || bjf.env.type === "pc") {
        _player.MP = function (N) {
            this.mp = window[_player.media[N].info.name];
        };
        _player.MP.prototype.getMuteFlag = function () {
            if (typeof this.mp.getMuteFlag === "function") {
                return this.mp.getMuteFlag();
            }
        };
        _player.MP.prototype.getVolume = function () {
            if (typeof this.mp.getVolume === "function") {
                return this.mp.getVolume();
            }
        };
        _player.MP.prototype.getMediaDuration = function () {
            if (typeof this.mp.getMediaDuration === "function") {
                return this.mp.getMediaDuration();
            }
        };
        _player.MP.prototype.fastRewind = function (r) {
            if (typeof this.mp.fastRewind === "function") {
                this.mp.fastRewind(r);
            }
        };
        _player.MP.prototype.fastForward = function (r) {
            if (typeof this.mp.fastForward === "function") {
                this.mp.fastForward(r);
            }
        };
        _player.MP.prototype.getCurrentPlayTime = function () {
            if (typeof this.mp.getCurrentPlayTime === "function") {
                return this.mp.getCurrentPlayTime();
            }
        };
        _player.MP.prototype.playByTime = function (a, t, b) {
            if (typeof this.mp.playByTime === "function") {
                this.mp.playByTime(a, t, b);
            }
        };
        _player.MP.prototype.gotoStart = function () {
            if (typeof this.mp.gotoStart === "function") {
                this.mp.gotoStart();
            }
        };
        _player.MP.prototype.gotoEnd = function () {
            if (typeof this.mp.gotoEnd === "function") {
                this.mp.gotoEnd();
            }
        };
        _player.MP.prototype.resume = function () {
            if (typeof this.mp.resume === "function") {
                this.mp.resume();
            }
        };
        _player.MP.prototype.unpause = function () {
            if (typeof this.mp.resume === "function") {
                this.mp.resume();
            }
        };
        _player.MP.prototype.pause = function () {
            if (typeof this.mp.pause === "function") {
                this.mp.pause();
            }
        };
        _player.MP.prototype.stop = function () {
            if (typeof this.mp.stop === "function") {
                this.mp.stop();
            }
        };
        _player.MP.prototype.getNativePlayerInstanceID = function () {
            if (typeof this.mp.getNativePlayerInstanceID === "function") {
                return this.mp.getNativePlayerInstanceID();
            }
        };
        _player.MP.prototype.bindNativePlayerInstance = function (ID) {
            if (typeof this.mp.bindNativePlayerInstance === "function") {
                this.mp.bindNativePlayerInstance(ID);
            }
        };
        _player.MP.prototype.setNativeUIFlag = function (e) {
            if (typeof this.mp.setNativeUIFlag === "function") {
                this.mp.setNativeUIFlag(e);
            }
        };
        _player.MP.prototype.setMuteUIFlag = function (e) { //v6平台没有这个接口
            if (typeof this.mp.setMuteUIFlag === "function") {
                this.mp.setMuteUIFlag(e);
            }
        };
        _player.MP.prototype.setAudioVolumeUIFlag = function (e) { //v6平台没有这个接口
            if (typeof this.mp.setAudioVolumeUIFlag === "function") {
                this.mp.setAudioVolumeUIFlag(e);
            }
        };
        _player.MP.prototype.setAudioTrackUIFlag = function (e) { //v6平台没有这个接口
            if (typeof this.mp.setAudioTrackUIFlag === "function") {
                this.mp.setAudioTrackUIFlag(e);
            }
        };
        _player.MP.prototype.setProgressBarUIFlag = function (e) { //v6平台没有这个接口
            if (typeof this.mp.setProgressBarUIFlag === "function") {
                this.mp.setProgressBarUIFlag(e);
            }
        };
        _player.MP.prototype.setChannelNoUIFlag = function (e) { //v6平台没有这个接口
            if (typeof this.mp.setChannelNoUIFlag === "function") {
                this.mp.setChannelNoUIFlag(e);
            }
        };
        _player.MP.prototype.setVideoDisplayMode = function (e) {
            if (typeof this.mp.setVideoDisplayMode === "function") {
                this.mp.setVideoDisplayMode(e);
            }
        };
        _player.MP.prototype.setAllowTrickmodeFlag = function (e) { //1不允许快进退,0允许 //v6平台没有这个接口
            if (typeof this.mp.setAllowTrickmodeFlag === "function") {
                this.mp.setAllowTrickmodeFlag(e);
            }
        };
        _player.MP.prototype.refreshVideoDisplay = function () {
            if (typeof this.mp.refreshVideoDisplay === "function") {
                this.mp.refreshVideoDisplay();
            }
        };
        _player.MP.prototype.setSingleOrPlaylistMode = function (e) { //单媒体播放模式 //v6平台没有这个接口
            if (typeof this.mp.setSingleOrPlaylistMode === "function") {
                this.mp.setSingleOrPlaylistMode(e);
            }
        };
        _player.MP.prototype.setCycleFlag = function (e) { ////1单次播放 ,0循环播放 //v6平台没有这个接口
            if (typeof this.mp.setCycleFlag === "function") {
                this.mp.setCycleFlag(e);
            }
        };
        _player.MP.prototype.setPlayUrl = function (e) {
            if (typeof this.mp.setSingleMedia === "function") {
                this.mp.setSingleMedia(e);
            }
        };
        _player.MP.prototype.playFromStart = function () {
            if (typeof this.mp.playFromStart === "function") {
                this.mp.playFromStart();
            }
        };
        _player.MP.prototype.initMediaPlayer = function () {
            if (typeof this.mp.initMediaPlayer === "function") {
                this.mp.initMediaPlayer();
            }
        };
        _player.MP.prototype.setVolume = function (e) {
            if (typeof this.mp.setVolume === "function") {
                this.mp.setVolume(e);
            }
        };
        _player.MP.prototype.releaseMediaPlayer = function (id_) {
            if (typeof this.mp.releaseMediaPlayer === "function") {
                return this.mp.releaseMediaPlayer(id_);
            }
        };
        _player.MP.prototype.setVideoDisplayArea = function (w_, h_, t_, l_) {
            if (typeof this.mp.setVideoDisplayArea === "function") {
                this.mp.setVideoDisplayArea(l_, t_, w_, h_);
            }
        };
        _player.MP.prototype.set = function (n, v) {
            if (typeof this.mp.set === "function") {
                this.mp.set(n, v);
            }
        };
        _player.MP.prototype.setMuteFlag = function (e) {
            if (typeof this.mp.setMuteFlag === "function") {
                this.mp.setMuteFlag(e);
            }
        };
        _player.MP.prototype.setRandomFlag = function (e) { //设为随机播放，只在播放列表模式下起作用 //v6平台没有这个接口
            if (typeof this.mp.setRandomFlag === "function") {
                this.mp.setRandomFlag(e);
            }
        };
        _player.MP.prototype.leaveChannel = function () {
            if (typeof this.mp.leaveChannel === "function") {
                this.mp.leaveChannel();
            }
        };
        _player.MP.prototype.joinChannel = function (n_) {
            if (typeof this.mp.joinChannel === "function") {
                return this.mp.joinChannel(n_);
            }
        };
        _player.MP.prototype.switchAudioChannel = function () {
            if (typeof this.mp.switchAudioChannel === "function") {
                this.mp.switchAudioChannel();
            }
        };
        _player.MP.prototype.getCurrentAudioChannel = function () {
            if (typeof this.mp.getCurrentAudioChannel === "function") {
                return this.mp.getCurrentAudioChannel();
            }
        };
    } else if (bjf.env.type === "ott") {
        _player.MP = function (N) {
            this.mp = window[_player.media[N].info.name];
        };
        _player.MP.prototype.getMuteFlag = function () { };
        _player.MP.prototype.getVolume = function () { };
        _player.MP.prototype.getMediaDuration = function () {
            return this.mp.getTotalTime();
        };
        _player.MP.prototype.fastRewind = function () { };
        _player.MP.prototype.fastForward = function () { };
        _player.MP.prototype.getCurrentPlayTime = function () {
            return this.mp.getCurrentTime();
        };
        _player.MP.prototype.playByTime = function (a, t, b) {
            this.mp.setSeekTimeEx(t);
        };
        _player.MP.prototype.gotoStart = function () {
            this.mp.setSeekTimeEx(0);
        };
        _player.MP.prototype.gotoEnd = function () { };
        _player.MP.prototype.resume = function () {
            this.mp.unpause();
        };
        _player.MP.prototype.unpause = function () {
            this.mp.unpause();
        };
        _player.MP.prototype.pause = function () {
            this.mp.pause();
        };
        _player.MP.prototype.stop = function () {
            this.mp.stop();
        };
        _player.MP.prototype.getNativePlayerInstanceID = function () {
            return "OTTNoId";
        };
        _player.MP.prototype.bindNativePlayerInstance = function (ID) {
            return "OTTNoBind";
        };
        _player.MP.prototype.setNativeUIFlag = function () { };
        _player.MP.prototype.setMuteUIFlag = function () { };
        _player.MP.prototype.setAudioVolumeUIFlag = function () { };
        _player.MP.prototype.setAudioTrackUIFlag = function () { };
        _player.MP.prototype.setProgressBarUIFlag = function () { };
        _player.MP.prototype.setChannelNoUIFlag = function () { };
        _player.MP.prototype.setVideoDisplayMode = function () { };
        _player.MP.prototype.setAllowTrickmodeFlag = function () { };
        _player.MP.prototype.refreshVideoDisplay = function () { };
        _player.MP.prototype.setSingleOrPlaylistMode = function () { };
        _player.MP.prototype.setCycleFlag = function () { };
        _player.MP.prototype.setPlayUrl = function (u_) {
            this.mp.setPlayUrl(u_);
        };
        _player.MP.prototype.setPlayParams = function (d_) {
            try {
                if (this.mp.setPlayParams) {
                    this.mp.setPlayParams(d_);
                    return true;
                } else {
                    return false;
                }
            } catch (e) {
                return false;
            }
        };
        _player.MP.prototype.playFromStart = function () {
            this.mp.play();
        };
        _player.MP.prototype.initMediaPlayer = function () { };
        _player.MP.prototype.setVolume = function () { };
        _player.MP.prototype.releaseMediaPlayer = function () {
            this.mp.close();
        };
        _player.MP.prototype.setVideoDisplayArea = function (w_, h_, t_, l_) {
            this.mp.setMediaPlayerWin(l_, t_, w_, h_);
        };
        _player.MP.prototype.set = function () { };
        _player.MP.prototype.setMuteFlag = function () { };
        _player.MP.prototype.setRandomFlag = function () { };
        _player.MP.prototype.leaveChannel = function () { };
        _player.MP.prototype.joinChannel = function () { };
        _player.MP.prototype.switchAudioChannel = function () { };
        _player.MP.prototype.getCurrentAudioChannel = function () { };

        _player.MP.prototype.setFullScreen = function () {
            this.mp.setFullScreen;
        };
        _player.MP.prototype.getPlayState = function () {
            this.mp.getPlayState;
        };
    } else if (bjf.env.type === "ocn") {
        _player.MP = function (N) {
            this.mp = window[_player.media[N].info.name];
        };
        _player.MP.prototype.getMuteFlag = function () {
            if (typeof (this.beforeMuteVol) == 'undefined' || this.beforeMuteVol != 0) {
                return 0;
            } else {
                return 1;
            }
        };
        _player.MP.prototype.getVolume = function () {
            if (typeof this.mp.getVolume === "function") {
                return this.mp.getVolume();
            }
        };
        _player.MP.prototype.getMediaDuration = function () {
            if (typeof this.mp.getMediaDuration === "function") {
                var timelength = this.mp.getMediaDuration();
                return _player.timeCtrl.formatToS(timelength);
            }

        };
        _player.MP.prototype.fastRewind = function () {
            this.mp.setPace(-2);
        };
        _player.MP.prototype.fastForward = function () {
            this.mp.setPace(2);
        };
        _player.MP.prototype.getCurrentPlayTime = function () {
            if (typeof this.mp.getCurrentPlayTime === "function") {
                var timelength = this.mp.getCurrentPlayTime();
                return _player.timeCtrl.formatToS(timelength);
            }
        };
        _player.MP.prototype.playByTime = function (a, t, b) {
            if (typeof this.mp.seek === "function") {
                try {
                    var MWNAME = SoftwareInfo.middleware.name;
                    //针对ZX1800 NDS版本
                    if (MWNAME != "COS" && iPanel.eventFrame.checkVersionSupport(["91302.", "91303.", "91304."])) {
                        var _mp = this.mp;
                        setTimeout(function () {
                            if (typeof _mp.seek === "function") {
                                _mp.seek(a, t);
                            }
                        }, 500);
                    }
                    else {
                        this.mp.seek(a, t);
                    }
                } catch (e) {
                    this.mp.seek(a, t);
                }
            }
        };
        _player.MP.prototype.gotoStart = function () {
            if (typeof this.mp.seek === "function") {
                this.mp.seek(1, 0);
            }
        };
        _player.MP.prototype.gotoEnd = function () { };
        _player.MP.prototype.resume = function () {
            if (typeof this.mp.resume === "function") {
                this.mp.resume();
            }
        };
        _player.MP.prototype.unpause = function () {
            if (typeof this.mp.resume === "function") {
                this.mp.resume();
            }
        };
        _player.MP.prototype.pause = function () {
            if (typeof this.mp.pause === "function") {
                this.mp.pause();
            }
        };
        _player.MP.prototype.stop = function () {
            if (typeof this.mp.stop === "function") {
                this.mp.stop();
            }
        };
        _player.MP.prototype.getNativePlayerInstanceID = function () {
            if (typeof this.mp.getPlayerInstanceID === "function") {
                return this.mp.getPlayerInstanceID();
            }
        };
        _player.MP.prototype.bindNativePlayerInstance = function (ID) {
            if (typeof this.mp.bindPlayerInstance === "function") {
                this.mp.bindPlayerInstance(ID);
            }
        };
        _player.MP.prototype.setNativeUIFlag = function () { };
        _player.MP.prototype.setMuteUIFlag = function () { };
        _player.MP.prototype.setAudioVolumeUIFlag = function () { };
        _player.MP.prototype.setAudioTrackUIFlag = function () { };
        _player.MP.prototype.setProgressBarUIFlag = function () { };
        _player.MP.prototype.setChannelNoUIFlag = function () { };
        _player.MP.prototype.setVideoDisplayMode = function (e) {
            if (typeof this.mp.setVideoDisplayMode === "function") {
                this.mp.setVideoDisplayMode(e);
            }
        };
        _player.MP.prototype.setAllowTrickmodeFlag = function (e) {//1允许快进退，0不允许，正好和iptv反过来
            if (typeof this.mp.enableTrickMode === "function") {
                this.mp.enableTrickMode(!e);
            }
        };
        _player.MP.prototype.refreshVideoDisplay = function () {
            if (typeof this.mp.refresh === "function") {
                this.mp.refresh();
            }
        };
        _player.MP.prototype.setSingleOrPlaylistMode = function () { };
        _player.MP.prototype.setCycleFlag = function () { };
        _player.MP.prototype.setPlayUrl = function (u_) {
            if (typeof this.mp.setMediaSource === 'function') {
                this.mp.setMediaSource(u_);
            }
        };
        _player.MP.prototype.playFromStart = function () {
            try {
                if (typeof this.mp.play === 'function') {
                    this.mp.play();
                }
            } catch (e) {
                bjf.debug(e);
            }

        };
        _player.MP.prototype.initMediaPlayer = function () { };
        _player.MP.prototype.setVolume = function (e) {
            if (typeof this.mp.setVolume === "function") {
                this.mp.setVolume(e);
            }
        };
        _player.MP.prototype.releaseMediaPlayer = function (id_) {
            if (typeof this.mp.unbindPlayerInstance === 'function') {
                this.mp.unbindPlayerInstance(id_);
            }
        };
        _player.MP.prototype.setVideoDisplayArea = function (N) {
            if (typeof this.mp.setVideoDisplayArea === 'function') {
                this.mp.setVideoDisplayArea(N);
            }
        };
        _player.MP.prototype.set = function () { };
        _player.MP.prototype.setMuteFlag = function (N) {
            if (N == 1) {
                this.beforeMuteVol = this.mp.getVolume();
                this.mp.setVolume(0);
            } else {
                if (this.beforeMuteVol) {
                    this.mp.setVolume(this.beforeMuteVol)
                } else {
                    this.mp.setVolume(50);
                }
            }
        };
        _player.MP.prototype.setRandomFlag = function () { };
        _player.MP.prototype.leaveChannel = function () { };
        _player.MP.prototype.joinChannel = function () { };
        _player.MP.prototype.switchAudioChannel = function () { };
        _player.MP.prototype.getCurrentAudioChannel = function () { };
    }

    _player.BEHAVIOR = function (N) {
        this.base = {};
        this.base.name = N;
        this.base.flag = "ORIGIN";
        this.base.playMode = 'NORMAL PLAY'; //视频播放状态:TRICKMODE-FF|TRICKMODE-FR|NORMAL PLAY|PAUSE|STOP
        this.base.status = 'LIVE'; //视频类型：点播Vod|频道CHANNEL|直播LIVE|时移TS
        this.base.beginFlag = 0;
        this.base.videoShowFlag = "block";
        this.base.mediaStreamType = "RTSP";
        this.base.fastMode = "HTTP";
        this.base.timeShift = null;

        this.time = {};
        this.time.TSTVBTime = null;
        this.time.TSTVBTimeDis = null;
        this.time.TSTVETime = null;
        this.time.TSTVETimeDis = null;
        this.time.TSTVCTime = null;
        this.time.TSTVCTimeDis = null;
        this.time.VODBTime = null;
        this.time.VODBTimeDis = null;
        this.time.VODBTimeDisForUI = null;
        this.time.VODETime = null;
        this.time.VODETimeDis = null;
        this.time.VODETimeDisForUI = null;
        this.time.VODCTime = null;
        this.time.VODCTimeDis = null;
        this.time.VODCTimeDisForUI = null;

        this.infoShowFlag = "false";

        this.volCtrl = "true";
        this.volWorking = 0;
        this.initVol = null;

        this.trickMode = {};
        this.trickMode.onOff = "on";
        this.trickMode.httpLazy = null;
        this.trickMode.httpWaitFlag = "false"; //标记已经发出快进快退命令
        this.trickMode.httpCounter = 0;
        this.trickMode.httpTime1 = 15;
        this.trickMode.httpTime2 = 30;
        this.trickMode.httpLazyTime = 1000;
        this.trickMode.speedRate = 1;
    };

    _player.BEHAVIOR.prototype.infoToggle = function () {
        try {
            if (this.infoShowFlag === "true") {
                bjf.playerUI.infoHide(this.base.name);
                this.infoShowFlag = "false";
            } else {
                this.infoShow(this.base.name);
            }
        } catch (e) {
            bjf.debug("_player.BEHAVIOR.prototype.infoToggle function error:" + e);
        }
    };

    _player.BEHAVIOR.prototype.infoShow = function (t) {
        try {
            var N = this.base.name;
            _player.timeCtrl.getDurTime(N);
            var ctDis = "";
            var ct = 0;
            if ((this.base.status === "VOD" || this.base.status === "TVOD") && this.time.VODETime < 1) {
                return;
            }
            if (this.base.status === "TS") { //直播时移
                _player.timeCtrl.getTSTVTime(N); //获取开始时间，结束时间，当前时间
                if (typeof t !== "undefined" && t !== null && t !== "") {
                    var tt = _player.timeCtrl.formatToS(this.time.TSTVBTimeDis) + t;
                    ctDis = _player.timeCtrl.formatToT(tt);
                } else {
                    ctDis = this.time.TSTVCTimeDis;
                }
                bjf.playerUI.infoShow("TS", this.time.TSTVBTimeDis, this.time.TSTVETimeDis, ctDis, N);
            } else if (this.base.status === "VOD" || this.base.status === "TVOD") { //回看
                _player.timeCtrl.getVODTime(N);
                if (typeof t !== "undefined" && t !== null && t !== "") {
                    if (_player.media[N].info.type === "TVOD" && _player.media[N].info.startTime !== 0) {
                        ctDis = _player.timeCtrl.formatTimestampToT(_player.media[N].info.startTime + t * 1000);
                    } else {
                        ctDis = _player.timeCtrl.formatToT(t);
                    }
                } else {
                    ctDis = this.time.VODCTimeDisForUI;
                }
                bjf.playerUI.infoShow("VOD", this.time.VODBTimeDisForUI, this.time.VODETimeDisForUI, ctDis, N);
            }
            this.infoShowFlag = "true";
        } catch (e) {
            bjf.debug("_player.BEHAVIOR.prototype.infoShow function error:" + e);
        }
    };

    _player.BEHAVIOR.prototype.prePlayHTTP = function (b_, e_, c_, cTS_) {
        try {
            if (this.trickMode.httpWaitFlag === "true") {
                clearTimeout(this.trickMode.httpLazy);
                this.trickMode.httpLazy = null;
            }
            var N = this.base.name;

            this.trickMode.httpWaitFlag = "true";

            var bTime = _player.timeCtrl.formatToS(b_);
            var eTime = _player.timeCtrl.formatToS(e_);
            var cTime = _player.timeCtrl.formatToS(c_);

            if (eTime < bTime) { //跨0点
                eTime = 3600 * 24 + eTime;
                if (cTime < 12 * 3600) {
                    cTime = 3600 * 24 + cTime; //当前时间在0点后
                }
            }

            var t = 0;
            if (this.trickMode.httpCounter === 1 || this.trickMode.httpCounter === -1) {
                t = this.trickMode.httpTime1 * this.trickMode.httpCounter;
            } else if (this.trickMode.httpCounter > 0) {
                t = this.trickMode.httpTime2 * this.trickMode.httpCounter - this.trickMode.httpTime1;
            } else if (this.trickMode.httpCounter < 0) {
                t = this.trickMode.httpTime2 * this.trickMode.httpCounter + this.trickMode.httpTime1;
            }

            //单位秒
            var goalTime = cTime + t;

            //当进程条到达两端时，不能让httpCounter再继续计数
            if (goalTime < bTime && (bTime - goalTime) > this.trickMode.httpTime2 && this.trickMode.httpCounter < 0) {
                this.trickMode.httpCounter++;
            }

            if (goalTime > eTime && (goalTime - eTime) > this.trickMode.httpTime2 && this.trickMode.httpCounter > 0) {
                this.trickMode.httpCounter--;
            }

            goalTime = goalTime < eTime ? goalTime : eTime;
            goalTime = goalTime > bTime ? goalTime : bTime;

            var o = this;
            this.trickMode.httpLazy = setTimeout(function () {
                if (o.base.status === "TS") {
                    if (goalTime === eTime) {
                        o.trickMode.httpCounter = 0;
                        o.trickMode.httpWaitFlag = "false";
                        o.gotoEnd("TSfastEnd");
                        return;
                    }
                    if (bjf.env.type === "ott") {
                        _player.media[N].info.playTime = parseInt(eTime - goalTime, 10);
                        _player.common.start(N, "noInit", "seek")
                    } else {
                        //上海联通特有
                        var u = _player.media[N].info.playUrl;
                        if (isNaN(parseInt(u, 10)) && u.indexOf("mediaId://") === -1) {
                            var timeShiftInterval = parseInt(goalTime - eTime, 10);

                            u += "&npt=" + timeShiftInterval;
                            var mediaUrl = "[{mediaUrl:\"" + u + "\",mediaCode: \"jsoncode1\",mediaType:2,audioType:1,videoType:1,streamType:1,drmType:1,fingerPrint:0,copyProtection:1,allowTrickmode:1,startTime:0,endTime:0,entryID:\"jsonentry1\"}]";
                            _player.media[N].mp.setPlayUrl(mediaUrl);
                        }
                        var goalTime2 = cTS_.getTime() + t * 1000;
                        goalTime2 = new Date(goalTime2 + _player.zoneOffset * 60 * 1000);
                        var targetUTC = _player.timeCtrl.DateToUTC(goalTime2);
                        _player.media[N].mp.playByTime(2, targetUTC, 1);
                    }
                } else if (o.base.status === "VOD" || o.base.status === "TVOD") {
                    if (goalTime === eTime) {
                        o.trickMode.httpCounter = 0;
                        o.trickMode.httpWaitFlag = "false";
                        o.gotoEnd("timeJumpEnd");
                        return;
                    }
                    _player.media[N].mp.playByTime(1, goalTime, 1);
                }
                setTimeout(function () {
                    if (o.base.flag === "FF") {
                        bjf.player.custom.playmode(N, "fastForward_end");
                    } else if (o.base.flag === "FR") {
                        bjf.player.custom.playmode(N, "fastRewind_end");
                    }
                    o.trickMode.httpCounter = 0;
                    o.trickMode.httpWaitFlag = "false";
                    o.reSetPlayState();
                },
                    200);
            },
                this.trickMode.httpLazyTime);
        } catch (e) {
            bjf.debug("_player.BEHAVIOR.prototype.prePlayHTTP function error:" + e);
        }
    };

    _player.BEHAVIOR.prototype.fastForward = function (r) { //快进
        try {
            var N = this.base.name;
            if (this.trickMode.onOff !== "on") {
                return;
            }
            _player.timeCtrl.getDurTime(N);
            if ((this.base.status === "VOD" || this.base.status === "TVOD") && this.time.VODETime < 1) {
                return;
            }
            if (this.base.status === "LIVE") {
                return;
            }
            if (this.base.flag !== "FF" && this.base.flag !== "FR") {
                this.hideUI();
            }
            bjf.player.custom.playmode(N, "fastForward");

            if (_player.media[N].behavior.base.fastMode === "HTTP") {
                this.trickMode.speedRate = this.trickMode.httpTime2;
                this.trickMode.httpCounter++;
                if (this.base.status === "TS") { //直播时移
                    if (this.trickMode.httpCounter === 1 || this.trickMode.httpCounter === -1) {
                        _player.timeCtrl.getTSTVTime(N); //获取开始时间，结束时间，当前时间
                    }
                    bjf.playerUI.speedShowHttp(this.time.TSTVBTimeDis, this.time.TSTVETimeDis, this.time.TSTVCTimeDis, this.trickMode.httpCounter, this.trickMode.speedRate, "FF", N, this.trickMode.httpTime1, this.trickMode.httpTime2);
                    this.prePlayHTTP(this.time.TSTVBTimeDis, this.time.TSTVETimeDis, this.time.TSTVCTimeDis, this.time.TSTVCTime);
                } else if (this.base.status === "VOD" || this.base.status === "TVOD") { //回看
                    if (this.trickMode.httpCounter === 1 || this.trickMode.httpCounter === -1) {
                        _player.timeCtrl.getVODTime(N);
                    }
                    bjf.playerUI.speedShowHttp(this.time.VODBTimeDisForUI, this.time.VODETimeDisForUI, this.time.VODCTimeDisForUI, this.trickMode.httpCounter, this.trickMode.speedRate, "FF", N, this.trickMode.httpTime1, this.trickMode.httpTime2);
                    this.prePlayHTTP(this.time.VODBTimeDis, this.time.VODETimeDis, this.time.VODCTimeDis);
                }
                if (this.base.flag !== "FF") {
                    this.base.flag = "FF";
                    this.base.playMode = "TRICKMODE-FF";
                }
            } else {
                this.base.flag = "FF";
                this.base.playMode = "TRICKMODE-FF";
                if (typeof r === "undefined" || r === null || r === "") {
                    this.trickMode.speedRate = (this.trickMode.speedRate < 2 || this.trickMode.speedRate == 32) ? 2 : this.trickMode.speedRate * 2;
                } else {
                    this.trickMode.speedRate = parseInt(r, 10);
                }
                _player.media[N].mp.fastForward(this.trickMode.speedRate);

                if (this.base.status === "TS") { //直播时移			
                    _player.timeCtrl.getTSTVTime(N); //获取开始时间，结束时间，当前时间
                    bjf.playerUI.speedShow(this.time.TSTVBTimeDis, this.time.TSTVETimeDis, this.time.TSTVCTimeDis, this.trickMode.speedRate, N);
                } else if (this.base.status === "VOD" || this.base.status === "TVOD") { //回看
                    _player.timeCtrl.getVODTime(N);
                    bjf.playerUI.speedShow(this.time.VODBTimeDisForUI, this.time.VODETimeDisForUI, this.time.VODCTimeDisForUI, this.trickMode.speedRate, N);
                }
            }
        } catch (e) {
            bjf.debug("_player.BEHAVIOR.prototype.fastForward function error:" + e);
        }
    };

    _player.BEHAVIOR.prototype.fastRewind = function (r) { //快退
        try {
            var N = this.base.name;
            if (this.trickMode.onOff !== "on") {
                return;
            }
            _player.timeCtrl.getDurTime(N);
            if ((this.base.status === "VOD" || this.base.status === "TVOD") && this.time.VODETime < 1) {
                return;
            }
            if (this.base.status === "LIVE" && this.base.timeShift < 1) {
                return;
            }
            if (this.base.flag !== "FF" && this.base.flag !== "FR") {
                this.hideUI();
            }
            if ((this.base.status === "LIVE" && this.base.timeShift > 0) || this.base.status === "TS") {
                if (this.base.status === "LIVE" && this.base.timeShift > 0) {
                    bjf.player.custom.playmode(N, "gotoTimeShift");
                    _player.media[N].mp.pause();
                    _player.media[N].mp.resume();
                }
                this.base.status = "TS";
                bjf.playerUI.TSShow(N);
            }

            bjf.player.custom.playmode(N, "fastRewind");

            if (_player.media[N].behavior.base.fastMode === "HTTP") {
                this.trickMode.speedRate = this.trickMode.httpTime2;
                this.trickMode.httpCounter--;
                if (this.base.status === "TS") { //直播时移
                    if (this.trickMode.httpCounter === 1 || this.trickMode.httpCounter === -1) {
                        _player.timeCtrl.getTSTVTime(N); //获取开始时间，结束时间，当前时间
                    }
                    bjf.playerUI.speedShowHttp(this.time.TSTVBTimeDis, this.time.TSTVETimeDis, this.time.TSTVCTimeDis, this.trickMode.httpCounter, this.trickMode.speedRate, "FR", N, this.trickMode.httpTime1, this.trickMode.httpTime2);
                    this.prePlayHTTP(this.time.TSTVBTimeDis, this.time.TSTVETimeDis, this.time.TSTVCTimeDis, this.time.TSTVCTime);
                } else if (this.base.status === "VOD" || this.base.status === "TVOD") { //回看
                    if (this.trickMode.httpCounter === 1 || this.trickMode.httpCounter === -1) {
                        _player.timeCtrl.getVODTime(N);
                    }
                    bjf.playerUI.speedShowHttp(this.time.VODBTimeDisForUI, this.time.VODETimeDisForUI, this.time.VODCTimeDisForUI, this.trickMode.httpCounter, this.trickMode.speedRate, "FR", N, this.trickMode.httpTime1, this.trickMode.httpTime2);
                    this.prePlayHTTP(this.time.VODBTimeDis, this.time.VODETimeDis, this.time.VODCTimeDis);
                }
                if (this.base.flag !== "FR") {
                    this.base.flag = "FR";
                    this.base.playMode = "TRICKMODE-FR";
                }
            } else { //rtsp
                this.base.flag = "FR";
                this.base.playMode = "TRICKMODE-FR";

                if (typeof r === "undefined" || r === null || r === "") {
                    this.trickMode.speedRate = (this.trickMode.speedRate > -2 || this.trickMode.speedRate == -32) ? -2 : this.trickMode.speedRate * 2;
                } else {
                    this.trickMode.speedRate = parseInt(r, 10);
                }

                _player.media[N].mp.fastRewind(this.trickMode.speedRate);

                if (this.base.status === "TS") { //直播时移
                    _player.timeCtrl.getTSTVTime(N); //获取开始时间，结束时间，当前时间
                    bjf.playerUI.speedShow(this.time.TSTVBTimeDis, this.time.TSTVETimeDis, this.time.TSTVCTimeDis, this.trickMode.speedRate, N);
                } else if (this.base.status === "VOD" || this.base.status === "TVOD") { //回看
                    _player.timeCtrl.getVODTime(N);
                    bjf.playerUI.speedShow(this.time.VODBTimeDisForUI, this.time.VODETimeDisForUI, this.time.VODCTimeDisForUI, this.trickMode.speedRate, N);
                }
            }
        } catch (e) {
            bjf.debug("_player.BEHAVIOR.prototype.fastRewind function error:" + e);
        }
    };

    _player.BEHAVIOR.prototype.reSetPlayState = function () {
        try {
            var N = this.base.name;
            this.hideUI();
            this.base.flag = "PLAY";
            this.base.playMode = "NORMAL PLAY";
            this.trickMode.speedRate = 1;
        } catch (e) {
            bjf.debug("_player.BEHAVIOR.prototype.reSetPlayState function error:" + e);
        }
    };

    _player.BEHAVIOR.prototype.resume = function () {
        try {
            var N = this.base.name;
            if (_player.media[N].behavior.base.fastMode === "HTTP" && this.trickMode.httpWaitFlag === "true") {
                return;
            }
            if (this.base.playMode !== "STOP" && this.base.flag !== "PLAY") {
                _player.media[N].mp.resume();
                this.reSetPlayState();
            }
        } catch (e) {
            bjf.debug("_player.BEHAVIOR.prototype.resume function error:" + e);
        }
    };

    _player.BEHAVIOR.prototype.hideUI = function (f) {
        try {
            var N = this.base.name;
            if (f === "noMuteUI") {
                bjf.playerUI.hideWin(N);
            } else {
                bjf.playerUI.hideWin(N, "keepMuteUI");
            }
            bjf.player.custom.playmode(N, "hideUI");
        } catch (e) {
            bjf.debug("_player.BEHAVIOR.prototype.hideUI function error:" + e);
        }
    }

    _player.BEHAVIOR.prototype.pause = function (str_) {
        try {
            var N = this.base.name;
            if (this.trickMode.onOff !== "on" && str_ !== "enforcement") {
                return;
            }
            _player.timeCtrl.getDurTime(N);
            if ((this.base.status === "VOD" || this.base.status === "TVOD") && this.time.VODETime < 1) {
                return;
            }
            if (this.base.status === "LIVE" && this.base.timeShift < 1) {
                return;
            }
            if (this.base.flag !== "PLAY" && this.base.playMode !== "NORMAL PLAY") {
                return; //只能从正常播放状态进入
            }
            this.hideUI();
            if (this.base.status === "LIVE") {
                bjf.player.custom.playmode(N, "gotoTimeShift");
                this.base.status = "TS";
                bjf.playerUI.TSShow(N);
            }

            bjf.player.custom.playmode(N, "pause");

            this.base.flag = "PAUSE";
            this.base.playMode = "PAUSE";

            _player.media[N].mp.pause();

            if (this.base.status === "TS") { //直播时移
                _player.timeCtrl.getTSTVTime(N); //获取开始时间，结束时间，当前时间
                bjf.playerUI.pauseShow(this.time.TSTVBTimeDis, this.time.TSTVETimeDis, this.time.TSTVCTimeDis, this.base.name);
            } else if (this.base.status === "VOD" || this.base.status === "TVOD") { //回看
                _player.timeCtrl.getVODTime(N);
                bjf.playerUI.pauseShow(this.time.VODBTimeDisForUI, this.time.VODETimeDisForUI, this.time.VODCTimeDisForUI, this.base.name);
            }
        } catch (e) {
            bjf.debug("_player.BEHAVIOR.prototype.pause function error:" + e);
        }
    };

    _player.BEHAVIOR.prototype.playByTime = function (t_, str_, type_) { //s 距离开始时间多少秒
        try {
            var N = this.base.name;
            if (this.trickMode.onOff !== "on" && str_ !== "enforcement") {
                return;
            }
            this.resume();
            if (type_ === 'Date' && (this.base.status === "LIVE" || this.base.status === "TS")) {
                //t_ 毫秒 8时区当前时间的毫秒数
                _player.timeCtrl.getDurTime(N);
                if (this.base.timeShift < 1) {
                    return;
                }
                if (this.base.status === "LIVE") {
                    _player.media[N].mp.pause();
                }

                var now = new Date();
                now = now.getTime();

                var begin = now - this.base.timeShift * 1000;

                if (t_ < begin) {
                    t_ = begin;
                }

                if (t_ > now) {
                    this.gotoLive();
                    return
                }

                var temp = new Date();
                temp.setTime(t_ + _player.zoneOffset * 60 * 1000);
                this.base.status = "TS";
                bjf.playerUI.TSShow(N);

                var targetUTC_ = _player.timeCtrl.DateToUTC(temp);
                _player.media[N].mp.playByTime(2, targetUTC_, 1);

                this.reSetPlayState();
            } else {
                //t_ 秒
                if (isNaN(parseInt(t_, 10))) {
                    return;
                }
                if (t_ < 1) {
                    t_ = 0;
                }

                this.base.flag = "WAIT";

                if (this.base.status === "LIVE" || this.base.status === "TS") {
                    var bTime = _player.timeCtrl.formatToS(this.time.TSTVBTimeDis);
                    var eTime = _player.timeCtrl.formatToS(this.time.TSTVETimeDis);
                } else { //VOD
                    var bTime = _player.timeCtrl.formatToS(this.time.VODBTimeDis);
                    var eTime = _player.timeCtrl.formatToS(this.time.VODETimeDis);
                }

                var be = 0;

                if (bTime > eTime) { //跨0点
                    be = eTime + 24 * 3600 - bTime;
                } else {
                    be = eTime - bTime;
                }

                if (t_ > be) {
                    this.gotoEnd("timeJumpEnd");
                    return;
                }

                if (this.base.status === "LIVE" || this.base.status === "TS") {
                    var temp = new Date();
                    temp.setTime(this.time.TSTVBTime.getTime() + t_ * 1000 + _player.zoneOffset * 60 * 1000);
                    this.base.status = "TS";
                    bjf.playerUI.TSShow(N);

                    var targetUTC_ = _player.timeCtrl.DateToUTC(temp);
                    _player.media[N].mp.playByTime(2, targetUTC_, 1);
                } else { //VOD
                    _player.timeCtrl.getVODTime(N);
                    _player.media[N].mp.playByTime(1, t_, 1);
                    //1是NPT，2是绝对时间,timestamp:对vod,从媒体起始点开始计算的相对时间，对TVOD等有时间基的媒体是绝对时间
                }
                this.reSetPlayState();
            }
        } catch (e) {
            bjf.debug("_player.BEHAVIOR.prototype.playByTime function error:" + e);
        }
    };

    _player.BEHAVIOR.prototype.gotoLive = function () {
        var N = this.base.name;
        this.base.status = "LIVE";
        bjf.playerUI.TSHide(N);
        bjf.playerUI.TvodHide(N);
        this.reSetPlayState();
        _player.media[N].mp.leaveChannel();
        if (bjf.env.type === "ott") {
            _player.media[N].info.playTime = 0;
            _player.common.start(N, "noInit", "seek")
        } else {
            _player.media[N].mp.leaveChannel();
            _player.media[N].mp.stop();
            _player.common.startChannel(N);
        }
        //直播
        bjf.player.plugin.playmode(N, "gotoLive");
        bjf.player.custom.playmode(N, "gotoLive");
    };

    _player.BEHAVIOR.prototype.gotoEnd = function (from_) { //播放尾头，一键到尾，快进到尾
        try {
            if (this.trickMode.onOff !== "on" && from_ === "keyEnd") {
                return;
            }
            if (this.trickMode.onOff !== "on" && from_ !== "mediaEnd") {
                return;
            }
            //if (this.base.fastMode === "HTTP" && (this.base.flag === "FF" || this.base.flag === "FR")) return;
            var N = this.base.name;
            if (bjf.env.type === "iptv" || bjf.env.type === "pc") {
                if (_player.media[N].info.type === "TIMESHIFT") {
                    _player.media[N].mp.resume();
                    _player.media[N].mp.stop();
                    this.base.status = "TS";
                    this.base.playMode = "STOP";
                    this.base.flag = "END";
                    this.hideUI("noMuteUI");
                    this.end();
                } else if (_player.media[N].info.type === "CHANNEL" && this.base.status === "TS") {
                    this.gotoLive();
                } else if (this.base.status === "VOD" || this.base.status === "TVOD") {
                    _player.media[N].mp.resume();
                    _player.media[N].mp.stop();
                    this.base.playMode = "STOP";
                    this.base.flag = "END";
                    this.hideUI("noMuteUI");
                    this.end();
                }
            } else if (bjf.env.type === "ott") {
                if (this.base.status === "TS") {
                    this.gotoLive()
                } else {
                    _player.media[N].mp.stop();
                    this.base.status = "VOD";
                    this.base.playMode = "STOP";
                    this.base.flag = "END";
                    this.hideUI("noMuteUI");
                    this.end();
                }
            } else if (bjf.env.type === "ocn") {
                _player.media[N].mp.resume();
                _player.media[N].mp.stop();
                this.base.status = "VOD";
                this.base.playMode = "STOP";
                this.base.flag = "END";
                this.hideUI("noMuteUI");
                this.end();
            }
        } catch (e) {
            bjf.debug("_player.BEHAVIOR.prototype.gotoEnd function error:" + e);
        }
    };

    _player.BEHAVIOR.prototype.gotoStart = function () {
        try {
            var N = this.base.name;
            if (_player.media[N].behavior.trickMode.onOff !== "on" || (_player.media[N].behavior.base.fastMode === "HTTP" && (this.base.flag === "FF" || this.base.flag === "FR"))) {
                return;
            }
            if (this.base.status === "LIVE") {
                this.base.status = "TS";
            }
            _player.media[N].mp.gotoStart();
            var o = this;
            setTimeout(function () {
                o.reSetPlayState();
            }, 300);
        } catch (e) {
            bjf.debug("_player.BEHAVIOR.prototype.gotoStart function error:" + e);
        }
    };

    _player.BEHAVIOR.prototype.goToBack = function (e) {
        try {
            var N = this.base.name;
            if (this.trickMode.onOff !== "on") {
                return;
            }
            this.base.flag = "WAIT";
            this.base.playMode = "PAUSE";
            if (!(this.base.status === "LIVE" && this.base.timeShift <= 0)) {
                _player.media[N].mp.pause();
            }
            if (this.base.status === "LIVE" && this.base.timeShift > 0) {
                this.base.status = "TS";
                bjf.playerUI.TSShow(N);
            }
            bjf.player.custom.playmode(N, "back", e);
        } catch (e) {
            bjf.debug("_player.BEHAVIOR.prototype.gotoBack function error:" + e);
        }
    };

    _player.BEHAVIOR.prototype.begin = function () {
        try {
            var N = this.base.name;

            if (this.base.beginFlag !== 0) { //时移进入直播，有的盒子发的是mediabegin
                this.reSetPlayState();
                return;
            }

            this.base.beginFlag = 1;

            this.hideUI();

            //如果是静音，显示图标
            if ((_player.media[N].info.PIP !== "Y" && _player.media[N].info.mosaic !== "Y") || (_player.media[N].info.mosaic === "Y" && _player.media[N].info.mosaicVoice === "on")) {
                var i = parseInt(_player.media[N].mp.getMuteFlag(), 10); //1是静音
                var v = _player.media[N].mp.getVolume();
                if (i === 1 || v < 1) {
                    _player.media[N].behavior.muteSet("on");
                }
            }

            _player.timeCtrl.getDurTime(N);

            var t_ = 0;

            if (_player.media[N].info.type === "CHANNEL") {
                if (_player.media[N].info.playTime !== "" && this.base.timeShift > 0) {
                    _player.timeCtrl.getTSTVTime(N);
                    t_ = parseInt(_player.media[N].info.playTime, 10);
                    this.playByTime(t_, "enforcement");
                }
                _player.media[N].info.playTime = "";
                this.base.flag = "PLAY";

                bjf.player.plugin.playmode(N, "begin");
                bjf.player.custom.playmode(N, "begin");
            } else if (_player.media[N].info.type === "TIMESHIFT") {
                _player.media[N].info.playTime = "";
                this.base.flag = "PLAY";

                bjf.playerUI.TSShow(N);

                bjf.player.plugin.playmode(N, "begin");
                bjf.player.custom.playmode(N, "begin");
            } else if (_player.media[N].info.type === "VOD" || _player.media[N].info.type === "TVOD") {
                if (typeof _player.media[N].info.playTime !== "undefined" && _player.media[N].info.playTime !== "" && _player.media[N].info.playTime !== null) {
                    t_ = parseInt(_player.media[N].info.playTime, 10);
                }
                this.checkVodBegin(N, t_);
                // 针对屏保需求,bjf框架添加播放心跳请求功能
                getVerson('PLAYEVENT');
            }
        } catch (e) {
            bjf.debug("_player.BEHAVIOR.prototype.begin function error:" + e);
        }
    };

    _player.BEHAVIOR.prototype.checkVodBegin = function (N, playTime) {
        try {
            if (this.time.VODETime < 1 && ((_player.media[N].info.PIP !== "Y" && _player.media[N].info.mosaic !== "Y") || (_player.media[N].info.mosaic === "Y" && _player.media[N].info.mosaicVoice === "on"))) {
                var o = this;
                setTimeout(function () {
                    _player.timeCtrl.getDurTime(N);
                    o.checkVodBegin(N, playTime);
                },
                    100);
            } else {
                _player.timeCtrl.getVODTime(N);
                if (playTime > 0) {
                    this.playByTime(playTime, "enforcement");
                }
                _player.media[N].info.playTime = "";
                this.base.flag = "PLAY";

                if (this.base.status === "TVOD") {
                    bjf.playerUI.TvodShow(N);
                }

                bjf.player.plugin.playmode(N, "begin");
                bjf.player.custom.playmode(N, "begin");
            }
        } catch (e) {
            bjf.debug("_player.BEHAVIOR.prototype.checkVodBegin function error:" + e);
        }
    };

    _player.BEHAVIOR.prototype.end = function () {
        try {
            var N = this.base.name;
            bjf.player.plugin.playmode(N, "end");
            bjf.player.custom.playmode(N, "end");
            // 针对屏保需求,bjf框架添加播放心跳请求功能
            getVerson('PLAYEVENT');
        } catch (e) {
            bjf.debug("_player.BEHAVIOR.prototype.end function error:" + e);
        }
    };

    //组播服务结束上报
    _player.BEHAVIOR.prototype.endServer = function () { };
    _player.BEHAVIOR.prototype.stopPlay = function () {
        try {
            var N = this.base.name;
            _player.media[N].mp.leaveChannel();
            _player.media[N].mp.stop();
            this.base.playMode = "STOP";
            this.base.flag = "STOP";
        } catch (e) {
            bjf.debug("_player.BEHAVIOR.prototype.stopPlay function error:" + e);
        }
    };

    // volume control
    _player.BEHAVIOR.prototype.muteToggle = function () { //静音开或关
        try {
            if (this.volCtrl === "false") {
                return;
            }
            if (this.base.playMode !== "NORMAL PLAY" && this.base.playMode !== "PAUSE") {
                return; //非正播状态，调用接口会无反应
            }
            var N = this.base.name;
            var muteFlag = parseInt(_player.media[N].mp.getMuteFlag(), 10);
            if (muteFlag !== 0) { //1是静音
                var vol = parseInt(_player.media[N].mp.getVolume(), 10);
                if (vol === 0) {
                    bjf.playerUI.muteShow(N);
                    bjf.playerUI.volHide(N);
                } else {
                    _player.media[N].mp.setMuteFlag(0); //设置为非静音
                    bjf.playerUI.muteHide(N);
                    bjf.playerUI.volShow(vol, N);
                }
            } else { //0为非静音
                _player.media[N].mp.setMuteFlag(1); //设为静音
                bjf.playerUI.muteShow(N);
                bjf.playerUI.volHide(N);
            }
        } catch (e) {
            bjf.debug("_player.BEHAVIOR.prototype.muteToggle function error:" + e);
        }
    };

    _player.BEHAVIOR.prototype.muteSet = function (s) {
        try {
            if (this.volCtrl === "false") {
                return;
            }
            if (this.base.playMode !== "NORMAL PLAY" && this.base.playMode !== "PAUSE") {
                return; //非正播状态，调用接口会无反应
            }
            var N = this.base.name;
            var muteFlag = _player.media[N].mp.getMuteFlag();
            if (s === "on") {
                if (muteFlag !== 1) {
                    _player.media[N].mp.setMuteFlag(1); //设为静音
                }
                bjf.playerUI.muteShow(N);
                bjf.playerUI.volHide(N);
            } else {
                var vol = parseInt(_player.media[N].mp.getVolume(), 10);
                if (vol === 0) {
                    if (muteFlag !== 1) {
                        _player.media[N].mp.setMuteFlag(1); //设为静音
                    }
                    bjf.playerUI.muteShow(N);
                    bjf.playerUI.volHide(N);
                } else {
                    if (muteFlag !== 0) {
                        _player.media[N].mp.setMuteFlag(0); //设置为非静音
                    }
                    bjf.playerUI.muteHide(N);
                    bjf.playerUI.volShow(vol, N);
                }
            };
        } catch (e) {
            bjf.debug("_player.BEHAVIOR.prototype.muteSet function error:" + e);
        }
    };

    _player.BEHAVIOR.prototype.volFun = function (direct) {
        try {
            if (this.volCtrl === "false") {
                return;
            }
            if (this.base.playMode !== "NORMAL PLAY" && this.base.playMode !== "PAUSE") {
                return; //非正播状态，调用接口会无反应
            }
            if (this.volWorking === 1) {
                return; //防止前一次音量操作没有执行完，就执行后一次
            }
            this.volWorking = 1;
            var N = this.base.name;
            var muteFlag = _player.media[N].mp.getMuteFlag();
            var volNum = parseInt(_player.media[N].mp.getVolume(), 10);

            if (volNum <= 0 && direct === "-") {
                this.volWorking = 0;
                return;
            } else if (muteFlag === 0 && volNum >= 100 && direct === "+") {
                bjf.playerUI.muteHide(N);
                bjf.playerUI.volShow(100, N);
            } else if (muteFlag !== 0 && direct === "+") { //1是静音，0有声
                _player.media[N].mp.setMuteFlag(0); //设置为非静音
                bjf.playerUI.muteHide(N);
                if (volNum >= 100) {
                    this.volWorking = 0;
                    return;
                }
            } else if (muteFlag !== 0 && volNum > 0 && direct === "-") {
                _player.media[N].mp.setMuteFlag(0); //设置为非静音
                bjf.playerUI.muteHide(N);
            }

            var step = 10; //每格音量占的数字
            var m = 10; //一共多少个音量格
            var n = Math.ceil(volNum / step, 10);

            if (direct == "+") {
                n++;
            } else if (direct == "-") {
                n--;
            }
            if (n >= m) {
                n = m;
            } else if (n <= 0) {
                n = 0;
            }

            if (direct == "+" || direct == "-") {
                volNum = parseInt(n * step, 10);
            }

            _player.media[N].mp.setVolume(volNum);

            if (n <= 0) {
                bjf.playerUI.muteShow(N);
                bjf.playerUI.volHide(N);
            } else {
                bjf.playerUI.muteHide(N);
                bjf.playerUI.volShow(volNum, N);
            }
            this.volWorking = 0;
        } catch (e) {
            bjf.debug("_player.BEHAVIOR.prototype.volFun function error:" + e);
        }
    };

    _player.BEHAVIOR.prototype.volFun2 = function (v) {
        try {
            if (this.volCtrl === "false") {
                return;
            }
            if (this.base.playMode !== "NORMAL PLAY" && this.base.playMode !== "PAUSE") {
                return; //非正播状态，调用接口会无反应
            }
            var N = this.base.name;
            var muteFlag = _player.media[N].mp.getMuteFlag();

            v = parseInt(v, 10);

            if (v < 0) {
                v = 0;
            }

            if (v > 100) {
                v = 100;
            }

            if (muteFlag !== 0 && v !== 0) { //1是静音
                _player.media[N].mp.setMuteFlag(0); //设置为非静音
                bjf.playerUI.muteHide(N);
            } else if (muteFlag !== 0 && v <= 0) {
                return;
            }

            if (v <= 0) {
                bjf.playerUI.muteShow(N);
                bjf.playerUI.volHide(N);
            } else {
                bjf.playerUI.muteHide(N);
                bjf.playerUI.volShow(v, N);
            }
            _player.media[N].mp.setVolume(v);
        } catch (e) {
            bjf.debug("_player.BEHAVIOR.prototype.volFun2 function error:" + e);
        }
    };

    //通用
    _player.common.setNewMP = function (N, ID, t_, env_) {
        try {
            _player.media[N] = {};
            _player.media[N].info = {
                name: N,
                env: env_,
                ID: "",
                playUrl: "",
                mixNo: "",
                type: "",
                playTime: "",
                startTime: 0,
                mediaCode: "",
                area: {
                    w: 0,
                    h: 0,
                    t: 0,
                    l: 0,
                },
                page: {
                    w: 0,
                    h: 0,
                    t: 0,
                    l: 0,
                },
                PIP: "N",
                mosaic: "N",
                mosaicVoice: "off",
            };

            if (bjf.env.type === "iptv" || bjf.env.type === "pc") {
                if (arguments.length > 2 && t_ === "PIP") {
                    window[_player.media[N].info.name] = new MediaPlayer("PIP");
                    _player.media[N].info.PIP = "Y";
                } else if (arguments.length > 2 && t_ === "mosaic") {
                    window[_player.media[N].info.name] = new MediaPlayer("mosaic");
                    _player.media[N].info.mosaic = "Y";
                } else window[_player.media[N].info.name] = new MediaPlayer();
            } else if (bjf.env.type === "ott") {
                window[_player.media[N].info.name] = MediaPlayer;
            } else if (bjf.env.type === "ocn") {
                window[_player.media[N].info.name] = new MediaPlayer();
            }

            _player.media[N].mp = new _player.MP(N); //创建MediaPlayer对象
            _player.media[N].behavior = new _player.BEHAVIOR(N); //创建behavior对象
            if (typeof ID !== "undefined" && ID !== null && ID !== "") {
                _player.media[N].mp.bindNativePlayerInstance(ID);
            }
            _player.media[N].info.ID = _player.media[N].mp.getNativePlayerInstanceID(); //读取本地的媒体播放实例的标识
            if ('ocn' == bjf.env.type) {
                var flag = _player.media[N].mp.bindNativePlayerInstance(_player.media[N].info.ID);
            }
            return _player.media[N].info.ID;
        } catch (e) {
            bjf.debug("_player.common.setNewMP function error:" + e);
        }
    };

    _player.common.videoDisplay = function (N) {
        try {
            if (typeof N === "undefined" || N === null || N === "") {
                return;
            }
            var w = _player.media[N].info.area.w;
            var h = _player.media[N].info.area.h;
            var t = _player.media[N].info.area.t;
            var l = _player.media[N].info.area.l;

            if (bjf.env.type === "iptv" || bjf.env.type === "pc") {
                var WW = 1920;
                var HH = 1080;
                var meta = bjf.$$("@page-view-size");
                if (typeof meta !== "undefined" && meta !== null && meta !== "" && meta.length > 0) {
                    var size = bjf.getAttribute(meta[meta.length - 1], 'content');
                    WW = size.split("*")[0];
                    HH = size.split("*")[1];
                }

                if (0 < w - WW + 1) {
                    _player.media[N].info.area.w = WW;
                }
                if (0 < h - HH + 1) {
                    _player.media[N].info.area.h = HH;
                }
                if (0 > w - 50) {
                    _player.media[N].info.area.w = 50;
                }
                if (0 > h - 50) {
                    _player.media[N].info.area.h = 50;
                }
                if (0 > t) {
                    _player.media[N].info.area.t = 0;
                }
                if (0 > l) {
                    _player.media[N].info.area.l = 0;
                }
                if (_player.media[N].info.page.w < _player.media[N].info.area.w) {
                    _player.media[N].info.page.w = _player.media[N].info.area.w;
                }
                if (_player.media[N].info.page.h < _player.media[N].info.area.h) {
                    _player.media[N].info.page.h = _player.media[N].info.area.h;
                }
                if (_player.media[N].info.page.t > _player.media[N].info.area.t || _player.media[N].info.page.w === _player.media[N].info.area.w) {
                    _player.media[N].info.page.t = _player.media[N].info.area.t;
                }
                if (_player.media[N].info.page.l > _player.media[N].info.area.l || _player.media[N].info.page.h === _player.media[N].info.area.h) {
                    _player.media[N].info.page.l = _player.media[N].info.area.l;
                }
                bjf.playerUI.setPageViewSize(_player.media[N].info.page.w, _player.media[N].info.page.h, _player.media[N].info.page.t, _player.media[N].info.page.l, N);

                if (_player.media[N].info.area.w >= WW && _player.media[N].info.area.h >= HH) {
                    _player.media[N].mp.setVideoDisplayMode(1);
                } else {
                    _player.media[N].mp.setVideoDisplayArea(_player.media[N].info.area.w, _player.media[N].info.area.h, _player.media[N].info.area.t, _player.media[N].info.area.l);
                    _player.media[N].mp.setVideoDisplayMode(0); //0按setVideoDisplayArea设置高宽上左的值来决定视频窗口大小位置
                }
                _player.media[N].mp.refreshVideoDisplay(); //根据videoDisplayMode,vedioDisplayArea属性调整视频显示//VideoDisplayMode()显式调用该函数后才显示
            } else if (bjf.env.type === "ott") {
                _player.media[N].mp.setVideoDisplayArea(w, h, t, l);
            } else if (bjf.env.type === "ocn") {
                var WW = 1920;
                var HH = 1080;
                var meta = bjf.$$("@page-view-size");
                if (typeof meta !== "undefined" && meta !== null && meta !== "" && meta.length > 0) {
                    var size = bjf.getAttribute(meta[meta.length - 1], 'content');
                    WW = size.split("*")[0];
                    HH = size.split("*")[1];
                }
                if (0 < w - WW + 1) {
                    _player.media[N].info.area.w = WW;
                }
                if (0 < h - HH + 1) {
                    _player.media[N].info.area.h = HH;
                }
                if (0 > w - 50) {
                    _player.media[N].info.area.w = 50;
                }
                if (0 > h - 50) {
                    _player.media[N].info.area.h = 50;
                }
                if (0 > t) {
                    _player.media[N].info.area.t = 0;
                }
                if (0 > l) {
                    _player.media[N].info.area.l = 0;
                }
                if (_player.media[N].info.page.w < _player.media[N].info.area.w) {
                    _player.media[N].info.page.w = _player.media[N].info.area.w;
                }
                if (_player.media[N].info.page.h < _player.media[N].info.area.h) {
                    _player.media[N].info.page.h = _player.media[N].info.area.h;
                }
                if (_player.media[N].info.page.t > _player.media[N].info.area.t || _player.media[N].info.page.w === _player.media[N].info.area.w) {
                    _player.media[N].info.page.t = _player.media[N].info.area.t;
                }
                if (_player.media[N].info.page.l > _player.media[N].info.area.l || _player.media[N].info.page.h === _player.media[N].info.area.h) {
                    _player.media[N].info.page.l = _player.media[N].info.area.l;
                }
                bjf.playerUI.setPageViewSize(_player.media[N].info.page.w, _player.media[N].info.page.h, _player.media[N].info.page.l, _player.media[N].info.page.t, N);

                if (_player.media[N].info.area.w >= WW && _player.media[N].info.area.h >= HH) {
                    _player.media[N].mp.setVideoDisplayMode(1);
                } else {
                    _player.media[N].mp.setVideoDisplayMode(0); //0按setVideoDisplayArea设置高宽上左的值来决定视频窗口大小位置
                    var rect = new Rectangle(_player.media[N].info.area.l, _player.media[N].info.area.t, _player.media[N].info.area.w, _player.media[N].info.area.h);
                    _player.media[N].mp.setVideoDisplayArea(rect);//ocn参数顺序和iptv不太一样，注意
                }
                _player.media[N].mp.refreshVideoDisplay(); //根据videoDisplayMode,vedioDisplayArea属性调整视频显示//VideoDisplayMode()显式调用该函数后才显示
            }
        } catch (e) {
            bjf.debug("_player.common.videoDisplay function error:" + e);
        }
    };

    _player.common.mpInit = function (N) {
        try {
            if (_player.media[N].info.mosaic === "Y" && _player.media[N].info.mosaicVoice === "on") {
                _player.media[N].mp.set("HaveMosaicVoice", 1); // 默认0--无声音；1--有声音
            } else {
                _player.media[N].behavior.volCtrl = "false";
            }
            if (((_player.media[N].info.PIP !== "Y" && _player.media[N].info.mosaic !== "Y") || (_player.media[N].info.mosaic === "Y" && _player.media[N].info.mosaicVoice === "on")) && _player.media[N].behavior.initVol !== null) {
                if (_player.media[N].behavior.initVol === "on") {
                    _player.media[N].mp.setMuteFlag(0); //初始有声
                } else if (_player.media[N].behavior.initVol !== "on") {
                    _player.media[N].mp.setMuteFlag(1); //初始静音
                }
            }

            _player.media[N].mp.setNativeUIFlag(0); //0禁止本地UI
            _player.media[N].mp.setMuteUIFlag(0);
            _player.media[N].mp.setAudioVolumeUIFlag(0);
            _player.media[N].mp.setAudioTrackUIFlag(0);
            _player.media[N].mp.setProgressBarUIFlag(0);
            _player.media[N].mp.setChannelNoUIFlag(0);

            _player.media[N].mp.setSingleOrPlaylistMode(0); //单媒体播放模式
            _player.media[N].mp.setCycleFlag(1); //1单次播放 ,0循环播放
            _player.media[N].mp.setRandomFlag(1); //设为随机播放，只在播放列表模式下起作用
            _player.media[N].mp.setAllowTrickmodeFlag(0); //1不允许快进退,0允许
            _player.common.videoDisplay(N);
            _player.media[N].mp.refreshVideoDisplay();

        } catch (e) {
            bjf.debug("_player.common.mpInit function error:" + e);
        }
    };

    _player.common.start = function (N, s, k, ottext_) {
        try {
            bjf.playerUI.TSHide(N);
            bjf.playerUI.TvodHide(N);
            var playUrl_ = "";
            var mediaType_ = "";
            var mediaCode_ = "";
            playUrl_ = _player.media[N].info.playUrl;
            if (typeof (playUrl_) === "undefined" || playUrl_ === null || playUrl_ === "") {
                return;
            }
            mediaCode_ = _player.media[N].info.mediaCode;
            if (_player.media[N].info.type === "CHANNEL") {
                mediaType_ = 1;
            } else if (_player.media[N].info.type === "VOD") {
                mediaType_ = 2;
            } else if (_player.media[N].info.type === "TVOD") {
                mediaType_ = 3;
            } else if (_player.media[N].info.type === "TIMESHIFT") {
                mediaType_ = 1;
            }
            bjf.playerUI.loadShow(N);

            if (bjf.env.type === "iptv" || bjf.env.type === "pc") {

                _player.media[N].mp.leaveChannel();
                _player.media[N].mp.stop();

                if (s !== "noInit") {
                    _player.common.mpInit(N);
                }
                if (_player.media[N].info.type === "CHANNEL") {
                    _player.media[N].behavior.base.status = "LIVE";
                    _player.media[N].behavior.base.playMode = "NORMAL PLAY";
                    _player.media[N].behavior.base.flag = "ORIGIN";
                    var temp = new Date();
                    _player.zoneOffset = temp.getTimezoneOffset();
                    _player.common.startChannel(N, k);
                } else if (_player.media[N].info.type === "TIMESHIFT") {
                    _player.media[N].behavior.base.status = "TS";
                    _player.media[N].behavior.base.playMode = "NORMAL PLAY";
                    _player.media[N].behavior.base.flag = "ORIGIN";
                    var temp = new Date();
                    _player.zoneOffset = temp.getTimezoneOffset();
                    _player.common.startTimeShift(N, k);
                } else {
                    if (playUrl_.indexOf("rtsp") !== -1) {
                        _player.media[N].behavior.base.mediaStreamType = "RTSP";
                    } else {
                        _player.media[N].behavior.base.mediaStreamType = "TS";
                    }

                    if (_player.media[N].info.type === "TVOD") {
                        _player.media[N].behavior.base.status = "TVOD";
                    } else {
                        _player.media[N].behavior.base.status = "VOD";
                    }

                    _player.media[N].behavior.base.playMode = "NORMAL PLAY";
                    _player.media[N].behavior.base.flag = "ORIGIN";

                    var platVersion = bjf.storage.get("platVersion");
                    if (typeof platVersion !== "undefined" && platVersion !== "" && platVersion !== null && platVersion === "V3") {
                        var mediaUrl = "{\"mediaCode\":\"" + mediaCode_ + "\",\"mediaURL\":\"" + playUrl_ + "\",\"mediaType\":" + mediaType_ + "}";
                    } else {
                        var mediaUrl = "[{mediaUrl:\"" + playUrl_ + "\",mediaCode: \"jsoncode1\",mediaType:" + mediaType_ + ",audioType:1,videoType:1,streamType:1,drmType:1,fingerPrint:0,copyProtection:1,allowTrickmode:1,startTime:0,endTime:20000,entryID:\"jsonentry1\"}]";
                    }

                    _player.media[N].mp.setPlayUrl(mediaUrl);

                    //点播起流 
                    if (k === "seek" && _player.media[N].info.playTime !== "" && _player.media[N].info.playTime !== 0) {
                        _player.media[N].mp.playByTime(1, _player.media[N].info.playTime, 1);
                        _player.media[N].info.playTime = "";
                    } else {
                        _player.media[N].mp.playFromStart();
                    }
                }
            } else if (bjf.env.type === "ott") {
                _player.common.videoDisplay(N);
                _player.media[N].behavior.base.mediaStreamType = "TS";
                var IsLive_ = false;
                if (_player.media[N].info.type === "CHANNEL") {
                    _player.media[N].behavior.base.status = "LIVE";
                    IsLive_ = true;
                } else {
                    if (_player.media[N].info.type === "TVOD") {
                        _player.media[N].behavior.base.status = "TVOD";
                    } else {
                        _player.media[N].behavior.base.status = "VOD";
                    }
                }
                _player.media[N].behavior.base.playMode = "NORMAL PLAY";
                _player.media[N].behavior.base.flag = "ORIGIN";
                //测setPlayParams接口是否存在
                var d_ = {};
                var isSetPlayParams = _player.media[N].mp.setPlayParams(d_);
                if (isSetPlayParams) {
                    if ((_player.media[N].behavior.base.status === "TVOD" || _player.media[N].behavior.base.status === "VOD") && k === "seek" && _player.media[N].info.playTime !== "" && _player.media[N].info.playTime !== 0) {
                        var d_ = {
                            "Urls": [playUrl_],
                            "IsLive": IsLive_,
                            "TimeShift": {},
                            "Bookmark": _player.media[N].info.playTime,
                        };
                        _player.media[N].info.playTime = "";
                    } else {
                        if ((_player.media[N].behavior.base.status === "LIVE" || _player.media[N].behavior.base.status === "TS") && k === "seek" && _player.media[N].info.playTime !== "" && _player.media[N].info.playTime !== 0) {
                            var d_ = {
                                "Urls": [playUrl_],
                                "IsLive": IsLive_,
                                "TimeShift": {
                                    "Offset": _player.media[N].info.playTime
                                },
                                "Bookmark": 0,
                            };
                            _player.media[N].info.playTime = "";
                        } else {
                            var d_ = {
                                "Urls": [playUrl_],
                                "IsLive": IsLive_,
                                "TimeShift": {},
                                "Bookmark": 0,
                            }
                        }
                    }
                    if (ottext_) {
                        for (var ext_ in ottext_) {
                            d_[ext_] = ottext_[ext_];
                        }
                    }
                    var dd_ = JSON.stringify(d_);
                    _player.media[N].mp.setPlayParams(dd_);
                    _player.media[N].mp.playFromStart();
                } else {
                    _player.media[N].mp.setPlayUrl(playUrl_);
                    _player.media[N].mp.playFromStart()
                }
            } else if (bjf.env.type === "ocn") {
                _player.common.mpInit(N);
                // bjf.debug(playUrl_);
                if (playUrl_.indexOf("rtsp") !== -1) {
                    _player.media[N].behavior.base.mediaStreamType = "RTSP";
                } else {
                    _player.media[N].behavior.base.mediaStreamType = "TS";
                }
                _player.media[N].behavior.base.status = "VOD";
                _player.media[N].behavior.base.playMode = "NORMAL PLAY";
                _player.media[N].behavior.base.flag = "ORIGIN";
                _player.media[N].mp.setPlayUrl(playUrl_);
                _player.ocnPlayCallback = function () {
                    _player.media[N].mp.playFromStart();
                };
            }
        } catch (e) {
            bjf.debug("_player.common.start function error:" + e);
        }
    };

    _player.common.startTimeShift = function (N, k) {
        try {
            var u = _player.media[N].info.playUrl;
            //频道时移地址起流 上海联通
            if (k === "seek") {
                _player.media[N].behavior.base.mediaStreamType = "TS";

                u += "&npt=0";
                var mediaUrl = "[{mediaUrl:\"" + u + "\",mediaCode: \"jsoncode1\",mediaType:2,audioType:1,videoType:1,streamType:1,drmType:1,fingerPrint:0,copyProtection:1,allowTrickmode:1,startTime:0,endTime:0,entryID:\"jsonentry1\"}]";
                _player.media[N].mp.setPlayUrl(mediaUrl);

                var t = parseInt(_player.media[N].info.playTime, 10);
                var now = new Date();
                if (!isNaN(t) && t !== "" && t !== 0 && 0 < t - Math.pow(10, 12) && 0 < now.getTime() - t) {
                    //传入的是时间戳
                    var targetTime = new Date();
                    targetTime.setTime(t + _player.zoneOffset * 60 * 1000);
                    var targetUTC = _player.timeCtrl.DateToUTC(targetTime);
                    _player.media[N].mp.playByTime(2, targetUTC, 1);
                } else {
                    //异常，按当前时间播放
                    var currentTime = new Date();
                    currentTime.setTime(currentTime.getTime() + _player.zoneOffset * 60 * 1000);
                    var targetUTC = _player.timeCtrl.DateToUTC(currentTime);
                    _player.media[N].mp.playByTime(2, targetUTC, 1);
                }
                _player.media[N].info.playTime = "";
            } else {
                //暂无处理			
            }
        } catch (e) {
            bjf.debug("_player.common.startTimeShift function error:" + e)
        }
    };

    _player.common.startChannel = function (N, k) {
        try {
            var u = _player.media[N].info.playUrl;
            if (!isNaN(parseInt(u, 10))) { //频道号
                var n = _player.media[N].mp.joinChannel(parseInt(_player.media[N].info.mixNo, 10));
                if (n == -1) {
                    bjf.playerUI.errorShow("Channel No. is invalid.", N);
                }
            } else if (u.indexOf("mediaId://") !== -1) { //v6平台
                var mediaUrl = "{\"mediaURL\":\"" + _player.media[N].info.mixNo + "\",\"mediaType\":1}";
                _player.media[N].mp.setPlayUrl(mediaUrl);
                _player.media[N].mp.playFromStart();
            } else {
                //频道起流 频道单播地址 上海联通
                _player.media[N].behavior.base.mediaStreamType = "TS";
                if (k === "seek") {
                    u += "&npt=0";
                    var mediaUrl = "[{mediaUrl:\"" + u + "\",mediaCode: \"jsoncode1\",mediaType:2,audioType:1,videoType:1,streamType:1,drmType:1,fingerPrint:0,copyProtection:1,allowTrickmode:1,startTime:0,endTime:0,entryID:\"jsonentry1\"}]";
                    _player.media[N].mp.setPlayUrl(mediaUrl);

                    var currentTime = new Date();
                    var targetTime = new Date(currentTime.getTime() + _player.zoneOffset * 60 * 1000);
                    var targetUTC = _player.timeCtrl.DateToUTC(targetTime);

                    _player.media[N].mp.playByTime(2, targetUTC, 1);
                } else {
                    var mediaUrl = "[{mediaUrl:\"" + u + "\",mediaCode: \"jsoncode1\",mediaType:1,audioType:1,videoType:1,streamType:1,drmType:1,fingerPrint:0,copyProtection:1,allowTrickmode:1,startTime:0,endTime:20000,entryID:\"jsonentry1\"}]";
                    _player.media[N].mp.setPlayUrl(mediaUrl);
                    _player.media[N].mp.playFromStart();
                }
            }
        } catch (e) {
            bjf.debug("_player.common.startChannel function error:" + e)
        }
    };

    //键值响应
    _player.onKeyFF = function (e, N, r) {
        switch (_player.media[N].behavior.base.flag) {
            case "PLAY":
            case "FF":
            case "FR":
                if (_player.media[N].behavior.base.mediaStreamType === "RTSP") {
                    _player.media[N].behavior.base.fastMode = "RTSP";
                } else {
                    _player.media[N].behavior.base.fastMode = "HTTP";
                }
                _player.media[N].behavior.fastForward(r);
                break;
        };
    };

    _player.onKeyFR = function (e, N, r) {
        switch (_player.media[N].behavior.base.flag) {
            case "PLAY":
            case "FF":
            case "FR":
                if (_player.media[N].behavior.base.mediaStreamType === "RTSP") {
                    _player.media[N].behavior.base.fastMode = "RTSP";
                } else {
                    _player.media[N].behavior.base.fastMode = "HTTP";
                }
                _player.media[N].behavior.fastRewind(r);
                break;
        };
    };

    _player.onKeyRight = function (e, N) {
        switch (_player.media[N].behavior.base.flag) {
            case "PLAY":
            case "FF":
            case "FR":
            case "PAUSE":
                if (_player.media[N].behavior.base.fastMode === "RTSP") {
                    _player.media[N].behavior.resume();
                }
                _player.media[N].behavior.base.fastMode = "HTTP";
                _player.media[N].behavior.fastForward();
                break;
        };
    };

    _player.onKeyLeft = function (e, N) {
        switch (_player.media[N].behavior.base.flag) {
            case "PLAY":
            case "FF":
            case "FR":
            case "PAUSE":
                if (_player.media[N].behavior.base.fastMode === "RTSP") {
                    _player.media[N].behavior.resume();
                }
                _player.media[N].behavior.base.fastMode = "HTTP";
                _player.media[N].behavior.fastRewind();
                break;
        };
    };

    _player.onKeyPrev = function (e, N) {
        switch (_player.media[N].behavior.base.flag) {
            case "PLAY":
            case "FF":
            case "FR":
                _player.media[N].behavior.gotoStart();
                break;
        };
    };

    _player.onKeyNext = function (e, N) {
        switch (_player.media[N].behavior.base.flag) {
            case "PLAY":
            case "FF":
            case "FR":
                _player.media[N].behavior.gotoEnd("keyEnd");
                break;
        };
    };

    _player.onKeyPause = function (e, N) {
        switch (_player.media[N].behavior.base.flag) {
            case "PLAY":
                if (_player.media[N].behavior.trickMode.onOff !== "on") {
                    return;
                }
                if (bjf.env.type === "iptv" || bjf.env.type === "pc") {
                    //_player.infoToggle();
                    _player.media[N].behavior.pause();
                } else if (bjf.env.type === "ott") {
                    _player.media[N].behavior.pause();
                } else if (bjf.env.type === "ocn") {
                    _player.media[N].behavior.pause();
                }
                break;
            case "PAUSE":
                bjf.player.custom.playmode(N, "pause_end");
                _player.media[N].behavior.resume();
                break;
            case "FF":
                bjf.player.custom.playmode(N, "fastForward_end");
                _player.media[N].behavior.resume();
                break
            case "FR":
                bjf.player.custom.playmode(N, "fastRewind_end");
                _player.media[N].behavior.resume();
                break;
        };
    };

    _player.onKeyMute = function (e, N) {
        switch (_player.media[N].behavior.base.flag) {
            case "PLAY":
            case "PAUSE":
                _player.media[N].behavior.muteToggle();
                break;
        };
    };

    _player.onKeyVolUp = function (e, N) {
        switch (_player.media[N].behavior.base.flag) {
            case "PLAY":
            case "PAUSE":
                _player.media[N].behavior.volFun("+");
                break;
        };
    };

    _player.onKeyVolDown = function (e, N) {
        switch (_player.media[N].behavior.base.flag) {
            case "PLAY":
            case "PAUSE":
                _player.media[N].behavior.volFun("-");
                break;
        };
    };

    _player.onKeyOk = function (e, N) {
        switch (_player.media[N].behavior.base.flag) {
            case "PLAY":
                if (_player.media[N].behavior.trickMode.onOff !== "on") {
                    return;
                }
                if (bjf.env.type === "iptv" || bjf.env.type === "pc") {
                    //_player.infoToggle();
                    _player.media[N].behavior.pause();
                } else if (bjf.env.type === "ott") {
                    _player.media[N].behavior.pause();
                } else if (bjf.env.type === "ocn") {
                    _player.media[N].behavior.pause();
                }
                break;
            case "PAUSE":
                bjf.player.custom.playmode(N, "pause_end");
                _player.media[N].behavior.resume();
                break;
            case "FF":
                _player.media[N].behavior.resume();
                bjf.player.custom.playmode(N, "fastForward_end");
                break;
            case "FR":
                _player.media[N].behavior.resume();
                bjf.player.custom.playmode(N, "fastRewind_end");
                break;
        };
    };

    _player.onKeyBack = function (e, N) {
        switch (_player.media[N].behavior.base.flag) {
            case "PLAY":
                _player.media[N].behavior.goToBack(e);
                break;
            case "PAUSE":
                bjf.player.custom.playmode(N, "pause_end");
                _player.media[N].behavior.resume();
                break;
            case "FF":
                _player.media[N].behavior.resume();
                bjf.player.custom.playmode(N, "fastForward_end");
                break;
            case "FR":
                _player.media[N].behavior.resume();
                bjf.player.custom.playmode(N, "fastRewind_end");
                break;

            case "WAIT":
                _player.media[N].behavior.resume();
                break;
        };
    };
    _player.onKeyAudio = function (e, N) {
        switch (_player.media[N].behavior.base.flag) {
            case "PLAY":
            case "PAUSE":
                _player.media[N].mp.switchAudioChannel();
                var ch_ = _player.media[N].mp.getCurrentAudioChannel();
                bjf.playerUI.audioChannelShow(ch_, N);
                break;
        }
    };

    _player.onKeyVirtual = function () { //768
        _player.virtualEvent.monitor();
    };

    //机顶盒768时间捕捉
    _player.virtualEvent.monitor = function (str_) {
        try {
            if (bjf.env.type === "iptv") {
                var event_ = Utility.getEvent();
            } else if (bjf.env.type === "pc") {
                var event_ = window.top.Utility.getEvent();
            }

            if (str_ === "clear") {
                if (typeof event_ === "undefined" || event_ === "" || event_ === null) {
                    return "clear";
                } else {
                    _player.virtualEvent.monitor("clear");
                    return;
                }
            }

            var eventType_ = "";
            var errorCode_ = 0;
            var instance_id_ = -1;
            var values_ = new Array();
            if (event_ != undefined && event_ != "") {
                values_ = eval("(" + event_ + ")");
                eventType_ = values_["type"];
            }

            //bjf.debug(JSON.stringify(values_));
            //console.log("768:",JSON.stringify(values_),"id:"+values_.instance_id);
            var N = _player.common.getFirstMediaName();

            bjf.player.custom.debugVirtual(N, JSON.stringify(values_));

            var L = _player.common.getMediaLength();
            if (L > 1) {
                N = _player.common.getMediaNameByID(values_.instance_id);
                if (N === "") {
                    N = _player.common.getFirstMediaName();
                }
            }
            if (N === "") {
                return;
            }

            switch (eventType_) {
                case "EVENT_GO_CHANNEL":
                    _player.virtualEvent.dealWithGoChannel(values_, N);
                    break;
                case "EVENT_MEDIA_END":
                    _player.virtualEvent.dealWithMediaEnd(values_, N);
                    break;
                case "EVENT_MEDIA_BEGINING":
                    _player.virtualEvent.dealWithMediaBegin(values_, N);
                    break;
                case "EVENT_MEDIA_ERROR":
                    _player.virtualEvent.dealWithEventMediaError(values_, N);
                    break;
                case "EVENT_PLAYMODE_CHANGE":
                    _player.virtualEvent.dealWithPlayModeChange(values_, N);
                    break;
                case "EVENT_STB_RESTORE":
                    _player.virtualEvent.dealWithSTBRestore(values_, N);
                    break;
                default:
                    break;
            }
        } catch (e) {
            bjf.debug("_player.virtualEvent.monitor function error:" + e);
        }
    };
    _player.virtualEvent.dealWithMediaEnd = function (e, N) { //bjf.debug("768:dealWithMediaEnd 视频结束");
        _player.media[N].behavior.gotoEnd("mediaEnd");
    };
    _player.virtualEvent.dealWithGoChannel = function (e, N) {
        if (_player.media[N].behavior.base.beginFlag === 0) {
            _player.media[N].behavior.begin();
        } else {
            _player.media[N].behavior.resume();
        }
    };
    _player.virtualEvent.dealWithMediaBegin = function (e, N) { //bjf.debug("768:dealWithMediaBegin 视频开始");
        if (_player.media[N].behavior.base.beginFlag === 0) {
            _player.media[N].behavior.begin();
        } else {
            _player.media[N].behavior.resume();
        }
    };
    _player.virtualEvent.dealWithEventMediaError = function (e, N) {
        bjf.playerUI.errorShow(e.type, N);
        bjf.player.custom.virtual(N, "error", e);
    };
    _player.virtualEvent.dealWithPlayModeChange = function (e, N) {
        if (parseInt(e.new_play_mode, 10) === 2 && parseInt(e.new_play_rate, 10) === 1 && _player.media[N].behavior.base.playMode === "TRICKMODE-FF" && _player.media[N].behavior.base.status === "TS" && _player.media[N].behavior.base.fastMode !== "HTTP") { //时移快进到尾无法甄别
            _player.media[N].behavior.reSetPlayState();
        } else if (parseInt(e.new_play_mode, 10) === 2 && parseInt(e.new_play_rate, 10) === 1 && _player.media[N].behavior.base.beginFlag === 0) {
            _player.media[N].behavior.begin();
        } else if ((parseInt(e.new_play_mode, 10) === 2 && parseInt(e.new_play_rate, 10) === 1 && parseInt(e.old_play_mode, 10) === 3 && parseInt(e.old_play_rate, 10) < 0)) { //小红盒子快进到头不会发出MediaBegin的状态，只会ModeChange
            _player.media[N].behavior.resume(); //会导致快退恢复正常，两次resume，但不影响业务
        } else { }
    };
    _player.virtualEvent.dealWithSTBRestore = function (e, N) {
        if (_player.media[N].behavior.base.beginFlag === 0) {
            _player.media[N].behavior.begin();
        }
        bjf.player.custom.virtual(N, "restore", e);
    }

    _player.ott.onBesTVEvent = function (result) {
        if (typeof result === "string") {
            result = eval('(' + result + ')');
        }
        switch (parseInt(result.type)) {
            case 1:
                //bjf.debug("BE_SYSTEM");
                switch (parseInt(result.id)) {
                    case 12:
                        //bjf.debug("ES_MPLAYER_STATUS_CHANGED");
                        //bjf.debug("turnToComponent(current_Mode):" + current_Mode);
                        _player.turnToComponent(current_Mode);
                        break;
                }
                break;
            case 2:
                //bjf.debug("BE_MEDIA");
                switch (parseInt(result.id)) {
                    case 1:
                        //bjf.debug("ES_SYS_NET_FAILED");
                        break;
                    case 2:
                        //bjf.debug("ES_SYS_NET_SUCCESSED");
                        break;
                    case 3:
                        //bjf.debug("ES_SYS_USB_NEW");
                        break;
                    case 4:
                        //bjf.debug("ES_SYS_USB_CLOSE");
                        break;
                    case 5:
                        //bjf.debug("ES_SYS_AUTH_FINISH");
                        break;
                    case 6:
                        //bjf.debug("ES_MPLAYER_STATUS_CHANGED");
                        try {
                            _player.ott.onPlayerStatusChange(result.type, result.param1, result.param2, result.param3, result.param4 || '');
                        } catch (ex) {
                            //bjf.debug(ex);
                        }
                        break;
                    default:
                        break;
                }
                break;
            case 3:
                //bjf.debug("BE_AUTH");
                break;
            case 4:
                //bjf.debug("BE_DOWNLOADER");
                break;
            default:
                //bjf.debug("BE_ERROR_TYPE");
                break;
        }
    };

    _player.ott.onPlayerStatusChange = function (type, param1, param2, param3, param4) {
        switch (parseInt(param1)) {
            case 0:
                //bjf.debug("关闭状态");
                break;
            case 1:
                //bjf.debug("连接媒体服务器中");
                break;
            case 2:
                //bjf.debug("缓冲中");

                bjf.playerUI.loadShow();
                //param3 缓冲进度
                break;
            case 3:
                //bjf.debug("播放中");
                bjf.playerUI.loadHide();
                if (_player.media[_player.mpNameFocus].behavior.base.beginFlag === 0) {
                    _player.media[_player.mpNameFocus].behavior.begin();
                    //param2  总时长
                    //param3 当前播放时间
                    //param4 当播放广告时，返回广告倒计时的秒数；不是广告，返回-1；当播放连播时（id=8），表示当前播放的视频code
                }
                break;
            case 4:
                //bjf.debug("已暂停");
                break;
            case 5:
                //bjf.debug("已停止");
                break;
            case 6:
                //bjf.debug("播放结束");
                _player.media[_player.mpNameFocus].behavior.gotoEnd("mediaEnd");
                break;
            case 7:
                //bjf.debug("seeking中");
                break;
            case 9:
                //bjf.debug("播放出错");
                //param2  出错原因
                //param3 http响应code
                bjf.playerUI.errorShow("play error" + param2 + ",http code:" + param3);
                bjf.player.custom.virtual("", "error");
                break;
        }
    };

    _player.ott.turnToComponent = function (mode) { };

    _player.timeCtrl.getDurTime = function (N) {
        try {
            var o = _player.media[N].behavior;
            if ((_player.media[N].info.type === "CHANNEL" || _player.media[N].info.type === "TIMESHIFT") && (o.base.timeShift === null || o.base.timeShift === 0)) {
                o.base.timeShift = _player.media[N].mp.getMediaDuration();
            } else if ((_player.media[N].info.type === "VOD" || _player.media[N].info.type === "TVOD") && (o.time.VODETime === null || o.time.VODETime === 0)) {
                o.time.VODETime = _player.media[N].mp.getMediaDuration();
            }
        } catch (e) {
            bjf.debug("_player.timeCtrl.getDurTime function error:" + e);
        }
    };

    _player.timeCtrl.getVODTime = function (N) {
        try {
            var o = _player.media[N].behavior.time;
            if (o.VODBTime === null) {
                o.VODBTime = 0;
                o.VODBTimeDis = "00:00:00";
                if (_player.media[N].info.type === "TVOD" && _player.media[N].info.startTime !== 0) {
                    o.VODBTimeDisForUI = _player.timeCtrl.formatTimestampToT(_player.media[N].info.startTime);
                } else {
                    o.VODBTimeDisForUI = o.VODBTimeDis;
                }
            }
            if (o.VODETimeDis === "00:00:00" || o.VODETimeDis === null) {
                o.VODETimeDis = _player.timeCtrl.formatToT(o.VODETime);
                if (_player.media[N].info.type === "TVOD" && _player.media[N].info.startTime !== 0) {
                    o.VODETimeDisForUI = _player.timeCtrl.formatTimestampToT(_player.media[N].info.startTime + o.VODETime * 1000);
                } else {
                    o.VODETimeDisForUI = o.VODETimeDis;
                }
            }
            o.VODCTime = parseInt(_player.media[N].mp.getCurrentPlayTime(), 10);
            o.VODCTimeDis = _player.timeCtrl.formatToT(o.VODCTime);
            if (_player.media[N].info.type === "TVOD" && _player.media[N].info.startTime !== 0) {
                o.VODCTimeDisForUI = _player.timeCtrl.formatTimestampToT(_player.media[N].info.startTime + o.VODCTime * 1000);
            } else {
                o.VODCTimeDisForUI = o.VODCTimeDis;
            }
        } catch (e) {
            bjf.debug("_player.timeCtrl.getVODTime function error:" + e);
        }
    };

    _player.timeCtrl.getTSTVTime = function (N) { //获取时移时间
        try {
            var b = _player.media[N].behavior.base;
            if (b.status !== "TS" && b.status !== "LIVE") {
                return false;
            }
            var o = _player.media[N].behavior.time;

            var tem = 0;
            var tempTime = new Date();
            //机顶盒当前时间 （1970-01-01T01:27:25,375Z UTC时间格式  
            //机顶盒没有和时间服务器同步的时间，19700101系统默认的计算时间的相对标准开始时间）
            var TSBeginTime = new Date(); //开始时间=机顶盒当前时间
            var TSEndTime = new Date(); //结束时间=机顶盒当前时间		
            var shiftime = parseInt(b.timeShift, 10); //时移时间长度 7200秒（2小时）
            var TSShiftTime = shiftime * 1000; //转毫秒
            tem = tempTime.getTime() - TSShiftTime;
            tempTime.setTime(tem); //计算开始时间，以毫秒设置 Date 对象
            TSBeginTime = tempTime;

            o.TSTVBTime = TSBeginTime; //1970-01-01T01:27:25,375Z UTC时间格式
            o.TSTVETime = TSEndTime; //1969-12-31T23:36:38,-22Z UTC时间格式
            var year, month, day, index1, index2, hms, hours, minutes, seconds, dateStr;

            var tempCurTime = _player.timeCtrl.trimStr(_player.media[N].mp.getCurrentPlayTime());
            //获取播放节目的当前时间  第一次19700101T013638Z  第二次20160106T075645Z
            if (tempCurTime.length < 4) {
                o.TSTVCTime = new Date();
            } else {
                tempCurTime = _player.timeCtrl.UTCToDate(tempCurTime);
                tempCurTime = new Date(tempCurTime); //1969-12-31T18:10:06.000Z //把当前时间设为时间对象			
                tempCurTime.setTime(tempCurTime.getTime() - _player.zoneOffset * 60 * 1000);
                o.TSTVCTime = tempCurTime;
                //1970-01-01T02:10:06.000Z
                //480分，8小时时差，返回本地时间与格林威治标准时间 (GMT) 的分钟差
                //GTM时间（格林尼治标准时间），也就是0时区的时间,中国是东8区,所以GMT加上8个小时就是北京时间
            }

            var TSTVCurrTimeS = parseInt(o.TSTVCTime.getTime() / 1000, 10);
            var TSTVBTimeS = parseInt(o.TSTVBTime.getTime() / 1000, 10);
            var TSTVETimeS = parseInt(o.TSTVETime.getTime() / 1000, 10);

            if (TSTVCurrTimeS > TSTVETimeS) { //bjf.debug("当前时间大于结束时间");
                o.TSTVCTime = o.TSTVETime;
            } else if (TSTVCurrTimeS < TSTVBTimeS) {
                o.TSTVCTime = o.TSTVBTime;
            }

            var beginTimeHourDis = _player.timeCtrl.pad(o.TSTVBTime.getHours(), 2);
            var beginTimeMinDis = _player.timeCtrl.pad(o.TSTVBTime.getMinutes(), 2);
            var beginTimeSecDis = _player.timeCtrl.pad(o.TSTVBTime.getSeconds(), 2);
            var beginTimeDis = beginTimeHourDis + ":" + beginTimeMinDis + ":" + beginTimeSecDis;

            var endTimeHourDis = _player.timeCtrl.pad(o.TSTVETime.getHours(), 2);
            var endTimeMinDis = _player.timeCtrl.pad(o.TSTVETime.getMinutes(), 2);
            var endTimeSecDis = _player.timeCtrl.pad(o.TSTVETime.getSeconds(), 2);
            var endTimeDis = endTimeHourDis + ":" + endTimeMinDis + ":" + endTimeSecDis;

            var currentTimeHourDis = _player.timeCtrl.pad(o.TSTVCTime.getHours(), 2);
            var currentTimeMinDis = _player.timeCtrl.pad(o.TSTVCTime.getMinutes(), 2);
            var currentTimeSecDis = _player.timeCtrl.pad(o.TSTVCTime.getSeconds(), 2);
            var currentTimeDis = currentTimeHourDis + ":" + currentTimeMinDis + ":" + currentTimeSecDis;

            o.TSTVBTimeDis = beginTimeDis;
            o.TSTVETimeDis = endTimeDis;
            o.TSTVCTimeDis = currentTimeDis;
        } catch (e) {
            bjf.debug("_player.timeCtrl.getTSTVTime function error" + e);
        }
    };

    _player.timeCtrl.UTCToDate = function (UTCTime) { //19700101T021006Z
        try {
            var year = UTCTime.substring(0, 4);
            var month = UTCTime.substring(4, 6);
            var day = UTCTime.substring(6, 8);
            var index1 = UTCTime.indexOf("T");
            var index2 = UTCTime.length;
            var hms = UTCTime.substring(index1 + 1, index2);
            var hours = hms.substring(0, 2);
            var minutes = hms.substring(2, 4);
            var seconds = hms.substring(4, 6);
            var dateStr = year + "/" + month + "/" + day + " " + hours + ":" + minutes + ":" + seconds;
            //1970/01/01 02:10:06
            return dateStr;
        } catch (e) {
            bjf.debug("_player.timeCtrl.UTCToDate function error:" + e);
        }
    }

    _player.timeCtrl.DateToUTC = function (_date) {
        try {
            var year = _date.getFullYear() + "";
            var month = _player.timeCtrl.pad((_date.getMonth() + 1), 2);
            var day = _player.timeCtrl.pad(_date.getDate(), 2);
            var targetHours = _player.timeCtrl.pad(_date.getHours(), 2);
            var targetMinutes = _player.timeCtrl.pad(_date.getMinutes(), 2);
            var targetSeconds = _player.timeCtrl.pad(_date.getSeconds(), 2);
            var UTCDate = year + month + day + "T" + targetHours + targetMinutes + targetSeconds + "Z"; //2016127T013000Z
            return UTCDate;
        } catch (e) {
            bjf.debug("_player.timeCtrl.DateToUTC function error:" + e);
        }
    }

    _player.timeCtrl.trimStr = function (str) {
        try {
            //去掉字符串前后的空格
            var temInt = parseInt(str, 10);
            if (temInt == -1) {
                return "0";
            } else {
                var str1 = String(str);
                return str1.replace(/(^\s*)|(\s*$)/g, "");
            }
        } catch (e) {
            bjf.debug("_player.timeCtrl.trimStr function error:" + e);
        }
    }

    _player.timeCtrl.formatDate = function (_time) { //2016.01.25 11:30:00 -> 2016/01/25 11:30:00
        try {
            _time = _time.replace(/\./g, "/");
            return _time;
        } catch (e) {
            bjf.debug("_player.timeCtrl.formatDate function error:" + e);
        }
    }

    _player.timeCtrl.formatToT = function (second) { //秒 -> 00:00:00
        try { //24小时内
            if (second > 86399) {
                second = second - 86400;
            } else if (second < 0) {
                second = 86400 + second;
            }

            var hours = parseInt(second / 3600, 10);
            var minutes = parseInt((second - hours * 3600) / 60, 10);
            var seconds = parseInt(second % 60, 10);
            var temp = _player.timeCtrl.pad(hours, 2) + ":" + _player.timeCtrl.pad(minutes, 2) + ":" + _player.timeCtrl.pad(seconds, 2);
            return temp;
        } catch (e) {
            bjf.debug("_player.timeCtrl.formatToT function error:" + e);
        }
    }

    _player.timeCtrl.formatTimestampToT = function (t) { //8时区时间戳毫秒 -> 00:00:00
        try {
            var T = new Date(t);
            var hours = _player.timeCtrl.pad(T.getHours(), 2);
            var minutes = _player.timeCtrl.pad(T.getMinutes(), 2);
            var seconds = _player.timeCtrl.pad(T.getSeconds(), 2);
            var temp = hours + ":" + minutes + ":" + seconds;
            return temp;
        } catch (e) {
            bjf.debug("_player.timeCtrl.formatTimestampToT function error:" + e);
        }
    }

    _player.timeCtrl.formatToS = function (t_) { //00:00:00 ->  s
        try {
            if (!t_) {
                throw 'timelength is empty';
            }
            var arr_ = t_.split(":");
            var s_ = parseInt(arr_[0], 10) * 3600 + parseInt(arr_[1], 10) * 60 + parseInt(arr_[2], 10);
            return s_;
        } catch (e) {
            bjf.debug("_player.timeCtrl.formatToS function error:" + e);
            return 0;
        }
    }

    _player.timeCtrl.pad = function (num, n) {
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
            bjf.debug("_player.timeCtrl.pad function error:" + e);
        }
    };

    _player.common.getMediaNameByID = function (id_) {
        for (var i in _player.media) {
            if (_player.media[i].info.ID === id_) {
                return _player.media[i].info.name
            }
        }
        return "";
    };

    _player.common.getFirstMediaName = function () {
        var N = "";
        var j = 0;
        for (var i in _player.media) {
            if (j === 0) {
                N = _player.media[i].info.name;
            }
        }
        return N;
    };

    _player.common.getMediaLength = function () {
        var len = 0;
        for (var i in _player.media) {
            len++;
        }
        return len;
    };

    _player.common.mediaExistByName = function (N) {
        for (var i in _player.media) {
            if (_player.media[i].info.name === N) {
                return "Y"
            }
        }
        return "N";
    };

    _player.common.setFocusMP = function (N) {
        if (_player.common.mediaExistByName(N) === "N") {
            return;
        }
        _player.mpNameFocus = N;
    };

    _player.common.releasePlay = function (N) {
        _player.media[N].behavior.stopPlay();

        var i = _player.media[N].mp.releaseMediaPlayer(_player.media[N].info.ID); //释放终端MediaPlayer的对象，结束对应MediaPlayer的生命周期
        if (N === _player.mpNameFocus) {
            _player.mpNameFocus = "";
        }
        delete _player.media[N];
    };
    _player.common.refreshVideoDisplay = function () {
        _player.media[N].mp.refreshVideoDisplay();
    };

    w_.bjf.player = {};

    //UI
    w_.bjf.playerUI = {};
    w_.bjf.playerUI.setNewWin = function () { };
    w_.bjf.playerUI.setDisplayArea = function () { };
    w_.bjf.playerUI.setPageViewSize = function () { };
    w_.bjf.playerUI.infoShow = function () { };
    w_.bjf.playerUI.infoHide = function () { };
    w_.bjf.playerUI.infoTxtShow = function () { };
    w_.bjf.playerUI.infoTxtHide = function () { };
    w_.bjf.playerUI.speedShow = function () { };
    w_.bjf.playerUI.speedHide = function () { };
    w_.bjf.playerUI.speedShowHttp = function () { };
    w_.bjf.playerUI.TSShow = function () { };
    w_.bjf.playerUI.TvodHide = function () { };
    w_.bjf.playerUI.TvodShow = function () { };
    w_.bjf.playerUI.TSHide = function () { };
    w_.bjf.playerUI.errorShow = function () { };
    w_.bjf.playerUI.errorHide = function () { };
    w_.bjf.playerUI.volShow = function () { };
    w_.bjf.playerUI.volHide = function () { };
    w_.bjf.playerUI.muteShow = function () { };
    w_.bjf.playerUI.muteHide = function () { };
    w_.bjf.playerUI.pauseShow = function () { };
    w_.bjf.playerUI.pauseHide = function () { };
    w_.bjf.playerUI.loadShow = function (N) { };
    w_.bjf.playerUI.loadHide = function (N) { };
    w_.bjf.playerUI.audioChannelShow = function () { };
    w_.bjf.playerUI.releaseWin = function () { };
    w_.bjf.playerUI.hideWin = function () { };
    w_.bjf.playerUI.setErrorShow = function () { };
    w_.bjf.playerUI.setRate = function () { };
    w_.bjf.playerUI.setCastRoles = function () { };
    w_.bjf.playerUI.setImagePath = function () { };
    w_.bjf.playerUI.setLoadShow = function () { };
    w_.bjf.playerUI.setLoadTxtShow = function () { };
    w_.bjf.playerUI.setLoadImgShow = function () { };
    w_.bjf.playerUI.setSpeedTxtShow = function () { };
    w_.bjf.playerUI.setSpeedBarShow = function () { };
    w_.bjf.playerUI.setAllUIShow = function () { };
    w_.bjf.playerUI.setUIShow = function () { };
    w_.bjf.playerUI.setVolUIShow = function () { };
    w_.bjf.playerUI.setTSUIShow = function () { };
    w_.bjf.playerUI.setTvodUIShow = function () { };
    w_.bjf.playerUI.setVolUIStyle = function () { };
    w_.bjf.playerUI.setTitle = function () { };
    w_.bjf.playerUI.setTipPath = function () { };

    //插件接口
    w_.bjf.player.plugin = {};
    w_.bjf.player.plugin.playmode = function (N, s) { };

    //自定义
    w_.bjf.player.custom = {};
    w_.bjf.player.custom.playmode = function (N, s) { };
    w_.bjf.player.custom.virtual = function (N, s, e) { };
    w_.bjf.player.custom.debugVirtual = function (N, str) { };

    //开放接口
    w_.bjf.player.video = function (N, ID, type_, env_) {
        var i = _player.common.mediaExistByName(N);
        if (i === "Y") {
            return;
        }
        this.name = N;
        _player.common.setNewMP(N, ID, type_, env_);
        bjf.playerUI.setNewWin(N);
    };

    w_.bjf.player.video.prototype.getInstanceID = function () {
        var N = this.name;
        return _player.media[N].info.ID;
    };

    w_.bjf.player.video.prototype.getName = function () {
        var N = this.name;
        return N;
    };

    w_.bjf.player.video.prototype.setDisplayArea = function (w_, h_, t_, l_) {
        var N = this.name;
        _player.media[N].info.area = {};
        _player.media[N].info.area.w = parseInt(w_, 10);
        _player.media[N].info.area.h = parseInt(h_, 10);
        _player.media[N].info.area.t = parseInt(t_, 10);
        _player.media[N].info.area.l = parseInt(l_, 10);
        bjf.playerUI.setDisplayArea(w_, h_, t_, l_, this.name);
    };

    w_.bjf.player.video.prototype.setPageViewSize = function (w_, h_, t_, l_) {
        var N = this.name;
        _player.media[N].info.page = {};
        _player.media[N].info.page.w = parseInt(w_, 10);
        _player.media[N].info.page.h = parseInt(h_, 10);
        _player.media[N].info.page.t = parseInt(t_, 10);
        _player.media[N].info.page.l = parseInt(l_, 10);
    };

    w_.bjf.player.video.prototype.setPlayUrl = function (u_, t_, c_) { //c_ 直播是频道号，点播是mediacode
        if (typeof u_ === "undefined" || u_ === "undefined" || u_ === null || u_ === "null" || u_ === "") {
            return;
        }
        var N = this.name;
        var o_ = _player.media[N].info;
        if (typeof t_ !== "undefined" && t_ !== "" && t_ !== null && (t_ === "CHANNEL" || t_ === "TIMESHIFT" || t_ === "VOD" || t_ === "TVOD")) {
            o_.type = t_;
        } else {
            o_.type = "";
        }

        if (o_.type === "") {
            if (!isNaN(parseInt(u_, 10)) || u_.indexOf("mediaId://") !== -1) {
                o_.type = "CHANNEL";
            } else if (bjf.env.type === "ocn" && -1 < u_.indexOf("dvb://")) {
                o_.type = "CHANNEL";
            } else {
                o_.type = "VOD"
            }
        }

        if (o_.type === "CHANNEL") {
            if (!isNaN(u_)) {
                o_.mixNo = parseInt(u_, 10);
            } else if (u_.indexOf("mediaId://") !== -1) {
                o_.mixNo = parseInt(u_.substring(10, u_.length), 10);
            } else {
                o_.mixNo = "";
            }
        }

        if (typeof c_ !== "undefined" && c_ !== "" && c_ !== null) {
            o_.mediaCode = c_;
        } else {
            o_.mediaCode = "";
        }
        if (typeof u_ !== "undefined" && u_ !== "" && u_ !== null) {
            o_.playUrl = u_;
        } else {
            o_.playUrl = "";
        }
    };

    w_.bjf.player.video.prototype.start = function (t_, s_, k_, ottext_) {
        var N = this.name;
        var o = _player.media[N].behavior;
        o.base.beginFlag = 0;
        o.base.timeShift = null;
        o.time.TSTVBTime = null;
        o.time.TSTVBTimeDis = null;
        o.time.TSTVETime = null;
        o.time.TSTVETimeDis = null;
        o.time.TSTVCTime = null;
        o.time.TSTVCTimeDis = null;
        o.time.VODBTime = null;
        o.time.VODBTimeDis = null;
        o.time.VODBTimeDisForUI = null;
        o.time.VODETime = null;
        o.time.VODETimeDis = null;
        o.time.VODETimeDisForUI = null;
        o.time.VODCTime = null;
        o.time.VODCTimeDis = null;
        o.time.VODCTimeDisForUI = null;

        var t = null;
        if (arguments.length > 0) {
            t_ = parseInt(t_, 10);
            if (isNaN(t_)) {
                t_ = null;
            }
            if (t_ < 1) {
                t_ = null;
            }
            t = t_;
        }

        if (_player.media[N].info.type === "CHANNEL" || _player.media[N].info.type === "TIMESHIFT") {
            o.base.timeShift = t;
        } else {
            o.time.VODETime = t;
        }

        _player.common.start(N, s_, k_, ottext_);

        if (bjf.env.type === "iptv" || bjf.env.type === "pc") {
            o.volCtrl = "true";
        } else if (bjf.env.type === "ott") {
            o.volCtrl = "false";
        } else if (bjf.env.type === "ocn") {
            o.volCtrl = "true";
        }
    };

    w_.bjf.player.video.prototype.forcePlayerToBegin = function () {
        var N = this.name;
        _player.media[N].behavior.base.beginFlag = 0;
        // bjf.debug(this.name,'begin');
        _player.media[N].behavior.begin();
    };

    w_.bjf.player.video.prototype.videoShow = function () {
        var N = this.name;

        if (bjf.env.type === "iptv") {
            _player.media[N].behavior.volCtrl = "true";
        } else if (bjf.env.type === "ott") {
            _player.media[N].behavior.volCtrl = "false";
        } else if (bjf.env.type === "ocn") {
            _player.media[N].behavior.volCtrl = "false";
        }
        _player.common.videoDisplay(N);
        _player.media[N].mp.resume();
        _player.media[N].behavior.base.videoShowFlag = "block";

        if ((_player.media[N].info.PIP !== "Y" && _player.media[N].info.mosaic !== "Y") || (_player.media[N].info.mosaic === "Y" && _player.media[N].info.mosaicVoice === "on")) {
            var i = parseInt(_player.media[N].mp.getMuteFlag(), 10); //0有声
            var v = _player.media[N].mp.getVolume();
            if (i !== 0 || v < 0) {
                _player.media[N].behavior.muteSet("on");
            }
        }
    };

    w_.bjf.player.video.prototype.videoHide = function () {
        var N = this.name;
        _player.media[N].behavior.base.videoShowFlag = "hidden";
        _player.media[N].mp.pause(); //小红暂停后_player.videoDisplay就无效了？？？存疑
        _player.media[N].behavior.volCtrl = "false";
        _player.media[N].mp.setVideoDisplayMode(255);
        _player.media[N].mp.refreshVideoDisplay();
        bjf.playerUI.hideWin(N);
    };

    w_.bjf.player.video.prototype.setMute = function (s) {
        var N = this.name;
        if ((_player.media[N].info.PIP !== "Y" && _player.media[N].info.mosaic !== "Y") || (_player.media[N].info.mosaic === "Y" && _player.media[N].info.mosaicVoice === "on")) {
            if (s === "on") {
                _player.media[N].behavior.muteSet("on");
            } else {
                _player.media[N].behavior.muteSet("off");
            }
        }
    };

    w_.bjf.player.video.prototype.getMute = function () {
        var N = this.name;
        var s = "off"; //有声
        var i = _player.media[N].mp.getMuteFlag(); //0有声
        if (i === 1) {
            s = "on";
        } else if (i === 0) {
            s = "off";
        } else {
            s = "none";
        }
        return s;
    };

    w_.bjf.player.video.prototype.setVol = function (v) {
        var N = this.name;
        var v = parseInt(v, 10);
        _player.media[N].behavior.volFun2(v);
    };

    w_.bjf.player.video.prototype.getVol = function () {
        var N = this.name;
        var v = parseInt(_player.media[N].mp.getVolume(), 10);
        return v;
    };

    w_.bjf.player.video.prototype.setPlayTime = function (t_) {
        _player.media[this.name].info.playTime = parseInt(t_, 10);
    };

    w_.bjf.player.video.prototype.setTvodStartTime = function (t_) { //为8时区时间戳，单位为毫秒
        var t = parseInt(t_, 10);
        if (isNaN(t) || t <= 0) {
            return;
        }
        var now = new Date();
        var d = now.getTime() - t;
        if (d < 0 || d > 3600 * 24 * 1000 * 10) {
            return; //10天内
        }
        _player.media[this.name].info.startTime = t;
    };

    w_.bjf.player.video.prototype.playByTime = function (t_, force_, type_) {
        if (type_ !== "Date") {
            t_ = parseInt(t_, 10);
        }
        _player.media[this.name].behavior.playByTime(t_, force_, type_);
    };

    w_.bjf.player.video.prototype.gotoTime = function (s) {
        var N = this.name;
        if (s === "start") {
            _player.onKeyPrev(null, N);
        } else if (s === "end") {
            _player.onKeyNext(null, N);
        }
    };

    w_.bjf.player.video.prototype.setTrickMode = function (f_) {
        var N = this.name;
        if (f_ === "on") {
            _player.media[N].behavior.trickMode.onOff = "on";
        } else {
            _player.media[N].behavior.trickMode.onOff = "off";
        }
    };

    w_.bjf.player.video.prototype.getTrickMode = function () {
        var N = this.name;
        if (_player.media[N].behavior.trickMode.onOff !== "on") {
            return "off";
        } else {
            return "on";
        }
    };

    w_.bjf.player.video.prototype.setHttpTime = function (t1_, t2_, t3_) {
        //t1,t2单位为秒,t3为毫秒
        var N = this.name;
        var t1 = parseInt(t1_, 10);
        var t2 = parseInt(t2_, 10);
        var t3 = parseInt(t3_, 10);
        if (t1 > t2) {
            t1 = t2;
        }
        _player.media[N].behavior.trickMode.httpTime1 = t1;
        _player.media[N].behavior.trickMode.httpTime2 = t2;
        _player.media[N].behavior.trickMode.httpLazyTime = t3;
    };

    w_.bjf.player.video.prototype.setInitVol = function (s) {
        var N = this.name;
        if (s === "on") {
            _player.media[N].behavior.initVol = "on"; //有声处理
        } else if (s !== "on") {
            _player.media[N].behavior.initVol = "off"; //静音处理
        } else {
            _player.media[N].behavior.initVol = null;
        }
    };

    w_.bjf.player.video.prototype.setMosaicVoice = function (s) {
        var N = this.name;
        if (s === "on") {
            _player.media[N].info.mosaicVoice = "on"; //马赛克窗有声处理
        } else {
            _player.media[N].info.mosaicVoice = "off";
        }
    };

    w_.bjf.player.video.prototype.getPlayStatus = function () {
        var N = this.name;
        return _player.media[N].behavior.base.flag;
    };

    w_.bjf.player.video.prototype.getPlayType = function () {
        var N = this.name;
        return _player.media[N].behavior.base.status;
    };

    w_.bjf.player.video.prototype.resume = function () {
        var N = this.name;
        _player.media[N].behavior.resume();
    };

    w_.bjf.player.video.prototype.setUITitle = function (title_, fontSize_, colour_) {
        bjf.playerUI.setTitle(title_, fontSize_, colour_, this.name);
    };

    w_.bjf.player.video.prototype.setUIRate = function (s_, fontSize_, colour_) {
        bjf.playerUI.setRate(s_, fontSize_, colour_, this.name);
    };

    w_.bjf.player.video.prototype.setUICastRoles = function (s_, fontSize_, colour_) {
        bjf.playerUI.setCastRoles(s_, fontSize_, colour_, this.name);
    };

    w_.bjf.player.video.prototype.setUIImagePath = function (P) {
        bjf.playerUI.setImagePath(P, this.name);
    };

    w_.bjf.player.video.prototype.setUIErrorShow = function (s_) {
        bjf.playerUI.setErrorShow(s_, this.name);
    };

    w_.bjf.player.video.prototype.setUILoadShow = function (s_) {
        bjf.playerUI.setLoadShow(s_, this.name);
    };

    w_.bjf.player.video.prototype.setUILoadTxtShow = function (s_) {
        bjf.playerUI.setLoadTxtShow(s_, this.name);
    };

    w_.bjf.player.video.prototype.setUILoadImgShow = function (s_) {
        bjf.playerUI.setLoadImgShow(s_, this.name);
    };

    w_.bjf.player.video.prototype.setUITipPath = function (s_) {
        bjf.playerUI.setTipPath(s_, this.name);
    };

    w_.bjf.player.video.prototype.setUISpeedTxtShow = function (s_) {
        bjf.playerUI.setSpeedTxtShow(s_, this.name);
    };

    w_.bjf.player.video.prototype.setUISpeedBarShow = function (s_) {
        bjf.playerUI.setSpeedBarShow(s_, this.name);
    };

    w_.bjf.player.video.prototype.setUIAllShow = function (s_) {
        bjf.playerUI.setAllUIShow(s_, this.name);
    };

    w_.bjf.player.video.prototype.setUIShow = function (s_) {
        bjf.playerUI.setUIShow(s_, this.name);
    };

    w_.bjf.player.video.prototype.setUIVolShow = function (s_) {
        bjf.playerUI.setVolUIShow(s_, this.name);
    };

    w_.bjf.player.video.prototype.setUITSShow = function (s_) {
        bjf.playerUI.setTSUIShow(s_, this.name);
    };

    w_.bjf.player.video.prototype.setUITvodShow = function (s_) {
        bjf.playerUI.setTvodUIShow(s_, this.name);
    };

    w_.bjf.player.video.prototype.setUIVolStyle = function (s_) {
        bjf.playerUI.setVolUIStyle(s_, this.name);
    };

    w_.bjf.player.video.prototype.speedInfoShow = function (t) {
        var N = this.name;
        if (typeof t !== "undefined" && t !== null && t !== "" && !isNaN(parseInt(t, 10))) {
            t = parseInt(t, 10);
            t = t < 0 ? 0 : t;
            _player.media[N].behavior.infoShow(t);
        } else _player.media[N].behavior.infoShow();
    };

    w_.bjf.player.video.prototype.speedInfoHide = function () {
        var N = this.name;
        bjf.playerUI.infoHide(N);
    };

    w_.bjf.player.video.prototype.rePlay = function () {
        _player.media[this.name].behavior.gotoStart();
    };

    w_.bjf.player.video.prototype.release = function () {
        var N = this.name;
        if (_player.common.mediaExistByName(N) === "N") return;
        _player.common.releasePlay(N);
        bjf.playerUI.releaseWin(N);
    };

    w_.bjf.player.video.prototype.stopPlay = function () {
        var N = this.name;
        _player.media[N].behavior.stopPlay();
    };

    w_.bjf.player.video.prototype.setFocusVideo = function () {
        _player.common.setFocusMP(this.name);
    };

    w_.bjf.player.video.prototype.hideUI = function (str) {
        var N = this.name;
        bjf.playerUI.hideWin(N, str);
        bjf.player.custom.playmode(N, "hideUI");
    };

    w_.bjf.player.video.prototype.getCurTime = function () {
        var N = this.name;
        if (_player.media[N].behavior.base.status === "LIVE" || _player.media[N].behavior.base.status === "TS") {
            _player.timeCtrl.getTSTVTime(N);
            return _player.media[N].behavior.time.TSTVCTime;
        } else {
            _player.timeCtrl.getVODTime(N);
            return _player.media[N].behavior.time.VODCTime;
        }
    };

    w_.bjf.player.video.prototype.getDurTime = function () {
        var N = this.name;
        if (_player.media[N].behavior.base.status === "LIVE" || _player.media[N].behavior.base.status === "TS") {
            if (_player.media[N].behavior.base.timeShift === null || _player.media[N].behavior.base.timeShift === 0) _player.timeCtrl.getDurTime(N);
            return _player.media[N].behavior.base.timeShift;
        } else {
            if (_player.media[N].behavior.time.VODETime === null || _player.media[N].behavior.time.VODETime === 0) _player.timeCtrl.getDurTime(N);
            return _player.media[N].behavior.time.VODETime;
        }
    };

    w_.bjf.player.video.prototype.fast = function (r) {
        var N = this.name;
        r = parseInt(r, 10);
        if (r === 0) return;
        if (r !== 2 && r !== 4 && r !== 8 && r !== 16 && r !== 32 && r !== -2 && r !== -4 && r !== -8 && r !== -16 && r !== -32) return;
        if (r > 0) _player.onKeyFF(null, N, r);
        else _player.onKeyFR(null, N, r);
    };

    w_.bjf.player.video.prototype.pause = function (force_, noUI_) {
        var N = this.name;
        if (bjf.env.type === "iptv" || bjf.env.type === "pc") {
            _player.media[N].behavior.pause(force_);
        } else {
            if (bjf.env.type === "ott") {
                _player.media[N].behavior.pause(force_, noUI_);
            } else if (bjf.env.type === "ocn") {
                _player.media[N].behavior.pause(force_, noUI_);
            }
        }
    };

    //通用接口
    w_.bjf.player.clearVirtualEvent = function () { //仅适用于Q22
        _player.virtualEvent.monitor("clear");
    };

    w_.bjf.player.getFocusVideo = function (n_) {
        return _player.mpNameFocus;
    };

    //ott
    w_.bjf.player.onBesTVEvent = function (result) {
        _player.ott.onBesTVEvent(result);
    };

    w_.bjf.player.onKey = function (value_, e) {
        try {
            var N = _player.mpNameFocus;
            // bjf.debug("键值：" +value_+" "+N);
            //console.log("键值：" +value_+" "+N);
            if (N === "" && value_ !== "Virtual") return;
            if (_player.common.mediaExistByName(N) === "N" && value_ !== "Virtual") return;
            if (N !== "" && _player.media[N].info.PIP === "Y" && (value_ === "Mute" || value_ === "VolUp" || value_ === "VolDown")) return;
            if (N !== "" && _player.media[N].info.mosaic === "Y" && _player.media[N].info.mosaicVoice !== "on" && (value_ === "Mute" || value_ === "VolUp" || value_ === "VolDown")) return;
            if ((value_ !== "Mute" && value_ !== "VolUp" && value_ !== "VolDown" && value_ !== "Virtual") && _player.media[N].behavior.trickMode.onOff !== "on") return;
            if (typeof _player["onKey" + value_] !== "undefined") _player["onKey" + value_](e, N);
        } catch (e) {
            bjf.debug(e);
        }

    };

    w_.bjf.remoter.onKeyVirtual(function (e) {
        bjf.player.onKey('Virtual', e);
    });
    if (bjf.env.type === "ocn") {
        document.onsystemevent = function () {
            var _code = event.which;
            //TODO 此处使用第一个媒体播放器,默认OCN环境只有一个播放器,若是哪天OCN环境也有多个播放器了,那此处可能有风险.
            var N = _player.common.getFirstMediaName();
            switch (_code) {
                case 13001: // url valid msg 播放地址合法信令
                    _player.ocnPlayCallback();//获取正确播放地址后，播放器再播放
                    break;
                case 13002:
                    _player.virtualEvent.dealWithEventMediaError({ type: 'MSG_MEDIA_URL_INVALID', error_code: '13002' }, N);
                    break;
                case 13003: // 开始播放
                    _player.virtualEvent.dealWithMediaBegin({}, N);
                    break;
                case 13004:
                    _player.virtualEvent.dealWithEventMediaError({ type: 'MSG_MEDIA_PLAY_FAILED', error_code: '13004' }, N);
                    break;
                case 13005:
                    _player.media[N].behavior.reSetPlayState();
                    break;
                case 13006:
                    _player.virtualEvent.dealWithEventMediaError({ type: 'MSG_MEDIA_SETPACE_FAILED', error_code: '13006' }, N);
                    break;
                case 13007: //seek成功
                    break;
                case 13008:
                    _player.virtualEvent.dealWithEventMediaError({ type: 'MSG_MEDIA_SEEK_FAILED', error_code: '13008' }, N);
                    break;
                case 13009:  //暂停成功
                    break;
                case 13010:
                    _player.virtualEvent.dealWithEventMediaError({ type: 'MSG_MEDIA_PAUSE_FAILED', error_code: '13010' }, N);
                    break;
                case 13011:
                    _player.media[N].behavior.resume();
                    break;
                case 13012:
                    _player.virtualEvent.dealWithEventMediaError({ type: 'MSG_MEDIA_RESUME_FAILED', error_code: '13012' }, N);
                    break;
                case 13013:  //停止播放 (文档有问题，13051为播放结束)
                    break;
                case 13014:
                    _player.virtualEvent.dealWithEventMediaError({ type: 'MSG_MEDIA_STOP_FAILED', error_code: '13014' }, N);
                    break;
                case 13051: // play end msg 播放结束信令
                    _player.virtualEvent.dealWithMediaEnd({}, N);
                    break;
                case 2307:// 黄键 全屏/非全屏切换
                    break;
            };
            bjf.player.custom.debugVirtual(N, '{"type":"OCN_EVENT", "CODE":"' + _code + '"}');
        }
    }

    //以下一行是自动打包脚本识别的特殊tag注释，勿改勿删
    //--------------------BuildTagEnd------------------
})(window);