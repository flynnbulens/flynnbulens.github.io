$(document).ready(function(){
	$('.accordeon li').click(function(){
		//alert('joewhoe');
		if($(this).hasClass('active')){
			$(this).removeClass('active');
			$(this).find('.fotocont').slideUp();
		} else {
			$(this).addClass('active');
			$(this).find('.fotocont').slideDown();
		}
	});		  
});