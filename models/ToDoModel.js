const mongoose = require('mongoose')
const todoSchema = new mongoose.Schema({
    title:{
        type : String,
        require : true
    },
    body:{
        type : String,
        require : true
    },
    user:[
        {
        type : mongoose.Types.ObjectId,
        ref : "User"
    },
],
},
{timestamps: true}
)
const todo= mongoose.model('ToDo',todoSchema)
module.exports = todo