import mongoose from 'mongoose'
const { Schema, model } = mongoose
const furniture = new Schema(
    {
        furniture_chair: {
            type: String,
        },
        furniture_armChair: {
            type: String,
        },
        furniture_table: {
            type: String,
        },
        furniture1: {
            type: String,
        },
        furniture2: {
            type: String,
        },
        furniture3: {
            type: String,
        },
        furniture4: {
            type: String,
        },
        furniture5: {
            type: String,
        },
        furniture6: {
            type: String,
        },
        furniture7: {
            type: String,
        },
        furniture8: {
            type: String,
        },
        furniture9: {
            type: String,
        },
        furniture10: {
            type: String,
        },
        furniture11: {
            type: String,
        },
        furniture12: {
            type: String,
        },
    },
    { timestamps: true },
)

const furnitures = model('furnitures', furniture)

export default furnitures
