"use strict";
const debug = require("debug")("onceti:db:setup");
const inquirer = require("inquirer");
const chalk = require("chalk");

const prompt = inquirer.createPromptModule();
const setupDataBase = require("./database/database");
const { Developers } = require("./models/developers");
async function setup() {
  //Create answer in the console, run script.
  const answer = await prompt([
    {
      type: "confirm",
      name: "setup",
      message: "This will destroy your data base, are you sure?",
    },
  ]);
  // Asks is I want to run database deletion.
  if (!answer.setup) {
    return console.log("Nothing happened");
  }

  //Control the error with a function.

  const sequelize = setupDataBase();
  await sequelize.authenticate();

  await sequelize.sync({ force: true }).catch(handleFatalError);

  console.log("Success!");
  process.exit(0);
}
function handleFatalError(error) {
  //Set a color for the error.
  console.error(`${chalk.red("[fatal error]")} ${error.message}`);
  console.error(error.stack);
  process.exit(1);
}
setup();
