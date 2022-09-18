const express = require("express");
const app = express();
const fs = require("fs");
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));

const mysql = require('mysql');

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    pasword:"",
    database:"festival_partners"
})

connection.connect((error) => {
    if(error)
    throw error;
    console.log("Connected to the database");
})

app.get("/get-AllPartners", (req, res) => {

   const sqlQuery = "SELECT * FROM partners";
   connection.query(sqlQuery, (error, results) => {
    if(error)
    throw error;
    res.send(JSON.stringify({ "status": 200, "error": null, "response": {Partners: results} }))
   })
   
   
    //fs.readFile('AllPartners.json', "utf8", (err, data) => {
    //    res.send(JSON.stringify({ "status": 200, "error": null, "response": JSON.parse(data) }))
   // })
})

app.post("/add-Partners", (req, res) => {
    const newPartners = {
        name: req.body.fname,
        email: req.body.femail,
        phone: req.body.fphone,
        brand: req.body.fbrand,
        wwwsocial: req.body.fwww,
        message: req.body.fmessage,
    };
    
    const sqlQuery = "INSERT INTO partners (name, email, phone, brand, wwwsocial, message) VALUES ('" + 
    newPartners.name + "','"+ newPartners.email + "','" + newPartners.phone + "','" + newPartners.brand + "','" + newPartners.wwwsocial + "','" +
    newPartners.message +"')";
    connection.query(sqlQuery, (error, results) => {
     if(error)
     throw error;
     res.send(JSON.stringify({ "status": 200, "error": null, "response": "Customer ID :" + results.insertId + "created" }))
    })

    //fs.readFile('AllPartners.json', "utf8", (err, data) => {
    //    const Partners = JSON.parse(data);
    //    Partners.Partners.push(newPartners);
    //    fs.writeFile('AllPartners.json', JSON.stringify(Partners, null, 3), function (err) {
    //        res.send("Partner is added");
    //    });
    //})

})

app.listen(5000, () => {
    console.log("Server is running on port 5000");
})