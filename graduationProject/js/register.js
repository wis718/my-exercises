
var current_fs, next_fs, previous_fs; //fieldsets
//默认显示个人注册页面
$(".person_form").show();//显示普通会员表单
$(".company_form").hide();//隐藏公司会员表单
//点击个人注册
$("#person").click(function(){
	$(".person_form").show();//显示普通会员表单
	$(".company_form").hide();//隐藏公司会员表单
});
//点击企业注册
$("#company").click(function(){
	$(".person_form").hide();//隐藏普通会员表单
	$(".company_form").show();//显示公司会员表单
});
//点击下一步
$(".next").click(function(){

	//当前的next的祖先名为fieldsets元素
	current_fs = $(this).parents("fieldset");
	
	//下一个fieldsets
	next_fs = $(this).parents("fieldset").next();

	//步骤进度条
	$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

	//显示下一个fieldset
	next_fs.show(); 
	//隐藏当前fieldset
	current_fs.hide();
}); 
//点击返回上一步
$(".previous").click(function(){

	//当前的fieldsets
	current_fs = $(this).parents("fieldset");
	//前一个的fieldsets
	previous_fs = $(this).parents("fieldset").prev();
	//移除当前进度条
	$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
	//显示前一个fieldset，隐藏当前fieldset
	previous_fs.show(); 
	current_fs.hide();
});
$(".submit").click(function(){
	return false;
})

$(".inputClass").focus(function(){
	console.log($(this).attr("id"));
	
})
$(".inputClass").blur(function(){
	
	console.log($(this).attr("id"));
})
$("#sendCode").click(function(){
	var count = 60;
	var countDown = setInterval(CountDown,1000);
	function CountDown(){
		 count--;
		console.log( $("#test").text());
		console.log( $("#sendCode").text());
		 $("#sendCode").attr("disabled", true);
		 $("#sendCode").text(count + "s重新发送");
		 if (count == 0) {
                clearInterval(countDown);
            }

	}
	return false;
});
