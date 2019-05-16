const express = require("express");
const router = express.Router();
const Artwork = require("../models/Artwork");
const User = require("../models/User")

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

router.delete('/delete/:artworkId', (req, res, next) => {
  let id = req.user._id;
  let artworkId = req.params.artworkId;

  User
    .findByIdAndUpdate(id, { $pull: { 'booked': artworkId } }, { new: true })
    .then((user) => {
      console.log(user)
    })
    .catch((err) => {
      console.log("deleted failed");
    })
});

module.exports = router;