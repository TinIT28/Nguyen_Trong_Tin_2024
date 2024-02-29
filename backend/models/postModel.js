const mongoose = require("mongoose");

const postsSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter the title of post"],
    },
    content: {
      type: String,
      required: [true, "Please enter content of post"],
    },
    author: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
    comments: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Comment", // assuming "Comment" is the name of your Comment model
        default: [],
      },
    ],
  },
  {
    timestamps: true, // This option adds 'createdAt' and 'updatedAt' automatically
  }
);

module.exports = mongoose.model("Posts", postsSchema);
