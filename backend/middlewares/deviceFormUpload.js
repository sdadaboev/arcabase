import { Router } from 'express'
import path from 'path'
import multer from 'multer'
import { addDevice } from '../controller/deviceController.js'
const productImage = Router()
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if (file.fieldname == 'file') {
            cb(null, 'assets/uploads/deviceUploads/deviceFiles')
        } else if (file.fieldname == 'photo') {
            cb(null, 'assets/uploads/deviceUploads/devicePhotos')
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
productImage.post(
    '/add-device',
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
    addDevice,
)
export default productImage
