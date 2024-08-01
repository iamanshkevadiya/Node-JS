const express = require('express');

// Import the DB from the DB.js file
const dbconnect = require('./db');
// Import the User schema from the user.Schema.js file
const User = require("./user.Schema");
// Import the isValid from the isValid.js File
const isValid = require("./validate");

const app = express();

app.use(express.json());

app.get("/", async(req, res) => {
    let data = await User.find();
    res.send(data);
});

// Post for Creating
app.post("/",isValid,async(req, res) => {
    let data = await Usercreate(req.body);
    res.send(data);
});

// Delete 
app.delete("/:id", async(req, res) => {
    let {id} = req.params
    let data = await User.findByIdAndDelete(id);
    res.send(data);
});

// upadate 
app.patch("/:id", async(req, res) => {
    let {id} = req.params
    let data = await User.findByIdAndUpdate(id,req.body);
    res.send(data);
});

app.listen(8080, () => {
    console.log("listening on port 8080");
    dbconnect()
});