const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const readRoute = require('./routes/read');
const insertRoute = require('./routes/insert');
const deleteRoute = require('./routes/delete');
const PrecautionModel = require("./model");

app.use(express.json());

app.use(cors());


mongoose.connect("mongodb+srv://nicoro:ronico@cluster0.jpzqq.mongodb.net/precaution?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
    }
);
const connection = mongoose.connection;
connection.once("open", () => { console.log("connecté") })
app.use(insertRoute);
app.use(readRoute);
app.use(deleteRoute);
app.listen(3002, () => {
    console.log('Server running on port 3002 !');
});
