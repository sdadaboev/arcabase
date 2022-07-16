import express from 'express'
import { addStorage } from '../../controller/storage/storageController.js'
const storage = express.Router()

storage.post('/add-storage', addStorage)
export default storage
