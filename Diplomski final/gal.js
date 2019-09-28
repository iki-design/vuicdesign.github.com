$(document).ready(function() {
    
	
	$("#all").click(function(){
    $(".portfolio_item").removeClass("hide");
	$(".logo").addClass("show");
	$(".branding").addClass("show");
	$(".packaging").addClass("show");
	$(".other").addClass("show");
    $("#all a").addClass("active");
		$("#logo a").removeClass("active");
		$("#branding a").removeClass("active");
		$("#packaging a").removeClass("active");
		$("#other a").removeClass("active");
	
	  
	});
	$("#logo").click(function(){
		$(".portfolio_item").addClass("hide");
		$(".logo").addClass("show");
		$(".branding").removeClass("show");
		$(".packaging").removeClass("show");
		$(".other").removeClass("show");
		$("#logo a").addClass("active");
		$("#all a").removeClass("active");
		$("#branding a").removeClass("active");
		$("#packaging a").removeClass("active");
		$("#other a").removeClass("active");
	});
	$("#branding").click(function(){
		$(".portfolio_item").addClass("hide");
		$(".branding").addClass("show");
		$(".logo").removeClass("show");
		$(".packaging").removeClass("show");
		$(".other").removeClass("show");
		$("#branding a").addClass("active");
		$("#all a").removeClass("active");
		$("#logo a").removeClass("active");
		$("#packaging a").removeClass("active");
		$("#other a").removeClass("active");
	});
	$("#packaging").click(function(){
		$(".portfolio_item").addClass("hide");
		$(".packaging").addClass("show");
		$(".logo").removeClass("show");
		$(".branding").removeClass("show");
		$(".other").removeClass("show");
		$("#packaging a").addClass("active");
		$("#all a").removeClass("active");
		$("#branding a").removeClass("active");
		$("#logo a").removeClass("active");
		$("#other a").removeClass("active");
	});
	$("#other").click(function(){
		$(".portfolio_item").addClass("hide");
		$(".other").addClass("show");
		$(".branding").removeClass("show");
		$(".packaging").removeClass("show");
		$(".logo").removeClass("show");
		$("#other a").addClass("active");
		$("#all a").removeClass("active");
		$("#branding a").removeClass("active");
		$("#packaging a").removeClass("active");
		$("#logo a").removeClass("active");
	});
	
});