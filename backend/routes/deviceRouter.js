import express from 'express'
import {
    showMeDevices,
    attachTo,
    populateDevice,
    deleteDevice,
    updateDevice,
    findOneDevice,
} from '../controller/deviceController.js'
import { devRoutes } from '../services/render.js'
// ? 14.06.2022 import { choosePageDeviceOrFurniture } from './router.js'
const dev = express.Router()
dev.get('/show-device', showMeDevices) //find
dev.get('/one-device/:id', findOneDevice) // find only one document from db
// ? 14.06.2022  dev.get('/create-device-button', choosePageDeviceOrFurniture) // device or furniture
// dev.post('/add-device', multer().any(), uploadDeviceFileAndPhoto, addDevice) // create
dev.get('/attach/:device/:employee', attachTo) // prikrepit k sotrudniku
dev.get('/populate', populateDevice) // soedinit s sotrudnikom
dev.get('/delete-device/:id', deleteDevice) // delete device
dev.post('/update-device-button/:id', updateDevice)
dev.get('/device/show', devRoutes)

export default dev
