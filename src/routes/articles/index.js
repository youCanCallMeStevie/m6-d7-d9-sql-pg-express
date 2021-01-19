const express = require("express");
const router = require("express").Router();
const {
    createArticle,
    getOneArticle,
    getArticles,
    editArticle,
    deleteArticle
  } = require("../../controllers/articles");

