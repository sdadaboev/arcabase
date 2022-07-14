import express from 'express'
const furniture = express.Router()
import { addFurniture } from '../controller/furnitureController.js'
furniture.post('/add-furniture', addFurniture)

export default furniture
