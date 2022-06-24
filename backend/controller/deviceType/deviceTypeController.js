import DeviceTypes from '../../models/typess/deviceTypesSchema.js'

export const addDeviceType = async (req, res, next) => {
    try {
        if (!req.body) {
            res.status(400).send({ message: 'Content can not be empty' })
            return
        }

        console.log(req.body)
        const deviceTypeFromBody = new DeviceTypes({
            type: req.body.type,
        })

        const createdDeviceType = await DeviceTypes.create(deviceTypeFromBody)
        console.log('saved', createdDeviceType)
        res.send(createdDeviceType)
        // res.redirect('/create-device-button')
    } catch (error) {
        res.status(500).send({
            message: 'Sardorni serveridan hatolik ',
            error: error.message,
        })
    }
}

// export const attachTo = async (req, res) => {
//     try {
//         const { device, employee } = req.params

//         const deviceFound = await Device.findById(device)
//         const employeeFound = await Employee.findById(employee)

//         await Device.updateOne({ attachedTo: employee })
//     } catch (error) {
//         console.log(error)
//     }
// }

// export const populateDevice = async (req, res) => {
//     const populated = await Device.find().populate({ path: 'attachedTo' })
//     console.log(populated[0].attachedTo.name)
//     res.send('populated')
// }

// export const showMeDevices = async (req, res) => {
//     try {
//         const devices = await Device.find()
//         res.send(devices)
//     } catch (error) {
//         console.log(error)
//     }
// }

// export const findOneDevice = async (req, res) => {
//     try {
//         const id = req.params.id
//         const oneDevice = await Device.findOne({ _id: id })
//         res.send(oneDevice)
//         console.log('bitta device topildi')
//     } catch (error) {
//         console.log(error)
//     }
// }

// export const deleteDevice = async (req, res) => {
//     try {
//         const id = req.params.id
//         const deleted = await Device.deleteOne({ _id: id })
//         console.log(deleted)
//     } catch (error) {
//         console.log(error)
//     }
// }

// export const updateDevice = async (req, res) => {
//     try {
//         const id = req.params.id
//         const updatedDevice = await Device.findByIdAndUpdate(id, req.body, {
//             useFindAndModify: false,
//         })
//         if (updatedDevice) {
//             // res.send(updatedDevice )
//         } else {
//             res.send("o'xshamadi o'rtog'im")
//         }
//     } catch (error) {
//         console.log(error)
//     }
// }

// export const uploadDevice = async (req, res) => {
//     try {
//         console.log('upload')
//     } catch (error) {
//         console.log(error)
//     }
// }
