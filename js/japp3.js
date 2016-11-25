// main.js (app.js 入口文件)

require.config({
	baseUrl: "js/Jiao"
})


require(['common','Ajax'],function (common, Ajax){
	ajax('http://rap.taobao.org/mockjsdata/10008/activity/listActivity.do','GET', function (data) {
		var activityData = JSON.parse(data).data.list;
		var len = activityData.length,  		// 信息的总条数
		num = 3, 								// 每一页显示的条数
		page = Math.ceil(len / num),            // 总页数
		nowNum = 1;								// 当前页数
		btnHtml = ' ',   // 按钮html内容
		pageNav = document.getElementById('pageNav');
		pagers = pageNav.children;
		prev = document.getElementsByClassName('prev')[0],
		next = document.getElementsByClassName('next')[0],
		container = document.getElementsByClassName('container-content')[0];

		//给页面分页添加页码
		for(var i = 0; i < page; i++) {
			btnHtml += "<li><a href='javascript:void(0)'>" + (i + 1) + "</a></li>"
		}
		pageNav.innerHTML = btnHtml;

		// 上一页&下一页&页码 的跳转功能
		prev.onclick = function () {
			if(nowNum == 1) {
				alert('当前已经是第一页！')
				return false;
			}
			showContains(--nowNum);
		}
		next.onclick = function () {
			if(nowNum == page) {
				alert('当前已经是最后一页！');
				return false;
			}
			showContains(++nowNum);
		}
		for (var i = 0; i < page; i++) {   // 次处的len和pageNav下a标签的数量相等
			pagers[i].index = i + 1;
			pagers[i].onclick = function () {
				nowNum = this.index;
				showContains(nowNum);
			}
		} 

		// 给页面添加主要信息的函数（根据具体页数添加信息）
		function showContains (pageNum) {
			console.log(nowNum)
			var html = ' ',  // 页面主题的html内容
			pageNum = arguments[0] ? arguments[0] : 1;      // 若调用时未传入页数，默认为1
			for(var t = 0; t < page; t++) {                   // 将每个下表的样式取消再为激活状态的下表添加样式
				pagers[t].className = '';
			}
			pagers[pageNum - 1].className = 'active';       
			for (var i = 0; i < num; i++) {                // 循环的次数是每页显示的条数
				var indexer = activityData[(pageNum - 1) * num + i];  // 要显示的其中一条
				if (indexer == undefined) { break; };     // 防止最后一页数目不足八个会报错
				html += "<div class='content-list'>" +
							"<img src='" + indexer.picture + "' alt='" + indexer.title + "'>" +	
							"<div><span>" + indexer.date + "</span>发布人：<strong>" + indexer.author + "</strong></div>" +
							"<h3>" + indexer.title + "</h3>" +
							"<p>" + indexer.summary + "</p>" +
							"<a href='jActivityDetil.html" + "?dc=" + indexer.id + "'><span class='readmore'>课程详情 </span></a>" +
						"</div>";
			}
			container.innerHTML = html;
		}
		showContains();
	}, function () {
		alert("获取数据失败！");
	})
});
