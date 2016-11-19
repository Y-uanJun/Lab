// main.js (app.js 入口文件)

require.config({
	baseUrl: "js/lib"
})
require(['common', 'Ajax', 'getSearchString'],function (common, jiao, postData){
    container = document.getElementsByClassName('container-content')[0];
    //console.log(data);
    if (postData) {
    	jiao.method('http://rap.taobao.org/mockjsdata/10008/user/userDetail.do', 'POST', function (data) {
    		var detil = JSON.parse(data).data,
    		honor = ' ',     
    		paper = ' ',
    		project = ' ';          

    		 // 因为后台返回的数据是对象，所以在这里要将 荣誉+著作+研究成果从对象数组里面取出来组装成字符串
    		// for (var p = 0, Plen = detil.paper.length; p < Plen; p++) {
    		// 	paper += detil.paper[p].paper + ' ';
    		// };
    		// for (var i = 0, Hlen = detil.honor.length; i < Hlen; i++) {
    		// 	honor += detil.honor[i].honor + ' ';
    		// };
    		// for (var j = 0, Jlen = detil.project.length; j < Jlen; j++) {
    		// 	project += detil.project[j].project + ' ';
    		// }
    		function shwoString (str, obj, name) {
    			for (var i = 0, len = obj.length; i < len; i++) {
    				str += obj[i][name] + '<br>'; 
    			}
    			return str;
    		};
    		console.log(shwoString(honor, detil.honor, 'honor'));
    	    var html = "<div class='synopsis'>" +
							"<img src='" + detil.picture + "' alt='" +detil.name+ "'>" +
							"<h2>" + detil.name + "</h2>" +
							"<p>担任职位：<strong>" + detil.position + "</strong></p>" +
							"<p>邮箱：" + detil.email + "</p>" +
						"</div>" +
    					"<div class='introduction'>" +
							"<h2>个人介绍</h2>" +
							"<p>" + detil.synopsis + "</p>" +
						"</div>" +
						"<div class='introduction'>" +
							"<h2>研究项目</h2>" +
							"<p>" + shwoString(project, detil.project, 'project') + "</p>" +
						"</div>" +
						"<div class='introduction'>" +
							"<h2>论文及著作</h2>" +
							"<p>" + shwoString(paper, detil.paper, 'paper') + "</p>" +
						"</div>" +
						"<div class='introduction'>" +
							"<h2>获得荣誉</h2>" + 
							"<p>" + shwoString(honor, detil.honor, 'honor') + "</p>" +
						"</div>" ;
			container.innerHTML = html;

    	}, function () {
    		alert("无法正常获取数据");
    	}, postData);
    }
});