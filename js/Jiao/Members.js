define(['Jiao/Ajax'],function(Ajax){
	//在这里，window.onload 不起作用,但是可以直接访问页面中的元素包括图片（可能是放置在底部的原因）,保留疑问
	/*window.onload = function () {
		(function () {alert("加载完成运行")})();
	}*/
	// console.log(jiao);
	// var contents = document.getElementsByClassName('container-content')[0];
	// console.log(contents);

	ajax('http://rap.taobao.org/mockjsdata/10008/user/listUser.do', 'GET', function (data) {
		var memberData = JSON.parse(data).data,
		html = ' ',
		contents = document.getElementsByClassName('container-content')[0];
		// console.log(memberData[1].picture);
		for(var i = memberData.length - 1; i >= 0; i--) {
			html += "<div class='content-msg'>" +
						"<img class='content-msg-img' src='" + memberData[i].picture + "' alt='成员'" + i + ">" +
						"<div class='content-msg-text'>" +
							"<img src='img/矩形 7.png'>" +
							"<h2>" + memberData[i].name + "</h2>" +
							"<p>担任职位：<strong>" + memberData[i].position + "</strong></p>" +
							"<p class='text-postion'>" + memberData[i].synopsis + "</p>" +
							"<p class='text-addres'>邮箱：" + memberData[i].email + "</p>" +
							"<a href='jMembersDetil.html" + "?dc=" + memberData[i].id + "'><span class='text-readmore'>more</span></a>" +      
						"</div>"+
					"</div>"
		}
		contents.innerHTML = html;
	}, function () {
		alert('无法正常获取数据！');
	})
});