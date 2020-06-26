import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import Config from "../config";
import { AuthError } from "../errors";

import { async } from "../middleware";

import { Router } from "express";
import { User } from "../models";

const router = Router();

//login
router.post(
  "/login",
  async(async (req, res) => {
    const { username, password } = req.body;

    const userCheck = await User.findOne({ where: { username } });
    if (!userCheck || !bcrypt.compareSync(password, userCheck.password)) {
      throw new AuthError("Неверные логин или пароль", 401);
    }

    const user = await User.findOne({
      attributes: { exclude: ["password"] },
      where: { id: userCheck.id! },
    });

    return res.jsend.success({
      user,
      token: jwt.sign({ id: userCheck.id }, Config.SECRET),
    });
  })
);

export default router;
