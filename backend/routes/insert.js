const express = require('express');
const router = express.Router();

router.post("/insert", async (req, res) => {
    const precautioname = req.body.precautioname;
    const description = req.body.description;
    const image = req.body.image;
    const precaution = new PRECAUTIONModel({ precautioname: precautioname, description: description, image: image });
    try {
        res.send("inserted data")
        await precaution.save();
    } catch (err) {
        console.log(err)
    }
});

module.exports = router;