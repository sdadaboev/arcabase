import Employee from "../models/employeeSchema.js"


export const createEmployee = async (req,res) =>{
    try {
        const employee = {
            name: req.body.name,
            company: req.body.company,
            department: req.body.department,
            post: req.body.post
        }
        await Employee.create(employee)
        res.send("added")
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

export const showEmployees = (req,res) => {
   res.send("qalesan o'xshavottimi?")
}

 