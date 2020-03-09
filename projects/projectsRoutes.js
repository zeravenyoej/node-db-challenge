const express = require("express")
const router = express.Router()
const helper = require('./projectsModel')


// get all projects
router.get('/', async (req, res, next) => {
    try {
        const projects = await helper.findProjects()
        res.json(projects)
    } catch(err) {
        next(err)
    }
})


// // get a project by id
router.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const project = await helper.findProjectById(id)
        res.json(project)
    } catch(err) {
        next(err)
    }
})

// //create new project
// router.post('/', async (req, res, next) => {
//     try {

//     } catch(err) {
//         next(err)
//     }
// })



module.exports = router