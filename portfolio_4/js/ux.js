$(function(){

	$(".allMenu").click(function(){
		$(".wMN_Wrap").show();
		$('html, body').animate({scrollTop:0}); 
		$('.bg-black').fadeIn();
		return false;
		
	});
	
	$('.btnClose').click(function(){
		$(".wMN_Wrap").hide();
		$('.bg-black').fadeOut();
		return false;
	});

	$(".bg-black").click(function(){
		$(".wMN_Wrap").hide();
		$(this).fadeOut();
		return false;
	})
});



