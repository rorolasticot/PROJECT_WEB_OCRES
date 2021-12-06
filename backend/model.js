const mongoose = require("mongoose");

const PrecautionSchema = new mongoose.Schema({

    precautioname: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
});
const Precaution = mongoose.model("Precaution", PrecautionSchema);
module.exports = Precaution;
