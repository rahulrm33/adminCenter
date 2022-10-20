const express = require('express')
const User = require('./user.model')
const router = new express.Router()

router.post('/getallusers', async (req, res) => {
    const users = await User.find()
	res.send(users)
})

module.exports = router