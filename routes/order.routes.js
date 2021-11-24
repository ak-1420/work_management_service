const express = require('express')
const router = express.Router()
const orderController = require('../controllers/order.controller')


//create new order
router.post('/',orderController.create);

// fetch all oders
router.get('/',orderController.findAll);

//fetch order by id
router.get('/:orderId',orderController.findById);

//update order by id
router.put('/:orderId',orderController.update);

//delete order by id
router.delete('/:orderId',orderController.delete)



module.exports = router