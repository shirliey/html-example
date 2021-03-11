/**
 * @authors shirliey@126.com
 * @date    2018-11-12
 */
function placeholderSupport(){
	var attr = 'placeholder',
		obj = document.createElement('input');
	return attr in obj;
}
$(function () {
	//input-textarea
	if(placeholderSupport()){
        $('.jQ-textarea i, .jQ-input i').hide();
    }else{
        $('.jQ-textarea').each(function(){
            if($(this).find('textarea').val()===''){
                $(this).find('i').show();
            }else if($(this).find('textarea').val()!==''){
                $(this).find('i').hide();
            }
        })
        $('.jQ-input').each(function(){
            if($(this).find('input').val()===''){
                $(this).find('i').show();
            }else if($(this).find('input').val()!==''){
                $(this).find('i').hide();
            }
        })
        $('.jQ-textarea i').click(function(){
            $(this).hide();
            $(this).next('textarea').focus();
        });
        $('.jQ-textarea textarea').focus(function(){
            $(this).prev('i').hide();
        }).blur(function(){
            if($(this).val()===''){
                $(this).prev('i').show();
            }else{
                $(this).prev('i').hide();
            }
        });
        $('.jQ-input i').click(function(){
            $(this).hide();
            $(this).next('input').focus();
        });
        $('.jQ-input input').focus(function(){
            $(this).prev('i').hide();
        }).blur(function(){
            if($(this).val()===''){
                $(this).prev('i').show();
            }else{
                $(this).prev('i').hide();
            }
        });
    }
	$('.jQ-know li').click(function () {
		$(this).toggleClass('active');
	});
	$('.jQ-btn').click(function () {
		var arr = [];
		$(this).parents('.jQ-msg').find('.jQ-know li').each(function () {
			if ($(this).hasClass('active')) {
				arr.push($(this).text());
			}
		});
		//arr为“我想了解”的内容
	});
	//轮播图-左右切换
	var Swiper1 = new Swiper('#b1', {
		loop: true,
		spaceBetween: 0,
		centeredSlides: true,
		speed: 1000,
		autoplay: 3000,
		autoplayDisableOnInteraction: false,
		pagination: '#b1 .swiper-pagination',
		paginationClickable: true
	});
	$('#b1 .swiper-button-next').on('click', function (e) {
		e.preventDefault();
		Swiper1.swipeNext();
	});
	$('#b1 .swiper-button-prev').on('click', function (e) {
		e.preventDefault();
		Swiper1.swipePrev();
	});
	//轮播图-3D切换
	$('#b2 #img-slider').roundabout({
		minScale: 0.4,
		maxScale: 0.8,
		duration: 750,
		autoplay: true,
		autoplayDuration: 5000,
		enableDrag: true
	}).bind({
		animationEnd: function (e) {
			var index = $('#b2 #img-slider').roundabout('getChildInFocus');
			$('#b2 .jQ_sliderSwitch li').removeClass('active');
			$('#b2 .jQ_sliderSwitch li').eq(index).addClass('active');
		}
	});
	$('#b2 .jQ_sliderPrev').on('click', function () {
		$('#b2 #img-slider').roundabout('animateToNextChild');
		return false;
	});
	$('#b2 .jQ_sliderNext').on('click', function () {
		$('#b2 #img-slider').roundabout('animateToPreviousChild');
		return false;
	});
	$('#b2 .jQ_sliderSwitch li').on('click', function () {
		var $elem = $(this);
		var index = $elem.index();
		console.log(index);
		$('#b2 #img-slider').roundabout('animateToChild', index);
		return false;
	});
	//轮播图-左右切换
	var Swiper3 = new Swiper('#b3', {
		loop: true,
		spaceBetween: 0,
		centeredSlides: true,
		speed: 1000,
		autoplay: 3000,
		autoplayDisableOnInteraction: false,
		pagination: '#b3 .swiper-pagination',
		paginationClickable: true
	});
	$('#b3 .swiper-button-next').on('click', function (e) {
		e.preventDefault();
		Swiper3.swipeNext();
	});
	$('#b3 .swiper-button-prev').on('click', function (e) {
		e.preventDefault();
		Swiper3.swipePrev();
	});
});
