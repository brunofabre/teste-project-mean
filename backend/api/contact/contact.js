const restful = require('node-restful')
const mongoose = restful.mongoose

const contactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, min: 0, required: true },
    email: { type: String, required: true },
})

module.exports = restful.model('Contact', contactSchema)
