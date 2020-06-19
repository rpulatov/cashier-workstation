const async = require("../middleware/asyncRequest");

const router = require("express").Router();
const models = require("../models");
const Constants = require("../constants");
const CheckService = require("../core/CheckService");
const GoodsService = require("../core/GoodsService");

const { ValidationError } = require("yup");

//создать новую позицию чека
router.post(
  "/",
  async(async (req, res) => {
    let { checkId, goodsUid } = req.body;

    const checkService = new CheckService(req.user);
    if (!checkId || !(await checkService.getCheck(checkId))) {
      const check = await checkService.createCheck();
      checkId = check.id;
    }

    console.info({ goodsUid })

    const goods = await new GoodsService().getGoods(goodsUid);
    if (!goods) {
      throw new ValidationError("Такой товар не существует", null, "goodsUid");
    }

    const checkPosition = await models.CheckPosition.create({
      checkId,
      goodsUid: goods.uid,
      name: goods.name,
      sum: goods.price,
      price: goods.price,
      quantity: 1,
    });
    return res.jsend.success(checkPosition);
  })
);

//добавить позицию
//удалить позицию
//закрыть чек

module.exports = router;
