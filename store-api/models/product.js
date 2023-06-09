const mongoose = require('mongoose');

const procuctSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: [true, 'product name must be provided']
            
        },
        price: {
            type: Number,
            require: [true, 'product price must be provide'],
        },
        feature: {
            type: Boolean,
            default: false,
        },
        rating: {
            type: Number,
            default: 4.5,
        },
        createdAt: {
            type: Date,
            default: Date.now()
        },
        company: {
            type: String,
            enum:{
              values: ['ikea', 'liddy', 'caressa'],
              message: '{VALUE} is not supported'
            } 
        },
      //  enum: ['ikea', 'liddy', 'caressa'],
    }
)

//**Create model */


// const product = mongoose.model('Product', procuctSchema);

// module.exports = product;
// *OR*
module.exports = mongoose.model('Product', procuctSchema);