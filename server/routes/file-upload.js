const express = require("express");
const passport = require('passport');
const router = express.Router();
const Photo = require('../models/Photo.js');
const uploadCloud = require('../config/cloudinary.js');

router.post("/upload", uploadCloud.single('imgName'), (req, res, next) => {
  const imgName = req.file.originalname;
  const newPhoto = new Photo({imgName})
  console.log(req.file.url);

  newPhoto.save()
  .then(photo => {
    res.json({url: req.file.url, photo: photo});
  })
  .catch(error => {
    console.log(error);
  })
});

module.exports = router;