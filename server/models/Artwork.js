const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const artworkSchema = new Schema({
    title: String,
    primaryImageSmall: String,
    artistDisplayName: String,
    price: Number,
<<<<<<< HEAD
    date: Date,
    tag: String,
    // location: {
    //     "type": "Point",
    //     "coordinates": [
    //         randomFloat(2.154007, 2.354007),
    //         randomFloat(41.390205, 41.690205),
    //     ]
    // }
=======
    date: String,
    tag: String
>>>>>>> c6884c225c0bf227a248fb7f3fdc4855e8c768b2
});

const Artwork = mongoose.model("Artwork", artworkSchema);
module.exports = Artwork;