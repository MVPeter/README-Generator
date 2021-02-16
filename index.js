const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');



const filePath = "./document/README.md";
const writeFileAsync = util.promisify(fs.writeFile);



// array of questions for user
const userPromts = () =>
    inquirer.prompt([
        {
            type: "input",
            name: "projectTitle",
            message: "What is the name of your Project?"
        },
        {
            type: "input",
            name: "giturl",
            message: "Input the Github repository URL:",
        },
        {
            type: "input",
            name: "githubuser",
            message: "What is your GitHub Username?",
        },
        {
            type: "input",
            name: "email",
            message: "What is your email address?",
        },
        {
            type: "checkbox",
            name: "license",
            message: "Choose a lisense:",
            choices: [
                "MIT",
                "GNU GPL v3",
                "Apache 2.0",
                "None",
            ]
        },
        {
            type: "input",
            name: "projectDiscription",
            message: "Please discribe your project.",
        },
        {
            type: "input",
            name: "installation",
            message: "Input installation Instructions.",
        },
        {
            type: "input",
            name: "usage",
            message: "Input any instructions needed to use the applicaton.",
        },
        {
            type: "input",
            name: "testing",
            message: "Input testing instructions.",
        },
        {
            type: "input",
            name: "contributions",
            message: "Input contributions.",
        },
    ]);

const generateMarkdown = (answers) =>
    ` # ${answers.projectTitle}
  ---
  * [GitHub Repository](${answers.giturl})

  ![License: MIT](https://img.shields.io/badge/License-${answers.license}-informational "License Badge")
      
  ## Table of Contents
    - Discription
    - Installation
    - Usage
    - Contributions
    - Liscense
    - Questions


  ---
  
  ## Discription

  ${answers.projectDiscription}

  ---
  
  ## Installation

  ${answers.installation}

  ---
  
  ### Usage

    * ${answers.usage}

  ---
  
  ### Tests

    * ${answers.testing}

  
  ### Contributions

    * ${answers.contributions}

  ---
  
  ### License

    * This project is covered by the following license(s): ${answers.license}
    

  ---
  
  ### Questions
  - GitHub Profile: [GitHub Profile](https://github.com/${answers.githubuser})
  - For further questions please contact me at email:  ${answers.email}

  `;

// const makeFile = generateMarkdown(answers);

userPromts()
    // .then((updateBadge(answers)))
    .then((answers) => writeFileAsync(filePath, generateMarkdown(answers)))
    // .then(() => console.log(answers))
    .catch((err) => console.error(err));
