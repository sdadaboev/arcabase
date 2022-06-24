import mongoose from 'mongoose'
const { Schema, model } = mongoose
const post = new Schema(
    {
        post_developer: {
            type: String,
        },
        post_buxgalter: {
            type: String,
        },
        post_sto: {
            type: String,
        },
        post_4: {
            type: String,
        },
        post_5: {
            type: String,
        },
        post_6: {
            type: String,
        },
        post_7: {
            type: String,
        },
        post_8: {
            type: String,
        },
        post_9: {
            type: String,
        },
        post_10: {
            type: String,
        },
        post_11: {
            type: String,
        },
        post_12: {
            type: String,
        },
        post_13: {
            type: String,
        },
        post_4: {
            type: String,
        },
        post_15: {
            type: String,
        },
    },
    { timestamps: true },
)

const posts = model('posts', post)

export default departments
