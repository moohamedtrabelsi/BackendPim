const mongoose = require("mongoose");

        
const Comment = mongoose.model(
    "Comment",
    new mongoose.Schema({
        userc:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        content : String,
    })
);

module.exports = Comment;