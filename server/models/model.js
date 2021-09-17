const mongoose = require('mongoose')

// create a new schema
const BeltExamSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    img_url: {
        type: String,
        required: [true, "Image URL is required"]
    },
    treasure_chests_num: {
        type: Number,
        required: [true, "Number of treasure chests is required"]
    }, 
    pirate_catch_phrase: {
        type: String,
        required: [true, "Pirate catch phrase is required"]
    },
    crew_position: {
        type: String,
        required: [true, "Crew position is required"]
    },
    peg_leg: {
        type: Boolean,
        required: [true, "Peg leg is required"],
        default: true
    }, 
    eye_patch: {
        type: Boolean,
        required: [true, "Eye patch is required"],
        default: true
    },
    hook_hand: {
        type: Boolean,
        required: [true, "Hook hand is required"],
        default: true
    }
}, { timestamps: true })

// instantiate the schema and export it
module.exports.Pirate = mongoose.model('BeltExam', BeltExamSchema);
