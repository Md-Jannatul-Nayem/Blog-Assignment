const express = require("express");
const router = express.Router();


const {
    register,
    login,
    list,
  } = require("../controllers/user.js");



// CREATE USER || POST
router.post("/register", register);

//LOGIN || POST
router.post("/login", login);

 // GET ALL USERS || GET
 router.get("/allUsers", list);

module.exports = router;