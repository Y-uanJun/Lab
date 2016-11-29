require.config({
	
	paths:{
		common:'common/common',
		Ajax:'common/Ajax',
	}
});
requirejs(['common','Ajax'],function(common,Ajax){

 ajax('http://rap.taobao.org/mockjsdata/10008/research/listResearch.do','GET',function(data){
 	var gData = JSON.parse(data).data.list;
 	var each = 5;
 	var pageTotal = Math.ceil(gData.length / each);//获取总页数
 	var str = ' ';
 	var pt = document.getElementById("pageTotal");//总页数处dom
 	var pp = document.getElementById("prePage");
  var np = document.getElementById("nextPage");
 	var scontent = document.getElementById('Scontent');
  var indexPage =document.getElementById('indexPage');
 	var nowPageNum = 1;
 	var ppNum = 0;
 	

 	pt.innerHTML = "共 " + pageTotal +" 页";


 	//第一页内容
 	if(nowPageNum == 1){
 		for(var i = 0;i < each; i++){
      var nowData = gData[i];
      var html = ' ';
      html = "<div class='conList'>" +
             "<div class='conTitle'>" +
             "<h4>"+nowData.title + "</h4>"+
             "<span>"+nowData.date + "</span>"+
             "</div>"+
             "<div class='conCon'>"+nowData.summary + "</div>"+
             "<a href='SgraduatedDetail.html"+"?dc="+ nowData.id + "'>" + "<span class='conMore'>" + "阅读原文" + "</span>"+"</a>"
             "</div>"
             scontent.innerHTML+=html;
 		}	
    indexPage.innerHTML = "第" + nowPageNum +"页";
 	}
 	
 	

 	//切换页
  //点击上一页
 	pp.onclick = function(e){
 		if (nowPageNum>1) {
      scontent.innerHTML = ' '; //清空上一个页面的内容
      for(var i = 0;i < each; i++){

        
      var nowData = gData[(nowPageNum-2)*each + i];
      var html = ' ';
       html = "<div class='conList'>" +
             "<div class='conTitle'>" +
             "<h4>"+nowData.title+ "</h4>"+
             "<span>"+nowData.date + "</span>"+
             "</div>"+
             "<div class='conCon'>"+nowData.summary + "</div>"+
             "<a href='graduatedDetail.html"+"?dc="+ nowData.id + "'>" + "<span class='conMore'>" + "阅读原文" + "</span>"+
             "</div>"
             scontent.innerHTML+=html;
             console.log(scontent);
    }
    nowPageNum--;
    indexPage.innerHTML = "第" + nowPageNum +"页";

    }
 	}
//点击下一页
  np.onclick = function(e){
    var pageRest=gData.length-nowPageNum*each;
    var j = each<pageRest?each:pageRest;//计算本页面剩下的条目
    if (nowPageNum<pageTotal+1) {
      scontent.innerHTML = ' '; //清空上一个页面的内容
      for(var i = 0;i < j; i++){
      
      var nowData = gData[nowPageNum*each + i];
      var html = ' ';
      html = "<div class='conList'>" +
             "<div class='conTitle'>" +
             "<h4>"+nowData.title+ "</h4>"+
             "<span>"+nowData.date + "</span>"+
             "</div>"+
             "<div class='conCon'>"+nowData.summary + "</div>"+
             "<a href='graduatedDetail.html"+"?dc="+ nowData.id + "'>" + "<span class='conMore'>" + "阅读原文" + "</span>"+
             "</div>"
             scontent.innerHTML+=html;

    }
    nowPageNum++;
    indexPage.innerHTML = "第" + nowPageNum +"页";

    }
  }

 	
 },function(){
 	alert("获取数据失败！");
 });


});