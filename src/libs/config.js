// module.exports = {
//   database: "developers",
//   username: "",
//   password: "",
//   logging: false,
//   params: {
//     dialect: "sqlite",
//     storage: "developers.db.sqlite",
//     define: {
//       underscore: true,
//     },
//   },
// };

require("dotenv").config();
const config = {
  dev: process.env.NODE_ENV !== "production",
  port: process.env.PORT || 3000,
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  logging: process.env.DB_LOGGING,
  dialect: process.env.DB_DIALECT,
  storage: process.env.DB_STORAGE,
  define: {
    underscore: true,
  },
};

module.exports = { config };
