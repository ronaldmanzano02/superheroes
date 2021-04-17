require("dotenv").config();

let { DB_USER, DB_PASS, DB_HOST, DB_PORT, DB_NAME } = process.env;

module.exports = {
  development: {
    url: `postgres://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
    dialect: "postgres",
  },
};
