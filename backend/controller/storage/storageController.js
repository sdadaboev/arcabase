import Storage from '../../models/storage.js'

export const addStorage = async (req, res) => {
    try {
        const storage = new Storage({
            name: req.body.name,
            data: req.body.data,
        })
        const mongoStorage = await Storage.create(storage)
        console.log('added')
        res.send('added')
    } catch (error) {
        console.log('main error:', error)
    }
}
