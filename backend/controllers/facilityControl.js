const router = require('express').Router()
const facilityModel = require('../Model/facilityModel')
const auth = require('../authentication/auth')

router.post('/add', facilityModel.createNewFacility)
router.get('/', facilityModel.getAllFacilities)
router.get('/:id', facilityModel.getFacilityById)
router.put('/:id', facilityModel.uppdateFacility)
router.delete('/:id', facilityModel.deleteFacility)


// router.post('/add', auth.verifyTokenAdmin, packageModel.createNewPackage)
// router.get('/', packageModel.getAllPackage)
// router.get('/:id', packageModel.getAllPackage)
// router.put('/:id', auth.verifyTokenAdmin, packageModel.uppdatePackage)
// router.delete('/:id', auth.verifyTokenAdmin, packageModel.deletePackage)

module.exports = router;