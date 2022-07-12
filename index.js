import inquirer from "inquirer";
import fs from "fs"
import generateMarkdown from "./generateMarkdown.js"

// const promptUser = () =>
inquirer.prompt([

  {
    type:"input",
    name:"title",
    message:"What is your project title?"
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "githubuser",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
  {
    type: "input",
    message: "Please write a short description of your project",
    name: "description",
  },
  {
    type: "list",
    name: "license",
    message: "What kind of license should your project have?",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0","None"],
  },
  {
    type: "input",
    message: "What command should be run to install dependencies?",
    default: "npm i",
    name: "installdep",
  },
  {
    type: "input",
    message: "What command should be run to run tests?",
    default: "npm test",
    name: "testdep",
  },
  {
    type: "input",
    message: "What does the user need to know about using the repo?",
    name: "usingrepo",
  },
  {
    type: "input",
    message:
      "What does the user need to know about contributing to the repo?",
    name: "contrepo",
  },
  ])

    .then(data=>{
        console.log(data)
       fs.writeFileSync("./created/README.md",generateMarkdown(data) )
    })

