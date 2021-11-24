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

exports.update = async (req ,res) => {
     
    try {
        
        await post.updateOne({$set:req.body})

        res.status(200).send({
            message:"the work order has been updated"
        })
        
    } catch (error) {
        res.send(500).json(error)
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




