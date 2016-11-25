require.config({
	
	paths:{
		jquery:'sun/jquery',
		STime:'sun/STime',
		Ajax:'sun/Ajax',
	}
});
requirejs(['jquery','STime','Ajax'],function($,STime,Ajax){
	//导航栏
	var MO = MO || {};
	// console.log(Ajax);
	//滑动的nav
	(function(){
      var oNav = $('.nav'),
        oUl = oNav.find('ul'),
        oLi = oUl.find('li'),
        oA = oLi.find('a'),
        navAct = $('.nav-active'),
        index = 4; // 当前目前显示nav部分第几个;

      MO.setActive = function(index){
        $(oA[index]).addClass('nav-active');
      }
      MO.setActive(index);
      oA.hover(function(){
        $(oA[index]).removeClass('nav-active');
        $(this).addClass("nav-active");
      },function(){
        $(this).removeClass('nav-active');
        MO.setActive(index);
      })
    })(); 
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