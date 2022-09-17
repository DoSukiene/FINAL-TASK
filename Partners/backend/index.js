const express = require("express");
const app = express();
const fs = require("fs");
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/get-AllPartners", (req, res) => {
    fs.readFile('AllPartners.json', "utf8", (err, data) => {
        res.send(JSON.stringify({ "status": 200, "error": null, "response": JSON.parse(data) }))
    })
})

app.post("/add-Partners", (req, res) => {
    const newPartners = {
        name: req.body.fname,
        email: req.body.femail,
        phone: req.body.fphone,
        brand: req.body.fbrand,
        wwwsocial: req.body.fwww,
        message: req.body.fmessage,
    }
    fs.readFile('AllPartners.json', "utf8", (err, data) => {
        const Partners = JSON.parse(data);
        Partners.Partners.push(newPartners);
        fs.writeFile('AllPartners.json', JSON.stringify(Partners, null, 3), function (err) {
            res.send("Partner is added");
        });
    })

})

app.listen(5000, () => {
    console.log("Server is running on port 5000");
})