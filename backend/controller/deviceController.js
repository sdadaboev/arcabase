import Device from '../models/deviceSchema.js'
import Employee from '../models/employeeSchema.js'
import { updateDevicePage } from '../routes/router.js'
import Storage from '../models/storage.js'
export const addDevice = async (req, res, next) => {
    try {
        if (!req.body) {
            res.status(400).send({ message: 'Content can not be empty' })
            return
        }
        const employeeeFromMOngo = await Employee.find({
            name: req.body.employee,
        })
        let commonSchemaValue = ''
        let getID = ''
        let idOfFindedEmployee = ''
        if (req.body.employee == 'storage') {
            commonSchemaValue = 'storage'
            const getStorage = await Storage.find({ name: 'device storage' })
            console.log('getStorage: ', getStorage[0]._id)
            getID = getStorage[0]._id
        } else {
            idOfFindedEmployee = employeeeFromMOngo[0]._id
            commonSchemaValue = 'employees'
        }

        /////////////////////////////////////////////////////////////////////////////////////////////////
        console.log('body: ', req.body)
        const deviceFromBody = new Device({
            type: req.body.type,
            deviceName: req.body.deviceName,
            deviceID: req.body.deviceID,
            deviceSN: req.body.deviceSN,
            price: req.body.price,
            vendor: req.body.vendor,
            deviceCharacteristics: req.body.deviceCharacteristics,
            notes: req.body.notes,
            cratedData: req.body.cratedData,
            attachedToOwner:
                req.body.employee == 'storage' ? getID : idOfFindedEmployee,
            commonSchema: commonSchemaValue,
            attachedToCompany: req.body.attachedToCompany,
        })
        console.log(req.body)

        const createdDevice = await Device.create(deviceFromBody)
        let deviceIDforStorage = createdDevice._id

        if (createdDevice.commonSchema == 'storage') {
            console.log('storageeeeeee')
            await Storage.updateOne(
                { name: 'device storage' },
                {
                    $push: {
                        data: deviceIDforStorage,
                    },
                },
            )
            const populatedData = await Device.find().populate(
                'attachedToOwner',
            )
            console.log('populated to owner', populatedData)
        } else {
            console.log('employeeeeeeeee')
            await Employee.updateOne(
                { _id: idOfFindedEmployee },
                {
                    $push: {
                        devices: deviceIDforStorage,
                    },
                },
            )
            const populatedData = await Employee.findOne({
                _id: idOfFindedEmployee,
            }).populate('devices')
            console.log('populated to employee', populatedData)
        }

        const iden = await deviceFromBody.deviceID
        let files = req.objectOfFiles
        for (let file in files) {
            let massivFaylov = files[file]
            for (let fayl1 of massivFaylov) {
                if (fayl1.fieldname == 'file') {
                    await Device.updateOne(
                        { deviceID: `${iden}` },
                        {
                            $push: {
                                file: {
                                    name: `${fayl1.originalname}`,
                                    path: `http://127.0.0.1:5000/assets/uploads/deviceUploads/deviceFiles/${fayl1.originalname}`,
                                },
                            },
                        },
                    )
                } else if (fayl1.fieldname == 'photo') {
                    await Device.updateOne(
                        { deviceID: `${iden}` },
                        {
                            $push: {
                                photo: {
                                    name: `${fayl1.originalname}`,
                                    path: `http://127.0.0.1:5000/assets/uploads/deviceUploads/devicePhotos/${fayl1.originalname}`,
                                },
                            },
                        },
                    )
                } else {
                    console.log('error from for-of array of req.files')
                }
            }
        }
        ///////////////////////////////////////////

        res.redirect('/device/add-device')
    } catch (error) {
        res.status(500).send({
            message: 'Sardorni serveridan hatolik ',
            error: error.message,
        })
    }
}

export const attachTo = async (req, res) => {
    try {
        const { device, employee } = req.params

        const deviceFound = await Device.findById(device)
        const employeeFound = await Employee.findById(employee)

        await Device.updateOne({ attachedTo: employee })
    } catch (error) {
        console.log(error)
    }
}

export const populateDevice = async (req, res) => {
    const populated = await Device.find().populate({ path: 'attachedTo' })
    console.log(populated[0].attachedTo.name)
    res.send('populated')
}

export const showMeDevices = async (req, res) => {
    try {
        const devices = await Device.find()
        res.send(devices)
    } catch (error) {
        console.log(error)
    }
}

export const findOneDevice = async (req, res) => {
    try {
        const id = req.params.id
        const oneDevice = await Device.findOne({ _id: id })
        res.send(oneDevice)
        console.log('bitta device topildi')
    } catch (error) {
        console.log(error)
    }
}

export const deleteDevice = async (req, res) => {
    try {
        const id = req.params.id
        const deleted = await Device.deleteOne({ _id: id })
        console.log(deleted)
    } catch (error) {
        console.log(error)
    }
}

export const updateDevice = async (req, res) => {
    try {
        const id = req.params.id
        const updatedDevice = await Device.findByIdAndUpdate(id, req.body, {
            useFindAndModify: false,
        })
        if (updatedDevice) {
            // res.send(updatedDevice )
        } else {
            res.send("o'xshamadi o'rtog'im")
        }
    } catch (error) {
        console.log(error)
    }
}

export const uploadDevice = async (req, res) => {
    try {
        console.log('upload')
    } catch (error) {
        console.log(error)
    }
}
