const ApiError = require("../classes/apiError");
const Model = require("../helpers/model");
const Articles = new Model("articles");
const { query } = require("../helpers/db");

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
    if (Object.entries(req.query).length === 0) {
      const response = await Articles.findOne();
      res.status(200).json({ data: response });
      console.log("req.query 1", req.query);
    } else {
      const response = await Articles.findOne(req.query);
      if (response.rowCount === 0) {
            throw new ApiError(
              404,
              `No articles with ${Object.keys(req.query)} like ${Object.values(
                req.query
              )} found`
            );
          } else {
            res.status(200).json({ data: response });
          }
        }

      //   console.log("req.query 2", req.query);
      //   const response = await query(
      //     `SELECT * FROM articles WHERE ${Object.keys(
      //       req.query
      //     )} LIKE '${Object.values(req.query)}'`
      //   );
      //   if (response.rowCount === 0) {
      //     throw new ApiError(
      //       404,
      //       `No articles with ${Object.keys(req.query)} like ${Object.values(
      //         req.query
      //       )} found`
      //     );
      //   } else {
      //     res.status(200).json({ data: response });
      //   }
      // }
    } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.getAuthorCategories = async (req, res, next) => {
  try {
    const response = await query(
      "SELECT c.name AS category, a.author_id, w.name, w.lastname FROM articles AS a  LEFT JOIN  categories AS c ON c.category_id=a.category_id INNER JOIN authors AS w ON w.author_id=a.author_id"
    );
    if (response.rowCount === 0) {
      throw new ApiError(404, `No articles are found`);
    } else {
      res.status(200).json({ data: response.rows[0] });
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};




exports.getNumberOfClaps = async (req, res, next) => {
  try {
    const response = await query(
      "SELECT a.article_id, a.headline, SUM (r.rate) AS claps FROM reviews AS r INNER JOIN articles AS a ON a.article_id = r.article_id GROUP BY a.article_id"
      );
    if (response.rowCount === 0) {
      throw new ApiError(404, `No articles with claps found`);
    } else {
      res.status(200).json({ data: response.rows[0] });
    }
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
