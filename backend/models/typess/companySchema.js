import mongoose from 'mongoose'
const { Schema, model } = mongoose
const company = new Schema(
    {
        company_1: {
            type: String,
        },
    },
    { timestamps: true },
)

const companies = model('companies', company)

export default companies
