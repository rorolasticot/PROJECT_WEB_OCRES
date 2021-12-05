
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const router = express.Router();
const conx = mongoose.connection
const insertRoute = require('./routes/insert');
const readRoute = require('./routes/read');
const PRECAUTIONModel = require("./model");

app.use(express.json());
app.use(cors());


mongoose.connect("mongodb+srv://nicoro:romane@cluster0.bijmi.mongodb.net/disposition?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
    }
);
app.use(insertRoute);




app.use(readRoute);


app.listen(3001, () => {
    console.log('Server running on port 3001 !');
});

