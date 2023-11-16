const router = require('express').Router()
const { getOrders, createOrder, updateStatus, getOrderById } = require('../Model/orderModel')
const auth = require('../authentication/auth')

router.post('/add', createOrder)
router.get('/:id', getOrderById)

// router.get('/allOrders', getOrders )
// router.get('/:id', auth.verifyTokenAdmin, getOrderById)
// router.put('/:id', auth.verifyTokenAdmin, updateStatus)

module.exports = router;

