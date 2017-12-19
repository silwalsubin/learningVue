import express from 'express';
import config from './config';
import cors from 'cors';
import passport from 'passport';
import bodyParser from 'body-parser';
import session from 'express-session';
import taskApi from './api/task';
import googleAuth from 'passport-google-oauth';
import auth from './api/auth';
import user from './api/user';

let googleStrategy = googleAuth.OAuth2Strategy;
let port = config.port
let app = express();

app.use(cors());
app.use(bodyParser.json());

passport.use(new googleStrategy({
  clientID: `817728938926-ctui6aa8ri3ge1tjltd396h8qtars40s.apps.googleusercontent.com`,
  clientSecret: 'UNaqpPIeZzW-AWhQHm78bN12',
  callbackURL: 'http://localhost:3000/auth/google/callback'},
  function(req, accessToken, refreshToken, profile, done){
    done(null, profile);
  }
));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

app.use(session({
  secret: 'IdontKnowMySecret',
  resave: true,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/task', taskApi);
app.use('/auth', auth);
app.use('/', user);



app.listen(port, () => {
  console.log(`Tasks To-Do app listening on port ${port}`);
});
