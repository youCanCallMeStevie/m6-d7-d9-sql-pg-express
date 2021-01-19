const { apiError } = require("../classes/apiError");
const Model = require("../helpers/model");
const Categories = new Model('categories');

exports.createCategory = async (req, res, next) => {
    try {
        const response = await Categories.save(req.body);
        res.status(201).json({ data: response });
    } catch (error) {
        if(error) throw new apiError()
      }
    };

exports.getCategories = async (req, res, next) => {
    try {
        const response = await Categories.findOne();
        res.status(200).json({ data: response });
    } catch (error) {
        if(error) throw new apiError()
      }
    };

exports.getOneCategory = async (req, res, next) => {
const { categoryId } = req.params;
  try {
    const { rows } = await Articles.findById(categoryId);
    res.status(200).json({ data: rows });
    if (!categoryId) {
        throw new apiError(404, `No category with ${categoryId} found`);
    }
  } catch (error) {
    if (error) throw new apiError();
  }
};



exports.editCategory = async (req, res, next) => {
  const { categoryId } = req.params;
  try {
    const response = await Categories.findByIdAndUpdate(categoryId, req.body);
    res.status(201).json({ data: response });
    if (!categoryId) {
      throw new apiError(404, `No author with ${categoryId} found`);
    }
  } catch (error) {
    if (error) throw new apiError();
  }
};



exports.deleteCategory = async (req, res, next) => {
    const { categoryId } = req.params;
    try {
      const { rows } = await Articles.findByIdAndDelete(categoryId);
      res.status(201).json({ data: deleted });
      if (!categoryId) {
        throw new apiError(404, `No article with ${categoryId} found`);
      }
    } catch (error) {
      if (error) throw new apiError();
    }
  };