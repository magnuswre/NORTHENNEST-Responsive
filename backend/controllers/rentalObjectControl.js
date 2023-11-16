const router = require('express').Router()
const rentalObjectModel = require('../Model/rentalObjectModel')
// const auth = require('../authentication/auth')

router.post('/add',rentalObjectModel.createNewRentalObject)
router.get('/', rentalObjectModel.getAllRentalObjects)
router.get('/:id', rentalObjectModel.getRentalObjectById)
router.put('/:id', rentalObjectModel.uppdateRentalObject)
router.delete('/:id',  rentalObjectModel.deleteRentalObject)
module.exports = router;

// router.post('/:objectId/reviews', rentalObjectModel.createReviewRating)
// router.post('/add', auth.verifyTokenAdmin,rentalObjectModel.createNewProduct)
// router.get('/', rentalObjectModel.getAllProduct)
// router.get('/:id', rentalObjectModel.getProductById)
// router.put('/:id', auth.verifyTokenAdmin, rentalObjectModel.uppdateProduct)
// router.delete('/:id', auth.verifyTokenAdmin, rentalObjectModel.deleteProduct)