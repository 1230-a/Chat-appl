//create and initialize the express server and mongoose db
// const { request, response } = require('express');
const express = require('express')
const mongoose =  require('mongoose');
const app = express()

const UsersModel = require("./models/Users")

//Receive information from frontend in json format
app.use(express.json())

//Setting up the connection to the database we are trying to talk to
mongoose.connect("mongodb+srv://admin:P@ssw0rd123@cluster0.upvyl.mongodb.net/users?retryWrites=true&w=majority", {
    useNewUrlParser: true
})

//Inserting data in the database table
app.get('/', async (req, res) => {
    const utilisateur = new UsersModel ({
        username : "user2",
        password : "Password123"
    });

    try {
        await utilisateur.save();
        res.send("data inserted")
    } catch (err) {
        console.log(err)
    }
    
})

//Setting up the port that the backend server will listen to
app.listen(8000, () => {
    console.log('Server correctly running on port 8000')
})