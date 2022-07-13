import Department from '../../models/typess/departmentSchema.js'

export const addDepartmentType = async (req, res, next) => {
    try {
        if (!req.body) {
            res.status(400).send({ message: 'Content can not be empty' })
            return
        }

        const departmentTypeFromBody = new Department({
            department: req.body.department,
        })

        const createdDepartmentType = await Department.create(
            departmentTypeFromBody,
        )
        console.log('saved', createdDepartmentType)
        res.send(createdDepartmentType)
        // res.redirect('/create-device-button')
    } catch (error) {
        res.status(500).send({
            message: 'Sardorni serveridan hatolik ',
            error: error.message,
        })
    }
}

export const getDepartmentTypes = async (req, res, next) => {
    try {
        const typesFromMongo = await Department.find()
        console.log('types From mongo ', typesFromMongo)
        typesFromMongo.forEach((typeOnly) => {
            console.log(typeOnly.type)
        })
        res.send({
            msg: 'our departments are',
            departments: typesFromMongo,
        })
        // res.render('createDevicePage', { types: typesFromMongo })
        next()
    } catch (error) {
        console.log(error)
    }
}
