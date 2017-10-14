$('.My-order').on('touchstart',function(){
	if(localStorage.token === ""||localStorage.token == "undefined") {
		return
	}else if($("#orderclass")[0].style.display != "block") {
		$(".order-arrow").css("transform","rotate(90deg)")
		$("#orderclass").css("display","block")
var oOrder = document.querySelector('#order');
		$.get('http://h6.duchengjiu.top/shop/api_order.php',{token:localStorage.token},function(json) {
			var data = json.data;
			if (data.length === 0) {
				oOrder.style.display = "block"
				oOrder.innerHTML = "<h3>您还未下任何订单</h3>"
				return;
			}
			var orderClass = document.querySelector(".orderclass");
			orderClass.innerHTML = ""
			for (var i = 0; i < data.length; i++) {
				var obj = data[i];
				orderClass.innerHTML +=`<div class="order-title"><p class="Consignee">收货人: <b>${obj.consignee}</b></p> <p class="Total">总价: <b>¥&nbsp${obj.total_prices}</b></p></div>`
				for (var j = 0; j < obj.goods_list.length; j++) {												
					var goods = obj.goods_list[j];
							orderClass.innerHTML += `
							<tr>
					       <td>${goods.goods_name}</td>
					       <td><img src ="${goods.goods_thumb}"></td>
					       <td>单价: <b>¥ ${goods.goods_price}</b></td>
					       <td> 数量: <i>${goods.goods_number}</i></td>
					       <td>总计: <b>¥ ${goods.goods_price*goods.goods_number}</b></td>
							</tr>`;
				}
			}
});
	}else {
		var oOrder = document.querySelector('#order');
		$("#orderclass").css("display","none")
		$(".order-arrow").css("transform","rotate(0deg)")
		oOrder.style.display = "none";
	}
});
$('.My-address').on('touchstart',function(){
		if(localStorage.token === "" ||localStorage.token == "undefined") {
			
		return
	}else if($("#address-ul")[0].style.display != "block") {
		$(".address-arrow").css("transform","rotate(90deg)")
		$("#address-ul").css("display","block")
	$.get('http://h6.duchengjiu.top/shop/api_useraddress.php',
        {token: localStorage.token},
        function(json) {
          var data = json.data;
          var oAddressUl = document.querySelector('.address-ul');
          if (data.length === 0) {
            oAddressUl.innerHTML = '<h3>还没有地址啊，赶快点添加新地址吧!</h3>';
            return;
          }
          oAddressUl.innerHTML = '';
          for (var i = data.length - 1; i >= 0; i--) {
            var obj = data[i];
            oAddressUl.innerHTML += `
                            <li data-id="${obj.address_id}">
                              <span class="sp-add"><b>收货人：</b>${obj.consignee}</span><span name="delete" class="delete" data-id="${obj.address_id}"></span><br />
                              <span class="sp-add"><b>手机：</b>${obj.mobile}</span><br />
                              <span class="sp-add"><b>地址：</b>${obj.address}</span>
                            </li>
            `;
          }
        })
	var selected_address_id = 0;
      var oAddressUl = document.querySelector('.address-ul');
      oAddressUl.onclick = function(event) {
        event = event || window.event;
        var target = event.target || event.srcElement;
        if (target.className === 'delete') {
          confirm('确认要删除收货地址吗？',function(){
            var address_id = target.dataset.id;
          $.get('http://h6.duchengjiu.top/shop/api_useraddress.php',
          {status: 'delete', address_id, token: localStorage.token}, function(json){
            if (json.code === 0) {
              target.parentNode.parentNode.removeChild(target.parentNode);
            }
          });
          },function(){
          	console.log("取消删除");
          });         
         }else {
          var oAddressLis = oAddressUl.querySelectorAll('li');
          for (var i = 0; i < oAddressLis.length; i++) {
            oAddressLis[i].classList.remove('selected');
          }
          if (target.nodeName === 'LI') {
            selected_address_id = parseInt(target.dataset.id);
            target.classList.add('selected');
          } else if (target.nodeName === 'SPAN'){
            selected_address_id = parseInt(target.parentNode.dataset.id);
            target.parentNode.classList.add('selected');
          }

        }
      }
      }else {
		var oAddress = document.querySelector('.address-ul');
		$("#address-ul").css("display","none")
		$(".address-arrow").css("transform","rotate(0deg)")
		oAddress.style.display = "none";
	}
});
$('#Sign-out').on('touchstart',function(){
	localStorage.token = "";
	localStorage.username = "";
	location.reload();
});
if(localStorage.token == "undefined") {
	$("#user").html("请登录");
	$("#user")[0].href = "login.html";
	$("#Sing-out").css("display","none");
}else if(localStorage.token != "") {
	$("#user").html(localStorage.username);
	$("#user")[0].href = "#";
	$("#Sign-out").css("display","block");
	$(".Head-portrait").css("background-image","url('img/default.png')")
}else if(localStorage.token === ""){
	$("#user").html("请登录");
	$("#user")[0].href = "login.html";
	$("#Sing-out").css("display","none");
	
} 
