// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${projectTitle}

  * [GitHub Repository](${giturl})
  
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

  ${projectDiscription}

  ---
  
  ## Installation

  ${screenShot})

  ---
  
  ### Usage

    * ${Usage}

  ---
  
  ### Tests

    * ${tests}

  
  ### Contributions

    * ${contributions}

  ---
  
  ### License

    * ${license}

  ---
  
  ### Questions
  - GitHub Profile: [GitHub Profile](https://github.com/${answers.githubuser})
  - For further questions please contact me at email:${questions}

  `;
}

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