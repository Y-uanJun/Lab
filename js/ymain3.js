require.config({
　　paths: {
　　  common:'common/common',
      Ajax:'common/Ajax',
      yGetSearchString:'YJ/yGetSearchString',
　　}
});
requirejs(['common','Ajax',"yGetSearchString"],function   (common,Ajax,yGetSearchString) {
    
    url="http://rap.taobao.org/mockjsdata/10008/previous/selectByYear";
	ajax(url, 'GET', function (data){
		var Content=document.getElementById("yContent");
		var yMember = JSON.parse(data).data;
		if(yGetSearchString){
			var Title=document.createElement("div");
			    Title.className="yTitle";
			    Title.innerHTML=yGetSearchString+"年成员";
			    Content.appendChild(Title);

			for(var i=0;i<yMember.length;i++){
				var Mem=document.createElement("div");
				Mem.className="ymember";
    		    Content.appendChild(Mem);

    		    var BasicInfor=document.createElement("div");
    		    BasicInfor.className="yBasicInfor";
    		    Mem.appendChild(BasicInfor);

    		    var Img=document.createElement("img");
    		    Img.src=yMember[i].picture;
    		    BasicInfor.appendChild(Img);

    		    var InforText=document.createElement("div");
    		    InforText.className="yInforText";
    		    BasicInfor.appendChild(InforText);

    		    var Name=document.createElement("h3");
    		    Name.innerHTML=yMember[i].name;
    		    InforText.appendChild(Name);

    		    var Email=document.createElement("p");
    		    Email.innerHTML="邮箱:";
    		    InforText.appendChild(Email);

    		    var SuccessTitle=document.createElement("div");
    		    SuccessTitle.className="ySuccessTitle";
    		    SuccessTitle.innerHTML="主要成就";
    		    Mem.appendChild(SuccessTitle);

    		    var SuccessText=document.createElement("div");
    		    SuccessText.className="ySuccessText";
    		    SuccessText.innerHTML=yMember[i].synopsis;
    		    Mem.appendChild(SuccessText);


				/*var yHtml += "<div class='ymember'>"+"<div class='yBasicInfor'>"+
			    "<img src='yMember[i].picture'>"+
			    "<div class='yInforText'>"+
			    "<h3>"+yMember[i].name+"</h3>"+
			    "<p>邮箱</p>"+
			    "</div>"+
			    "</div>"+
			    "<div class='ySuccessTitle'>主要成就</div>"+
			    "<div class='ySuccessText'>"+yMember[i].synopsis+"</div>"+
			    "</div>";*/
			    //Content.innerHTML=yHtml;
			   // alert(yHtml);
			    //Content.innerHTML=yHtml;
			}
			// Content.innerHTML=yHtml;
		}

	},function(){
		alert("请求不成功");
	});

});
// ?dc=' + yDetail[i].year