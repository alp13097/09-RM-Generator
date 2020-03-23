const inquirer = require("inquirer");



const questions = [
    {
        message: "What is your GitHub username?",
        type: "input",
        name: "username"
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

questions.forEach(question => inquirer.prompt((question[0])
).then(answers => {
    console.log(answers)
}));


//moviePatrons.forEach(patron => console.log(patron.age))


function writeToFile(fileName, data) {
    
}

function init() {

}

init();
