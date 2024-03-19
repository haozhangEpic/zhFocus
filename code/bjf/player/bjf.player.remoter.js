/**
 * @auth    xiao.yingzhu 20170526
 * @charset utf-8
 * feature player模块键值响应，页面可参照这个格式调用player的键值响应
 **/
bjf.remoter.onKeyFf(function(e){
	bjf.player.onKey('FF', e);
});
	
bjf.remoter.onKeyFr(function(e){
	bjf.player.onKey('FR', e);
});
                
bjf.remoter.onKeyRight(function(e){
	bjf.player.onKey('Right', e);
});
    
bjf.remoter.onKeyLeft(function(e){
	bjf.player.onKey('Left', e);
});

bjf.remoter.onKeyOk(function(e){
	bjf.player.onKey('Ok', e);
});

bjf.remoter.onKeyPrev(function(e){
	bjf.player.onKey('Prev', e);
});
    
bjf.remoter.onKeyNext(function(e){
	bjf.player.onKey('Next', e);
});

bjf.remoter.onKeyPause(function(e){
	bjf.player.onKey('Pause', e);
});

bjf.remoter.onKeyMute(function(e){
	bjf.player.onKey('Mute', e);
});

bjf.remoter.onKeyVolUp(function(e){
	bjf.player.onKey('VolUp', e);
});

bjf.remoter.onKeyVolDown(function(e){
	bjf.player.onKey('VolDown', e);
});

bjf.remoter.onKeyBack(function(e){
	bjf.player.onKey('Back', e);
});

bjf.remoter.onKeyAudio(function(e){
	bjf.player.onKey('Audio', e);
});