#! /usr/bin/env node
const inquirer = require("inquirer");
const InterruptedPrompt = require("inquirer-interrupted-prompt");
const variants = require("./index");

InterruptedPrompt.replaceAllDefaults(inquirer);

inquirer
  .prompt([
    /* Pass your questions in here */
    {
      type: "list",
      name: "framework",
      message:
        "Which framework would you like to use? (Press <Enter> to continue or Press <Esc> to cancel)",
      choices: ["Express.js", "Fastify.js"],
    },
    {
      type: "rawlist",
      name: "architecture",
      message:
        "Which architecture/design pattern would you like to use? (Press <Enter> to continue or Press <Esc> to cancel)",
      choices: ["Mvc style", "Three Layered Architecture"],
    },
    {
      type: "rawlist",
      name: "template",
      message:
        "Which template would you like to use? (Press <Enter> to continue or Press <Esc> to cancel",
      choices: [
        "Web App · Extensible project with auth, login, & password recovery",
        "Empty . An empty app, yours to configure",
      ],
    },
    {
      type: "rawlist",
      name: "database",
      message:
        "Which database would you like to use? (Press <Enter> to continue or Press <Esc> to cancel)",
      choices: ["none", "mongodb", "mysql", "postgresql"],
    },
    {
      type: "rawlist",
      name: "database-adapter",
      message:
        "Which orm/query builder would you like to use? (Press <Enter> to continue or Press <Esc> to cancel)",
      choices: ["none", "sequelize", "knex.js", "none"],
    },
    {
      type: "rawlist",
      name: "validators",
      message:
        "Which orm/query builder would you like to use? (Press <Enter> to continue or Press <Esc> to cancel)",
      choices: ["none", "sequelize", "knex.js", "none"],
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers);
    switch (answers.architecture) {
      case "Mvc style":
        variants.createMvcStyle();
        break;
      case "Three Layered Architecture":
        variants.createThreeLayeredArchitecture();
        break;
      default:
        console.log("No such option exist");
    }
  })
  .catch((error) => {
    if (error === InterruptedPrompt.EVENT_INTERRUPTED) {
      console.log("Generation is cancelled");
    }

    // console.log(error, "error");
  });
