require.config({
	
	paths:{
		 common:'common/common',
         Ajax:'common/Ajax',
         yGetSearchString:'YJ/yGetSearchString',
	}
});
requirejs(['common','yGetSearchString','Ajax'],function($,common,yGetSearchString,Ajax){
	
	ajax('http://rap.taobao.org/mockjsdata/10008/user/listGraduate.do','GET',function(data){
		var eduData=JSON.parse(data).data;
		
		var scontent = document.getElementById('Scontent');

		//给页面添加主要信息的函数
			function showContains(len){
				var len = eduData.length;
				var html=' '; 
				//页面主体内容
				for (var i = 0;i<len; i++) {
					var indexer = eduData[i];
					if (indexer == undefined) {break;};
					html+="<div class='content-list'>"+
							"<img src='img/graImg.png'>"+
							"<h3>"+indexer.name+"</h3>"+
							"<div class='Scon'>"+
							"<h5>研究内容：</h5>"+
							"<p>"+indexer.content+"</p>"+"</div>"+
							"<div class='Scon'>"+
							"<h5>联系邮箱：</h5>"+
							"<p>"+indexer.email+"</p>"+"</div>"+
							"</div>"
				}
				scontent.innerHTML = html;
			}
			showContains();	
		},function(){
			alert("获取数据失败！");
		});



});

