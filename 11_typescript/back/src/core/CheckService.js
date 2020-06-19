const models = require("../models");
const Constants = require("../constants");

class CheckService {
  constructor(user) {
    this.user = user;
  }
  createCheck() {
    return models.Check.create({
      date: new Date(),
      status: Constants.CHECK_STATUS_OPENED,
      operator: this.user.username,
      organizationName: "",
      organizationAddres: "",
      inn: "",
      totalSum: 0,
      userId: this.user.id,
    });
  }

  getCheck(checkId) {
    return models.Check.findByPk(checkId);
  }

  getCheckWithPositions(checkId) {
    return models.Check.findAll({
      where: {
        id: checkId,
      },
      include: ["positions"],
    });
  }
}

module.exports = CheckService;
