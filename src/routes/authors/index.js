const router = require("express").Router();
const {
    createAuthor,
    getOneAuthor,
    getAuthors,
    editAuthor,
    deleteAuthor
  } = require("../../controllers/authors");