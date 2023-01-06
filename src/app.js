const path = require("path");

require("dotenv").config();

const express = require ("express");

const app = express();

app.use (express.static(path.join(__dirname, "../public")));

app.set("view engine","ejs");

const homeRoutes = require ("./routes/home");
const productRoutes = require ("./routes/products");
const userRoutes = require ("./routes/users");

app.use("/", homeRoutes);
app.use("/products", productRoutes);
app.use("/users", userRoutes );




//${process.env.PORT}
app.listen(process.env.PORT, () => {
    console.log("Server listening on port: ", process.env.PORT)
});

module.exports = app;
