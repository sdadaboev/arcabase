import mongoose from 'mongoose'
const { Schema, model } = mongoose
const department = new Schema(
    {
        department_IT: {
            type: String,
        },
        department_buxgalteriya: {
            type: String,
        },
        department_CTO: {
            type: String,
        },
        department_4: {
            type: String,
        },
        department_5: {
            type: String,
        },
        department_6: {
            type: String,
        },
        department_7: {
            type: String,
        },
        department_8: {
            type: String,
        },
        department_9: {
            type: String,
        },
        department_10: {
            type: String,
        },
        department_11: {
            type: String,
        },
        department_12: {
            type: String,
        },
        department_13: {
            type: String,
        },
        department_4: {
            type: String,
        },
        department_15: {
            type: String,
        },
    },
    { timestamps: true },
)

const departments = model('departments', department)

export default departments
