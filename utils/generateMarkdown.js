// function to generate markdown for README
const generateMarkdown = (answers) =>
` # ${answers.projectTitle}
  ---
  * [GitHub Repository](${answers.giturl})
  ${answers.license}
  
  ## Table of Contents
    - Discription
    - Screenshot
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


module.exports = generateMarkdown;

// function readMeTemplate() {`
// # ${ projectTitle }

// * [GitHub Repository](${ giturl })
//     * Deployed to: ${ deployurl }

//   ---

// ## Discription

//   ${ projectDiscription }

//   ---

// ## Screenshot

//   ![ScreenShot](${ screenShot })

//   ---

// ###Authors

//     * ${ author }

//   ---

// ###License

//     * ${ license }

//   ---

// ###Acknowledgments
//   ${ credits }

//   `}