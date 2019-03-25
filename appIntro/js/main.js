//  main js file for indonesia story mode ////////////////////////////////////////////
$( document ).ready(function() {
	// on skip to map click, zoom to the mapping application
	$('.sm-skipToMap').on('click', function(evt){
		// console.log('click')
	})
	// on explore app link click, zoom to mapping application
	$('.sm-exploreAppLink').on('click', function(evt){
		// console.log('click')
	})
	// load img source to image
	$("#mainImage").attr('src','images/Indo_1.jpg');
	$("#secondImage").attr('src','images/Indo_2.jpg');
	$("#thirdImage").attr('src','images/Indo_2.jpg');
	// turn on map/content toggle if screen size is small
	var screenWidth = $( window ).width();
	// console.log(screenWidth);
	if(screenWidth < 500){
		console.log('we are on mobile');
		var embedDoc = document.getElementById("embedDoc")
		console.log(embedDoc)
		embedDoc.addEventListener('load', function(){
			console.log('done lloading')
			console.log($("#single-plugin-toggle-footer"))
		})
	}
	// on scroll to a certain point remove the cover over the web mapping application to allow it to be used
    $(window).scroll(function() {
        var hT = $('#mapPanel').offset().top,
           hH = $('#mapPanel').outerHeight(),
           wH = $(window).height(),
           wS = $(this).scrollTop();
        if ((wS+1) > (hT+hH-wH)){
           // remove the app panle cover to allow it to be used
           $('#appPanelCover').hide();
           // show back to top text
           $('.sm-appScrollIconWrapper').show();
           // turn off scrolling so the map can be used
           $('body').css('overflow', 'hidden');
        }
    });
    // map scroll to top click ///
    $('.sm-appScrollIconWrapper').on('click', function(evt){
        // console.log('click')
        $(window).scrollTop(0);
        // remove the app panle cover to allow it to be used
        $('#appPanelCover').show();
        // turn off scrolling so the map can be used
        $('body').css('overflow', 'auto');
        // hide back to top text
        $('.sm-appScrollIconWrapper').hide();
        $(".sm-staticMapDiv").removeClass("sm-img5").addClass("sm-img1");

    })
    


	$(window).scroll(function () {
		// do things if the screen width is more than 700
		if($(window).width()> 700){
			console.log($(window).width())
			if($(window).scrollTop() > 140){
				// start increasing opacity
				$('.sm-staticMapDiv').css('opacity', 1)
			}
			if($(window).scrollTop() < 140){
				// start increasing opacity
				$('.sm-staticMapDiv').css('opacity', .4)
			}

			var elemList = [$('.sm-text1'), $('.sm-text2'), $('.sm-text3'), $('.sm-text4')]
			$.each(elemList, function(i,v){
				var elem = v;
				var heightFromBtm = $(window).height() - (elem.offset().top - $(window).scrollTop())
				var heightFromTop = elem.offset().top - $(window).scrollTop()
				var elemHeight = elem.height();
				if(heightFromBtm > (elemHeight) && heightFromTop > 50){
					elem.css('opacity', 1)
				}else{
					elem.css('opacity', 0)
				}
			})
		}
		

		if ($(window).scrollTop() > 600){
			// console.log('change the background image 1');
			$(".sm-staticMapDiv").removeClass("sm-img1").addClass("sm-img2"); // this code works to change the image

		}
		if ($(window).scrollTop() < 600){
			// console.log('change the background image 2');
			$(".sm-staticMapDiv").removeClass("sm-img2").addClass("sm-img1"); // this code works to change the image

		}
		if ($(window).scrollTop() > 1000){
			// console.log('change the background image 3');
			$(".sm-staticMapDiv").removeClass("sm-img2").addClass("sm-img3"); // this code works to change the image

		}
		if ($(window).scrollTop() < 1000 && $(window).scrollTop() > 601){
			// console.log('change the background image 4');
			$(".sm-staticMapDiv").removeClass("sm-img3").addClass("sm-img2"); // this code works to change the image

		}
		if ($(window).scrollTop() > 2000){
			// console.log('change the background image 3');
			$(".sm-staticMapDiv").removeClass("sm-img3").addClass("sm-img4"); // this code works to change the image

		}
		if ($(window).scrollTop() < 2000 && $(window).scrollTop() > 1001){
			// console.log('change the background image 4');
			$(".sm-staticMapDiv").removeClass("sm-img4").addClass("sm-img3"); // this code works to change the image

		}
		if ($(window).scrollTop() > 2500){
			// console.log('change the background image 3');
			$(".sm-staticMapDiv").removeClass("sm-img4").addClass("sm-img5"); // this code works to change the image

		}
		if ($(window).scrollTop() < 2500 && $(window).scrollTop() > 2001){
			// console.log('change the background image 4');
			$(".sm-staticMapDiv").removeClass("sm-img5").addClass("sm-img4"); // this code works to change the image

		}

	})
})