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
=======
<<<<<<< HEAD
>>>>>>> 319dda8767f002485cf651b9e5dda7a098dd34d9
    booked: [{
        type: Schema.Types.ObjectId,
        ref: "Artwork"
    }]
<<<<<<< HEAD
=======
=======
    // booked: [{
    //     type: Schema.Types.ObjectId,
    //     ref: "Artwork"
    // }]
>>>>>>> c6884c225c0bf227a248fb7f3fdc4855e8c768b2
>>>>>>> 319dda8767f002485cf651b9e5dda7a098dd34d9
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

const User = mongoose.model('User', userSchema);
module.exports = User;