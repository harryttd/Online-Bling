const app = require('APP'), {env} = app
const debug = require('debug')(`${app.name}:auth`)
const passport = require('passport')

const User = require('APP/db/models/user')
const OAuth = require('APP/db/models/oauth')
const auth = require('express').Router()


/*************************
 * Auth strategies
 *
 * The OAuth model knows how to configure Passport middleware.
 * To enable an auth strategy, ensure that the appropriate
 * environment variables are set.
 *
 * You can do it on the command line:
 *
 *   FACEBOOK_CLIENT_ID=abcd FACEBOOK_CLIENT_SECRET=1234 npm start
 *
 * Or, better, you can create a ~/.$your_app_name.env.json file in
 * your home directory, and set them in there:
 *
 * {
 *   FACEBOOK_CLIENT_ID: 'abcd',
 *   FACEBOOK_CLIENT_SECRET: '1234',
 * }
 *
 * Concentrating your secrets this way will make it less likely that you
 * accidentally push them to Github, for example.
 *
 * When you deploy to production, you'll need to set up these environment
 * variables with your hosting provider.
 **/

// Facebook needs the FACEBOOK_CLIENT_ID and FACEBOOK_CLIENT_SECRET
// environment variables.
OAuth.setupStrategy({
  provider: 'facebook',
  strategy: require('passport-facebook').Strategy,
  config: {
    clientID: env.FACEBOOK_CLIENT_ID,
    clientSecret: env.FACEBOOK_CLIENT_SECRET,
    callbackURL: `${app.rootUrl}/api/auth/login/facebook`,
  },
  passport
});

// Google needs the GOOGLE_CONSUMER_SECRET AND GOOGLE_CONSUMER_KEY
// environment variables.
OAuth.setupStrategy({
  provider: 'google',
  strategy: require('passport-google-oauth').Strategy,
  config: {
    consumerKey: env.GOOGLE_CONSUMER_KEY,
    consumerSecret: env.GOOGLE_CONSUMER_SECRET,
    callbackURL: `${app.rootUrl}/api/auth/login/google`,
  },
  passport
});

// Github needs the GITHUB_CLIENT_ID AND GITHUB_CLIENT_SECRET
// environment variables.
OAuth.setupStrategy({
  provider: 'github',
  strategy: require('passport-github2').Strategy,
  config: {
    clientID: env.GITHUB_CLIENT_ID,
    clientSecrets: env.GITHUB_CLIENT_SECRET,
    callbackURL: `${app.rootUrl}/api/auth/login/github`,
  },
  passport
});

// Other passport configuration:

passport.serializeUser((user, done) => {
  debug('will serialize user.id=%d', user.id)
  done(null, user.id)
  debug('did serialize user.id=%d', user.id)
});

passport.deserializeUser(
  (id, done) => {
    debug('will deserialize user.id=%d', id)
    User.findById(id)
      .then(user => {
        debug('deserialize did ok user.id=%d', user.id)
        done(null, user)
      })
      .catch(err => {
        debug('deserialize did fail err=%s', err)
        done(err)
      })
  }
)

// passport-local is updated 1 year ago
// passport.use(new (require('passport-local').Strategy) (
//   (email, password, done) => {
//     debug('will authenticate user(email: "%s")', email)
//     User.findOne({where: {email}})
//       .then(user => {
//         if (!user) {
//           debug('authenticate user(email: "%s") did fail: no such user', email)
//           return done(null, false, { message: 'Login incorrect' })
//         }
//         return user.authenticate(password)
//           .then(ok => {
//             if (!ok) {
//               debug('authenticate user(email: "%s") did fail: bad password')
//               return done(null, false, { message: 'Login incorrect' })
//             }
//             debug('authenticate user(email: "%s") did ok: user.id=%d', user.id)
//             done(null, user)
//           })
//       })
//       .catch(done)
//   }
// ))

auth.get('/whoami', (req, res) => {
  console.log(env.GOOGLE_CONSUMER_KEY)
  console.log(req.user)
  User.findOrCreate({
    where:{ session_id : req.sessionID}
  })
  .then(returnedUser => res.send(returnedUser[0]))
})

// login, i.e. "you remember `me`, right?"
auth.put('/login', (req, res, next)=>{
  console.log('sessionID',req.sessionID)
  User.findOne({
    where:{
      email:req.body.email
    }
  }).then(user=>{
      if(!user) {
        res.sendState(401)
      }else{
        return user.update({
          email: req.body.email,
          password: req.body.password,
          session_id: req.sessionID
        })
      }
    }).then(updated=>{
      req.logIn(updated, err=>{
          if(err) return next(err);
          res.json(updated)
        })
    })
    .catch(next)
})


auth.put('/signup', (req, res, next)=>{
  console.log('sessionID',req.sessionID)
  console.log('body',req.body)
  User.findOrCreate({
    where: {
      session_id: req.sessionID
    }
  }).spread((user, created)=>{
    console.log(user)
    return user.update(req.body)
  }).then(updated=>{
    req.logIn(updated, err=>{
      if(err) return next(err)
      res.json(updated)
    })
  })
})

//this route is probably out dated
auth.post('/:strategy/login', (req, res, next) =>
  passport.authenticate(req.params.strategy, {
    successRedirect: '/'
  })(req, res, next)
)

auth.post('/logout', (req, res, next) => {
  console.log(req.user)
  User.emptySessionId(req.user.id)
    .then(()=>{
      req.session.destroy();
      req.logout()
      res.redirect('/api/auth/whoami')
    })
})

module.exports = auth
