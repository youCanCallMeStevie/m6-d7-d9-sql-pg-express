const express = require("express");
const router = require("express").Router();
const {
  createArticle,
  getOneArticle,
  getArticles,
  editArticle,
  deleteArticle,
} = require("../../controllers/articles");

router.get("/", getArticles);
router.get("/:articleId", getOneArticle);
router.post("/", createArticle);
router.put("/:articleId", editArticle);
router.delete("/:articleId", deleteArticle);

module.exports = router;
