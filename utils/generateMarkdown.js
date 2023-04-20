// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "None" || license == "Other") {
    return "";
  } else {
    return `<img src= 'https://img.shields.io/badge/License-${license}-blue'>`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "None") {
    return "";
  } else {
    return "- [License](#license)";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == "None") {
    return "";
  } else if (license == "Other") {
    return `## License
*Please enter license here*`;
  } else {
    return `## License 
I used the ${license} license for this project. `;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  
 ${data.desc}
 
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [How to contribute](#How)
  - [Tests](#Tests)
  - [Questions](#Questions)
  ${renderLicenseLink(data.license)}

  ## Installation
  
 ${data.instal}
  
  ## Usage
  
  ${data.usage}

  ## How to Contribute
  
${data.contribute}

  
  ## Tests
  
 ${data.test}

 ## Questions

 Here is the link to my Github profile https://github.com/${data.github}

 please <a href="mailto:${
   data.Email
 }">email me</a> about any questions regarding this project. Please Inform me of which repository you are referring to and I can get back to you as soon as possible.

 ${renderLicenseSection(data.license)}
 
`;
}

module.exports = generateMarkdown;
