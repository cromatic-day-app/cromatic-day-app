const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const voucherSchema = new Schema({
    title: String,
    receiver: String,
    creator: String,
    description: String,
    imageUrl: String,
});

const Voucher = mongoose.model("Voucher", voucherSchema);
module.exports = Voucher;