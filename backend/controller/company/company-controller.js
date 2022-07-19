import Company from '../../models/company/company-schema.js'

export const AddCompany = async (req, res) => {
    try {
        const company = new Company({
            company: req.body.company,
        })
        const companyToDB = await Company.create(company)
        res.send({
            msg: 'added',
            data: companyToDB,
        })
    } catch (error) {
        console.log({
            msg: error.message,
            all: error,
        })
    }
}
