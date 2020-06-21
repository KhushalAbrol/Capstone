//setting up a server
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
const cors = require("cors");
app.use(cors());
app.use(express.static('Website'));

const port = 8000;
const server = app.listen(port, listening);

function listening(){
    console.log(`The server is running locally on port:${port}`);
};/* 
const projectData={};*/

const locationData = {};

//POST ROUTE => app.js post data here and the callback function stores it at /addCoordinates path
app.post('/addCoordinates',storeCoordinates)
function storeCoordinates(req, res){
    newEntry = {
        longitude: req.body.longitude,
        latitude: req.body.latitude,
        city: req.body.city
    }
    locationData.push(newEntry)
    res.send(locationData)
}

//GET ROUTE=> app.js get data from here
app.get('/get', getData)
function getData(req, res){
    res.send(locationData)
}