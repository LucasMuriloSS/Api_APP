const mongoose = require("mongoose")

const schema = mongoose.Schema({

    day: String,
    hour:[{
        available: String
    }],
    duration:String,
    method: String,
    link: String,
    created:String



})

module.exports = mongoose.model("agenda",schema)