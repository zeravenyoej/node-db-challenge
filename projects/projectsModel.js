const db = require('../data/config')

module.exports = {
    findProjects,
    findProjectById,
    createProject
}

function findProjects(){
    return db("projects")
}

function findProjectById(id){
    return db("projects").where({id}).first()
}

function createProject(payload){
    return db("projects").insert(payload)
}