var passport = require('passport');
var DropboxStrategy = require('passport-dropbox').Strategy;

var DROPBOX_APP_KEY = "sfywct24l3u231z";
var DROPBOX_APP_SECRET = "bb2bee4bkcflo2c

exports.setup = function (User, config) {
    passport.use(new DropboxStrategy({
            consumerKey: DROPBOX_APP_KEY,
            consumerSecret: DROPBOX_APP_SECRET,
            callbackURL: "http://127.0.0.1:9000/auth/dropbox/callback"
        },
        function (token, tokenSecret, profile, done) {
            // asynchronous verification, for effect...
            process.nextTick(function () {

                // To keep the example simple, the user's Dropbox profile is returned to
                // represent the logged-in user.  In a typical application, you would want
                // to associate the Dropbox account with a user record in your database,
                // and return that user instead.
                return done(null, profile);
            });
        }));
};
