const db = require('../data/config')

module.exports = {
    findTasks,
    findTaskById,
    createTask
}

function findTasks(){
    return db("tasks as t")
        .join("projects as p", "p.id", "t.project_id")
        .select("t.*", "p.name as project_name", "p.description as project_description")
}

function findTaskById(id){
    return db("tasks as t")
        .where("t.id", id)
        .join("projects as p", "p.id", "t.project_id")
        .select("t.*", "p.name as project_name", "p.description as project_description")
        .first()
}

function createTask(payload){
    return db("tasks").insert(payload)
}
