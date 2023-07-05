import passport from 'passport'
import {Strategy} from 'passport-local'
passport.use(new Strategy(
    function(username, password, done) {
        return done(null,{username:"1234"})
    //   User.findOne({ username: username }, function (err, user) {
    //     if (err) { return done(err); }
    //     if (!user) { return done(null, false); }
    //     if (!user.verifyPassword(password)) { return done(null, false); }
    //     return done(null, user);
    //   });
    }
  ));

  export default passport