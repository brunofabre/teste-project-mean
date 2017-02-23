const Contact = require('./contact')

Contact.methods(['get', 'post', 'put', 'delete'])
Contact.updateOptions({new: true})

module.exports = Contact
