import Furniture from '../models/furnitureSchema.js'
import Employee from '../models/employeeSchema.js'
import Storage from '../models/storage.js'
import Company from '../models/company/company-schema.js'
export const addFurniture = async (req, res) => {
    try {
        const employeeeFromMOngo = await Employee.find({
            name: req.body.owner,
        })
        let commonSchemaValue = ''
        let getID = ''
        let idOfFindedEmployee = ''
        if (req.body.owner == 'storage') {
            commonSchemaValue = 'storage'
            const getStorage = await Storage.find({ name: 'furniture storage' })
            console.log('getStorage: ', getStorage[0]._id)
            getID = getStorage[0]._id
            console.log('getID: ', getID)
        } else {
            idOfFindedEmployee = employeeeFromMOngo[0]._id
            commonSchemaValue = 'employees'
        }
        /////////////////////////////////////////////////
        let compName = req.body.company
        const top = await Company.findOne({
            company: compName,
        })

        let getIdOfCompany = top._id

        const furniture = new Furniture({
            type: req.body.type,
            name: req.body.name,
            ID: req.body.ID,
            SN: req.body.SN,
            price: req.body.price,
            vendor: req.body.vendor,
            characteristics: req.body.characteristics,
            notes: req.body.notes,
            owner: req.body.owner == 'storage' ? getID : idOfFindedEmployee,
            commonSchema: commonSchemaValue,
            company: getIdOfCompany,
        })

        const createdFurniture = await Furniture.create(furniture)
        let furnitureIDForStorage = createdFurniture._id

        if (createdFurniture.commonSchema == 'storage') {
            console.log('truuuuuuueeeeeeeee')
            await Storage.updateOne(
                { name: 'furniture storage' },
                {
                    $push: {
                        data: furnitureIDForStorage,
                    },
                },
            )
            const populatedData = await Furniture.find().populate('owner')
            console.log('populated: ', populatedData)
        } else {
            await Employee.updateOne(
                { _id: idOfFindedEmployee },
                {
                    $push: {
                        furniture: furnitureIDForStorage,
                    },
                },
            )
            const populatedData = await Employee.findOne({
                _id: idOfFindedEmployee,
            })
                .populate('furniture')
                .populate('files')
                .populate('photos')
            console.log('populated: ', populatedData)
        }

        const iden = await furniture.ID
        let files = req.objectOfFiles
        for (let file in files) {
            let massivFaylov = files[file]
            for (let fayl1 of massivFaylov) {
                if (fayl1.fieldname == 'file') {
                    await Furniture.updateOne(
                        { ID: `${iden}` },
                        {
                            $push: {
                                files: {
                                    name: `${fayl1.originalname}`,
                                    path: `http://127.0.0.1:5000/assets/uploads/furnitureUploads/files/${fayl1.originalname}`,
                                },
                            },
                        },
                    )
                } else if (fayl1.fieldname == 'photo') {
                    await Furniture.updateOne(
                        { ID: `${iden}` },
                        {
                            $push: {
                                photos: {
                                    name: `${fayl1.originalname}`,
                                    path: `http://127.0.0.1:5000/assets/uploads/furnitureUploads/photos/${fayl1.originalname}`,
                                },
                            },
                        },
                    )
                } else {
                    console.log('error from for-of array of req.files')
                }
            }
        }
        ////////////////////////////////////////////////////

        res.redirect('/furniture/add-furniture')
        console.log('added furniture')
    } catch (error) {
        console.log(error)
    }
}
