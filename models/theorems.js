import { areAllUndefined, getRandomItem, isUndefined, matchStrings, readJSON } from "../utils.js"

const theorems = readJSON("./json/theorems.json")

export class TheoremsModel {
    static async getAll ({date, proven, field, author}) {
        let responseTheorems = theorems
        if (areAllUndefined([date, proven, field, author])) return responseTheorems
        if (!isUndefined(date)) responseTheorems = responseTheorems.filter(theorem => theorem.date <= date)
        if (!isUndefined(field)) responseTheorems = responseTheorems.filter(theorem => theorem.field.some(_field => matchStrings(_field, field[0])))
        if (!isUndefined(proven)) {responseTheorems = responseTheorems.filter(theorem => theorem.proven === proven)}
        if (!isUndefined(author)) responseTheorems = responseTheorems.filter(theorem => matchStrings(theorem.author, author))
        return responseTheorems
    }
    static async getById ({id}) {
        const theorem = theorems.find(thm => thm.id === id)
        return theorem
    }
    static async getRandom(req, res) {
        const theorem = getRandomItem(theorems)
        return [theorem]
    }
}