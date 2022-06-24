import mongoose from 'mongoose'
const { Schema, model } = mongoose
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
