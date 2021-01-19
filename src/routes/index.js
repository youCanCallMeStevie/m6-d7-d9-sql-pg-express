
const router = require("express").Router();

const authorRouter = require("./authors")
const categoryRouter = require("./categories")
const articleRouter = require("./articles")
const reviewRouter = require("./reviews")

 

router.use("/authors", authorRouter)
router.use("/categories",categoryRouter)
router.use("/reviews",reviewRouter)


module.exports = router