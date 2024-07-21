const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    email:{
        type : String,
        unique : true,
        require : true
    },
    username:{
        type : String,
        unique : true,
        require : true
    },
    password:{
        type : String,
        require : true
    },
    list:[
        {
        type : mongoose.Types.ObjectId,
        ref : "ToDo"
    },
],
})
const user= mongoose.model('User',userSchema)
module.exports = user