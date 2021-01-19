const { apiError } = require("../classes/apiError");
const Model = require("../helpers/model");
const Articles = new Model("articles");

exports.createArticle = async (req, res, next) => {
  try {
    const response = await Articles.save(req.body);
    res.status(201).json({ data: response });
  } catch (error) {
    console.log(error);
  }
};

exports.getArticles = async (req, res, next) => {
  try {
    const response = await Articles.findOne();
    res.status(200).json({ data: response });
  } catch (error) {
    if (error) throw new apiError();
  }
};

exports.getOneArticle = async (req, res, next) => {
  const { articleId } = req.params;
  try {
    const { rows } = await Articles.findById(articleId);
    res.status(200).json({ data: rows });
    if (!articleId) {
      throw new apiError(404, `No article with ${articleId} found`);
    }
  } catch (error) {
    if (error) throw new apiError();
  }
};

exports.editArticle = async (req, res, next) => {
    const { articleId } = req.params;
    try {
      const response = await Articles.findByIdAndUpdate(articleId, req.body);
      res.status(201).json({ data: response });
      if (!articleId) {
        throw new apiError(404, `No article with ${articleId} found`);
    }
    } catch (error) {
      if (error) throw new apiError();
    }
  };



exports.deleteArticle = async (req, res, next) => {
    const { articleId } = req.params;
    try {
      const { rows } = await Articles.findByIdAndDelete(articleId);
      res.status(201).json({ data: deleted });
      if (!articleId) {
        throw new apiError(404, `No article with ${articleId} found`);
      }
    } catch (error) {
      if (error) throw new apiError();
    }
  };
