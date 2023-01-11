const express = require("express");
const { getUserForm, displayUserData } = require("../controllers/users");

const router = express.Router();

router.get("/users", getUserForm);

router.post("/users", displayUserData);

module.exports = router;