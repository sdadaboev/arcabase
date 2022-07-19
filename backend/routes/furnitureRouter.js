import express from 'express'
const furniture = express.Router()
import { addFurniture } from '../controller/furnitureController.js'
import {
    AddType,
    GetTypes,
} from '../controller/furnitureType/furnitureTypeController.js'
furniture.post('/add-furniture', addFurniture)
furniture.get('/add-furniture', GetTypes)
furniture.post('/add-type', AddType)

export default furniture
