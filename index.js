const express = require("express")
const server = express()
const helmet = express("helmet")

const projectsRoutes = require("./projects/projectsRoutes")
const tasksRoutes = require("./tasks/tasksRoutes")
const resourcesRoutes = require('./resources/resourcesRoutes')

const PORT = 7000

server.use(helmet())
server.use(express.json())

server.use("/api/projects", projectsRoutes)
server.use('./api/tasks', tasksRoutes)
server.use('./api/resources', resourcesRoutes)
server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({errMessage: "Something went wrong"})
})

server.listen(PORT, () => {
    console.log(`Magic is happening on port ${PORT}`)
})

