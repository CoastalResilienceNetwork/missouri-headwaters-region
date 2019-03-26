//  main js file for indonesia story mode ////////////////////////////////////////////
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
})
