const { body, query, param } = require("express-validator");

const ProductValidator = {
  validateCreate() {
    return [
      body("name").not().isEmpty().isString(),
      body("description").not().isEmpty().isString(),
      body("description").isLength({ min: 10, max: 1000 }),
      body("price").not().isEmpty().isInt(),
      body("stock").not().isEmpty().isInt(),
      body("category").not().isEmpty().isString(),
    ];
  },
  validateUpdateProduct() {
    return [param("id").not().isEmpty().isMongoId()];
  },
};

module.exports = ProductValidator;
