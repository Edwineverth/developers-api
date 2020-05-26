const Sequelize = require("sequelize");
const config = require("../libs/config");

let sequelize = null;
module.exports = function setupDataBase() {
  if (!sequelize) {
    sequelize = new Sequelize({
      database: config.database,
      username: config.username,
      password: config.password,
      logging: config.logging,
      dialect: "sqlite",
      storage: "developers.db.sqlite",
      define: {
        underscore: true,
      },
    });
  }
  return sequelize;
};
