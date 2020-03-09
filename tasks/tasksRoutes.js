const express = require("express")
const helper = require('./tasksModel')
const router = express.Router()

// get all tasks
router.get('/', async (req, res, next) => {
    try {
        const tasks = await helper.findTasks()
        res.json(tasks)
    } catch(err) {
        next(err)
    }
})


// // get a task by id
router.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const task = await helper.findTaskById(id)
        res.json(task)
    } catch(err) {
        next(err)
    }
})

// //create new task
router.post('/', async (req, res, next) => {
    try {
        if(!req.body.description){
            return res.status(400).json({message: "description required"})
        }
        const [id] = await helper.createTask(req.body)
        const newTask = await helper.findTaskById(id)
        res.status(201).json(newTask)
    } catch(err) {
        next(err)
    }
})



module.exports = router