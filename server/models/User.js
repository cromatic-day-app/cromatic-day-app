const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    password: String,
    userPhoto: {
        type: String,
        default: "/images/default/LogoVdark.png"
    },
<<<<<<< HEAD
    booked: [{
        type: Schema.Types.ObjectId,
        ref: "Artwork"
    }]
=======
    // booked: [{
    //     type: Schema.Types.ObjectId,
    //     ref: "Artwork"
    // }]
>>>>>>> c6884c225c0bf227a248fb7f3fdc4855e8c768b2
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

const User = mongoose.model('User', userSchema);
module.exports = User;