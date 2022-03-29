const mongoose = require('mongoose')

var schema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    blog: {
        type: String,
        required: true
    }
})

const blogDb = mongoose.model('blog', schema)

module.exports = blogDb