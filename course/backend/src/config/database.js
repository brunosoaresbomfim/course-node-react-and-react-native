const mongoose = require('mongoose')

const url = 'mongodb+srv://bruno:373571@realmcluster.jzpa8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(url, { useNewUrlParser: true })

module.exports = mongoose