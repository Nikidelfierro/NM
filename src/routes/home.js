const path = require("path");
const express = require("express");

const router = express.Router();

// Nuestra primer ruta
router.get("/", (req, res) => {
    const {name} = req.query;
  // files
  res.status(200).render("vistas/home.ejs",{
    user: {
        name,
    }
  });
});

module.exports = router;
