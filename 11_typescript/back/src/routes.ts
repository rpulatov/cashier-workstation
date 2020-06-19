import { Router } from "express"

import { withAuth } from "./middleware"

import auth from "./controllers/auth"
import goods from './controllers/goods'

const router = Router()

// const auth = require("./controllers/auth");
// const user = require("./controllers/user");
// const goods = require("./controllers/goods");
// const check = require("./controllers/check");
// const checkPosition = require("./controllers/checkPosition");

router.use("/auth", auth)
// router.use("/user", withAuth, user);
router.use("/goods", withAuth, goods)
// router.use("/check", withAuth, check);
// router.use("/checkPosition", withAuth, checkPosition);

router.all("*", (req, res, next) => {
  res.status(404).send("Not found")
})

export default router
