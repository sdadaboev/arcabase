import mongoose from 'mongoose'
const { Schema, model } = mongoose
const employee = new Schema(
    {
        name: {
            type: String,
            required: true,
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
        username: {
            type: String,
            unique: [true, 'this username is already exist'],
        },
        personalPhone: {
            type: String,
            unique: true,
        },
        corporativePhone: {
            type: String,
            unique: true,
        },
        files: [
            {
                type: [String, 'you can upload only 3 photos'],
                trim: true,
            },
        ],
        photos: [
            {
                type: [String, 'you can upload only 3 photos'],
                trim: true,
            },
        ],
        employeeID: {
            type: String,
            unique: true,
            required: true,
        },
        devices: [
            {
                type: Schema.Types.ObjectId,
                ref: 'device',
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
