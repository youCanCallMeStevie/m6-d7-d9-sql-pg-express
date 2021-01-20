const ApiError = require("../classes/apiError");
const Model = require("../helpers/model");
const Authors = new Model("authors");

exports.createAuthor = async (req, res, next) => {
  try {
    const response = await Authors.save(req.body);
    res.status(201).json({ data: response });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.getAuthors = async (req, res, next) => {
  try {
    const response = await Authors.findOne();
    res.status(200).json({ data: response });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.getOneAuthor = async (req, res, next) => {
  const { authorId } = req.params;
  try {
    const response = await Authors.findById(authorId);
    if (response.rowCount === 0) {
      throw new ApiError(404, `No author with ID ${authorId} found`);
    } else {
      res.status(200).json({ data: response.rows[0] });
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.editAuthor = async (req, res, next) => {
  const { authorId } = req.params;
  try {
    const response = await Authors.findByIdAndUpdate(authorId, req.body);
    if (response.rowCount === 0) {
      throw new ApiError(404, `No author with ID ${authorId} found`);
    } else {
      res.status(201).json({ data: response.rows[0] });
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.deleteAuthor = async (req, res, next) => {
  const { authorId } = req.params;
  try {
    const response = await Authors.findByIdAndDelete(authorId);
    if (response.rowCount === 0) {
      throw new ApiError(404, `No author with ID ${authorId} found`);
    } else {
      res.status(201).json({ data: deleted });
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};
