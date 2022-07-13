import mongoose from 'mongoose'
const { Schema, model } = mongoose
const department = new Schema(
    {
        department: {
            type: String,
            trim: true,
            required: true,
            unique: true,
        },
    },
    { timestamps: true },
)

const departments = model('departments', department)

export default departments
