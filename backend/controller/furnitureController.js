import Furniture from '../models/furnitureSchema.js'

export const addFurniture = async (req, res) => {
    try {
        const furniture = new Furniture({
            type: req.body.type,
            name: req.body.name,
            ID: req.body.ID,
            SN: req.body.SN,
            price: req.body.price,
            vendor: req.body.vendor,
            characteristics: req.body.characteristics,
            notes: req.body.notes,
            owner: req.body.owner,
            company: req.body.company,
        })
        // ! pastga o'tishdan oldin man bu datani id sini ovolib ownerga biriktirishim kerak

        await Furniture.create(furniture)
        res.send('added')
    } catch (error) {
        console.log(error)
    }
}
