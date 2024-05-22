const express = require("express");
const app = express();
const router = require("./router/index");
const db = require("./db/dbConnect");
const configs = require("./configs/index");
const consts = require("./consts/index");
const middleware = require("./middleware/index");
app.use(express.json());
configs.serverConfig.initialServerConfig();
const port = process.env.PORT;

// localhost:3000/api/v1/
// app.use(middleware.authMiddleware);
app.use(`${process.env.APP_PREFIX}${consts.router.USER}`, router.user);
app.use(`${process.env.APP_PREFIX}${consts.router.PRODUCT}`, router.product);
app.use(`${process.env.APP_PREFIX}${consts.router.CART}`, router.cart);
app.use("/product", router.product);

db.mongooseConnect().then(() => {
  console.log("DB connected");
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    console.log(`http://localhost:${port}`);
    console.log("CTRL + C to stop the server");
  });
});
