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

export const getDeviceTypes = async (req, res, next) => {
    console.log('man get deviceda man')
    try {
        const typesFromMongo = await DeviceTypes.find()
        console.log('types From mongo ', typesFromMongo)
        typesFromMongo.forEach((typeOnly) => {
            console.log(typeOnly.type)
        })
        res.render('createDevicePage', { types: typesFromMongo })
        next()
    } catch (error) {
        console.log(error)
    }
}
