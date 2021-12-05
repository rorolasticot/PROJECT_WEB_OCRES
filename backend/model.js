const mongoose = require('mongoose')

const dispositionSchema = new mongoose.Schema({

    precautioname: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model("Disposition", dispositionSchema);
