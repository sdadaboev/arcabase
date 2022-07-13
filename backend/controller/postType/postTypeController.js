import Posts from '../../models/typess/postSchema.js'
export const addPostType = async (req, res, next) => {
    try {
        if (!req.body) {
            res.status(400).send({ message: 'Content can not be empty' })
            return
        }

        const postTypeFromBody = new Posts({
            post: req.body.post,
            department: req.body.department,
        })

        const createdPostType = await Posts.create(postTypeFromBody)
        console.log('saved', createdPostType)
        res.send(createdPostType)
        // res.redirect('/create-device-button')
    } catch (error) {
        res.status(500).send({
            message: 'Sardorni serveridan hatolik ',
            error: error.message,
        })
    }
}

export const getPostTypes = async (req, res, next) => {
    try {
        const typesFromMongo = await Posts.find()
        console.log('types From mongo ', typesFromMongo)
        typesFromMongo.forEach((typeOnly) => {
            console.log(typeOnly.type)
        })
        res.send({
            msg: 'our posts are',
            posts: typesFromMongo,
        })
        // res.render('createDevicePage', { types: typesFromMongo })
        next()
    } catch (error) {
        console.log(error)
    }
}
