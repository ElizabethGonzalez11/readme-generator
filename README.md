#  Professional README Generator

A command line application that runs in Node.js that generates a professional README.md from a user's input using the Inquirer package. 

## Description

When creating an open source project on GitHub, it’s important to have a high-quality README for the app. This should include what the app is for, how to use the app, how to install it, how to report issues, and how to make contributions.  This project quickly and easily creates a README file by using a command-line application to generate one. This allows the project creator to devote more time to working on the project.

Take a look at the ExampleREADME.md in this repo.

## User Story

AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project

## Acceptance Criteria

IVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README

## Installation

To generate your own README:
 -git clone repo
 -run npm install to install the following npm package dependency:
	[Inquirer package](https://www.npmjs.com/package/inquirer/v/8.2.4)
-This will start by running node index.js in the command line.
-Answer the questions that are prompted to generate the README.
-Once created, your README file will be named 'Example README'

## Visuals

https://drive.google.com/file/d/1bJu20vJ_Ly3APu4Ov6qJM7W-grqoPtd4/view?usp=sharing






