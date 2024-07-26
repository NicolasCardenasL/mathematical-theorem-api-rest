import { TheoremsModel } from "../models/theorems.js"
import { validateGetAll, validateRequestById } from "../schemes/theorems.js"
import { stringToInt, transformToBoolean } from "../utils.js"

export class TheoremsController {
    static async getAll(req, res) {
        let {date, proven, field, author} = req.query
        if (proven) proven = transformToBoolean(proven)
        if (date) date = stringToInt(date)
        if (field) field = [field] 
        const validation = validateGetAll({date, proven, field, author})
        if (validation.success) {
            const theorems = await TheoremsModel.getAll(validation.data)
            res.json(theorems)
        } else {
            res.status(400).json(validation.error["issues"])
        }
    }
    static async getById(req, res) {
        const id = +req.params.id
        const validation = validateRequestById({id})
        if (validation.success) {
            const theorem = await TheoremsModel.getById({id})
            if (theorem) return res.json(theorem)
            res.status(404).json({ message: 'Theorem not found' })
        }
        res.status(400).json(validation.error)
    }
    static async getRandom(req, res) {
        const theorem = await TheoremsModel.getRandom()
        res.json(theorem)
    }
}