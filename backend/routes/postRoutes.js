const express = require("express");
const {
  createPost,
  getAllPosts,
  getPostDetails,
} = require("../controllers/postController");
const { isAuthenticatedUser } = require("../middleware/auth");

const router = express.Router();

router.route("/").get(isAuthenticatedUser, getAllPosts);
router.route("/:id").get(isAuthenticatedUser, getPostDetails);
router.route("/new").post(isAuthenticatedUser, createPost);

module.exports = router;
