const express = require('express');
const router = express.Router();
let PrecautionModel = require("../model");
router.post("/insert", async (req, res) => {
    const precautioname = req.body.precautioname;
    const description = req.body.description;
    const image = req.body.image;
    const Newprecaution = new PrecautionModel({ precautioname: precautioname, description: description, image: image });
    try {
        res.send("inserted data")
        await Newprecaution.save();
    } catch (err) {
        console.log(err)
    }
});

module.exports = router;
