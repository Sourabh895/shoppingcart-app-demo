const express = require('express');
const passport = require('passport');
const router = express.Router();
const User = require('../models/user');

// router.get('/fakeUser', async(req, res) => {
//    const user = new User({email: 'sabeel@gmail.com', username: 'sabeel'});
//    const app = await User.register(user, 'sabeel12')
//    res.send(app)
// })


// Get the signup form
router.get('/register', async(req, res) => {
    res.render('auth/signup');
})

router.post('/register', async(req, res) => {
try {
    const user = new User({username: req.body.username, email: req.body.email})
    await User.register(user, req.body.password);
    req.flash('success', 'You Registered Successfully');
    res.redirect('/products')
} 
catch(e) {
    req.flash('error', e.message);
    res.redirect('/register')
}
});


// login

router.get('/login', async(req, res) => {
    res.render('auth/login');
})

router.post('/login',
  passport.authenticate('local', 
       {
            failureRedirect: '/login',
            failureFlash: true    }),
            (req, res) => {
                req.flash('success', 'Welcome Back!!!')
                res.redirect('/products')
            }
)

//logout

router.get('/logout', (req, res) => {
    req.logOut();
    req.flash('success', 'Logout Successfully!!!')
    res.redirect('/login')
})








module.exports = router;








