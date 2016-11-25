// main.js (app.js 入口文件)

require.config({
	baseUrl: "js/Jiao"
})


require(['common','Members'],function (){
　　　console.log("加载完毕，可以正常执行");
});