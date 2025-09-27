import express from "express"
import * as profileController from '../controller/profileController.js'
import * as helloController from '../controller/testerController.js'
const web = express.Router()

// Home page
web.get('/', (req, res) => {
    res.render('index')
})

// Profile page with username
web.get('/profile/:username', profileController.publicProfile)

// Hello page with name
web.get('/testers/:name', testerController.testerPage)

export default web