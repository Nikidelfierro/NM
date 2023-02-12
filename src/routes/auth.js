const { Router } = require ("express");
const router = Router();

const { sendSignupForm, getSignupData, sendSigninForm, getSigninData } = require("../controllers/authControllers");





router.get("/signup", sendSignupForm );

router.post("/signup", getSignupData);

router.get("/signin", sendSigninForm);

router.post("/signin", getSigninData);


module.exports = router;