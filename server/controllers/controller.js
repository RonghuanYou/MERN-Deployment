const { Pirate } = require('../models/model')
module.exports = {
    // CREATE
    createPirate: (req, res) => {
        Pirate.create(req.body)
            .then(newPirate => res.json({ pirate: newPirate }))
            .catch(err => res.status(400).json(err));
    },

    // GET ALL 
    getAllPirates: (req, res) => {
        Pirate.find().sort({name: 'asc'})
            .then(allPirates => res.json({ allPirates: allPirates }))
            .catch(err => res.json(err));
    },

    // GET ONE: IF ID IS WRONG, SHOW ERROR MESSAGES
    getPirate: (req, res) => {
        Pirate.findById(req.params.id)
            .then(onePirate => res.json(onePirate))
            .catch(err => res.status(400).json(err));
    },   

    // DELETE BY ID
    deletePirate: (req, res) => {
        Pirate.findByIdAndDelete(req.params.id)
            .then(result => res.json({ result: result }))
            .catch(err => res.json(err))
    }
}
