const Blog = require("../models/blog.js");


// Create Blog
exports.create =async(req,res)=>{
    try {
        const { title, content, author, date, user } = req.body;
        if (!title || !content || !author || !date) {
            return res.status(400).send({
              success: false,
              message: "Please Provide ALL Fields",
            });
          }
          const existingBlog = await Blog.findOne({title});
    if (existingBlog) {
      return res.json({ error: "Already exists" });
    }
          const blog = await new Blog({ title, content, author, date, user}).save();
         res.json(blog);

    } catch (error) {
        console.log(error);
    return res.status(400).json(error);
    }
};

exports.read = async(req,res)=>{

    try {
        const {blogId}=req.params
        const blog = await Blog.findById(blogId)
        if(!blog) {
          return res.status(400).send({
            success: false,
            message: "blog not found",
          })
        }
        res.json(blog)
    } catch (error) {
    console.log(error);
    return res.status(400).json(error);
    }
}

exports.update =async (req,res)=>{
  try {
  const {blogId}=req.params
  const { title, content } = req.body //want to change title and content, author and date should be fixed.

  switch(true)
  {
    case !title.trim():
        res.json({ error: "Title is required" });
      case !content.trim():
        res.json({ error: "Content is required" });

  }
  const blog = await Blog.findByIdAndUpdate(
    blogId,
    { 
      title: title || blog.title,
      content: content || blog.content,
    },
    { new: true }
  );
  res.json(blog)

  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
}
  
exports.remove = async(req, res)=>{
  try {
    const removed = await Blog.findByIdAndDelete(req.params.blogId);
    res.json(removed)
  } catch (err) {
    console.log(err);
    return res.status(400).json(err.message);;
  }
}