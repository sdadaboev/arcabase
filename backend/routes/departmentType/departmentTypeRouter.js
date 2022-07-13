import express from 'express'
const departmentType = express.Router()
import {
    addDepartmentType,
    getDepartmentTypes,
} from '../../controller/departmentType/departmentTypeController.js'
departmentType.post('/add-department-type', addDepartmentType)
departmentType.get('/show-departments', getDepartmentTypes)

export default departmentType
