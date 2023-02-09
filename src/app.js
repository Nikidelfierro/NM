const path = require("path");
require("dotenv").config();
const express = require ("express");   
const bodyParser = require ("body-parser");
const cookieParser = require ("cookie-parser");
const session = require ("express-session");
const app = express();



app.use (express.static(path.join(__dirname, "../public")));
app.use (bodyParser.urlencoded({ extended: true}));


app.set("view engine","ejs","html");


app.use(
    session({
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET,
    cookie: {maxAge: 1000* 60 * 60 * 24},
    resave: false,
}
));



const homeRoutes = require ("./routes/home");
const productRoutes = require ("./routes/products");
const userRoutes = require ("./routes/auth");


app.use("/", homeRoutes);
app.use("/products", productRoutes);
app.use("/users", userRoutes);


app.use(cookieParser());

const authControllers = require("./routes/auth");
app.use ("/",authControllers);


//${process.env.PORT}
app.listen(process.env.PORT, () => {
    console.log("Server listening on port: ", process.env.PORT)
});

module.exports = app;
