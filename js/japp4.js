require.config({
	baseUrl: "js/Jiao"
})


require(['common', 'Ajax', 'getSearchString'],function (common, Ajax, postData) {
	if(postData){
		ajax('http://rap.taobao.org/mockjsdata/10008/activity/activityDetail.do', 'POST', function (data) {
			var html = ' ',
			container = document.getElementsByClassName('container-content')[0],
			detil = JSON.parse(data).data;
			console.log(detil);
			html += "<div class='content-title'>" +
						"<h2>" + detil.title + "</h2>" +
					"</div>" +
					"<div class='content-msg'>" +
						"<span>发表日期：" + detil.date + "</span>" +
						"<span>作者：" + detil.author + "</span>" +
					"</div>" + 
					"<div class='content-download'>" +
						"<img src='img/download.gif' alt='下载'>" +
						"<span><a href='" + detil.materiaPath + "'>资料下载地址：</a></span>" +
					"</div>" +
					"<div class='content-article'>" +
						"<p>" + detil.detail + "</p>" +
					"</div>";
			container.innerHTML = html;
		},function () {
			alert('获取数据失败');
		}, postData)
	}
});