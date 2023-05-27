const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema.Types

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: [true, "title is required"],
    },
    content: {
      type: String,
      required: [true, "content is require"],
    },
    author: {
      type: String,
      required: [true, "content is require"],
    },
    user:{
      type: ObjectId,
      required: true,
      ref: "user"
  },
    date: {
        type: String,
        required: true
    },
  },
  { versionKey: false }
);

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;