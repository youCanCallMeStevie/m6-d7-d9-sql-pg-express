const router = require("express").Router();

const authorRouter = require("./authors");
const categoryRouter = require("./categories");
const articleRouter = require("./articles");
const reviewRouter = require("./reviews");
const userRouter = require("./users");


router.use("/authors", authorRouter);
router.use("/categories", categoryRouter);
router.use("/articles", articleRouter);
router.use("/reviews", reviewRouter);
router.use("/users", userRouter);


module.exports = router;
