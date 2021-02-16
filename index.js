const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
// const generateMarkdown = require('./utils/generateMarkdown');

// const writeFile = fs.writeFile;
const filePath = "./document/README.md";
const writeFileAsync = util.promisify(fs.writeFile);

const MITlisense = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
const GPLv3license = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
const Apache20license = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
const license = "[![License](https://img.shields.io/badge/License-None-inactive.svg)]";


// array of questions for user
// inquirer.prompt([
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
            name: "projectDiscroption",
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
            name: "contributions",
            message: "Input contributions.",
        },
      
    ]);

const generateMarkdown = (answers) =>
    ` # ${answers.projectTitle}
  ---
  * [GitHub Repository](${answers.giturl})
  ${license}
  
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

  ${answers.installation})

  ---
  
  ### Usage

    * ${answers.Usage}

  ---
  
  ### Tests

    * ${answers.tests}

  
  ### Contributions

    * ${answers.contributions}

  ---
  
  ### License

    * ${answers.license}

  ---
  
  ### Questions
  - GitHub Profile: [GitHub Profile](https://github.com/${answers.githubuser})
  - For further questions please contact me at email:${answers.email}

  `;

// const makeFile = generateMarkdown(answers);

userPromts()
    // .then((updateBadge(answers)))
    .then((answers) => writeFileAsync(filePath, generateMarkdown(answers)))
    .then(() => console.log(answers))
    .catch((err) => console.error(err));



// .then((answers) => {
//     console.log(answers);
//     updateBadge(answers);
//     fs.writeFile(filePath, makeFile);
// }
// .catch ((err) => err ? console.error(err) : console.log("File created!"));
// );


function updateBadge(answers) {
    if (answers.license === "MIT") {
        licenses = MITlisense;
    } else if (answers.lisense === "GNU GPL v3") {
        licenses = GPLv3license;
    } else if (answers.lisense === "Apache 2.0") {
        license = Apache20license;
    } else {
        lisense = Nonelisense;
    }
}


    // // function to write README file
    // const writeToFile = (fileName, data) => {
    //     fs.appendFile(fileName,)
    // }

    // // function to initialize program
    // const init = async () => {
    //     console.log("This will help you generate a README.MD file");

    //     const RMtxt = generateMarkdown(answers)

    // }

    // // function call to initialize program
    // init();

