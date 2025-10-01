import express from express
import * as authController from '../controllers/authController.js'

const api = express.Router()

api.post('/register', authController.register)

export default api