const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncError");
const Comments = require("../models/commentModel");

exports.postComment = async (content, userId) => {
  const newComment = await Comments.create({
    content,
    author: userId,
  });

  return newComment;
};
