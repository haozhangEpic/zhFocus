/**
 *
 * @auth    derong.zeng 20170515
 * @charset utf-8
 * @indent  空格*4
 * @depend  bjf.base,bjf.remoter
 */

(function (w_) {
    if (!window.bjf) {
        new Error('depend bjf.base!');
        return;
    }
    /**
     * Volume 音量控制
     */
    var Volume = {
        _getManager : function () {
            if (!this.mp) {
                if (!top.mp) {
                    var _i = document.getElementsByTagName('iframe');
                    if (0 == _i.length) {
                        return null;
                    }
                    var _w = _i[0].contentWindow;
                    if (!_w.mp) {
                        return null;
                    }
                    this.mp = _w.mp;
                }
                else {
                    this.mp = top.mp;
                }
            }
            return this.mp;
        },
        mute : function () {
            if(typeof(muteByEPG) == "function") {
                return muteByEPG();
            }
            else if ('undefined' != typeof(smarty_trailer_if_smallvod) && smarty_trailer_if_smallvod.muteByEPG) {
                return smarty_trailer_if_smallvod.muteByEPG();
            }
            else {
                var _mp = this._getManager();
                if (!_mp) {
                    return false;
                }
                var flag = _mp.getMuteFlag() > 0 ? 0 : 1;
                _mp.setMuteFlag(flag);
                return true;
            }
        },
        turnUp : function () {
            if(typeof(adjustVolumeByEPG) == "function") {
                return adjustVolumeByEPG('+');
            }
            else if ('undefined' != typeof(smarty_trailer_if_smallvod) && smarty_trailer_if_smallvod.adjustVolumeByEPG) {
                return smarty_trailer_if_smallvod.adjustVolumeByEPG('+');
            }
            else {
                var _mp = this._getManager();
                if (!_mp) {
                    return false;
                }
                var _curr_vol = _mp.getVolume(),
                    _dest_vol = _curr_vol + 5;
                if (100 < _dest_vol) {
                    _dest_vol = 100;
                }
                _mp.setVolume(_dest_vol);
                return true;
            }
        },
        turnDown : function () {
            if(typeof(adjustVolumeByEPG) == "function") {
                return adjustVolumeByEPG('-');
            }
            else if ('undefined' != typeof(smarty_trailer_if_smallvod) && smarty_trailer_if_smallvod.adjustVolumeByEPG) {
                return smarty_trailer_if_smallvod.adjustVolumeByEPG('-');
            }
            else {
                var _mp = this._getManager();
                if (!_mp) {
                    return false;
                }
                var _curr_vol = _mp.getVolume(),
                    _dest_vol = _curr_vol - 5;
                if (0 > _dest_vol) {
                    _dest_vol = 0;
                }
                _mp.setVolume(_dest_vol);
                return true;
            }
        }
    };
    
    bjf.remoter.setDefaultHandler('KeyVolUp', function () {
        Volume.turnUp();
    });
    
    bjf.remoter.setDefaultHandler('KeyVolDown', function () {
        Volume.turnDown();
    });
    
    bjf.remoter.setDefaultHandler('KeyMute', function () {
        Volume.mute();
    });
}(window));