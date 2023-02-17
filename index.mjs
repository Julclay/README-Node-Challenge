import inquirer from 'inquirer';
import fs from "fs/promises";
import { writeFile } from 'fs';


let {title, description, installation, usage, license } = await inquirer

.prompt([
    {
        type: 'input',
        name: 'title',
        message: "What is your porject Title?",
    },

    {
        type: 'input',
        name: 'description',
        message: "Give a description of your project",
    },

    {
        type: 'input',
        name: 'installation',
        message: "What does the user need to install?",
    },

    {
        type: 'input',
        name: 'usage',
        message: "How can it be used?",
    },

    {   type: 'list',
        name: 'license',
        message: 'Choose one license for your project',
        choices: ['MIT', 'Mozilla', 'Artistic License 2.0'],

    },


])


function getLicense(choice) {

if(choice === 'MIT'){
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
}else if (choice === 'Mozilla'){
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
}else if(choice === 'Artistic License 2.0'){
    return '[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)'
}
    
}

let readMeFile = `# ${title}

## Description
${description}



## Installation
${installation}

## Usage
${usage}

## License
${getLicense(license)}



`

fs.writeFile('README.md', readMeFile)


// ## Table of Contents
// ${table}

// ## Contribution
// ${contribution}

// ## Tests
// ${tests}

// ## Questions?
// ${gitEmail}
// ${email}