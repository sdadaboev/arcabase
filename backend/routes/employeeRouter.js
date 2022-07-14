import express from 'express'
import path from 'path'
import multer from 'multer'
import {
    showEmployees,
    createEmployee,
} from '../controller/employeeController.js'

const emp = express.Router()
console.log('man  ichidaman')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if (file.fieldname == 'file') {
            cb(null, 'assets/uploads/employeeUploads/employeeFiles')
        } else if (file.fieldname == 'photo') {
            cb(null, 'assets/uploads/employeeUploads/employeePhotos')
        } else {
            console.log('error from multer destination proccess')
        }
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname))
    },
})

const upload = multer({ storage: storage })
const multipleUpload = upload.fields([
    { name: 'file', maxCount: 6 },
    { name: 'photo', maxCount: 6 },
])

emp.post(
    '/create-employee',
    multipleUpload,
    async function (req, res, next) {
        if (req.files) {
            console.log(req.files)
            console.log('all nice , files uploaded')
            let UploadedObject = req.files
            req.objectOfFiles = UploadedObject
            next()
        } else {
            console.log('error from post request {multipleUpload}')
        }
    },
    createEmployee,
)

emp.get('/1', showEmployees)

export default emp
