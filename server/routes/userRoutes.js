// const { register } = require('../controllers/userController')

const { register } = require('../controllers/userController')

const router = require('express').Router()

router.post('/auth/register', register)

module.exports = router
