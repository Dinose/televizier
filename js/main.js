$(function() {

	// $(document).keydown(function(e){
	//     if (e.keyCode == 38) { 
	//       	console.log(isCurrent);
	//        	return false;
	//     }
	//     if (e.keyCode == 40) { 
	//        console.log(isCurrent.next());
	//        $('html, body').animate({
	// 		    scrollTop: isCurrent.next().offset().top - 100
	// 		}, 1500);
	//        return false;
	//     }
	//     e.preventDefault();
	// });

	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
	 // some code..
	}else{
		// $('#sidenav').scrollspy();
		$('body').scrollspy({offset: 150});
		// $('.options').scrollspy({target: '#sidenav', offset: 100});
		
		$('.optie').on('mouseenter', function () {
			$('#dropdown').stop().animate({'top' : '0px'});
		});

		$('#instructie a').on('click', function () {
			event.preventDefault();
			var href = $(this).attr('href');

			$('html, body').animate({
			    scrollTop: $(href).offset().top - 100
			}, 1500);
		});

		$('#logo a').on('click', function () {
			event.preventDefault();
		 	$("html, body").animate({ scrollTop: 0 }, "slow");
		});

		$('#dropdown').on('mouseleave', function () {
			if($('.options').hasClass('inview')){
				
			}else{
				$('#dropdown').stop().animate({'top' : '-30px'});
			}
		});

		jQuery.fn.hCenterImage = function () {
			var img = $(this);
			var imgH = img.height();
			var imgC = (imgH - 520) / 2;

			img.css({'top' : -imgC});
		}

		/* PARALLAX SCROLL */
		jQuery.fn.parallaxHeader = function () {
			n = Math.ceil($("body").scrollTop() / 3);
			$(this).css("-webkit-transform", "translateY(-" + n + "px)");
			$(this).css("-moz-transform", "translateY(-" + n + "px)");
		};

		$(window).scroll(function(){
			$("#leader_img img").parallaxHeader();

			// $('section').each(function() {

	  //           var post = $(this);
	  //           var position = post.position().top - $(window).scrollTop();
	            
	  //           if (position <= 0) {
	  //               post.addClass('selected');
	  //           } else {
	  //               post.removeClass('selected');
	  //           }
	  //       });   
		});

		$(window).load(function() {
			$('#leader_img img').hCenterImage();
			$('#goudeloper_img img').hCenterImage();

			$('[data-spy="scroll"]').each(function () {
			  var $spy = $(this).scrollspy('refresh')
			});
		});

		$(window).resize(function() {
			$('#leader_img img').hCenterImage();
			$('#goudeloper_img img').hCenterImage();
		});


		$('#bereik').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
		  	if (isInView) {
		   
		  	}
		});

		$('#menu_hoofdmenu a').on('click', function(event){
			//Vars
			event.preventDefault();
			var href = $(this).attr('href');
			
			//Scrollen
			$('html, body').animate({
			    scrollTop: $(href).offset().top - 100
			}, 1500);
		});

		$('#sidenav a').on('click', function(event){
			//Vars
			event.preventDefault();
			var href = $(this).attr('href');
			
			//Scrollen
			$('html, body').animate({
			    scrollTop: $(href).offset().top - 100
			}, 1500);
		});

		$('#dropdown a').on('click', function(event){
			//Vars
			event.preventDefault();
			var href = $(this).attr('href');
			
			//Scrollen
			$('html, body').animate({
			    scrollTop: $(href).offset().top - 100
			}, 1500);
		});


		$('#introductie').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
		  	if (isInView) {
		    	// element is now visible in the viewport
		     	$('#sidenav').animate({'width' : '0px'});
		    	$('.optie').removeClass('actief');
		    	$('#dropdown').stop().animate({'top' : '-30px'});
		    	$('.options').removeClass('inview');
		  	}
		});

		$('.options').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
		  	if (isInView) {
		    	$('#sidenav').animate({'width' : '70px'});
		    	$('.optie').addClass('actief');
		    	$('#dropdown').stop().animate({'top' : '0px'});
		    	$(this).addClass('inview');
		    }
		});

		$('#contact').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
		  	if (isInView) {
		    // element is now visible in the viewport
		    	$('#sidenav').animate({'width' : '0px'});
		    	$('.optie').removeClass('actief');
		    	$('#dropdown').stop().animate({'top' : '-30px'});
		    	$('.options').removeClass('inview');
		  	}
		});

		$('section').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
		  	if (isInView) {
		    	isCurrent = $(this);
		  	}
		});
	}

});
