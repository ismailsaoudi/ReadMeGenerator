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
  return `# ${data.title}

  ## Description
  
  ${data.description} 
  
  ## Table of Contents (Optional)
  
  If your README is long, add a table of contents to make it easy for users to find what they need.
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation
  
  ${data.installation}
   
  ## Usage
  
  Provide instructions and examples for use. Include screenshots as needed.
  
  To add a screenshot, create an assets/images folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:
  
      md
      ![alt text](assets/images/screenshot.png)
     
  
  ## Credits
  
  List your collaborators, if any, with links to their GitHub profiles.
  
  If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
  
  If you followed tutorials, include links to those here as well.
  
  ## License
  
 ${renderLicenseBadge(data.license)}
  ---
  
  🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.
  
  ## Badges
  
  ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)
  
  Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
  
  ## Features
  
  If your project has a lot of features, list them here.
  
  ## How to Contribute
  
  If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
  
  ## Tests
  
  Go the extra mile and write tests for your application. Then provide examples on how to run them here.
`};
  //export function generateMarkdown
  export default generateMarkdown;