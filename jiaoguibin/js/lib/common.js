require.config({
	paths: {
		jquery: "jquery.min"
	}
});
define(['jquery'],function ($) {
	$(function(){
		var MO = MO || {};
		// 滑动的nav
		(function(){
			var oNav = $('.nav'),
				oUl = oNav.find('ul'),
				oLi = oUl.find('li'),
				oA = oLi.find('a'),
				navAct = $('.nav-active');
			oA.mouseover(function(e) {
				if($(e.target).attr('class') != 'nav-active') {
					var that = this;
					$(this).addClass('nav-active');
					$(this).mouseout(function () {
						$(that).removeClass('nav-active');
					});
				}
			});
		})();	

		(function() {

			MO.checkTime = function (t) {
				if(t < 10){
					t = "0" + t;
				}
				return t;
			}
			MO.time = function time() {
				var oTime = document.getElementById('showtime'),
					now = new Date(),
					year = now.getFullYear(),
					month = now.getMonth() + 1,
					day = now.getDate(),
					weekday = now.getDay(),
					hour = now.getHours(),
					minute = now.getMinutes(),
					// timer = null,
					oWeekday = [
						"星期天",
						"星期一",
						"星期二",
						"星期三",
						"星期四",
						"星期五",
						"星期六",
					];

				month = MO.checkTime(month);
				day = MO.checkTime(day);
				hour = MO.checkTime(hour);
				minute = MO.checkTime(minute);

				oTime.innerHTML = year+" 年 "+month+" 月 "+day+" 日"+oWeekday[weekday]+" "+hour+":"+minute;
			}
			MO.time();
			var timer = setInterval(MO.time,1000);  // 为减小误差，每秒钟调用一次，若要求性能较严苛可将时间间隔设置的大一些 
		})();
	})

})