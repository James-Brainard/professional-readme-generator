// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
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

// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');
const generateMarkdown = require('./develop/utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
  {
    message: "What is the title of your project?",
    name: 'title'
  },
  {
    message: "Enter a description for your project.",
    name: 'description'
  },
  {
    message: "Enter installation instructions.",
    name: 'install'
  },
  {
    message: "Enter usage information.",
    name: 'usage'
  },
  {
    message: "Please include any contributing guidelines if any.",
    name: 'contribute'
  },
  {
    message: "Enter test instructions for running the test on this application.",
    name: 'test'
  },
  {
    message: "Please enter any credits or resources you may have used. If any.",
    name: 'credits'
  },
  {
    type: 'list',
    message: "Please select the license you want attached to this application.",
    choices: ["Apache", "GNU", "MIT", "GPLv3"],
    name: 'license'
  },
  {
    message: "What is the link to your deployed application?",
    name: 'link'
  },
  {
    message: "What is your GitHub username?",
    name: 'github'
  },
  {
    message: "What is your email address?",
    name: 'email'
  }
];
// TODO: Create a function to write README file 
// (fileName, data)


const writeToFile = (data) => {
  fs.writeFile('README.md', generateMarkdown(data), (err) => {
    err ? console.error(err) : console.log("Readme file has been created")
  })
}


// TODO: Create a function to initialize app
const init = (questions) => {
  inquirer.prompt(questions)
  .then(writeToFile)
}


// Function call to initialize app
init(questions);