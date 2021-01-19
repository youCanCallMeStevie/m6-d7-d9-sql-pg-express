const express = require("express");
const router = require("express").Router();
const {
    createReview,
    getOneReview,
    getReviews,
    editReview,
    deleteReview
  } = require("../../controllers/reviews");

router.get("/", getReviews )
router.get("/:reviewId", getOneReview )
router.post("/", createReview )
router.put("/:reviewId", editReview)
router.delete("/:reviewId", deleteReview)


module.exports = router;