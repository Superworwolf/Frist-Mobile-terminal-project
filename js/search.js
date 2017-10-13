//获取搜索词
$.getQueryString = function(name) {
  var search = location.search.substr(1);
  var reg = new RegExp('(&|^)'+name+'=([^&]*)(&|$)');
  var r = search.match(reg);
  if (r === null) return null;
  return decodeURI(r[2]);
};
var searchTerms = $.getQueryString("search_text");
//将搜索词添加到input框
var osearch = $("#inputGroup");
osearch[0].value = searchTerms;
//搜索
var searchs = $("#inputGroups");
var oInput = $("#inputGroup");
var inputText;
searchs.on("touchstart",function  () {
	inputText = oInput[0].value;
	if (inputText === "") {
		alert("请输入要搜索的商品");
	} else{
		window.location.href = "search.html?search_text="+inputText;
	}
});
//oInput.on("blur",function  () {
//	inputText = oInput[0].value;
//	console.log(inputText);
//	
//}) 

oInput.on("keyup",function  (event) {
	if (event.keyCode === 13) {
		window.location.href = "search.html?search_text="+this.value;
	}
});

//显示搜索商品
function showProduct (page) {
	var strList = "";
	var strnull = "";
	$.get("http://h6.duchengjiu.top/shop/api_goods.php",{"search_text":searchTerms,"page":page},function(json) {
		var data = json.data;
		if (data.length === 0) {
			strnull = `<p class="notfound">找不到您搜索的商品哦~</p>`;
			$("#productList").append(strnull);
		} else{
			for (var i=0;i<data.length;i++) {
			var obj = data[i];
			strList +=`<li class="product-wrapper"><a href="details.html?goods_id=${obj.goods_id}"><img src="${obj.goods_thumb}"/><div class="info"><p class="name">${obj.goods_desc}</p><span class="price">¥${obj.price}</span></div></a></li>`
			};
			$("#productList").append(strList);	
		};		
	});
}
showProduct(1);
//加载更多
var pages = 1;
$("#loadmore").on("touchstart",function() {
	var strmore = ""
	pages++;
	$.get("http://h6.duchengjiu.top/shop/api_goods.php",{"search_text":searchTerms,"page":pages},function(json) {
		var data = json.data;
		if (data.length === 0) {
			$("#loadmore").css("display","none");
			$("#moreover").css("display","block");
		} else{
			for (var i=0;i<data.length;i++) {
			var obj = data[i];
			strmore +=`<li class="product-wrapper"><a href="details.html?goods_id=${obj.goods_id}"><img src="${obj.goods_thumb}"/><div class="info"><p class="name">${obj.goods_desc}</p><span class="price">¥${obj.price}</span></div></a></li>`
			};
			$("#productList").append(strmore);
		};
	});
})
//等待效果
function loading (){
	$("#loading").hide();
	$(document).ajaxStart(function  () {
		$("#loading").show();
	}).ajaxStop(function  () {
		$("#loading").hide();
	})
};
loading();
