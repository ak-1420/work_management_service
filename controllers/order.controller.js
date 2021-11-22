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
// method to find all work orders
exports.findAll = async (req , res) => {
   res.send('find all work orders')
}

// method to find a work order by Id
exports.findById = async (req  , res) => {
  res.send(`find a work order by order id: ${req.params.orderId} `)
}


