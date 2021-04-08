function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![License Badge](https://img.shields.io/badge/license-${license}-brightgreen)`;
  }
  return "";
}

function renderLicenseLink(license) {
  if (license !== "None") {
    return `1. [License](#license)`;
  }
  return "";
}

function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License
  
    This project is protected under the ${license} license.\r\n`;
  }
  return "";
}

function generateMarkdown(response) {
  return `# ${response.projectName} 
${renderLicenseBadge(response.license)}

  ## Table of Contents
  1. [Description](#description)
  1. [Installation](#installation)
  1. [Usage](#usage)
  ${renderLicenseLink(response.license)}
  1. [Contributing](#contributing)
  1. [Tests](#tests)
  1. [Questions](#questions)
  
  ## Description
  
  ${response.projectDesc}\r\n
  
  
  ## Installation
  
  To install necessary dependencies, please run the following command:
  

    ${response.installCommand}\r\
  
  
  ## Usage
  
  To use, please first run ${response.installCommand}\r\n
  
  ${renderLicenseSection(response.license)}
  
  ## Contributing
  
  ${response.userContribute}\r\n
  
  ## Tests
  
  To run tests, run the following command:
  
  
  ${response.testCommand}\r\n
  
  
  ## Questions
  
  If you have any questions about the repo, you can open an issue on the repo or contact me directly at ${
    response.email
  }. You can find more of my work at [${
    response.username
  }](https://github.com/${response.username}/).`;
}

module.exports = generateMarkdown;
