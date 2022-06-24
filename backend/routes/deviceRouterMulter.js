import multer from 'multer'
import path from 'path'
import { Router } from 'express'
export const uploadDeviceFileAndPhoto = async (req, res) => {
    console.log('kirdim')
    try {
        const productImage = Router()

        const storage = multer.diskStorage({
            destination: (req, file, cb) => {
                cb(null, 'assets/img/devices/')
            },

            filename: (req, file, cb) => {
                console.log(file)
                cb(null, Date.now() + path.extname(file.originalname))
            },
        })

        const upload = multer({ storage: storage })
        const cpUpload = upload.fields([
            { name: 'file', maxCount: 2 },
            { name: 'photo', maxCount: 4 },
        ])

        res.redirect('/add-device')
    } catch (error) {
        console.log(error)
    }
}
