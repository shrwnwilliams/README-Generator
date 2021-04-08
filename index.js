// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");
const generateMd = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
  "What is your GitHub username?",
  "What is your email address",
  "What is your project's name?",
  "Please write a short description of your project",
  "What kind of license should your project have?",
  "What command should be run to install dependencies?",
  "What command should be run to run tests?",
  "What does the user need to know about using the repo?",
  "What does the user need to know about contributing to the repo?"
];

const [ username, email, projectName, shortDesc, license, installCommand, testCommand, userUse, userContribute] = questions

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}



// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();


inquirer
  .prompt([
    {
      type: 'input',
      message: username,
      name: 'username',
    },
    {
      type: 'input',
      message: email,
      name: 'email',
    },
    {
      type: 'input',
      message: projectName,
      name: 'projectName',
    },
    {
      type: 'input',
      message: shortDesc,
      name: 'projectDesc',
    },
    {
      type: 'list',
      message: license,
      choices: ["MIT", "APACHE2.0", "GPL3.0", "BSD3", "None"],
      default: "MIT",
      name: 'license',
    },
    {
      type: 'input',
      message: installCommand,
      default: "npm i",
      name: 'installCommand',
    },
    {
      type: 'input',
      message: testCommand,
      default: "npm test",
      name: 'testCommand',
    },
    {
      type: 'input',
      message: userUse,
      name: 'userUse',
    },
    {
      type: 'input',
      message: userContribute,
      name: 'userContribute',
    }
  ])
  .then((response) =>{
    console.log(response);
    const readMeContent = generateMd(response)
  
    fs.writeFile('README2.md', readMeContent, function(err) {
    console.log('Success!');
  })
})
