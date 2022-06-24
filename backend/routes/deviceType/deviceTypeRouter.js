import express from 'express'
import { addDeviceType } from '../../controller/deviceType/deviceTypeController.js'

const devType = express.Router()
devType.post('/add-device-type', addDeviceType) //find

export default devType
