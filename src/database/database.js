const Sequelize = require("sequelize");
const config = require("../libs/config");

let sequelize = null;
module.exports = function setupDataBase() {
  if (!sequelize) {
    sequelize = new Sequelize({
      database: "developers",
      username: "",
      password: "",
      logging: false,
      dialect: "sqlite",
      storage: "developers.db.sqlite",
      define: {
        underscore: true,
      },
    });
  }
  return sequelize;
};
