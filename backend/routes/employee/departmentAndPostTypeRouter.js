import express from 'express'

const dynamic_D_P = express.Router()

import { getDepartmentAndPostTypes } from '../../controller/employeeType/departmentAndPostTypeControlleer.js'
import { createEmployee } from '../../controller/employeeController.js'
dynamic_D_P.get('/add-employee', getDepartmentAndPostTypes)
dynamic_D_P.post('/create-employee', createEmployee)
export default dynamic_D_P
