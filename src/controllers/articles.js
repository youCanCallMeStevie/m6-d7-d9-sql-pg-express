const ApiError = require("../classes/apiError");
const Model = require("../helpers/model");
const Articles = new Model("articles");
const {query} = require("../helpers/db")

exports.createArticle = async (req, res, next) => {
  try {
    const response = await Articles.save(req.body);
    res.status(201).json({ data: "Your article has been created" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.getArticles = async (req, res, next) => {
  try {
    // const response = await Articles.findOne();
const response = await query("SELECT c.name AS category, a.author_id, w.name, w.lastname FROM articles AS a  LEFT JOIN  categories AS c ON c.category_id=a.category_id INNER JOIN authors AS w ON w.author_id=a.author_id")
    res.status(200).json({ data: response });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.getOneArticle = async (req, res, next) => {
  const { articleId } = req.params;
  try {
    const response = await Articles.findById(articleId);
    if (response.rowCount === 0) {
      throw new ApiError(404, `No article with ${articleId} found`);
    } else {
      res.status(200).json({ data: response.rows[0] });
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.editArticle = async (req, res, next) => {
  const { articleId } = req.params;
  try {
    const response = await Articles.findByIdAndUpdate(articleId, req.body);
    if (response.rowCount === 0) {
      throw new ApiError(404, `No article with ${articleId} found`);
    } else {
      res.status(200).json({ data: Updated });
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.deleteArticle = async (req, res, next) => {
  const { articleId } = req.params;
  try {
    const response = await Articles.findByIdAndDelete(articleId);
    if (response.rowCount === 0) {
      throw new ApiError(404, `No article with ${articleId} found`);
    } else {
      res.status(200).json({ data: Deleted });
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};
