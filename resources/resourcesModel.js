const db = require('../data/config')

module.exports = {
    findResources,
    findResourceById,
    createResource
}

function findResources(){
    return db("resources")
}

function findResourceById(id){
    return db("resources").where({id}).first()
}

function createResource(payload){
    return db("resources").insert(payload)
}