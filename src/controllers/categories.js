const ApiError = require("../classes/apiError");
const Model = require("../helpers/model");
const Categories = new Model("categories");

exports.createCategory = async (req, res, next) => {
  try {
    const response = await Categories.save(req.body);
    res.status(201).json({ data: "New Category added!" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.getCategories = async (req, res, next) => {
  try {
    const response = await Categories.findOne();
    res.status(200).json({ data: response });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.getOneCategory = async (req, res, next) => {
  const { categoryId } = req.params;
  try {
    const response = await Categories.findById(categoryId);
    if (response.rowCount === 0) {
      throw new ApiError(404, `No category with ${categoryId} found`);
    } else {
      res.status(200).json({ data: response.rows[0] });
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.editCategory = async (req, res, next) => {
  const { categoryId } = req.params;
  try {
    const response = await Categories.findByIdAndUpdate(categoryId, req.body);
    if (response.rowCount === 0) {
      throw new ApiError(404, `No category with ${categoryId} found`);
    } else {
      res.status(200).json({ data: Updated });
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.deleteCategory = async (req, res, next) => {
  const { categoryId } = req.params;
  try {
    const response = await Categories.findByIdAndDelete(categoryId);
    if (response.rowCount === 0) {
      throw new ApiError(404, `No category with ${categoryId} found`);
    } else {
      res.status(200).json({ data: deleted });
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};
