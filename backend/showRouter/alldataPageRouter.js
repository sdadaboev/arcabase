import express from 'express'
import { viewData } from '../showController/allDataPageController.js'
const getData = express.Router()

getData.get('/data', viewData)

export default getData
