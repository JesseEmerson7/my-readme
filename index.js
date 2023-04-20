// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMD = require("./utils/generateMarkdown");
const fs = require("fs");

// TODO: Create an array of questions for user input

// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
// ```
//Apache,
// MIT,
// BSD and
// Unlicense.
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
  });
}

// TODO: Create a function to initialize app
function init() {
  console.log(generateMD);
  inquirer.prompt(questions).then((data) => {
    const generatedMD = generateMD(data);
    writeToFile("README.md", generatedMD);
  });
}

// Function call to initialize app
init();
