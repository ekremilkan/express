const express = require("express");
const router = express.Router();
const controller = require("../controller/index");
const validator = require("../validation/index");

router.post(
  "/createProduct",
  [validator.product.validateCreate()],
  controller.productController.createProduct
);
router.put("/updateProduct/:id", controller.productController.updateProduct);
router.get("/getAllProducts", controller.productController.getAllProducts);
router.get("/getProductsById/:id", controller.productController.getProductById);
router.get(
  "/getProductByName/:name",
  controller.productController.getProductByName
);
router.get(
  "/getProductsByCategory/:category",
  controller.productController.getProductsByCategory
);
router.get(
  "/getProductsByPrice/:price",
  controller.productController.getProductsByPrice
);
router.get(
  "/getProductsByStock/:stock",
  controller.productController.getProductsByStock
);

module.exports = {
  product: router,
};
