const { apiError } = require("../classes/apiError");
const Model = require("../helpers/model");
const Reviews = new Model("reviews");

exports.createReview = async (req, res, next) => {
  try {
    const response = await Reviews.save(req.body);
    res.status(201).json({ data: response });
  } catch (error) {
    if (error) throw new apiError();
    next();
  }
};

exports.getReviews = async (req, res, next) => {
  try {
    const response = await Reviews.findOne();
    res.status(200).json({ data: response });
  } catch (error) {
    if (error) throw new apiError();
    next();
  }
};

exports.getOneReview = async (req, res, next) => {
  const { reviewId } = req.params;
  try {
    const { rows } = await Reviews.findById(reviewId);
    res.status(200).json({ data: rows });
    if (!reviewId) {
      throw new apiError(404, `No review with ${reviewId} found`);
    }
  } catch (error) {
    if (error) throw new apiError();
    next();
  }
};

exports.editReview = async (req, res, next) => {
  const { reviewId } = req.params;
  try {
    const response = await Reviews.findByIdAndUpdate(reviewId, req.body);
    res.status(201).json({ data: response });
    if (!reviewId) {
      throw new apiError(404, `No author with ${reviewId} found`);
    }
  } catch (error) {
    if (error) throw new apiError();
    next();
  }
};

exports.deleteReview = async (req, res, next) => {
  const { reviewId } = req.params;
  try {
    const { rows } = await Reviews.findByIdAndDelete(reviewId);
    res.status(201).json({ data: deleted });
    if (!reviewId) {
      throw new apiError(404, `No review with ${reviewId} found`);
    }
  } catch (error) {
    if (error) throw new apiError();
    next();
  }
};
