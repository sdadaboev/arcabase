import Departments from './../../models/typess/departmentSchema.js'
import Posts from '../../models/typess/postSchema.js'

export const getDepartmentAndPostTypes = async (req, res) => {
    try {
        const departmentFromMongo = await Departments.find()

        res.render('addEmployee', {
            departments: departmentFromMongo,
        })
    } catch (error) {
        console.log(error)
    }
}
