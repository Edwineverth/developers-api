const Sequelize = require("sequelize");
const setupDataBase = require("../database/database");

const sequelize = setupDataBase();
const Developers = sequelize.define(
  "developers",
  {
    nombres_completos: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
      unique: true,
    },
    link_github: {
      type: Sequelize.STRING,
      allowNull: false,
      notEmpty: true,
    },
    tecnologias_conocidas: {
      type: Sequelize.JSON,
    },
  },
  {
    timestamps: false,
  }
);

export default Developers;
