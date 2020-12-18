const express = require('express')
const { ensureAuth, ensureGuest } = require('../middleware/auth')
const router = express.Router()

// @desc  login/LandingPage
// @route GET /
router.get('/', ensureGuest, (req, res) => {
    res.render('login', {
        layout: 'login',
    })
})

// @desc  Dashboard
// @route GET /dashboard
router.get('/dashboard', ensureAuth, (req, res) => {
    res.render('dashboard')
})


module.exports = router