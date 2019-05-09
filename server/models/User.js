const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    password: String,
    userPhoto: {
        type: String,
        default: "/images/default/LogoVdark.png"
    },
    // booked: [{
    //     type: Schema.Types.ObjectId,
    //     ref: "Artwork"
    // }]
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

const User = mongoose.model('User', userSchema);
module.exports = User;