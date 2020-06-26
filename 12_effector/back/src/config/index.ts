require("dotenv").config();

if (!process.env.SECRET) {
  throw new Error("Нет переменной окружения SECRET");
}

if (!process.env.PORT) {
  throw new Error("Нет переменной окружения PORT");
}

if (!process.env.DB_CONNECTION_STRING) {
  throw new Error("Нет переменной окружения DB_CONNECTION_STRING");
}

export default {
  SECRET: process.env.SECRET,
  PORT: Number(process.env.PORT),
  DB_CONNECTION_STRING: process.env.DB_CONNECTION_STRING,
};
