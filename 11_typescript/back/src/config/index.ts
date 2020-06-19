require("dotenv").config();

if (!process.env.SECRET) {
  throw new Error("Не указан SECRET в переменных окружения")
}

if (!process.env.PORT) {
  throw new Error("Не указан PORT в переменных окружения")
}

if (!process.env.DB_CONNECTION_STRING) {
  throw new Error("Не указан DB_CONNECTION_STRING в переменных окружения")
}

export default {
  SECRET: process.env.SECRET,
  PORT: Number(process.env.PORT),
  DB_CONNECTION_STRING: process.env.DB_CONNECTION_STRING,
};
