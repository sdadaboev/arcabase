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
    addEmployee,
    viewData,
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
app.use('/employee', emp)
app.use('/device-type', devType)
app.use('/device-form', productImage)

// load engine
app.set('view engine', 'ejs')

// app.set("views", path.resolve(__dirname, ""))

// load assets
app.use('/css', express.static(path.resolve(__dirname, 'assets/css')))
app.use('/img', express.static(path.resolve(__dirname, 'assets/img')))
app.use('/js', express.static(path.resolve(__dirname, 'assets/js')))

app.get('/', homepage)
app.get('/add-device', createDevicePage)

app.get('/create-device-button', chooseDeviceOrFurniture)
app.get('/update-device-button', updateDevicePage)
app.get('/create-employee-button', createEmployee)
app.get('/view-data', viewData)
app.get('/show-device-button', showDevice)
app.get('/show-employee-button', showEmployee)
app.get('/only-device/:id', onlyDevice)
app.get('/delete-device/:id', deleteDevice)
app.get('/add-furniture', addFurniture)
app.get('/add-employee', addEmployee)
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
