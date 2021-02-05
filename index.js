// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require ('fs');
const questions = require ('./utils/questions');
const buildReadmeTemplate = require ('./utils/template');
// TODO: Create an array of questions for user input
async function init() {
    try {
        const userData = await inquirer.prompt(questions);

        const readmeNew = buildReadmeTemplate(userData);
    
        fs.writeFileSync('./readmeNew.md', readmeNew);
    
        console.log('File was successfully written.');

    } catch (error) {
        console.log(error);
    }
}


init();


