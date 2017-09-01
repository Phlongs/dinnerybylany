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
        template: '<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3"><div class="photo-box"><div class="image-wrap"><a href="{{link}}"><img src="{{image}}"></a><div class="likes">{{likes}} Likes</div></div><div class="description">{{caption}}<div class="date">{{model.date}}</div></div></div></div>'
    });
    feed.run();

});
