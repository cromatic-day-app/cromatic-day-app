const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const artworkSchema = new Schema({
    title: String,
    primaryImageSmall: String,
    artistDisplayName: String,
    price: Number,
    date: String,
    tag: String
});

const Artwork = mongoose.model("Artwork", artworkSchema);
module.exports = Artwork;