const router = require("express").Router();
const yup = require("yup");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const async = require("../middleware/asyncRequest");
const models = require("../models");

router.get("/findAll", (req, res, next) => {
  models.User.findAll({ attributes: { exclude: "password" } })
    .then(res.jsend.success)
    .catch(next);
});

const userSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
  address: yup.string().required(),
});

//user create
router.post(
  "/",
  async(async (req, res) => {
    const newUser = await userSchema.validate(req.body);

    const salt = bcrypt.genSaltSync(saltRounds);
    newUser.password = bcrypt.hashSync(newUser.password, salt);

    return res.jsend.success(await models.User.create(newUser));
  })
);

//user update
// router.put("/{:id}", (req, res) => {});

module.exports = router;
