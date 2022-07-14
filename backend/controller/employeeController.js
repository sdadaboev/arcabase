import Employee from '../models/employeeSchema.js'

export const createEmployee = async (req, res) => {
    try {
        console.log('req.body: ', req.body)

        const employee = new Employee({
            name: req.body.name,
            username: req.body.username,
            locationOfOffice: req.body.locationOfOffice,
            officeName: req.body.officeName,
            assignToCompany: req.body.assignToCompany,
            department: req.body.department,
            post: req.body.post,
            personalPhone: req.body.personalPhone,
            corporativePhone: req.body.corporativePhone,
        })
        console.log('employee is: ', employee)
        await Employee.create(employee)
        res.redirect('/employee-job/add-employee')
    } catch (error) {
        console.log(error)
    }
}

// export const createEmployee  =  async ( req, res ) => {
//     try {
//         const {name, company, department, post} = req.body
//         const employee = {
//             name,
//             company,
//             department,
//             post
//         }

//        if( await Employee.create(employee)){
//            req.send("all nice")
//        }else{
//            res.send("bad")
//        }

//     } catch (error) {
//         res.send(error)
//     }
// }

export const showEmployees = (req, res) => {
    res.send("qalesan o'xshavottimi?")
}
