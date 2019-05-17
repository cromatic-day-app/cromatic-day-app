const express = require("express");
const router = express.Router();
const Artwork = require("../models/Artwork");
const User = require("../models/User");
const Voucher = require("../models/Voucher");

router.get('/allGenres', (req, res, next) => {
  Artwork
    .find()
    .then(allArtworks => res.json(allArtworks))
    .catch(err => res.json(err))
});

router.get('/:genre', (req, res, next) => {
  let genre = req.params.genre
  let id = req.params.id;
  console.log(id)

  Artwork
    .find({ genre: genre })
    .then(genreArtworks => {
      res.json(genreArtworks)
    })
    .catch(err => res.json(err))
})

router.get('/:genre/:id', (req, res, next) => {
  let genre = req.params.genre
  let artworkId = req.params.id
  Artwork
    .find({ genre: genre, _id: artworkId })
    .then(oneArtwork => res.json(oneArtwork))
    .catch(err => res.json(err))
})

router.post('/joinArtworks', (req, res, next) => {
  let id = req.user._id;
  let artworkId = req.body.artworkId;

  User
    .findByIdAndUpdate(id, { $push: { 'booked': artworkId } }, { new: true })
    .populate("booked")
    .then(populatedUser => {
      console.log(populatedUser);
      res.json(populatedUser)
    })
    .catch(err => res.status(500).json(err))
})

router.post('/new', (req, res, next) => {

  Voucher
    .create({
      title: req.body.title,
      receiver: req.body.receiver,
      creator: req.body.creator,
      message: req.body.message,
      userPhoto: req.body.userPhoto,
    })
    .then((newVoucher) => {
      console.log(newVoucher)
      let id = req.user._id;
      User
        .findByIdAndUpdate(id, {$addToSet: {vouchers: newVoucher }}, {new: true})
        .populate("vouchers")
        .then(user => {
          res.json(user)
        })
        .catch(err => res.status(500).json(err))
    })
    .catch(err => res.json(err))
});

router.delete('/delete/:sthId', (req, res, next) => {
  let id = req.user._id;
  let sthId = req.params.sthId;

  User
    .findByIdAndUpdate(id, { $pull: { 'booked': sthId, 'vouchers': sthId } }, { new: true })
    .then((user) => {
      res.json(user)
    })
    .catch((err) => {
      console.log("deleted booked artwork failed ", err);
    })
});

module.exports = router;