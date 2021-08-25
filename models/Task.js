const mongoose = require('mongoose')

const Taskchema = new mongoose.Schema({
    name:String,completed:Boolean
})

module.exports = mongoose.model('Task',Taskchema)