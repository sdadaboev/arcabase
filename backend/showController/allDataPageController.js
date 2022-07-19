import Devices from '../models/deviceSchema.js'
import Furnitures from '../models/furnitureSchema.js'
import Employees from '../models/employeeSchema.js'
let countOfAllDevices = 0,
    countOfAllFurnitures = 0,
    countOfAllEmployees = 0
export const viewData = async (req, res) => {
    try {
        Devices.estimatedDocumentCount((err, count) => {
            if (err) {
                console.log(err)
            } else {
                console.log('count of devices: ', count)
            }
            countOfAllDevices = count
        })
        Furnitures.estimatedDocumentCount((err, count) => {
            if (err) {
                console.log(err)
            } else {
                console.log('count of devices: ', count)
            }
            countOfAllFurnitures = count
        })
        Employees.estimatedDocumentCount((err, count) => {
            if (err) {
                console.log(err)
            } else {
                console.log('count of devices: ', count)
            }
            countOfAllEmployees = count
        })
        ////////////////////////////////////////////////
        res.render('viewDataPage', {
            devices: countOfAllDevices,
            furnitures: countOfAllFurnitures,
            employees: countOfAllEmployees,
        })
    } catch (error) {
        console.log(error)
    }
}
