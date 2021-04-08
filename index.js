const inquirer = require("inquirer");
const fs = require("fs");
const generateMd = require("./utils/generateMarkdown");

const questions = [
  "What is your GitHub username?",
  "What is your email address",
  "What is your project's name?",
  "Please write a short description of your project",
  "What kind of license should your project have?",
  "What command should be run to install dependencies?",
  "What command should be run to run tests?",
  "What does the user need to know about using the repo?",
  "What does the user need to know about contributing to the repo?",
];

const [
  username,
  email,
  projectName,
  shortDesc,
  license,
  installCommand,
  testCommand,
  userUse,
  userContribute,
] = questions;

inquirer
  .prompt([
    {
      type: "input",
      message: username,
      name: "username",
    },
    {
      type: "input",
      message: email,
      name: "email",
    },
    {
      type: "input",
      message: projectName,
      name: "projectName",
    },
    {
      type: "input",
      message: shortDesc,
      name: "projectDesc",
    },
    {
      type: "list",
      message: license,
      choices: ["MIT", "APACHE2.0", "GPL3.0", "BSD3", "None"],
      default: "MIT",
      name: "license",
    },
    {
      type: "input",
      message: installCommand,
      default: "npm i",
      name: "installCommand",
    },
    {
      type: "input",
      message: testCommand,
      default: "npm test",
      name: "testCommand",
    },
    {
      type: "input",
      message: userUse,
      name: "userUse",
    },
    {
      type: "input",
      message: userContribute,
      name: "userContribute",
    },
  ])
  .then((response) => {
    const readMeContent = generateMd(response);
    const readMeName = `${response.projectName}.md`;

    fs.writeFile(readMeName, readMeContent, function (err) {
      console.log("Success!");
    });
  });
