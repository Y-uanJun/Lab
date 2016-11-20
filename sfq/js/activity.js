$(function(){

	// 页数
    var pageNum;
    // 当前页数
	var nowPage = 0;
	var itemNum;
	// 渲染页数
	(function(){

		// 获取课程数
		var itemNum = function(){
			// var itemNum;
			$.ajax({
				type: 'GET',
				// 获取活动数目
				url: 'http://172.22.7.194:8080/liu/activity/getCount.do',
				success: function(data){
					if(data.status == 1) {
						itemNum = data.data;
						// alert(itemNum);
						pageNum = Math.ceil( itemNum / 8);
						var str = '';
						for(var i = 1; i <= pageNum; i++) {
							str += "<li class='pageUlItem'>" + i +  "</li>";
						}
						$('.pageUl').append(str);
						$('.itemNum strong').text(pageNum);
						// 详细页
						$('.pageUlItem').click(function(){
							var that = this;

							$('.pageUlItem').removeClass('pageUlItemCur');
						    $(that).addClass('pageUlItemCur');
							nowPage = parseInt($(this).text()) - 1;
							// nowPage = parseInt($(this).text()) - 1;
							// 获取当前页活动数据
							$.ajax({
								type: 'GET',
								url: 'http://172.22.7.194:8080/liu/activity/findByPage.do',
								data: {
									current: nowPage
								},
								success: function(data) {
									// nowPage = parseInt($(this).text()) - 1;
									var actiData = data.data;
									var actiStr = '';                               
									for(var i = 0; i < actiData.length; i++){
										actiStr += "<div class='lessonItem'>" +
										    	   "	<img class='lessItemImg' src='" + actiData[i].pictureName + "' />" +
										    	   "	<div class='lessItemCon'>" +
										    	   "		<h3 class='lessItemTit'>" + actiData[i].title + "</h3>" +
										    	   "		<div class='lessItemPer'>发布人：<span>" + actiData[i].author + "</span></div>" +
										    	   "		<span class='lessItemDate'>" + actiData[i].date + "</span>" +
										    	   "		<p class='lessItemPar'>" + actiData[i].summary + "</p>" +
										    	   "		<a href='teachDetail.html" + "?dc=" + actiData[i].id + "' class='lessItemMore'>课程详情</a>" +
										    	   "	</div>" +
										    	   "</div>";
									}
								    $('.lessonArea').html(actiStr);	
								}
							});

						});

						// 上一页
						$('.preBtn').click(function(){
							if(nowPage > 0) {
								var that = this;

								$('.pageUlItem').removeClass('pageUlItemCur');
							    $($('.pageUlItem').get(nowPage - 1)).addClass('pageUlItemCur');
								// nowPage = nowPage - 1;
								// 获取当前页活动数据
								$.ajax({
									type: 'GET',
									url: 'http://172.22.7.194:8080/liu/activity/findByPage.do',
									data: {
										current: nowPage - 1
									},
									success: function(data) {
										nowPage = nowPage - 1;
										var actiData = data.data;
										var actiStr = '';                               
										for(var i = 0; i < actiData.length; i++){
											actiStr += "<div class='lessonItem'>" +
											    	   "	<img class='lessItemImg' src='" + actiData[i].pictureName + "' />" +
											    	   "	<div class='lessItemCon'>" +
											    	   "		<h3 class='lessItemTit'>" + actiData[i].title + "</h3>" +
											    	   "		<div class='lessItemPer'>发布人：<span>" + actiData[i].author + "</span></div>" +
											    	   "		<span class='lessItemDate'>" + actiData[i].date + "</span>" +
											    	   "		<p class='lessItemPar'>" + actiData[i].summary + "</p>" +
											    	   "		<a href='teachDetail.html" + "?dc=" + actiData[i].id + "' class='lessItemMore'>课程详情</a>" +
											    	   "	</div>" +
											    	   "</div>";
										}
									    $('.lessonArea').html(actiStr);
									}
								});

							}
						});

						$('.nexBtn').click(function(){
							// if(1) {
							if(nowPage < pageNum - 1) {
								var that = this;

								$('.pageUlItem').removeClass('pageUlItemCur');
							    $($('.pageUlItem').get(nowPage + 1)).addClass('pageUlItemCur');
								// nowPage = nowPage + 1;
								// 获取当前页活动数据
								$.ajax({
								type: 'GET',
									url: 'http://172.22.7.194:8080/liu/activity/findByPage.do',
									data: {
										current: nowPage + 1
									},
									success: function(data) {
										nowPage = nowPage + 1;
										var actiData = data.data;
										var actiStr = '';                               
										for(var i = 0; i < actiData.length; i++){
											actiStr += "<div class='lessonItem'>" +
											    	   "	<img class='lessItemImg' src='" + actiData[i].pictureName + "' />" +
											    	   "	<div class='lessItemCon'>" +
											    	   "		<h3 class='lessItemTit'>" + actiData[i].title + "</h3>" +
											    	   "		<div class='lessItemPer'>发布人：<span>" + actiData[i].author + "</span></div>" +
											    	   "		<span class='lessItemDate'>" + actiData[i].date + "</span>" +
											    	   "		<p class='lessItemPar'>" + actiData[i].summary + "</p>" +
											    	   "		<a href='teachDetail.html" + "?dc=" + actiData[i].id + "' class='lessItemMore'>课程详情</a>" +
											    	   "	</div>" +
											    	   "</div>";
										}
									    $('.lessonArea').html(actiStr);	
									}
								});

							}
						});


					}
				}
			});
			// alert(itemNum);
			// return itemNum;
		}();

		

		// 根据课程数目分页
		// pageNum = Math.ceil( itemNum / 8);
		// var str = '';
		// for(var i = 1; i <= pageNum; i++) {
		// 	str += "<li class='pageUlItem'>" + i +  "</li>";
		// }
		// $('.pageUl').append(str);
		// $('.itemNum strong').text(pageNum);
	})();

	// 默认页
	(function(){
		$($('.pageUlItem').get(0)).addClass('pageUlItemCur');
		$.ajax({
			type: 'GET',
			url: 'http://172.22.7.194:8080/liu/activity/findByPage.do',
			data: {
				current: 0
			},
			success: function(data) {
				var actiData = data.data;
				var actiStr = '';                               
				for(var i = 0; i < actiData.length; i++){
					actiStr += "<div class='lessonItem'>" +
					    	   "	<img class='lessItemImg' src='" + actiData[i].pictureName + "' />" +
					    	   "	<div class='lessItemCon'>" +
					    	   "		<h3 class='lessItemTit'>" + actiData[i].title + "</h3>" +
					    	   "		<div class='lessItemPer'>发布人：<span>" + actiData[i].author + "</span></div>" +
					    	   "		<span class='lessItemDate'>" + actiData[i].date + "</span>" +
					    	   "		<p class='lessItemPar'>" + actiData[i].summary + "</p>" +
					    	   "		<a href='teachDetail.html" + "?dc=" + actiData[i].id + "' class='lessItemMore'>课程详情</a>" +
					    	   "	</div>" +
					    	   "</div>";
				}
			    $('.lessonArea').html(actiStr);
			    $($('.pageUlItem').get(0)).addClass('pageUlItemCur');
			}
		});

	})();

	// 详细页
	// $('.pageUlItem').click(function(){
	// 	$('pageUlItem').removeClass('pageUlItemCur');
	// 	$(this).addClass('pageUlItemCur');
	// 	nowPage = $(this).text();
	// 	// 获取当前页活动数据
	// 	$.ajax({
	// 		type: 'GET',
	// 		url: 'http://172.22.7.194:8080/liu/activity/findByPage.do',
	// 		data: {
	// 			current: nowPage - 1
	// 		},
	// 		success: function(data) {
	// 			var actiData = data.data;
	// 			var actiStr = '';                               
	// 			for(var i = 0; i < actiData.length; i++){
	// 				actiStr += "<div class='lessonItem'>" +
	// 				    	   "	<img class='lessItemImg' src='" + actiData[i].pictureName + "' />" +
	// 				    	   "	<div class='lessItemCon'>" +
	// 				    	   "		<h3 class='lessItemTit'>" + actiData[i].title + "</h3>" +
	// 				    	   "		<div class='lessItemPer'>发布人：<span>" + actiData[i].author + "</span></div>" +
	// 				    	   "		<span class='lessItemDate'>" + actiData[i].date + "</span>" +
	// 				    	   "		<p class='lessItemPar'>" + actiData[i].summary + "</p>" +
	// 				    	   "		<a href='teachDetail.html" + "?dc=" + actiData[i].id + "' class='lessItemMore'>课程详情</a>" +
	// 				    	   "	</div>" +
	// 				    	   "</div>";
	// 			}
	// 		    $('.lessonArea').html(actiStr);	
	// 		}
	// 	});

	// });

	// // 上一页
	// $('.preBtn').click(function(){
	// 	if(nowPage != 1) {

	// 		$('pageUlItem').removeClass('pageUlItemCur');
	// 	    $(this).addClass('pageUlItemCur');
	// 		// nowPage = nowPage - 1;
	// 		// 获取当前页活动数据
	// 		$.ajax({
	// 			type: 'GET',
	// 			url: 'http://172.22.7.194:8080/liu/activity/findByPage.do',
	// 			data: {
	// 				current: nowPage - 1
	// 			},
	// 			success: function(data) {
	// 				nowPage = nowPage - 1;
	// 				var actiData = data.data;
	// 				var actiStr = '';                               
	// 				for(var i = 0; i < actiData.length; i++){
	// 					actiStr += "<div class='lessonItem'>" +
	// 					    	   "	<img class='lessItemImg' src='" + actiData[i].pictureName + "' />" +
	// 					    	   "	<div class='lessItemCon'>" +
	// 					    	   "		<h3 class='lessItemTit'>" + actiData[i].title + "</h3>" +
	// 					    	   "		<div class='lessItemPer'>发布人：<span>" + actiData[i].author + "</span></div>" +
	// 					    	   "		<span class='lessItemDate'>" + actiData[i].date + "</span>" +
	// 					    	   "		<p class='lessItemPar'>" + actiData[i].summary + "</p>" +
	// 					    	   "		<a href='teachDetail.html" + "?dc=" + actiData[i].id + "' class='lessItemMore'>课程详情</a>" +
	// 					    	   "	</div>" +
	// 					    	   "</div>";
	// 				}
	// 			    $('.lessonArea').html(actiStr);
	// 			}
	// 		});

	// 	}
	// });

	// 下一页
	// $('.nexBtn').click(function(){
	// 	// if(1) {
	// 	if(nowPage < pageNum - 1) {
	// 		$('pageUlItem').removeClass('pageUlItemCur');
	// 		$(this).addClass('pageUlItemCur');
	// 		// nowPage = nowPage + 1;
	// 		// 获取当前页活动数据
	// 		$.ajax({
	// 		type: 'GET',
	// 			url: 'http://172.22.7.194:8080/liu/activity/findByPage.do',
	// 			data: {
	// 				current: nowPage + 1
	// 			},
	// 			success: function(data) {
	// 				nowPage = nowPage + 1;
	// 				var actiData = data.data;
	// 				var actiStr = '';                               
	// 				for(var i = 0; i < actiData.length; i++){
	// 					actiStr += "<div class='lessonItem'>" +
	// 					    	   "	<img class='lessItemImg' src='" + actiData[i].pictureName + "' />" +
	// 					    	   "	<div class='lessItemCon'>" +
	// 					    	   "		<h3 class='lessItemTit'>" + actiData[i].title + "</h3>" +
	// 					    	   "		<div class='lessItemPer'>发布人：<span>" + actiData[i].author + "</span></div>" +
	// 					    	   "		<span class='lessItemDate'>" + actiData[i].date + "</span>" +
	// 					    	   "		<p class='lessItemPar'>" + actiData[i].summary + "</p>" +
	// 					    	   "		<a href='teachDetail.html" + "?dc=" + actiData[i].id + "' class='lessItemMore'>课程详情</a>" +
	// 					    	   "	</div>" +
	// 					    	   "</div>";
	// 				}
	// 			    $('.lessonArea').html(actiStr);	
	// 			}
	// 		});

	// 	}
	// });


});