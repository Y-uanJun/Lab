define(function () { // 参数是 dc
	var str = location.search;
	str = str.substring(1,str.length);
	
	// 以&字符串分割字符，获得类似 dc = 123 这样的元素数组
	var arr = str.split("&");
	var obj = {};

	// 将每一个数组元素以 =  分割开并且赋值给obj对象
	for (var i = 0,len = arr.length; i < len; i ++) {
		var temp = arr[i].split("=");
		obj[decodeURIComponent(temp[0])] = decodeURIComponent(temp[1]);
	}
	return obj['dc'];  // 若写成方法可以将key写成参数
});