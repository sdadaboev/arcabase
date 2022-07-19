import FurnitureType from '../../models/typess/furnitureTypes.js'
import Employees from '../../models/employeeSchema.js'
import Company from '../../models/company/company-schema.js'
export const AddType = async (req, res) => {
    try {
        const type = new FurnitureType({
            type: req.body.type,
        })
        console.log(type)
        await FurnitureType.create(type)
        res.send('added')
    } catch (error) {
        console.log(error)
    }
}

export const GetTypes = async (req, res) => {
    try {
        const types = await FurnitureType.find()
        const employees = await Employees.find()
        const companies = await Company.find()
        console.log(types)
        res.render('addFurniture', {
            type: types,
            employee: employees,
            company: companies,
        })
    } catch (error) {
        console.log(error)
    }
}
