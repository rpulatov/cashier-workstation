const models = require("../models");
// const Constants = require("../constants");

class GoodsService {

  getGoods(goodsUid) {
    return models.Goods.findByPk(goodsUid);
  }
}

module.exports = GoodsService;
