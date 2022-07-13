import express from 'express'
const postType = express.Router()
import {
    addPostType,
    getPostTypes,
} from '../../controller/postType/postTypeController.js'
postType.post('/add-post-type', addPostType)
postType.get('/show-posts', getPostTypes)

export default postType
