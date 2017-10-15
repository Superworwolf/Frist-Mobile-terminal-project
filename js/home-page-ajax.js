//商品集
var str1 = "";
$.get("http://h6.duchengjiu.top/shop/api_goods.php",{"cat_id":45},function  (json) {
	var data = json.data;
	for (var i=0;i<5;i++) {
		var obj = data[i];
		str1 +=`<li><a href="details.html?goods_id=${obj.goods_id}"><img src="${obj.goods_thumb}"/><span>${obj.goods_desc}</span><p>¥${obj.price}</p></a></li>`		
	};
	str1 += `<li><a href="shop-list.html?cat_id=45"><img src="img/moresp.png"/></a></li>`;
	$("#product1").append(str1);
})
var str2 = "";
$.get("http://h6.duchengjiu.top/shop/api_goods.php",{"cat_id":55},function  (json) {
	var data = json.data;
	for (var i=0;i<5;i++) {
		var obj = data[i];
		str2 +=`<li><a href="details.html?goods_id=${obj.goods_id}"><img src="${obj.goods_thumb}"/><span>${obj.goods_desc}</span><p>¥${obj.price}</p></a></li>`		
	};
	str2 += `<li><a href="shop-list.html?cat_id=55"><img src="img/moresp.png"/></a></li>`;
	$("#product2").append(str2);
})
var str3 = "";
$.get("http://h6.duchengjiu.top/shop/api_goods.php",{"cat_id":62},function  (json) {
	var data = json.data;
	for (var i=0;i<5;i++) {
		var obj = data[i];
		str3 +=`<li><a href="details.html?goods_id=${obj.goods_id}"><img src="${obj.goods_thumb}"/><span>${obj.goods_desc}</span><p>¥${obj.price}</p></a></li>`		
	};
	str3 += `<li><a href="shop_list.html?cat_id=62"><img src="img/moresp.png"/></a></li>`;
	$("#product3").append(str3);
})
var str4 = "";
$.get("http://h6.duchengjiu.top/shop/api_goods.php",{"cat_id":69},function  (json) {
	var data = json.data;
	for (var i=0;i<5;i++) {
		var obj = data[i];
		str4 +=`<li><a href="details.html?goods_id=${obj.goods_id}"><img src="${obj.goods_thumb}"/><span>${obj.goods_desc}</span><p>¥${obj.price}</p></a></li>`		
	};
	str4 += `<li><a href="shop-list.html?cat_id=69"><img src="img/moresp.png"/></a></li>`;
	$("#product4").append(str4);
})
var str5 = "";
$.get("http://h6.duchengjiu.top/shop/api_goods.php",{"cat_id":82},function  (json) {
	var data = json.data;
	for (var i=0;i<5;i++) {
		var obj = data[i];
		str5 +=`<li><a href="details.html?goods_id=${obj.goods_id}"><img src="${obj.goods_thumb}"/><span>${obj.goods_desc}</span><p>¥${obj.price}</p></a></li>`		
	};
	str5 += `<li><a href="shop-list.html?cat_id=82"><img src="img/moresp.png"/></a></li>`;
	$("#product5").append(str5);
})
var str6 = "";
$.get("http://h6.duchengjiu.top/shop/api_goods.php",{"cat_id":77},function  (json) {
	var data = json.data;
	for (var i=0;i<5;i++) {
		var obj = data[i];
		str6 +=`<li><a href="details.html?goods_id=${obj.goods_id}"><img src="${obj.goods_thumb}"/><span>${obj.goods_desc}</span><p>¥${obj.price}</p></a></li>`		
	};
	str6 += `<li><a href="shop-list.html?cat_id=77"><img src="img/moresp.png"/></a></li>`;
	$("#product6").append(str6);
})
var str7 = "";
$.get("http://h6.duchengjiu.top/shop/api_goods.php",{"cat_id":92},function  (json) {
	var data = json.data;
	for (var i=0;i<5;i++) {
		var obj = data[i];
		str7 +=`<li><a href="details.html?goods_id=${obj.goods_id}"><img src="${obj.goods_thumb}"/><span>${obj.goods_desc}</span><p>¥${obj.price}</p></a></li>`		
	};
	str7 += `<li><a href="shop-list.html?cat_id=92"><img src="img/moresp.png"/></a></li>`;
	$("#product7").append(str7);
})
var str8 = "";
$.get("http://h6.duchengjiu.top/shop/api_goods.php",{"cat_id":125},function  (json) {
	var data = json.data;
	for (var i=0;i<5;i++) {
		var obj = data[i];
		str8 +=`<li><a href="details.html?goods_id=${obj.goods_id}"><img src="${obj.goods_thumb}"/><span>${obj.goods_desc}</span><p>¥${obj.price}</p></a></li>`		
	};
	str8 += `<li><a href="shop-list.html?cat_id=125"><img src="img/moresp.png"/></a></li>`;
	$("#product8").append(str8);
})
//猜你喜欢

function shoplist (page) {
var strList = "";
$.get("http://h6.duchengjiu.top/shop/api_goods.php",{"page":page},function(json) {
	var data = json.data;
	for (var i=0;i<data.length;i++) {
		var obj = data[i];
		strList +=`<li class="product-wrapper"><a href="details.html?goods_id=${obj.goods_id}"><img src="${obj.goods_thumb}"/><div class="info"><p class="name">${obj.goods_desc}</p><span class="price">¥${obj.price}</span></div></a></li>`
	};
	$("#productList").append(strList);	
})
}
shoplist(1);
shoplist(2);
//加载更多
var pages = 2;
$("#loadmore").on("touchstart",function() {
	var strmore = ""
	pages++;
	$.get("http://h6.duchengjiu.top/shop/api_goods.php",{"page":pages},function(json) {
		var data = json.data;
		for (var i=0;i<data.length;i++) {
			var obj = data[i];
			strmore +=`<li class="product-wrapper"><a href="details.html?goods_id=${obj.goods_id}"><img src="${obj.goods_thumb}"/><div class="info"><p class="name">${obj.goods_desc}</p><span class="price">¥${obj.price}</span></div></a></li>`
		};
		$("#productList").append(strmore);
		if (pages>10) {
			$("#loadmore").css("display","none");
			$("#moreover").css("display","block");
		}
	})
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

//回到顶部
window.onscroll=function(){
    if($(window).scrollTop()>100){
         $('.go-top').show();
    }else{
         $('.go-top').hide();
    }
} 
$('.go-top').click(function(){
    scroll('0px', 500);

});
function scroll(scrollTo, time) {
    var scrollFrom = parseInt(document.body.scrollTop),
        i = 0,
        runEvery = 5; // run every 5ms

    scrollTo = parseInt(scrollTo);
    time /= runEvery;

    var interval = setInterval(function () {
        i++;

        document.body.scrollTop = (scrollTo - scrollFrom) / time * i + scrollFrom;

        if (i >= time) {
            clearInterval(interval);
        }
    }, runEvery);
}
//搜索
var searchs = $("#inputGroups");
var oInput = $("#inputGroup");
var inputText;
searchs.on("touchstart",function  () {
	inputText = oInput[0].value;
	console.log(inputText);
	if (inputText === "") {
		toast("请输入要搜索的商品",1500);
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
function toast(content, delay) {
	content.isAnimated = true;
  delay = delay || 3000;
  //创建元素
  var oDiv = document.createElement('div');
  oDiv.className = 'toast';
  oDiv.innerText = content;
  document.body.appendChild(oDiv);
  // console.log(parseInt(fetchComputedStyle(oDiv, 'height')));
  oDiv.style.marginTop = - parseInt(fetchComputedStyle(oDiv, 'height')) / 2 + 'px';
  var timer = setInterval(function(){
    document.body.removeChild(oDiv);
    clearInterval(timer);
  }, delay);
  content.isAnimated = false;
}

function fetchComputedStyle(obj, property) {
  if (window.getComputedStyle) {
    property = property.replace(/[A-Z]/g, function(match){
      return '-' + match.toLowerCase();
    });
    return window.getComputedStyle(obj)[property]; //中括号里面可以是变量
  } else {
    property = property.replace(/-([a-z])/g, function(match, $1){
      return $1.toUpperCase();
    });
    return obj.currentStyle[property];
  }
}
