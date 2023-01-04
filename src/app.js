const path = require("path");

require("dotenv").config();

const express = require ("express");

const app = express();

app.get ("/home", (req, res)=>{
    res.sendFile(path.join(__dirname, "views/home.html"))
})


app.listen(process.env.PORT, () => {
    console.log("Server listening on port: ", process.env.PORT)
});

module.exports = app;
