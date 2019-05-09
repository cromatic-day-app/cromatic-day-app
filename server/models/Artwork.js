const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const artworkSchema = new Schema({
    title: String,
    primaryImageSmall: String,
    artistDisplayName: String,
    price: Number,
    date: Date,
    tag: String,
    // location: {
    //     "type": "Point",
    //     "coordinates": [
    //         randomFloat(2.154007, 2.354007),
    //         randomFloat(41.390205, 41.690205),
    //     ]
    // }
});

const Artwork = mongoose.model("Artwork", artworkSchema);
module.exports = Artwork;