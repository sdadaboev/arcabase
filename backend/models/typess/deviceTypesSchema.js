import mongoose from 'mongoose'
const { Schema, model } = mongoose
const deviceType = new Schema(
    {
        type: {
            type: String,
            trim: true,
            required: true,
            unique: true,
        },
    },
    { timestamps: true },
)

const deviceTypes = model('deviceTypes', deviceType)

export default deviceTypes
