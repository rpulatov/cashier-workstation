const { AuthError } = require("../errors");
const { ValidationError } = require("yup");

const getErrorMessage = (code) => {
  switch (code) {
    case 401:
      return "Неверные учётные данные";
    case 403:
      return "Доступ запрещен";
    case 404:
      return "Ресурс не найден";
    case 500:
      return "Сервис временно недоступен";
    default:
      return "Сервис временно недоступен";
  }
};

module.exports = (err, req, res, next) => {
  console.info(err);
  if (err) {
    // if (process.env.NODE_ENV !== "production") {
    //   return res.send(err);
    // }
    if (err instanceof ValidationError) {
      const { path, message } = err;
      return res.jsend.fail({ path, message });
    } else if (err instanceof AuthError) {
      return res.jsend.error({
        code: err.code,
        message: getErrorMessage(err.code),
      });
    }
  }

  return res.jsend.error({ code: 500, message: getErrorMessage(500) });
};
