const userValidator = require("./user.validator");
const productValidator = require("./product.validator");

module.exports = {
  user: userValidator,
  product: productValidator,
};
