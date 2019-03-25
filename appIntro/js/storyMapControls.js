console.log('main.js')
// map scroll to top click ///
    $('.sm-appScrollIconWrapper').on('click', function(evt){
        console.log('click')
        $(window).scrollTop(0);
        // remove the app panle cover to allow it to be used
        $('#appPanelCover').show();
        // turn off scrolling so the map can be used
        $('body').css('overflow', 'auto');
        // hide back to top text
        $('.sm-appScrollIconWrapper').hide();
    })
$( document ).ready(function() {
    $('#single-plugin-toggle-footer').show();
    // force scroll to top of window on load 
    $(window).on('beforeunload', function() {
        $(window).scrollTop(0);
    });
    // story map js code goes here /////////////////////////////////////////////////////////////////////////////////////////
    $(".sm-skipToMapBtn").on('click', function(evt){
        $('html, body').animate({
            scrollTop: $("#mapPanel").offset().top
        }, 500);
    })
    $('.sm-scrollIcon').on('click', function(evt){
        $('html, body').animate({
            scrollTop: $($(evt.currentTarget)[0]).parent().parent().next().offset().top
        }, 500);
    })
    console.log('above click')
    // map scroll to top click ///
    $('.sm-appScrollIconWrapper').on('click', function(evt){
        console.log('click')
        $(window).scrollTop(0);
        // remove the app panle cover to allow it to be used
        $('#appPanelCover').show();
        // turn off scrolling so the map can be used
        $('body').css('overflow', 'auto');
        // hide back to top text
        $('.sm-appScrollIconWrapper').hide();
    })
    // on scroll to a certain point remove the cover over the web mapping application to allow it to be used
    $(window).scroll(function() {
        var hT = $('#mapPanel').offset().top,
           hH = $('#mapPanel').outerHeight(),
           wH = $(window).height(),
           wS = $(this).scrollTop();
        if ((wS+20) > (hT+hH-wH)){
           // remove the app panle cover to allow it to be used
           $('#appPanelCover').hide();
           // show back to top text
           $('.sm-appScrollIconWrapper').show();
           // turn off scrolling so the map can be used
           console.log('when')
           $('body').css('overflow', 'hidden');
        }
    });
    var createPanels = function(){
        $.each(app.config, function(i,v){
            if(v.display){
                // code to create the main panel of the app ////////////////////////
                if(v.id == 'mainPanel'){
                    // update the page header
                    $('.sm-panel1Header').html(v.header)
                    // update the body text
                    $('.sm-panel1TextBody').html(v.body)
                    // chnage the source for the main logo image
                    $('.sm-logoWrapper img').attr("src",v.logoMediaPath);
                    // determine what kind of media to display, and set the source
                    if(v.mediaType == 'video'){
                        // turn on video div
                        $('#videoMain').show();
                        // set video source
                        $('#videoMain source').attr('src', v.mediaPath)
                    }else if(v.mediaType == 'image'){
                        // turn on image div
                        $('#imageMain').show();
                        // set image source
                        $('#imageMain').attr('src', v.mediaPath)

                    }else{
                        console.log('the correct media type has not been choosen main panel')
                    }
                }
                // code to create the second panel
                if(v.id == 'panel2'){
                    // update the page header
                    $('.sm-panel2Header').html(v.header)
                    // update the body text
                    $('.sm-panel2TextBody').html(v.body)
                    // determine what kind of media to display, and set the source
                    if(v.mediaType == 'video'){
                        // set video source
                        $('#videoPanel2 source').attr('src', v.mediaPath)
                        // turn on video div
                        $('#videoPanel2').show();
                    }else if(v.mediaType == 'image'){
                        // set image source
                        $('#imagePanel2').attr('src', v.mediaPath)
                        // turn on image div
                        $('#imagePanel2').show();

                    }else{
                        console.log('the correct media type has not been choosen for panel 2')
                    }
                }
                // code to create the third panel
                if(v.id == 'panel3'){
                    // update the page header
                    $('.sm-panel3Header').html(v.header)
                    // update the body text
                    $('.sm-panel3TextBody').html(v.body)
                    // determine what kind of media to display, and set the source
                    if(v.mediaType == 'video'){
                        // set video source
                        $('#videoPanel3 source').attr('src', v.mediaPath)
                        // turn on video div
                        $('#videoPanel3').show();
                    }else if(v.mediaType == 'image'){
                        // set image source
                        $('#imagePanel3').attr('src', v.mediaPath)
                        // turn on image div
                        $('#imagePanel3').show();

                    }else{
                        console.log('the correct media type has not been choosen for panel 3')
                    }
                }
                // code to create the third panel
                if(v.id == 'panel4'){
                    // update the page header
                    console.log(v);
                    $('.sm-panel4Header').html(v.header)
                    // update the body text
                    $('.sm-panel4TextBody').html(v.body)
                    // determine what kind of media to display, and set the source
                    if(v.mediaType == 'video'){
                        // set video source
                        $('#videoPanel4 source').attr('src', v.mediaPath)
                        // turn on video div
                        $('#videoPanel4').show();
                    }else if(v.mediaType == 'image'){
                        // set image source
                        $('#imagePanel4').attr('src', v.mediaPath)
                        // turn on image div
                        $('#imagePanel4').show();

                    }else{
                        console.log('the correct media type has not been choosen for panel 4')
                    }
                }
                $('#' + v.id).show();
            }
        })
    }
    /////////////////////////////////////////////////
    createPanels(); // call the create panel function
})