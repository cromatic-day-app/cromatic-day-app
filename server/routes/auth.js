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
      console.log(user)
      if (err) {
        reject(new Error('Something went wrong'))
      } else {
        resolve(user);
      }
    })
  })
}

router.post("/signup", (req, res, next) => {
  const { username, password, profilePhoto } = req.body;

  if (!username || !password) {
    next(new Error('You must provide valid credentials'));
  }
  User
    .findOne({ username })
    .then(foundUser => {
      if (foundUser) throw new Error('Username already exists');

      const salt = bcrypt.genSaltSync(10);
      const hashPass = bcrypt.hashSync(password, salt);

      return new User({
        username,
        password: hashPass,
        profilePhoto
      }).save();
    })
    .then(savedUser => login(req, savedUser))
    .then(user => res.json({ status: 'signup & login successfully', user }))
    .catch(e => next(e));
});

router.post('/upload/:userId', uploadCloud.single('profilePhoto'), (req, res, next) => {
  let userPhoto = req.file.url;
  User.findByIdAndUpdate(req.params.userId, {
    userPhoto
  }, { new: true })
    .then(user => {
      res.json(user)
    })
    .catch(error => {
      console.log(error);
    })
})

router.post("/login", (req, res, next) => {
  passport.authenticate('local', (err, theUser, failureDetails) => {
    if (err) next(new Error('Something went wrong'));
    if (!theUser) next(failureDetails)

    login(req, theUser).then(user => res.status(200).json(req.user));

  })(req, res, next);
});

router.get('/currentuser', (req,res,next) => {
  if(req.user){
    res.status(200).json(req.user);
  }else{
    next(new Error('Not logged in'))
  }
})

router.get('/logout', (req, res) => {
  req.logout();
  res.status(200).json({ message: 'logged out' })
});

router.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
})

module.exports = router;

