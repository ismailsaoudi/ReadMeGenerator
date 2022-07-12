// function to generate markdown for README
// "MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"

function renderLicenseBadge(license) {
  if(license==="Apache"){
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  }
  else if(license==="MIT"){
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }
  else if (license==="GPL 3.0"){ 
    return '[![License: GPL (https://img.shields.io/badge/license-GPL-blue.svg)](https://opensource.org/licenses/GPL-3.0)'
  }
  else if (license === "None") {
    return []
  }
}

function generateMarkdown(data) {
    return `
    # ${data.project}
    ![GitHub](https://img.shields.io/github/license/${data.githubuser}/${data.project})
  
    ## Description

    ${data.description}
  
    ## Table of Contents
  
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)
  
    ## Installation
    To install necessary dependencies, run the following command:
  
    ${data.installdep}
  
    ## Usage 
    ${data.usingrepo}
  
    ## License
    This project is licensed under the ${renderLicenseBadge.data.license} License.
  
    ## Contributing
    ${data.contrepo}
  
    ## Tests
    To run tests, run the following command:
  
    ${data.testdep}
  
    ## Questions
    If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You 
    can find more of my work at my [GitHub Account](https://github.com/${data.githubuser}/)
    
  
  `};
  //export function generateMarkdown
  export default generateMarkdown;