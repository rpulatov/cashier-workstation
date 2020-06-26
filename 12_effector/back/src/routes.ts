import { Router } from "express";

// import withAuth from "./middleware/auth";

import auth from "./controllers/auth";
// import user from "./controllers/user";
// import goods from "./controllers/goods";
// import check from "./controllers/check";
// import checkPosition from "./controllers/checkPosition";

const router = Router();

router.use("/auth", auth);
// router.use("/user", withAuth, user);
// router.use("/goods", withAuth, goods);
// router.use("/check", withAuth, check);
// router.use("/checkPosition", withAuth, checkPosition);

router.all("*", (req, res, next) => {
  res.status(404).send("Not found");
});

export default router;
