
const path = require ("path");
const fs = require ("fs");
const bcrypt = require("bcrypt");


const sendSigninForm = (req, res ) => {
        res.render("vistas/login.ejs")
};

const getSigninData =  (req, res)=>{
    const {user, pass} = req.body;

    const file =     fs.readFileSync(path.join(__dirname, "../models/user.json"));
    let parsedFile = JSON.parse(file);

    const existedUser = parsedFile.find ((users)=>users.user === user);

    if(!existedUser) {
        return res.render("vistas/invalid.ejs");
    }

    const validPassword = bcrypt.compareSync(pass, existedUser.pass);

    if (!validPassword){
        return res.render("vistas/invalid.ejs");
    }

    res.redirect("/");

    res.status(200);
};

const sendSignupForm = (req, res)=> {
    res.render("vistas/signup.ejs");
};

const getSignupData =  (req, res)=>{
    const {user, pass} = req.body;

    const file =     fs.readFileSync(path.join(__dirname, "../models/user.json"));
    let parsedFile = JSON.parse(file);


bcrypt.genSalt(10, (err,salt) => {
        bcrypt.hash(pass, salt, (err,hash) => {
            fs.writeFileSync(
                path.join(__dirname, "../models/user.json"),
                 JSON.stringify([
                    ...parsedFile,
                {
                user,
                pass: hash,
        },
        ], null, 2));



        });
    });



    

    res.redirect("/signin");
};

module.exports = {
    sendSigninForm,
    sendSignupForm,
    getSigninData,
    getSignupData
}