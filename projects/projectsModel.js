const db = require('../data/config')

module.exports = {
    findProjects,
    findProjectById
}

function findProjects(){
    return db("projects")
}

function findProjectById(id){
    return db("projects").where({id}).first()
}

// function createProject(){
//     return db("projects")
// }