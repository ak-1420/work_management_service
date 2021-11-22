const mongoose = require('mongoose')

const  OrderSchema = new mongoose.Schema(
    {
        orderId:{
            type:String,
            required: true
        },
        workerId:{
            type:String,
            required:true
        },
        employerId:{
            type:String,
            required:true
        },
        amount:{
            type:Number,
            required:true
        },
    },
    {timestamps:true}
)

module.exports = mongoose.model('Order' , OrderSchema)