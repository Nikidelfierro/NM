const path = require("path");
require("dotenv").config();
const express = require ("express");
const app = express();
const bodyParser = require ("body-parser");
const session = require ("express-session");
const cookieParser = require ("cookie-parser");

app.use (express.static(path.join(__dirname, "../public")));
app.use (bodyParser.urlencoded({ extended: true}));


app.set("view engine","ejs");

const oneDay = 1000* 60* 60* 24;
const halfDay = oneDay / 2;

app.use(session({
    saveUninitialized:true,
    secret: process.env.SESSION_SECRET,
    cookie: {maxAge: oneDay},
    resave: false,
}));


const homeRoutes = require ("./routes/home");
const productRoutes = require ("./routes/products");
const userRoutes = require ("./routes/users");
const loginRoutes = require ("./routes/signin");

app.use("/",userRoutes);
app.use("/", homeRoutes);
app.use("/products", productRoutes);
app.use("/users", userRoutes);
app.use("/signin",loginRoutes);




//${process.env.PORT}
app.listen(process.env.PORT, () => {
    console.log("Server listening on port: ", process.env.PORT)
});

module.exports = app;
