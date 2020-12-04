$(function(){
	// 16.상단 캐로셀의 동작시간을 설정
	$("#top_carousel").carousel({
	  interval: 4000
	})
	// 17.캐로셀 마지막 이미지의 ht를 가져와서 나머지 동영상과 이미지의 ht를 맞춤
	var top_carousel_ht=$("#top_carousel .item:last-of-type").height();
	$("#top_carousel iframe,#top_carousel .carousel_control,#top_carousel .carousel-inner").height(top_carousel_ht);
	$(window).resize(function(){
		var top_carousel_ht=$("#top_carousel .item:last-of-type").height();
		$("#top_carousel iframe,#top_carousel .carousel_control,#top_carousel .carousel-inner").height(top_carousel_ht);
	})
	// 47.animatescroll 동작구현
	$(".nav li:nth-child(1) a, .navbar-brand").click(function(){
		$("#top").animatescroll({scrollSpeed:2000,easing:"easeInOutBack", padding:70});
	})
	$(".nav li:nth-child(2) a").click(function(){
		$("#accordian_contents_02").animatescroll({scrollSpeed:2000,easing:"easeInOutBack", padding:70});
	})
	$(".nav li:nth-child(3) a").click(function(){
		$("#gallery_contents_03").animatescroll({scrollSpeed:2000,easing:"easeInOutBack", padding:70});
	})
	$(".nav li:nth-child(4) a").click(function(){
		$("#form_contents_04").animatescroll({scrollSpeed:2000,easing:"easeInOutBack", padding:70});
	})
	// 48.waypoint plugin동작구문
	$(".wp1").waypoint(function(direction){
		if(direction==="down"){
		$(".wp1").addClass("bounceInDown animated")
		}
	},{
		offset:"40%"
	})
	$(".wp1").waypoint(function(direction){
		if(direction==="up"){
		$(".wp1").removeClass("bounceInDown animated")
		}
	},{
		offset:"40%"
	})

	$(".wp2").waypoint(function(direction){
		if(direction==="down"){
		$(".wp2").addClass("heartBeat animated")
		}
	},{
		offset:"40%"
	})
	$(".wp2").waypoint(function(direction){
		if(direction==="up"){
		$(".wp2").removeClass("heartBeat animated")
		}
	},{
		offset:"40%"
	})

	$(".wp3").waypoint(function(direction){
		if(direction==="down"){
		$(".wp3").addClass("bounceInUp animated")
		}
	},{
		offset:"50%"
	})
	$(".wp3").waypoint(function(direction){
		if(direction==="up"){
		$(".wp3").removeClass("bounceInUp animated")
		}
	},{
		offset:"50%"
	})

	$(".wp4").waypoint(function(direction){
		if(direction==="down"){
		$(".wp4").addClass("fadeInDown animated sh")
		}
	},{
		offset:"50%"
	})
	$(".wp4").waypoint(function(direction){
		if(direction==="up"){
		$(".wp4").removeClass("fadeInDown animated sh")
		}
	},{
		offset:"50%"
	})

	$(".wp5").waypoint(function(direction){
		if(direction==="down"){
		$(".wp5").addClass("fadeInUp animated sh")
		}
	},{
		offset:"50%"
	})
	$(".wp5").waypoint(function(direction){
		if(direction==="up"){
		$(".wp5").removeClass("fadeInUp animated sh")
		}
	},{
		offset:"50%"
	})


	// 51.스크롤의 위치를 얻어와서 해당번째 메뉴 활성화
	var menu=$("nav li");
	$(window).on("scroll",function(){
		var scrollTop=$(window).scrollTop();
		// alert(scrollTop);
		var bg1_top=$(".bg1").offset().top;
		var bg2_top=$(".bg2").offset().top;
		var bg3_top=$(".bg3").offset().top;
		var bg4_top=$(".bg4").offset().top;
		// alert(bg4_top);

		if(scrollTop>=0 && scrollTop<bg1_top-70){
			menu.removeClass("active");
			menu.eq(0).addClass("active");
		}else if(scrollTop>=bg1_top-70 && scrollTop<bg2_top-70){
			menu.removeClass("active");
			menu.eq(1).addClass("active");
		}else if(scrollTop>=bg2_top-70 && scrollTop<bg3_top-70){
			menu.removeClass("active");
			menu.eq(2).addClass("active");
		}else if(scrollTop>=bg3_top-70 && scrollTop<bg4_top-70){
			menu.removeClass("active");
			menu.eq(3).addClass("active");
		}

	})

	$("[data-toggle='tooltip']").tooltip();


})