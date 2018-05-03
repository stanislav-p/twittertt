module.exports = function(router) {

    var Twitter = require('twitter');

    var client = new Twitter({
        consumer_key: 'if7dymMHRiaptHkuxZfBM0skU',
        consumer_secret: 'aZFbAE5TpVxtD2ERXsuxkIJ2XSnXnprMcTEZF6i9PhCIjO7w11',
        access_token_key: '3044572208-9kFGSgvFPtroiXtypBdJIz3SEduGe3DNtozvIAm',
        access_token_secret: 'Z1Gfs9XhuctGRzXOExMUJWl8EPy3YK9sHRYJes5FRKqzo'
    });


    router.post('/search', function(req, res) {

        var params = { screen_name: req.body.screen_name,  };

        client.get('statuses/user_timeline', params, function(error, tweets) {
            if (error) {
                res.json({ success: false, message: 'Oops. User doesn\'t exist!'});
            } else {
                res.json({ success: true, data: tweets });
            }
        });
    });

    return router;

};