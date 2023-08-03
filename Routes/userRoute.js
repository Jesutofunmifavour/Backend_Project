const express = require('express');
const passport = require('passport');

const { userSignup, userLogin } = require('../Controllers/userController');
const { verify } = require('../Controllers/lawyerControl')

const router = express.Router();

router.post('/signup', userSignup);
router.get('/google', passport.authenticate('google', { scope: [ 'email', 'profile' ] }));
router.get( '/google/callback',
    passport.authenticate( 'google', {
        successRedirect: '/google/success',
        failureRedirect: '/google/failure'
}));
router.post('/login', userLogin)
router.post('/onboarding', verify)

module.exports = router;