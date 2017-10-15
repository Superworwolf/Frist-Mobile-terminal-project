function showAddress() {
			$.get('http://h6.duchengjiu.top/shop/api_useraddress.php',
					{token: localStorage.token},
					function(json) {
						var data = json.data;
						var oAddressUl = document.querySelector('.address-ul');
						if (data.length === 0) {
							oAddressUl.innerHTML = '<h2>还没有地址啊，赶快点添加新地址吧!</h2>';
							return;
						}
						oAddressUl.innerHTML = '';
						for (var i = data.length - 1; i >= 0; i--) {
							var obj = data[i];
							oAddressUl.innerHTML += `
                            <li data-id="${obj.address_id}">
                              <span>收货人：${obj.consignee}</span><span name="delete" class="delete" data-id="${obj.address_id}"></span><br />
                              <span>手机：${obj.mobile}</span><br />
                              <span>地址：${obj.address}</span>
                            </li>
            `;
						}
					})
		}
		showAddress();

		var selected_address_id = 0;
		var oAddressUl = document.querySelector('.address-ul');
		oAddressUl.onclick = function(event) {
			event = event || window.event;
			var target = event.target || event.srcElement;
			console.log(target.nodeName);
			if (target.className === 'delete') {
				confirm('确认要删除收货地址吗？',function(){
					var address_id = target.dataset.id;
					console.log(address_id);
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
		$(window).on('scroll',function(){
		$('body').bind('touchmove', function(e) {
       var  winHeight = $(window).scrollTop();
       if(winHeight > 20) {
       	$('#add-address').css("position","fixed");
       	$('#add-address').css("top","0")
       }else if(winHeight > 0){
       	$('#add-address').css("position","static");
       }
    });
});