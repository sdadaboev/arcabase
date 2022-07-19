import express from 'express'
const company = express.Router()
import { AddCompany } from '../../controller/company/company-controller.js'
company.post('/add-company', AddCompany)
export default company
