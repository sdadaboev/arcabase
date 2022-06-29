import express from 'express'
import {
    addDeviceType,
    getDeviceTypes,
} from '../../controller/deviceType/deviceTypeController.js'

const devType = express.Router()
devType.post('/add-device-type', addDeviceType)
// devType.get('/get-type', getDeviceTypes)
export default devType
