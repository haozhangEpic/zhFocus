/**
 * @auth    xiao.yingzhu 20170526
 * @charset utf-8
 * feature 视频开始和结束的时候发送visLog日志
**/
var visLog = {
	url : "",
	paraFixed : {},
	paraUnfixed : {},
};
visLog.send = function(s_) {
	//发送vis日志
	try {
		var url = visLog.url;
		url = (typeof url === "undefined" || url === null || url === "") ? bjf.storage.get("visLogUrl") : url;
		if (typeof url === "undefined" || url === null || url === "") return;

		var str1 = "";
		var num1 = 0;
		for (var p1 in visLog.paraFixed) {
			str1 = str1 + "&" + p1 + "=" + visLog.paraFixed[p1];
			num1++;
		}

		var str2 = "";
		var num2 = 0;
		for (var p2 in visLog.paraUnfixed) {
			str2 = str2 + "&" + p2 + "=" + visLog.paraUnfixed[p2];
			num2++;
		}
		
		if( num1 === 0 && num2 === 0 ) return;

		url = encodeURI(url + "?a=" + s_ + str1 + str2);

		if (bjf.$("#visLogImg") === null) {
			var imgNode = document.createElement("img");
			imgNode.id = "visLogImg";
			imgNode.src = url;
			document.body.appendChild(imgNode);
		} else {
			bjf.$("#visLogImg").src = url;
		}
	} catch(e) {
		bjf.debug("visLog.send function error");
	}
};

visLog.setUrl = function(str_) {
	//设置vis日志服务器url		
	visLog.url = str_;
	bjf.storage.set("visLogUrl",str_);
};

visLog.setParaFixed = function(obj_) {
	//用于设置单页面固定的上下文的环境参数，参数传递的是对象
	visLog.paraFixed = obj_;
};

visLog.setParaUnfixed = function(obj_) {
	//用于设置在连播，或者节目单环境下，类似mediacode这类在单页面会变化的参数，参数传递的是对象
	visLog.paraUnfixed = obj_;
};

bjf.player.plugin.begin = function(){
	visLog.send("playstart");
};

bjf.player.plugin.end = function(){
	visLog.send("playend");
};