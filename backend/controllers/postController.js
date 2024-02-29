const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncError");
const Posts = require("../models/postModel");
const { postComment } = require("./commentController");

exports.createPost = catchAsyncErrors(async (req, res, next) => {
  const { title, content } = req.body;

  if (!title) {
    return next(ErrorHandler("Please enter your title of post", 400));
  }

  if (!content) {
    return next(ErrorHandler("Please enter your title of post", 400));
  }

  const newPost = await Posts.create({
    title,
    content,
    author: req.user.id,
    comments: [],
  });

  res.status(200).json({
    success: true,
    newPost,
  });
});

exports.getAllPosts = catchAsyncErrors(async (req, res, next) => {
  const posts = await Posts.find()
    .populate({
      path: "author",
      select: "fullName", // select the fields you want from the User collection
    })
    .populate({
      path: "comments",
      populate: {
        path: "author",
        select: "fullName", // select the fields you want from the User collection
      },
    });

  res.status(200).json({
    success: true,
    posts,
  });
});

exports.getPostDetails = catchAsyncErrors(async (req, res, next) => {
  const posts = await Posts.findById(req.params.id)
    .populate({
      path: "author",
      select: "fullName", // select the fields you want from the User collection
    })
    .populate({
      path: "comments",
      populate: {
        path: "author",
        select: "fullName", // select the fields you want from the User collection
      },
    });

  res.status(200).json({
    success: true,
    posts,
  });
});

exports.addComment = catchAsyncErrors(async (req, res, next) => {
  const foundPost = await Posts.findById(req.params.postId);
  const userId = req.user.id;
  const { content } = req.body;

  if (!foundPost) {
    return next(new ErrorHandler("Post not found", 404));
  }
  const newComment = await postComment(content, userId);

  await foundPost.updateOne({
    $push: { comments: newComment._id },
  });

  res.status(200).json({
    success: true,
    newComment,
  });
});
