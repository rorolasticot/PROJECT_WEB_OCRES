const express = require('express');
const router = express.Router();
let PrecautionModel = require("../model");
router.get("/read", async (req, res) => {
    PrecautionModel.find({}, (err, result) => {
        if (err) {
            res.send(err)
        }
        console.log(result);
        res.send(result);
    })
});
module.exports = router;