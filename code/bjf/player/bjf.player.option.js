/**
 * @auth    xiao.yingzhu 20170526
 * @charset utf-8
 * feature 连续剧，纪录片呼出选集面板
**/
var option = {
	show : "false",
};

option.show = function(){
	option.show = "true";
};

option.hide = function(){
	option.show = "false";
};

bjf.remoter.onKeyUp(function(e) {
	if( vod.getPlayStatus() === "PLAY" ){
		vod.setTrickMode("off");
		option.show();
	}
});

bjf.remoter.onKeyDown(function(e) {
	if( vod.getPlayStatus() === "PLAY" ){
		vod.setTrickMode("off");
		option.show();
	}
});

bjf.remoter.onKeyBack(function(e) {
	if( option.show === "true" ){
		vod.setTrickMode("on");	
		option.hide();
	}
});