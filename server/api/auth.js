import passport from 'passport';
import express from 'express';

let router = express.Router();

router.route('/google/callback')
            .get(passport.authenticate('google', {
              successRedirect: '/user/',
              failure: '/error/'
            }));

router.route('/google')
      .get(passport.authenticate('google', {
        scope: [
          'https://www.googleapis.com/auth/userinfo.profile',
          'https://www.googleapis.com/auth/userinfo.email'
        ]
      }));

export default router;
