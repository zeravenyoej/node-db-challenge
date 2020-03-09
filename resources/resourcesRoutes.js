const express = require("express")
const helper = require('./resourcesModel')
const router = express.Router()


// get all resources
router.get('/', async (req, res, next) => {
    try {
        const resources = await helper.findResources()
        res.json(resources)
    } catch(err) {
        next(err)
    }
})


// // get a resource by id
router.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const resource = await helper.findResourceById(id)
        res.json(resource)
    } catch(err) {
        next(err)
    }
})

// //create new resource
router.post('/', async (req, res, next) => {
    try {
        if(!req.body.name){
            return res.status(400).json({message: "name required"})
        }
        const [id] = await helper.createResource(req.body)
        const newResource = await helper.findResourceById(id)
        res.status(201).json(newResource)
    } catch(err) {
        next(err)
    }
})


module.exports = router