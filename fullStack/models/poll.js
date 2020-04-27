const mongoose = require('mongoose');

//SCHEMA SETUP
const Poll = new mongoose.Schema({
    title: String,
    options: [String],
    votes: [-1,-1,-1,-,1,-1],
    totalVotes: Number,
    author: {
        username: String,
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model("Poll", Poll);