//  main js file for appIntro ////////////////////////////////////////////
$( document ).ready(function() {
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
        $(window).scrollTop(0);
        // remove the app panle cover to allow it to be used
        $('#appPanelCover').show();
        // turn off scrolling so the map can be used
        $('body').css('overflow', 'auto');
        // hide back to top text
        $('.sm-appScrollIconWrapper').hide();
        // on scroll to top reset image to image 1
        $('.sm-staticImagePanel').css('background-image', "url(" + window.location.href + 'images/picture1.png)')
    })
    // back to top
    $(`#toMap`).click(function(event) {
    	const hT = $('#mapPanel').offset().top
    	$(window).scrollTop(hT)
    });
    //Prevent Chrome from jumping down to map panel
    if ('scrollRestoration' in history) {
  		history.scrollRestoration = 'manual';
	}

  // use the browser demensions to reposition the text elements when load or when browser size is changed
  function positionTextElements(){
    let numOfPanels = 3
    // find browser height and width.
    let browserHeight = $(window).height();
    // position map application
    let mapPosition = (numOfPanels + 2.3) * browserHeight
    if($(window).height() < 700){
      mapPosition = (numOfPanels + 2.7) * browserHeight
    }
    $('#mapPanel').css('top', mapPosition)

    // set height of static image panel
    let staticImageHeight = (numOfPanels + 2) * browserHeight;
    $('.sm-staticImagePanel').css('height', staticImageHeight);

    // position first floating text box
    let firstBox = parseInt((browserHeight * 1))
    $('.sm-floatingTextBox-1').css('top', firstBox)

    // position second floating text box
    let secondBox = parseInt((browserHeight * 2))
    $('.sm-floatingTextBox-2').css('top', secondBox)

    // position third floating text box
    let thirdBox = parseInt((browserHeight * 3))
    $('.sm-floatingTextBox-3').css('top', thirdBox)
  }
  positionTextElements();

  // re-position elements based on browser resize
  $(window).resize(function () {
    positionTextElements();
  });

  // on window scroll, see if text elements are in view, if they are change the background image
  $(window).scroll(function () {
    let elem1In = isElementInViewport($('.sm-floatingTextBox-1'))
    let elem2In = isElementInViewport($('.sm-floatingTextBox-2'))
    let elem3In = isElementInViewport($('.sm-floatingTextBox-3'))
    if (elem1In) {
      changePicture(1)
    } else if (elem2In) {
      changePicture(2)
    } else if (elem3In) {
      changePicture(3)
    }
  })
  function changePicture(picNum) {
    let bgImage = $('.sm-staticImagePanel').css('background-image')
    bgImage = bgImage.replace(/.*\s?url\([\'\"]?/, '').replace(/[\'\"]?\).*/, '')
    bgImage = bgImage.split('/')
    bgImage = bgImage[bgImage.length - 1]
    picImage = "picture" + picNum + ".png"
    if (bgImage != picImage) {
      $('.sm-staticImagePanel').css('background-image', "url(" + window.location.href + 'images/' + picImage + ")")
       // change text in photo credit
       const textArray = ['PHOTO © KRISTEN BLANN/TNC', 'PHOTO © AMI VITALE/TNC', 'PHOTO © KRISTEN BLANN/TNC']
       if(picImage == "picture1.png"){
          $('.sm-subPhotoCredit').html(textArray[0])
       } else if (picImage == "picture2.png") {
          $('.sm-subPhotoCredit').html(textArray[1])
       } else if (picImage == "picture3.png") {
          $('.sm-subPhotoCredit').html(textArray[2])
       }
    }

   
  }
  function isElementInViewport(el) {
    el = el[0];
    var rect = el.getBoundingClientRect();
    if (rect.y < window.innerHeight && rect.bottom > 0) {
      return true;
    } else {
      return false;
    }
  }
})