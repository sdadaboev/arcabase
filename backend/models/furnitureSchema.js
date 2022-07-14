import mongoose from 'mongoose'
const { Schema, model } = mongoose
const fileInfo = new Schema({
    name: { type: String, default: 'none' },
    path: { type: String, default: 'none' },
})
const furniture = new Schema(
    {
        type: {
            type: String,
            trim: true,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        ID: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        SN: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        price: {
            type: String,
            trim: true,
        },
        vendor: {
            type: String,
            trim: true,
        },
        files: [fileInfo],
        photos: [fileInfo],
        characteristics: {
            type: String,
            required: true,
        },
        notes: {
            type: String,
        },

        owner: {
            type: Schema.Types.ObjectId,
            ref: 'employee',
        },
        company: {
            type: Schema.Types.ObjectId,
            ref: 'company',
        },
    },
    { timestamps: true },
)

const furnitures = model('furniture', furniture)

export default furnitures
