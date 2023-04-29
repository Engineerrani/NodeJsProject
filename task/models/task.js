const mongoose = require('mongoose');


// setup of schema
const TaskSchema = new mongoose.Schema({
    name:{
        type:String, 
        require:[true, 'must provide name'],
        trim:true,
        maxlength:[20, 'name can not be more than 20 characters']
    },
    completed:{
        type:Boolean,
        default:false,
    }

})
//creating model
module.exports = mongoose.model('Task', TaskSchema); //here Task is singular and TaskSchema is plural also Task is here for collection of all data schema from the TaskSchema