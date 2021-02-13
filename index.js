const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const writeFile = fs.writeFile


// array of questions for user
const promptUser = () => {
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
            name: "licsense",
            message: "Choose a lisense:",
            choice: [
                "MIT",
                "GNU",
                "OSL-3.0",
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
            name: "Installation",
            message: "Input installation Instructions.",
        },
        {
            type: "input",
            name: "usage",
            message: "Input any instructions needed to use the applicaton.",
        },


    ]).then((answers) => {
        console.log(answers);

        fs.appendFile(filePath, generateMarkdown, (err) => {
            err ? console.log(err) : console.log("File created!")
        });
    });


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

}