const router = require('express').Router()
const packageModel = require('../Model/packageModel')
const auth = require('../authentication/auth')

router.post('/add', packageModel.createNewPackage)
router.get('/', packageModel.getAllPackage)
router.get('/:id', packageModel.getPackageById)
router.put('/:id', packageModel.uppdatePackage)
router.delete('/:id', packageModel.deletePackage)


// router.post('/add', auth.verifyTokenAdmin, packageModel.createNewPackage)
// router.get('/', packageModel.getAllPackage)
// router.get('/:id', packageModel.getAllPackage)
// router.put('/:id', auth.verifyTokenAdmin, packageModel.uppdatePackage)
// router.delete('/:id', auth.verifyTokenAdmin, packageModel.deletePackage)

module.exports = router;