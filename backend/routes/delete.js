const express = require('express');
const router = express.Router();

app.delete("/delete/:id", async (req, res) => {

    const id = req.params.id;
    await PRECAUTIONModel.findByIdAndRemove(id).exec();
    res.send("deleted");



});
module.exports = router;