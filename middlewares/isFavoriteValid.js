const { RequestError } = require("../helpers");

const isFavoriteValid = (req, res, next) => {
  if (Object.keys(req.body).length === 0) {
    next(RequestError(400, "missing field favorite"));
  }
  next();
};

module.exports = isFavoriteValid;
