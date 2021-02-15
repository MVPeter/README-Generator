const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// const writeFile = fs.writeFile;
const filePath = "./README.md";


// array of questions for user
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
]).then((answers) => {
    console.log(answers);
    // updateBadge();
    const makeFile = generateMarkdown(answers);
    fs.writeFile(filePath, makeFile), (err) => err ? console.log(err) : console.log("File created!");
});


function updateBadge() {
    if (answers.license === "MIT") {
        answers.lisense = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    } else if (answers.lisense === "GNU GPL v3") {
        answers.license = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
    } else if (answers.lisense === "Apache 2.0") {
        answers.license = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    } else { answers.lisense = "[![License](https://img.shields.io/badge/License-None-inactive.svg)]" }
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

