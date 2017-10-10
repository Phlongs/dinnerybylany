$(function() {

    //Set up instafeed
    var feed = new Instafeed({
        get: 'user',
        userId:177052610,
        accessToken:"177052610.a946e6e.2dacbb551a6548fa8baacbdd860630e7",
        target: 'instafeed',
        links: true,
        limit: 70,
        sortBy: 'most-recent',
        resolution: 'standard_resolution',
        template: '<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3"><div class="photo-box"><div class="image-wrap"><a href="{{link}}"><img src="{{image}}"></a><div class="likes">{{likes}} <i class="fa fa-heart" aria-hidden="true"></i></div></div><div class="description">{{caption}}<div class="date">{{model.date}}</div></div></div></div>'
    });
    feed.run();

});

        var $orbs = $('.orbs span');
            $('.end-right').css('left' , '-10%');
            $('.end-left').css('left', '110%');
            $orbs.velocity({'top': '-300px', scaleX: '.2', scaleY: '.2', color: '#990000'},0);
            var orb = 0;
            var numOrbs = $orbs.length;

            $('.end-right').velocity({left : '50%'}, 'easeOutExpo', 1200);
            $('.end-left').velocity({left : '50%'}, 'easeOutExpo',  1200);


            dropOrbs = function(){
              $orbs.eq(orb).velocity({top: '70px'}, 400).velocity({scaleX: 1, scaleY: 1, color: '#fff'}, 1000).css('position', 'relative');
              orb = orb + 1;
              if(orb < numOrbs){
                setTimeout(dropOrbs, 100);
              }
              else{
                setTimeout(function(){$('.glow').velocity({opacity: 1}, 1200);}, 1200);

              }
              
            }

            setTimeout(dropOrbs, 400);
