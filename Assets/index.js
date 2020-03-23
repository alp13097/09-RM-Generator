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

]).then(function({ github, Repo, Description, License, Installation, Tests, Usage, Contributing }) {
    axios.get(`https://api.github.com/users/${github}`).then(function ({ data }) {

    console.log(data);

        const picture = data.avatar_url;

        const email = data.email;

        let layout = `# ${Repo}
![GitHub](https://img.shields.io/github/license/${github}/${Repo})

## Description
        
--${Description}
        
## Table of Contents
        
* [Installation](#installation)
        
* [Usage](#usage)
        
* [License](#license)
        
* [Contributing](#contributing)
        
* [Tests](#tests)
        
* [Questions](#questions)
        
## Installation
        
--To install necessary dependencies, run the following command:
        
________________        
${Installation}
________________

        
## Usage
        
--${Usage}
        
## License
        
--This project is licensed under the ${License} license.
        
## Contributing
        
--${Contributing}
        
## Tests
        
--To run tests, run the following command:
        
_________        
${Tests}
_________       


## Questions
        
![Avatar](${picture})
        
If you have any questions about the repo, open an issue or contact [${github}]
(https;//api.github.com/users/${github}) directly at ${email}`;

        fs.writeFile("README.md", layout, err => {
            if (err) {
                throw err
            }
        })
    });
})