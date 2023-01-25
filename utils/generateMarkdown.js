const inquirer = require('inquirer');
const fs = require('fs');
const index = require('../index.js');


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = '';
  if (license === 'MIT') {
    badge = '![license: MIT](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)'
  } else if (license === 'Apache 2.0') {
    badge = '![license: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)'
  } else if (license === 'GPL v3.0'){
    badge = '![license: GPLv3](https://img.shields.io/badge/License-GPLv3-blue.svg)'
  } else {
    badge = ''
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = '';
  if(license === 'MIT') {
    licenseLink = 'https://choosealicense.com/licenses/mit/'
  } else if (license === 'Apache 2.0') {
    licenseLink = 'http://www.apache.org/licenses/LICENSE-2.0'
  } else if (license === 'GPL v3.0') {
    licenseLink = 'https://www.gnu.org/licenses'
  } else {
    licenseLink = ''
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = ''
  if(license === 'none') {
    licenseSection = ''
  } else {
    licenseSection = 
    `License: ${license}`
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answer) {
  return`# ${answer.title}
  
  ## ${renderLicenseSection(answer.license)} ${renderLicenseBadge(answer.license)}
  ### ${renderLicenseLink(answer.license)}
  
  ## Table of Contents:
  ### * [Installation](#installation)
  ### * [Usage](#usage)
  ### * [Contributions](#contributions)
  ### * [Tests](#tests)
  ### * [License](#license)
  ### * [Questions](#questions)
  
  ## Installation:
  ### In order for this app to function, intall the following:
  ### ${answer.installation}
  
  ## Usage:
  ### ${answer.usage}

  ## Contribution:
  ### ${answer.contributions}

  ## Tests:
  ### Run the following commands in your terminal to test this app:
  ### ${answer.test}

  ## Questions:
  ### If you have any questions, please contact me at:
  ### GitHub: https://github.com/${answer.git}
  ### or, you can reach me through email:
  ### E-mail: ${answer.email}`
}
  
  

module.exports = generateMarkdown;
