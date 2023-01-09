import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown.js';
import fs from 'fs';
// input check
let validateInput = (input) => {
    return input !== "";
};

// questions generated for README
let questions = [
    {
     type: "input",
     name: "title",
     message: "What is your project title?",
     validate: validateInput
    },
    {
     type: "input",
     name: "motivation",
     message: "What was your motivation?",
     validate: validateInput
    },
    {
     type: "input",
     name: "reasoning",
     message: "Why did you build this project?",
     validate: validateInput
    },
    {
     type: "input",
     name: "solve",
     message: "What problem does your project solve?",
     validate: validateInput
    },
    {
     type: "input",
     name: "learn",
     message: "What did you learn from your project?",
     validate: validateInput
    },
    {
     type: "input",
     name: "installation",
     message: "What are the steps required to install your project? (Provide a step-by-step description of how to get the development environment running?",
     validate: validateInput
    },
    {
     type: "input",
     name: "usage",
     message: "How do you use your project? (provide a screenshot)",
     validate: validateInput
    },
    {
     type: "input",
     name: "credits",
     message: "Provide all collaborators:",
     validate: validateInput
    },
    {
     type: "input",
     name: "test",
     message: "Do you have any test for your application?",
     validate: validateInput
    },

    {
    type: "list",
    name: "license",
    message: "What licence did you use? (Use arrow keys)",
    choices: [
        {
            name: "MIT",
            value: {
                name: "MIT",
                link: "https://opensource.org/licenses/MIT",
                badge: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
            }
        },
        {
            name: "BSD-3-Clause",
            value: {
                name: "BSD-3-Clause",
                link: "https://opensource.org/licenses/BSD-3-Clause",
                badge: "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
            }
        },
        {
            name: "GNU General Public License (GPL)",
            value: {
                name: "GNU General Public License (GPL)",
                link: "https://opensource.org/licenses/gpl-license",
                badge: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
            }
        },
        {
            name: "Mozilla Public License 2.0",
            value: {
                name: "Mozilla Public License 2.0",
                link: "https://opensource.org/licenses/MPL-2.0",
                badge: "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
            }
        },
        {
            name: "Eclipse Public License version 2.0",
            value: {
                name: "Eclipse Public License version 2.0",
                link: "https://opensource.org/licenses/EPL-2.0",
                badge: "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)",
            }
        }
    ]
    },
    {
     type: "input",
     name: "email",
     message: "Provide email address for questions: ",
     validate: validateInput
    },
    {
     type: "input",
     name: "github",
     message: "Provide your GitHub user name: ",
     validate: validateInput
    }

];

// Writes README file
function writeToFile(fileName, data) {
    fs.writeFile(`./${fileName}.md`, data, err => {
        if (err) {
          console.error(err);
        }
        // file written successfully
      });
}

// Initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
        let markdown = generateMarkdown(answers);
        writeToFile("README", markdown);
    })
}

// Function call to initialize app
init();
