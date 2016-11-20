require.config({
	
	paths:{
		jquery:'sun/jquery',
		STime:'sun/STime',
		Ajax:'sun/Ajax',
	}
});
require(['jquery','STime','Ajax'],function($,STime,Ajax){
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

    ajax('http://rap.taobao.org/mockjsdata/10008/research/researchDetail.do','GET',function(data){
    	var graData=JSON.parse(data).data;
    	var scontent = document.getElementById('Scontent');
    	var stitleBar = document.getElementsByClassName("StitleBar")[0];
    	var stimePeople = document.getElementsByClassName("StimePeople")[0];
    	var stime = document.getElementsByClassName("Stime")[0];
    	var speople = document.getElementsByClassName("Speople")[0];
    	var stextArea = document.getElementsByClassName("StextArea")[0];

    	stitleBar.innerHTML = "<h2>" + graData.title + "</h2>";
    	stime.innerHTML = "发表日期：" + "<span>" + graData.date + "</span>";
    	speople.innerHTML = "负责人：" + "<span>" + graData.author + "</span>";
    	stextArea.innerHTML = graData.detail;

    },function(){
    	alert("获取数据失败！");
    })
});