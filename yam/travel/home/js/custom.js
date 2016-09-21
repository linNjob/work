$(document).ready(function() { 

	// Main Nav //

	$('.item1').hover(
		function(){
			$(this).children('.title').stop().animate({bottom: '0'}, 200 );
		},function(){
			$(this).children('.title').stop().animate({bottom: '-95px'}, 200 );
	});
	
	$('.item2').hover(
		function(){
			$(this).children('.title').stop().animate({bottom: '0'}, 200 );
		},function(){
			$(this).children('.title').stop().animate({bottom: '-90px'}, 200 );
	});
	
	$('.item3').hover(
		function(){
			$(this).children('.title').stop().animate({bottom: '0'}, 200 );
		},function(){
			$(this).children('.title').stop().animate({bottom: '-45px'}, 200 );
	});

	var config = {    
	     over: openMenu, // function = onMouseOver callback (REQUIRED)    
	     timeout: 100, // number = milliseconds delay before onMouseOut    
	     out: closeMenu // function = onMouseOut callback (REQUIRED)    
	};

	function openMenu() {
		$('ul', this).stop().slideDown(100);
	};
	function closeMenu() {
		$('ul', this).stop().slideUp(100);
	};
	$("#nav-work").each(function(){
		$(this).hoverIntent( config );
	});
	
	// About Section //
	
	$('#services li a#link-1').addClass('active');
	$('#services li a').click(function(){
		var all = $('#services ul').find('a').map(function() { return $(this).attr('id').split('-')[1]; }).get();
		var clickedNum = $(this).attr('id').split('-')[1];
		var activeNum = $('#services ul .active').attr('id').split('-')[1];
		var $activeContent = $('#services #service-' + activeNum);
		var $clickedContent = $('#services #service-' + clickedNum);
		var $clickedButton = $('#services ul #link-' + clickedNum);
		
		//alert ('clickedNum = ' + clickedNum + '\nall = ' + all + '\nactiveNum = ' + activeNum + '\nactiveContent = ' + $activeContent);
		
		$('#services li a.active').removeClass('active');
		$activeContent.animate({ opacity: 0 }, 350, function() {
			$activeContent.css('display','none').css('opacity','1');
			$clickedContent.css('opacity','0').css('display','block').animate({opacity: 1}, 350);
		});
		
		$clickedButton.addClass('active');
		
		return false;
	});
	
	// Contact Section //
	
	$('#grid li a#link-1').addClass('active');
	$('#grid li a').click(function(){
		var all = $('#grid ul').find('a').map(function() { return $(this).attr('id').split('-')[1]; }).get();
		var clickedNum = $(this).attr('id').split('-')[1];
		var activeNum = $('#grid ul .active').attr('id').split('-')[1];
		var $activeContent = $('#grid #item-' + activeNum);
		var $clickedContent = $('#grid #item-' + clickedNum);
		var $clickedButton = $('#grid ul #link-' + clickedNum);
		
		//alert ('clickedNum = ' + clickedNum + '\nall = ' + all + '\nactiveNum = ' + activeNum + '\nactiveContent = ' + $activeContent);
		
		$('#grid li a.active').removeClass('active');
		$activeContent.animate({ opacity: 0 }, 350, function() {
			$activeContent.css('display','none').css('opacity','1');
			$clickedContent.css('opacity','0').css('display','block').animate({opacity: 1}, 350);
		});
		
		$clickedButton.addClass('active');
		
		return false;
	});
	
	// Work Section //

	$('a#btn-next').hover(
		function(){
			$(this).animate({right: '0'}, 200 );
		},function(){
			$(this).animate({right: '-146px'}, 200 );
	});
	$('a#btn-prev').hover(
		function(){
			$(this).animate({left: '0'}, 200 );
		},function(){
			$(this).animate({left: '-146px'}, 200 );
	});
	
});
$(document).keydown(function(e) {
	var prevProj = $('a#btn-prev').attr('href');
	var nextProj = $('a#btn-next').attr('href');
	if (e.keyCode == 37) {
		window.location.href = prevProj;
	} else if (e.keyCode == 39) {
		window.location.href = nextProj;
	}
});