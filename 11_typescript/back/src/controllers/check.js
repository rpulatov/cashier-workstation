// const async = require("../middleware/asyncRequest");

const router = require("express").Router();
// const models = require("../models");
const CheckService = require("../core/CheckService");

// const yup = require("yup");

//создать новый чек
router.post("/", (req, res, next) => {
  return new CheckService(res.user).createCheck().then(res.jsend.success).catch(next);
});

router.get("/:checkId(\\d+)", (req, res, next) => {
  return new CheckService(res.user)
    .getCheckWithPositions(req.params.checkId)
    .then(res.jsend.success)
    .catch(next);
});

//добавить позицию
//удалить позицию
//закрыть чек

module.exports = router;
