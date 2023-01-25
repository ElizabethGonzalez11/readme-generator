// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'What is the title of the project?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Provide a description of your project',
    name: 'description',
  },
  {
    type: 'input',
    message: 'Provide instructions for installation',
    name: 'installation'
  },
  {
    type: 'input',
    message: 'Provide contribution guidelines',
    name: 'contribution',
  },
  {
    type: 'input',
    message: 'Provide usage information',
    name: 'usage'
  },
  {
    type: 'input',
    message: 'Provide any tests written',
    name: 'test'
  },
  {
    type: 'list',
    message: 'Select a license',
    name: 'license',
    choices:['MIT', 'GPL v3.0', 'Apache 2.0', 'none'],
  },
  {
    type: 'input',
    message: 'What is your GitHub username:',
    name: 'git',
  },
  {
    type: 'input',
    message: 'E-mail address:',
    name: 'email',
  }
];
  
  // TODO: Create a function to write README file
const writeToFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./exampleREADME.md', fileContent, err => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true
      });
    });
  });

};

//function to initialize app
function init () {
  inquirer.prompt(questions)
  .then(function(answer) {
    console.log(answer);
  var fileContent = generateMarkdown(answer);
  writeToFile(fileContent)
  });
}
//call function
init();

module.exports = questions;
