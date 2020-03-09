const db = require('../data/config')

module.exports = {
    findResources,
    findResourceById
}

function findResources(){
    return db("resources")
}

function findResourceById(id){
    return db("resources").where({id}).first()
}
