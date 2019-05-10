const express = require("express");
const router = express.Router();
const Artwork = require("../models/Artwork");

router.get('/allGenres', (req, res, next) => {
  Artwork
    .find()
    .then(allArtworks => res.json(allArtworks))
    .catch(err => res.json(err))
});

router.get('/:genre', (req, res, next) => {
  let genre = req.params.genre
  Artwork
    .find({ genre })
    .then(genreArtworks => res.json(genreArtworks))
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


module.exports = router;