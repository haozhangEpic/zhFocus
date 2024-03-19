/**
 * @auth    xiao.yingzhu 20170526
 * @charset utf-8
 * feature 声音渐强功能
**/
var volFadIn = {
	v1 : 0,
	step : 5,
	time : 100,
	timer : null,
	video : {},
	switch : "off",
};

volFadIn.start = function(v0){
	clearTimeout(volFadIn.timer);
	volFadIn.timer = null;
	var v_ = v0 + volFadIn.step;
	if (v_ < volFadIn.v1) {
		v0 = v_;
		window[volFadIn.video].setVol(v_);
		if( volFadIn.switch !== "on" ) return;
		volFadIn.timer = setTimeout(function() {
			volFadIn.start(v0);
		},volFadIn.time);
	} else {
		window[volFadIn.video].setVol(volFadIn.v1);
	}
};

volFadIn.setVideo = function(o){
	volFadIn.video = o;
};

volFadIn.setPara = function(step,time){
	volFadIn.step = step;
	volFadIn.time = time;
};

volFadIn.setSwitch = function(str){
	if( str === "on" ) volFadIn.switch = "on";
	else volFadIn.switch = "off";
};

bjf.player.plugin.begin = function(){
	if( volFadIn.switch === "on" ){
		volFadIn.v1 = window[volFadIn.video].getVol();
		window[volFadIn.video].setVol(0);
		volFadIn.start(0);
	}
};