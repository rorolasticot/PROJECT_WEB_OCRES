const express = require('express');
const router = express.Router();
let PrecautionModel = require("../model");

router.delete("/delete/:id", async (req, res) => {

    const id = req.params.id;
    res.send("deleted data");
    await PrecautionModel.findByIdAndRemove(id).exec();

});
module.exports = router;