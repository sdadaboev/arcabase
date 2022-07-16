import mongoose from 'mongoose'
const { Schema, model } = mongoose
const fileInfo = new Schema({
    name: { type: String, default: 'none' },
    path: { type: String, default: 'none' },
})
const employee = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            unique: [true, 'this username is already exist'],
        },
        locationOfOffice: {
            type: String,
        },
        officeName: {
            type: String,
        },
        assignToCompany: {
            type: String,
            minlength: [2, ' so short company'],
            maxlength: [50, 'soo long company'],
        },
        department: {
            type: String,
            minlength: [1, ' so short department'],
            maxlength: [190, 'soo long department'],
        },
        post: {
            type: String,
            minlength: [1, ' so short post'],
            maxlength: [100, 'soo long post'],
        },

        personalPhone: {
            type: String,
        },
        corporativePhone: {
            type: String,
        },
        files: [fileInfo],
        photos: [fileInfo],

        devices: [
            {
                type: Schema.Types.ObjectId,
                ref: 'devices',
            },
        ],
        furniture: [
            {
                type: Schema.Types.ObjectId,
                ref: 'furniture',
            },
        ],
    },
    { timestamps: true },
)

const employees = model('employees', employee)

export default employees
