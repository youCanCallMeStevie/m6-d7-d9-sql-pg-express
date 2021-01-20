const ApiError = require("../classes/apiError");
const Model = require("../helpers/model");
const Users = new Model("users");

exports.createUser = async (req, res, next) => {
  try {
    const response = await Users.save(req.body);
    res.status(201).json({ data: "User created" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.getUsers = async (req, res, next) => {
  try {
    const response = await Users.findOne();
    res.status(200).json({ data: response });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.getOneUser = async (req, res, next) => {
  const { UserId } = req.params;
  try {
    const response = await Users.findById(UserId);
    if (response.rowCount === 0) {
      throw new ApiError(404, `No User with ID ${UserId} found`);
    } else {
      res.status(200).json({ data: response.rows[0] });
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.editUser = async (req, res, next) => {
  const { UserId } = req.params;
  try {
    const response = await Users.findByIdAndUpdate(UserId, req.body);
    if (response.rowCount === 0) {
      throw new ApiError(404, `No User with ID ${UserId} found`);
    } else {
      res.status(201).json({ data: Updated });
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.deleteUser = async (req, res, next) => {
  const { UserId } = req.params;
  try {
    const response = await Users.findByIdAndDelete(UserId);
    if (response.rowCount === 0) {
      throw new ApiError(404, `No User with ID ${UserId} found`);
    } else {
      res.status(201).json({ data: deleted });
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};
