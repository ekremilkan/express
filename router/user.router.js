const router = require("express").Router();
const controller = require("../controller/index");
const validator = require("../validation/index");

router.post(
  "/register",
  [validator.user.validateRegister()],
  controller.userController.register
);
router.get("/getAllUsers", controller.userController.getAllUsers);
router.post("/login", controller.userController.login);
router.put("/resetPassword", controller.userController.resetPassword);
router.get("/getUserById/:id", controller.userController.getUserById);
router.put("/updateUser/:id", controller.userController.updateUser);
router.put(
  "/updateProfilePhoto/:id",
  controller.userController.updateProfilePhoto
);

module.exports = {
  user: router,
};
