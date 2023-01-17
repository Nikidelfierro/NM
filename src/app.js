const path = require("path");
require("dotenv").config();
const express = require ("express");   
const bodyParser = require ("body-parser");
const session = require ("express-session");
const cookieParser = require ("cookie-parser");
const app = express();
const fs = require ("fs");
app.use (express.static(path.join(__dirname, "../public")));
app.use (bodyParser.urlencoded({ extended: true}));
const bcrypt = ("bcrypt");


app.set("view engine","ejs");



app.use(
    session({
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET,
    cookie: {maxAge: 1000* 60 * 60 * 24},
    resave: false,
}
));


app.get("/signup", (req, res)=> {
        res.render("vistas/signup.ejs");
});

app.post("/signup", (req, res)=>{
    const {user, pass} = req.body;

    const file =     fs.writeFileSync(path.join(__dirname, "./user.json"));
    const parsedFile = JSON.parse(file);

    parsedFile = [...parsedFile, {
        user,
        pass: bcrypt.hash(pass, 10),

    },]

    fs.writeFileSync(path.join(__dirname, "./user.json"));


    res.status(200);
});


app.get("/signin", (req, res)=>{
    const {user, pass} = req.body;
    res.status(200);
});



const homeRoutes = require ("./routes/home");
const productRoutes = require ("./routes/products");
const userRoutes = require ("./routes/users");


app.use("/",userRoutes);
app.use("/", homeRoutes);
app.use("/products", productRoutes);
app.use("/users", userRoutes);




//${process.env.PORT}
app.listen(process.env.PORT, () => {
    console.log("Server listening on port: ", process.env.PORT)
});

module.exports = app;
