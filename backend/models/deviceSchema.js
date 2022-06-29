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
            enum: [
                'laptop',
                'monitor',
                'keyboard',
                'mouse',
                'headphones',
                'pc',
                'tablet',
                'coffeeMachine',
                'other',
            ],
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
        cratedData: {
            type: String,
            trim: true,
        },

        attachedToOwner: {
            type: Schema.Types.ObjectId,
            ref: 'sotrudnik',
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