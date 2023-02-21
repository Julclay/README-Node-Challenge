import inquirer from 'inquirer';
import fs from "fs/promises";


let {title, description, installation, usage, license, credits, test, gitHub, email} = await inquirer

.prompt([
    {
        type: 'input',
        name: 'title',
        message: "What is your project Title?",
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

    {
        type: 'input',
        name: 'credits',
        message: "Write all the contributors to your project",
    },

    {
        type: 'input',
        name: 'test',
        message: "How can it be used?",
    },

    {
        type: 'input',
        name: 'gitHub',
        message: "What is your gitHub profile?",
    },

    {
        type: 'input',
        name: 'email',
        message: "What is your email?",
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

## Table of Contents
${installation && '### [Installation](#installation)'}
${usage && '### [Usage](#usage)'}
### [License](#license)
${credits && '### [Credits](#credits)'}
${test && '### [Tests](#tests)'}
### [Questions](#questions)

${installation && '## Installation'}
${installation}

${usage && '## Usage'}
${usage}

## License
${getLicense(license)}

${credits && '## Credits'}
${credits}

${test && '## Tests'}
${test}

## Questions?
If you have any questions or want more informaiton 
you can visit [my Github account](https://github.com/${gitHub})

Or write me an email (${email})
`

fs.writeFile('README.md', readMeFile)