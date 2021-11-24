const Order = require('../models/Order')

// method to create a work order
exports.create = async (req , res) => {

    const newOrder = new Order(req.body)

    try {
        const savedOrder = await newOrder.save()
        res.status(200).json(savedOrder)
    } catch (error) {
        res.status(500).json(error)
    }
}

// method to update a work order

exports.update = async (req , res) => {
   
    try {
        // find and update
 
        const filter = {orderId : req.params.orderId}
        const update = {$set : req.body}

        const order = await Order.findOneAndUpdate( filter, update ,{new : true})

        // send the response if the order is updated
        res.status(200).send({
            message: (order !== null ) ? 'work order updated successfully!' : 'order Id not exists!',
            updatedOrder: order
        })
        
    } catch (error) {
        res.status(400).send(error)
    }
}

// methid to delete a work order by id
exports.delete = async (req ,res) => {
    
    try {
          const deletedOrder = await Order.deleteOne({"orderId" : req.params.orderId})
          res.status(200).send(deletedOrder)
    } catch (error) {
        res.status(500).send(error)
    }
}

// method to find all work orders
exports.findAll = async ( req , res) => {

    try {
        const allOrders = await Order.find()

        res.status(200).send(allOrders)
        
    } catch (error) {
        res.status(400).json(error)
    }
}


// method to find a work order by Id
exports.findById = async (req  , res) => {
    try {

          const order = await Order.find({"orderId":req.params.orderId})
          res.status(200).send(order)
        }
    catch (error) {
        res.status(400).send(error)
    }
}




