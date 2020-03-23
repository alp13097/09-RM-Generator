const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");


inquirer.prompt([
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
    }

]).then((response) => {
    // console.log(response.github);
    // console.log(response.Repo);
    // console.log(response.Installation);
    // console.log(response.Usage);
    // console.log(response.License);
    // console.log(response.Contributing);
    // console.log(response.Tests);

axios.get(`https://api.github.com/users/${response.github}`)
    .then(data => {
        // console.log(data);
        // console.log(data.data.login);
        // console.log(data.data.avatar_url);
        // console.log(data.data.email);



const layout = `# ${response.Repo}
[![GitHub license](https://img.shields.io/badge/license-APACHE2.0-blue.svg)](https://github.com/${response.github}/${response.Repo})

## Description

${response.Description}

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

To install necessary dependencies, run the following command:

````
${response.Installation}
````

## Usage

${response.Usage}

## License

This project is licensed under the ${response.License} license.

## Contributing

${response.Contributing}

## Tests

To run tests, run the following command:

````
${response.Tests}
````

## Questions

<img
src="${data.data.avatar_url}" alt="avatar" style="border-radius: 16px" width="30" />

If you have any questions about the repo, open an issue or contact [${response.github}]
(https;//api.github.com/users/${response.github}) directly at ${data.data.email}`;



        fs.writeFile("README.md", layout, function(err) {
            if (err) {
                return console.log(err);
              }
            
              console.log("Success!");
        })
    })
});




function init() {

}

init();
