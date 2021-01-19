const express = require("express");
const router = require("express").Router();
const {
    createCategory,
    getOneCategory,
    getCategories,
    editCategory,
    deleteCategory
  } = require("../../controllers/categories");