const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");


inquirer.prompt([
    {
        message: "What is your GitHub username?",
        type: "input",
        name: "github"
    }
]).then((response) => {
    console.log(response.github)

axios.get(`https://api.github.com/users/${response.github}`)
    .then(data => {
        console.log(data);
        console.log(data.data.login);
        console.log(data.data.avatar_url);
        console.log(data.data.email);

        fs.writeFile("README.md", function(err) {

        })
    })
});



const questions = [
    {
        message: "What is your GitHub username?",
        type: "input",
        name: "github"
    },
    {
        message: "What is your project's name?",
        type: "input",
        name: "Repo"
    },
    {
        message: "Please write a short description of your project",
        type: "input",
        name: "Description"
    },
    {
        message: "What kind of license should your project have?",
        type: "list",
        name: "License",
        choices: [
            "MIT",
            "APACHE 2.0",
            "GPL 3.0",
            "BSD 3",
            "None"
        ]
    },
    {
        message: "What command should be run to install dependencies?",
        default: "npm i",
        type: "input",
        name: "Installation"
    },
    {
        message: "What command should be run to run tests? ",
        default: "npm test",
        type: "input",
        name: "Tests"
    },
    {
        message: "What does the user need to know about using the repo?",
        type: "input",
        name: "Usage"
    },
    {
        message: "What does the user need to know about contributing to the repo?",
        type: "input",
        name: "Contributing"
    },

];

inquirer.prompt([questions[0], questions[1], questions[2], questions[3], questions[4], questions[5], questions[6], questions[7]])
.then((response) => {
    console.log(response);
});


function writeToFile(fileName, data) {
    
}

function init() {

}

init();
