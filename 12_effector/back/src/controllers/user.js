const bcrypt = require("bcrypt");
const saltRounds = 10;

const yup = require("yup");

const router = require("express").Router();
const User = require("../models").default.User;
const async = require("../middleware/asyncRequest");

router.get("/findAll", (req, res, next) => {
  User.findAll({ attributes: { exclude: ["password"] } })
    .then(res.jsend.success)
    .catch(next);
});

const userSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().min(6).required(),
  address: yup.string(),
});

//user create
router.post(
  "/",
  async(async (req, res) => {
    const newUser = await userSchema.validate(req.body);

    const salt = bcrypt.genSaltSync(saltRounds);
    newUser.password = bcrypt.hashSync(req.newUser.password, salt);

    const user = await User.create(newUser);

    res.jsend.success(
      await User.findOne({
        attributes: { exclude: ["password"] },
        where: { id: user.id },
      })
    );
  })
);

//user update
// router.put("/{:id}", (req, res) => {});

module.exports = router;
