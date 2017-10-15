$('.Login-immediately').on('touchstart',function(){
	$.post('http://h6.duchengjiu.top/shop/api_user.php',
	{	
		status: 'login',
        username: $("input[name=username]")[0].value,
        password: $("input[name=password]")[0].value
	},function(json){
		localStorage.token = json.data.token;
        localStorage.username = json.data.username;
        if($("input[name=username]")[0].value === ""){
        	toast("请输入用户名/邮箱/手机号", 1500);
        }else if(json.code === 0){
        	toast(json.message, 1500);
              setTimeout(function(){
        		  window.location.href='Personal_Center.html';
        	},2000);
        }else{
        	toast(json.message, 1500);
	  }
      });
});
$('#AutoLogin').on('touchstart',function(){
	if($(".red-checkbox")[0].style.backgroundColor === "rgb(204, 51, 51)"){
		$(".red-checkbox")[0].style.backgroundColor = "white";
		$("#red-ball")[0].display = "none";
	}else if($(".red-checkbox")[0].style.backgroundColor === "white"){
		$(".red-checkbox")[0].style.backgroundColor = "#C33";
		$("#red-ball")[0].display = "block";
		}
});
//这是显示或隐藏密码的js，开始
$(".ball").on('touchstart',function(){
	if($("#PassWord")[0].type === "password"){
		$(".ball").css("transform" ,"translateX(30px)");
		$("#PassWord")[0].type = "text";
		$(".showorhidden").css("background-color","#F23030")
	}else if($("#PassWord")[0].type === "text"){
		$(".ball").css("transform" ,"translateX(0px)");
		$("#PassWord")[0].type = "password";
		$(".showorhidden").css("background-color","#dedede")
	}
});
//这是显示或隐藏密码的js，结束