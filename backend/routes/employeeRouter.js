import express from 'express'

import {
    showEmployees,
    createEmployee,
} from '../controller/employeeController.js'

const emp = express.Router()

emp.post('/create-employee', createEmployee)

emp.get('/1', showEmployees)

export default emp
