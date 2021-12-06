const express = require('express');
const router = express.Router();
let PrecautionModel = require("../model");

router.delete("/delete/:id", async (req, res) => {

    const id = req.params.id;
    await PrecautionModel.findByIdAndRemove(id).exec();
    res.send("deleted");

});
module.exports = router;