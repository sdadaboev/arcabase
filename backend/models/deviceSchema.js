import mongoose from 'mongoose'
const { Schema, model } = mongoose
const fileInfo = new Schema({
    name: { type: String, default: 'none' },
    path: { type: String, default: 'none' },
})
const device = new Schema(
    {
        type: {
            type: String,
            trim: true,
            required: true,
        },
        deviceName: {
            type: String,
            required: true,
        },
        deviceID: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        deviceSN: {
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
        file: [fileInfo],
        photo: [fileInfo],
        deviceCharacteristics: {
            type: String,
            required: true,
        },
        notes: {
            type: String,
        },
        attachedToOwner: {
            type: Schema.Types.ObjectId,
            refPath: 'commonSchema',
        },
        commonSchema: {
            type: String,
            enum: ['employees', 'storage'],
        },
        attachedToCompany: {
            type: Schema.Types.ObjectId,
            ref: 'company',
        },
    },
    { timestamps: true },
)

const devices = model('devices', device)

export default devices
