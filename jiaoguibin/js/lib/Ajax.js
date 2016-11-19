define(function () {
	//原生js实现ajax的兼容
	var ajax = {}; 
	ajax.method = function (url, type, fnSucc, fnFail, data) {   // url 方式 成功和失败执行函数,最后一个参数是post请求要给后台的数据
		//1.创建Ajax对象
		if(window.XMLHttpRequest){
			var oAjax = new XMLHttpRequest();
		}
		else{       //针对ie6及以下
			var oAjax = new ActiveXObject("Microsoft.XMLHTTP");  
		}

		//2.链接服务器   open 三个参数（方法，文件名，是否异步）
		oAjax.open(type, url, true);

		//3.发送请求
		oAjax.send();

		//4.接受返回
		oAjax.onreadystatechange=function(){
			// oAjax.readyState 提供信息浏览器和服务器进行到哪一步了
			if(oAjax.readyState == 4){ //读取完成
				console.log('读取完成');
				if(oAjax.status == 200){
					fnSucc(oAjax.responseText);
					console.log('chenggong');
				} else {
					if(fnFail){       //此函数存在
						fnFail(oAjax.status);
					}
				}
			} 
		}
	};
	return ajax;
})