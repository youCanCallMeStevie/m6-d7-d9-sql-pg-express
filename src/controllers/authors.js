const { apiError } = require("../classes/apiError");
const Model = require("../helpers/model");
const Authors = new Model("authors");

exports.createAuthor = async (req, res, next) => {
  try {
    const response = await Authors.save(req.body);
    res.status(201).json({ data: response });
  } catch (error) {
    if (error) throw new apiError();
  }
};

exports.getAuthors = async (req, res, next) => {
  try {
    const response = await Authors.findOne();
    res.json({ data: response });
  } catch (error) {
    if (error) throw new apiError();
  }
};

exports.getOneAuthor = async (req, res, next) => {
  const { authorId } = req.params;
  try {
    const { rows } = await Authors.findById(authorId);
    res.status(200).json({ data: rows });
    if (!authorId) {
      throw new apiError(404, `No author with ${authorId} found`);
    }
  } catch (error) {
    if (error) throw new apiError();
  }
};

exports.editAuthor = async (req, res, next) => {
  const { authorId } = req.params;
  try {
    const response = await Authors.findByIdAndUpdate(authorId, req.body);
    res.status(201).json({ data: response });
    if (!authorId) {
      throw new apiError(404, `No author with ${authorId} found`);
    }
  } catch (error) {
    if (error) throw new apiError();
  }
};

exports.deleteAuthor = async (req, res, next) => {
  const { authorId } = req.params;
  try {
    const { rows } = await Articles.findByIdAndDelete(authorId);
    res.status(201).json({ data: deleted });
    if (!authorId) {
      throw new apiError(404, `No article with ${authorId} found`);
    }
  } catch (error) {
    if (error) throw new apiError();
  }
};
