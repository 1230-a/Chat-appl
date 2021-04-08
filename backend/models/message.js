const mongoose = require("mongoose");

const messageSchema = mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UsersData'
    },
    message: String,
    channel: String
});

const Message = mongoose.model('Message', messageSchema)
module.exports = Message
 