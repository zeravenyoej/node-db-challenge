const db = require('../data/config')

module.exports = {
    findTasks,
    findTaskById
}

function findTasks(){
    return db("tasks")
}

function findTaskById(id){
    return db("tasks").where({id}).first()
}
