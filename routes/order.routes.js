const express = require('express')
const router = express.Router()
const orderController = require('../controllers/order.controller')


//create new order
router.post('/',orderController.create);

// fetch all oders
router.get('/',orderController.findAll);

//fetch order by id
router.get('/:orderId',orderController.findById);

module.exports = router