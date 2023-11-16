const router = require('express').Router()
const userModel = require('../Model/userModel')
const auth = require('../authentication/auth')

router.post('/register', userModel.createNewUser )
router.post('/login', userModel.loginUser )
router.get('/', userModel.getAllUsers )
router.get('/:id', userModel.getUser)

router.use('/profile', auth.verifyTokenUser, userModel.getUser)

router.get('/:userId/reviews', userModel.getUserReviewRating)


module.exports = router;