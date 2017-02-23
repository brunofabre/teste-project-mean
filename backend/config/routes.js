const express = require('express')

module.exports = function(server) {

    const router = express.Router()
    server.use('/api', router)

    const contactService = require('../api/contact/contactService')
    contactService.register(router, '/contacts')
}
