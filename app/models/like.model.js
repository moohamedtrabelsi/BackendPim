const mongoose = require("mongoose");

const Like = mongoose.model(
    "Like",
    new mongoose.Schema({
        userl:{

        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
        }
    })
);
module.exports = Like;