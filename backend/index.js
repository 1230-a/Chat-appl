//create and initialize the express server and mongoose db
// const { request, response } = require('express');
const express = require('express')
const mongoose =  require('mongoose');
const app = express()
const cors = require('cors')//helps to communicate with teh api that we create

const UsersModel = require("./models/Users")

//Receive information from frontend in json format
app.use(express.json());
app.use(cors())

//Setting up the connection to the database we are trying to talk to
mongoose.connect("mongodb+srv://admin:P@ssw0rd123@cluster0.upvyl.mongodb.net/users?retryWrites=true&w=majority", {
    useNewUrlParser: true
})

//Inserting data in the database table
app.post('/create_user', async (req, res) => {

    const username = req.body.username;
    const password = req.body.password

    const utilisateur = new UsersModel ({
        username : username,
        password : password
    });

    try {
        await utilisateur.save();
        res.send("data inserted")
    } catch (err) {
        console.log(err)
    }
    
})

//Retrieveing data from the database to compare
app.get('/login', async (req, res) => {
    UsersModel.find({ $where: {username : "" }},(err, result) => {
        if (err) {
            res.send(err)
        }
    } )
})

//Setting up the port that the backend server will listen to
app.listen(8000, () => {
    console.log('Server correctly running on port 8000')
})