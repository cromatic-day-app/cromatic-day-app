const express = require("express");
const passport = require('passport');
const router = express.Router();
const User = require("../models/User");
const uploadCloud = require('../config/cloudinary.js');

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");

const login = (req, user) => {
  return new Promise((resolve, reject) => {
    req.login(user, err => {
      console.log('req.login ')
      // console.log(user)
      if (err) {
        reject(new Error('Something went wrong'))
      } else {
        resolve(user);
      }
    })
  })
}

router.post("/signup", (req, res, next) => {
  const { username, password, passwordConfirm, email, userPhoto } = req.body;

  if (username === "" || password === "" || passwordConfirm === "" || email === "") {
    res.status(500).json({message: 'Indicate username and password'});
  }

  if (passwordConfirm !== password) {
    res.status(500).json({message: 'Your password is not correct'});
  }

  if (!username || !password) {
    res.status(500).json({message: 'You must provide valid credentials'});
  }
  
  User
    .findOne({ username })
    .then(foundUser => {
      if (foundUser) res.status(500).json({message: 'Username already exists'});

      const salt = bcrypt.genSaltSync(10);
      const hashPass = bcrypt.hashSync(password, salt);

      return new User({
        username,
        password: hashPass,
        email,
        userPhoto
      }).save();
    })
    .then(savedUser => login(req, savedUser))
    .then(user => res.json({ status: 'signup & login successfully', user }))
    .catch(e => next(e));
});

router.post("/login", (req, res, next) => {
  passport.authenticate('local', (err, theUser, failureDetails) => {
    if (err) res.status(500).json({message: 'Something went wrong'});
    if (!theUser) next(failureDetails)

    login(req, theUser).then(user => res.status(200).json(req.user));

  })(req, res, next);
});

// router.get('/currentuser', (req, res, next) => {
//   if (req.isAuthenticated()) {
//       res.status(200).json(req.user);
//       return;
//   }
//   res.status(403).json({ message: 'Unauthorized' });
// });

router.get("/currentuser", (req, res, next) => {
  if (req.user) {

    User.findById(req.user._id)
    .populate("booked")
    .then((populatedUser) => {
      res.status(200).json(populatedUser);
    })
    
  } else {
    next(new Error("Not logged in"));
  }
});

router.post('/logout', (req, res, next) => {
  req.logout();
  res.status(200).json({ message: 'Log out success!' });
});

router.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
})

module.exports = router;

