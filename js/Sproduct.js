require.config({
	
	paths:{
		common:'common/common',
		Ajax:'common/Ajax',
	}
});
requirejs(['common','Ajax'],function(common,Ajax){
ajax('http://rap.taobao.org/mockjsdata/10008/product/listProduct.do','GET',function(data){
	 var scon = document.getElementById("Scontent");
	 var slist = document.getElementsByClassName("SconList");
	 var slistCon = document.getElementsByClassName("SconListCon");
	 var pData = JSON.parse(data).data;
	 var pDataLen = pData.length;

	 for(var i = 0; i<pDataLen;i++){
	 	var html = " ";
	 	html = "<div class='SconList'>"+
	 		      "<h3>"+pData[i].name+"</h3>"+
	 		      "<div class='SconListCon'>"+
	 		      	"<p>"+pData[i].summary+"</p>"+
	 		      		"<img src='"+pData[i].picture+"'/>"+
	 		      "</div>"
	 		     "</div>"
	 	scon.innerHTML+=html;
	 }
	 




 });
});