var oCat = document.querySelector('#cat');
myajax.get('http://h6.duchengjiu.top/shop/api_cat.php', {}, function(error, responseText){
    var json = JSON.parse(responseText);
    var data = json.data;
    for (var i = 0; i < data.length; i++) {
        var obj = data[i];
        oCat.innerHTML += `<li><a href="02-商品列表.html?cat_id=${obj.cat_id}">${obj.cat_name}</a></li>`;
    }
});
 


var oGoods = document.querySelector('#hot-goods');
myajax.get('http://h6.duchengjiu.top/shop/api_goods.php', {}, function(err,responseText){
    var json = JSON.parse(responseText);
    console.log(json);
    var data = json.data;
    for (var i = 0; i < data.length; i++) {
        var obj = data[i];
        oGoods.innerHTML += `<li><a href="08-goods.html?goods_id=${obj.goods_id}">
          <div><img src="${obj.goods_thumb}" /></div>
          <div>${obj.goods_name}</div>
          <div>${obj.price}</div></a>
        </li>`;
    }
});
  
  

	