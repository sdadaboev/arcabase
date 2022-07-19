import mongoose from 'mongoose'
const { Schema, model } = mongoose
const companyShcema = new Schema(
    {
        company: {
            type: String,
            trim: true,
            required: true,
            unique: true,
        },
    },
    { timestamps: true },
)

const company = model('company', companyShcema)

export default company
