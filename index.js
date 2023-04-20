// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMD = require("./utils/generateMarkdown");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "what is a good description of your project?",
    name: "desc",
  },
  {
    type: "input",
    message: "Please give installation instructions for your project",
    name: "instal",
  },
  {
    type: "input",
    message: "Please give instructions on how to use this project",
    name: "usage",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "Email",
  },
  {
    type: "input",
    message: "What is your Github username?",
    name: "github",
  },
  {
    type: "input",
    message: "What are some contribution guidelines for this project?",
    name: "contribute",
  },
  {
    type: "input",
    message: "How would someone test this project?",
    name: "test",
  },
  {
    type: "list",
    message: "What license are you using fo this project?",
    choices: ["MIT", "Apache", "BSD", "Unlicense", "Other", "None"],
    name: "license",
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    else{console.log('Success! Your README.md file has been created')};
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    const generatedMD = generateMD(data);
    writeToFile("README.md", generatedMD);
  });
}

// Function call to initialize app
init();
