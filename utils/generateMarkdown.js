// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  
 ${data.desc}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [How to contribute](#How to Contribute)
  - [Tests](#Tests)
  - [Questions](#Questions)
  
  ## Installation
  
 ${data.instal}
  
  ## Usage
  
  ${data.usage}
  
  ## License
  

  
  ## How to Contribute
  
${data.contribute}

  
  ## Tests
  
 ${data.test}

 ## Questions

 please <a href="mailto:${data.Email}">email me</a> about any questions regarding this project.


`;
}

module.exports = generateMarkdown;
