import { Router } from 'express'
import path from 'path'
import multer from 'multer'

const productImage = Router()

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if (file.fieldname == 'file') {
            cb(null, '/assets/img')
        } else if (file.fieldname == 'photo') {
            cb(null, '/assets/img')
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
    { name: 'photo', maxCount: 5 },
])
productImage.post('/add-device', multipleUpload, function (req, res, next) {
    if (req.files) {
        console.log('all nice , files uploaded')
    }
})
export default productImage
