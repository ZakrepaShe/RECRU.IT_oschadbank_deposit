$(document).ready( function() {


//Shadowing & slide body
$(".side-menu").mouseenter(function() {
	//slide
	$(".main-wrapper").toggleClass('open-slide');
	$(".side-menu").toggleClass('open-side');
	//Shadow
	$(".site-overlay").toggleClass('site-overlay-visible');
});

$(".side-menu").mouseleave(function() {
	//slide
	$(".main-wrapper").toggleClass('open-slide');
	$(".side-menu").toggleClass('open-side');
	//Shadow
	$(".site-overlay").toggleClass('site-overlay-visible');
});




//Sliding preview-info

$(".preview-info").mouseenter(function() {
	$(".slideBox").slideDown(200);
	$(".slideBox").css('display','block');
});

$(".preview-info").mouseleave(function() {
	$(".slideBox").slideUp(150);
});

//Switcher 
$(".prereg-switch").click(function() {
	$(".prereg-switch").addClass('bg-switch');
	$(".consult-switch").removeClass('bg-switch');
});

$(".consult-switch").click(function() {
	$(".prereg-switch").removeClass('bg-switch');
	$(".consult-switch").addClass('bg-switch');
});

//list button
$(".dropdown-menu li a").click(function() {
	var selText = $(this).text();
	$(this).parents('.btn-group').find('.dropdown-toggle').html(selText + ' <span class="caret"></span>');
});

var html = document.documentElement;

$(".font-switcher .bigger").click(function() {
  // with help of JS increase html font size up for 2px
  html.style.fontSize = parseInt(getComputedStyle(html, '').fontSize) + 2 + 'px';
});

$(".font-switcher .smaller").click(function() {
  // with help of JS decrease html font size up for 2px
  html.style.fontSize = parseInt(getComputedStyle(html, '').fontSize) - 2 + 'px';
});


});