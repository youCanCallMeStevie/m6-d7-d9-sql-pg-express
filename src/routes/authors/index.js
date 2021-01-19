const express = require("express");
const router = require("express").Router();
const {
    createAuthor,
    getOneAuthor,
    getAuthors,
    editAuthor,
    deleteAuthor
  } = require("../../controllers/authors");

router.get("/", getAuthors )
router.get("/:authorId", getOneAuthor )
router.post("/", createAuthor )
router.put("/:authorId", editAuthor)
router.delete("/:authorId", deleteAuthor)


module.exports = router;