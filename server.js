// “Never give up. Never let things out of your control dictate who you are.
import express from 'express'
import connectDB from './backend/database/connection.js'
import 'dotenv/config'
import bodyParser from 'body-parser'
import morgan from 'morgan'
// fronted
import path from 'path'
import dev from './backend/routes/deviceRouter.js'
import emp from './backend/routes/employeeRouter.js'
import devType from './backend/routes/deviceType/deviceTypeRouter.js'
import productImage from './backend/middlewares/deviceFormUpload.js'
import departmentType from './backend/routes/departmentType/departmentTypeRouter.js'
import postType from './backend/routes/postType/postTypeRouter.js'
import dynamic_D_P from './backend/routes/employee/departmentAndPostTypeRouter.js'
import furniture from './backend/routes/furnitureRouter.js'
import furnitureForm from './backend/middlewares/furnitureFormUpload.js'
import storage from './backend/routes/storage/storageRouter.js'
import company from './backend/routes/company/company-router.js'
import getData from './backend/showRouter/alldataPageRouter.js'
import {
    homepage,
    createDevicePage,
    updateDevicePage,
    createEmployee,
    showDevice,
    showEmployee,
    onlyDevice,
    deleteDevice,
    chooseDeviceOrFurniture,
    addFurniture,
    viewOnlyData,
} from './backend/routes/router.js'

import { uploadDevice } from './backend/controller/deviceController.js'
const __dirname = path.resolve()

const PORT = process.env.PORT || 5000
const app = express()

//body-parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// app.use(express.json())

app.use(morgan('common'))
app.use('/device', dev)
app.use('/employee-form', emp)
app.use('/device-type', devType)
app.use('/device-form', productImage)
app.use('/department', departmentType)
app.use('/post', postType)
app.use('/employee-job', dynamic_D_P)
app.use('/furniture', furniture)
app.use('/furniture-form', furnitureForm)
app.use('/storage', storage)
app.use('/company', company)
app.use('/view', getData)
// load engine
app.set('view engine', 'ejs')

// app.set("views", path.resolve(__dirname, ""))

// load assets
app.use('/css', express.static(path.resolve(__dirname, 'assets/css')))
app.use('/img', express.static(path.resolve(__dirname, 'assets/img')))
app.use('/js', express.static(path.resolve(__dirname, 'assets/js')))
// app.use(
//     '/controller',
//     express.static(path.resolve(__dirname, 'backend/controller')),
// )

app.get('/', homepage)
app.get('/add-device', createDevicePage)

app.get('/create-device-button', chooseDeviceOrFurniture)
app.get('/update-device-button', updateDevicePage)
app.get('/create-employee-button', createEmployee)
// app.get('/view-data', viewData)
app.get('/show-device-button', showDevice)
app.get('/show-employee-button', showEmployee)
app.get('/only-device/:id', onlyDevice)
app.get('/delete-device/:id', deleteDevice)
app.get('/add-furniture', addFurniture)
app.get('/view-data/device/:id', viewOnlyData)

// app.get('/' , (req,res)=>{
//    res.render('index')
// })
// app.get('/create-device' , (req,res)=>{
//     res.render('createDevice')
//  })
//  app.get('/create-employee' , (req,res)=>{
//     res.render('createEmployee')
//  })
//  app.get('/show-device' , (req,res)=>{
//     res.render('showDevice')
//  })
//  app.get('/show-employee' , (req,res)=>{
//     res.render('showEmployee')
//  })

const wait = async () => {
    await connectDB()
    if (connectDB) {
        app.listen(PORT, () => {
            console.log(`server is running on port ${PORT}`)
            console.log(__dirname)
        })
    } else {
        console.log(
            'SARmsg: connection to mongoDB is fail , please restart the server',
        )
    }
}
wait()
