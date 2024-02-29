const express = require("express");
const { addComment } = require("../controllers/postController");
const { isAuthenticatedUser } = require("../middleware/auth");

const router = express.Router();

router.route("/:postId").post(isAuthenticatedUser, addComment);

module.exports = router;
