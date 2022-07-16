import mongoose from 'mongoose'
const { Schema, model } = mongoose

const storage = new Schema(
    {
        name: String,
        data: [
            {
                type: Schema.Types.ObjectId,
                ref: 'devices',
                unique: true,
                trim: true,
            },
        ],
    },
    {
        timestamps: true,
    },
)

const Storage = model('storage', storage)

export default Storage
