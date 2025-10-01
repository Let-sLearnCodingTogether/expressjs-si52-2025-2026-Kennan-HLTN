import express from "express"
import * as profileController from '../controller/profileController.js'
// import * as testerController from '../controller/testerController.js'
const web = express.Router()

// Home page
web.get('/', (req, res) => {
    res.render('index')
})

// Profile page with username
web.get('/:username', profileController.publicProfile)

// Tester page with name
// web.get('/tester/:name', testerController.testerPage)

export default web