const express = require("express");
const { getUserForm, displayUserData } = require("../controllers/users");
const app = require ("../app");

const router = express.Router();

app.get("/signin", (req,res) => {
    res.render("../vistas/login.ejs");
});

app.post ("/signin", (req,res)=>{
    const {user, password} = req.body;
    console.log ("userName: ",user),
    console.log ("pass: ",password ),
    res.status(200);
});

router.get("/users", getUserForm);

router.post("/users", displayUserData);

module.exports = router;