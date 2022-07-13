import Departments from '../../models/typess/departmentSchema.js'
import Posts from '../../models/typess/postSchema.js'
export const obj = {}
export const getDepartmentAndPostTypes = async (req, res) => {
    try {
        const departmentFromMongo = await Departments.find()
        const ITdep = await Posts.find({ department: 'IT' })
        const STOdep = await Posts.find({ department: 'STO' })
        const BUXdep = await Posts.find({ department: 'BUX' })
        ;(obj.IT = ITdep), (obj.STO = STOdep), (obj.BUX = BUXdep)
        res.render('addEmployee', {
            departments: departmentFromMongo,
        })
        return {
            ITdep,
            STOdep,
            BUXdep,
        }
    } catch (error) {
        console.log(error)
    }
}
