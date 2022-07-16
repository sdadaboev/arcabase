import Employee from '../models/employeeSchema.js'
import Devices from '../models/deviceSchema.js'
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
        if (req.body.personalPhone == '') {
            console.log(" personal bo'sh")
            employee.personalPhone = null
        }
        if (req.body.corporativePhone == '') {
            console.log(" corporative bo'sh")
            employee.corporativePhone = null
        }
        await Employee.create(employee)

        const iden = await employee.username
        let files = req.objectOfFiles
        for (let file in files) {
            let massivFaylov = files[file]
            for (let fayl1 of massivFaylov) {
                if (fayl1.fieldname == 'file') {
                    await Employee.updateOne(
                        { username: `${iden}` },
                        {
                            $push: {
                                files: {
                                    name: `${fayl1.originalname}`,
                                    path: `http://127.0.0.1:5000/assets/uploads/deviceUploads/deviceFiles/${fayl1.originalname}`,
                                },
                            },
                        },
                    )
                } else if (fayl1.fieldname == 'photo') {
                    await Employee.updateOne(
                        { username: `${iden}` },
                        {
                            $push: {
                                photos: {
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
