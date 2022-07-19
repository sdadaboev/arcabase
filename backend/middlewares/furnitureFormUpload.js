import { Router } from 'express'
import path from 'path'
import multer from 'multer'
import { addFurniture } from '../controller/furnitureController.js'
const furnitureForm = Router()
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if (file.fieldname == 'file') {
            cb(null, 'assets/uploads/furnitureUploads/files')
        } else if (file.fieldname == 'photo') {
            cb(null, 'assets/uploads/furnitureUploads/photos')
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
furnitureForm.post(
    '/add-furniture',
    multipleUpload,
    async function (req, res, next) {
        if (req.files) {
            console.log('all nice , files uploaded')
            let UploadedObject = req.files
            req.objectOfFiles = UploadedObject
            next()
        } else {
            console.log('error from post request {multipleUpload}')
        }
    },
    addFurniture,
)
export default furnitureForm
