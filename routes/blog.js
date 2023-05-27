const express =require("express");

const router = express.Router();


// middlewares
const { requireSignin, isAdmin }= require ("../middlewares/auth.js");


// controllers
const {create, read, update, remove} = require ("../controllers/blog.js")


//POST || create blog
router.post("/createBlog", requireSignin, create);

//GET || Read Single Blog Details
router.get("/getBlog/:blogId", read);

//PUT || update blog
router.put("/updateBlog/:blogId",requireSignin, update);

//DELETE || delete blog
router.delete("/deleteBlog/:blogId", requireSignin, isAdmin, remove);

module.exports = router;