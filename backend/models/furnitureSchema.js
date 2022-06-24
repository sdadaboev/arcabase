import mongoose from 'mongoose'
const { Schema, model } = mongoose
const furniture = new Schema(
    {
        type: {
            type: String,
            trim: true,
            required: true,
            enum: [
                'chair',
                'mebel',
                'mebel',
                'mebel',
                'mebel',
                'mebel',
                'mebel',
                'mebel',
                'mebel',
            ],
        },
        furnitureName: {
            type: String,
            required: true,
        },
        furnitureID: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        furnitureSN: {
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
                type: [String, 'you can upload only 3 files'],
                trim: true,
            },
        ],
        photos: [
            {
                type: [String, 'you can upload only 3 photos'],
                trim: true,
            },
        ],
        furnitureCharacteristics: {
            type: String,
            required: true,
        },
        history: {
            type: String,
        },

        attachedToOwner: {
            type: Schema.Types.ObjectId,
            ref: 'employee',
        },
        attachedToCompany: {
            type: Schema.Types.ObjectId,
            ref: 'company',
        },
    },
    { timestamps: true },
)

const furnitures = model('furniture', furniture)

export default furnitures
