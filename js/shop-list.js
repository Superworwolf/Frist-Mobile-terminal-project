//请求商品列表
//var oCat = document.querySelector('#cat');
var shoplist = "";
$.get("http://h6.duchengjiu.top/shop/api_cat.php",{},function  (json) {
	var data = json.data;
	for(var i=0;i<data.length;i++){
		var obj = data[i];
		shoplist += `<li><a href="shop-list.html?cat_id=${obj.cat_id}">${obj.cat_name}</a></li>`;
	}
	$("#cat").append(shoplist);
})
//商品列表添加点击事件
$("#cat li").on("click",function  () {
	$("#cat a").css({"background":"white","color":"skyblue"});
	$(this).css({"background":"blue","color":"white"})
})
//获取cat_id
$.getQueryShopList = function(name) {
  var search = location.search.substr(1);
  var reg = new RegExp('(&|^)'+name+'=([^&]*)(&|$)');
  var r = search.match(reg);
  if (r === null) return null;
  return decodeURI(r[2]);
};
//判断是否有cat_id
var shopCatId;
if ($.getQueryShopList("cat_id") === null) {
	shopCatId = 45;
} else{
	shopCatId = $.getQueryShopList("cat_id");
};
console.log(shopCatId);
//列表商品
var listShop = "";
$.get("http://h6.duchengjiu.top/shop/api_goods.php",{"cat_id":shopCatId,"page":1},function  (json) {
	var data = json.data;
	for (var i=0;i<data.length;i++) {
		var obj = data[i];
		listShop += `<li class="products"><a href="details.html?cat_id=${obj.cat_id}">
          <div><img src="${obj.goods_thumb}" /></div>
          <div class="goodname">${obj.goods_name}</div>
          <div class="goodprice">¥${obj.price}</div></a>
        </li>`;
	}
	$("#hot_goods").append(listShop);
})
//加载更多
var pages = 1;
$("#loadmore").on("touchstart",function() {
	var strmore = ""
	++pages;
	console.log(pages);
	$.get("http://h6.duchengjiu.top/shop/api_goods.php",{"cat_id":shopCatId,"page":pages},function(json) {
		console.log(json);
		var data = json.data;
		if (data.length === 0) {
			$("#loadmore").css("display","none");
			$("#moreover").css("display","block");
		} else{
			for (var i=0;i<data.length;i++) {
			var obj = data[i];
			strmore +=`<li class="products"><a href="details.html?cat_id=${obj.cat_id}">
          <div><img src="${obj.goods_thumb}" /></div>
          <div class="goodname">${obj.goods_name}</div>
          <div class="goodprice">¥${obj.price}</div></a>
        </li>`;
		};
		$("#hot_goods").append(strmore);
		};
	});
});
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
  
  

	