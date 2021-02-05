// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require ('fs');
const questions = require ('./utils/questions');
const buildReadmeTemplate = require ('./utils/template');
const renderLicenseLink = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
async function init() {
    try {
        const userData = await inquirer.prompt(questions);
        
        userData.license = renderLicenseLink(userData.license)
        console.log('^^^^^^^^^^^^^^^',userData.license);
        const readmeNew = buildReadmeTemplate(userData);
        console.log('readmeNew!!', readmeNew)
    
        fs.writeFileSync('./readmeNew.md', readmeNew);
    
        console.log('File was successfully written.');

    } catch (error) {
        console.log(error);
    }
}


init();


