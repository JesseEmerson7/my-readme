// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return "MIT license link: https://opensource.org/license/mit/";
      break;

    case "Apache":
      return "Apache license link: https://opensource.org/license/apache-2-0/";
      break;

    case "BSD":
      return "BSD license link: https://opensource.org/license/bsd-1-clause/";
      break;

    case "Unlicense":
      return "Unlicense license link: https://opensource.org/license/unlicense/";
      break;

    case "Other":
      return "";
      break;

      case 'None':
        return '';
        break;
  }
  return license;
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == "None") {
    return "";
  } else {
    return "## License";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  
 ${data.desc}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [How to contribute](#How)
  - [Tests](#Tests)
  - [Questions](#Questions)
  
  ## Installation
  
 ${data.instal}
  
  ## Usage
  
  ${data.usage}

  ${renderLicenseSection(data.license)}

${renderLicenseLink(data.license)}

  ## How to Contribute
  
${data.contribute}

  
  ## Tests
  
 ${data.test}

 ## Questions

 please <a href="mailto:${
   data.Email
 }">email me</a> about any questions regarding this project.


`;
}

module.exports = generateMarkdown;
