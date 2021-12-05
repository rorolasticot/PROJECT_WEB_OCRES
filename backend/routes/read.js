const express = require('express');
const router = express.Router();

app.get("/read", async (req, res) => {
    PRECAUTIONModel.find({}, (err, result) => {
        if (err) {
            res.send(err)
        }
        console.log(result);
        res.send(result);
    })
});
module.exports = router;