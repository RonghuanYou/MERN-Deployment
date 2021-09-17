const { createPirate, getAllPirates, getPirate, updatePirate, deletePirate } = require("../controllers/controller")

module.exports = function (app) {
    // GET ALL
    app.get('/api', getAllPirates)

    // CREATE
    app.post('/api/new', createPirate)

    // GET ONE
    app.get('/api/:id', getPirate)

    // DELETE
    app.delete('/api/:id', deletePirate)
}