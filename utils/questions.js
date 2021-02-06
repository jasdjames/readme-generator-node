const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Give a description of your project ',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the steps required to install your project?',
        name: 'install',
    },
    {
        type: 'input',
        message: 'Provide instructions and examples for use',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What are your guidelines for contribution? ',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Give a description or example of any tests written for this project ',
        name: 'tests',
    },
    {
        type: 'list',
        message: 'What type of license would you like for your Readme?',
        name: 'license',
        choices: ['MIT', 'Apache 2.0', 'GNU GPLv.3','The Unlicense']
    },
    {
        type: 'list',
        message: 'Just to confirm you would like ?',
        name: 'licenseB',
        choices: ['MIT', 'Apache 2.0', 'GNU GPLv.3','The Unlicense']
    },
    {
        type: 'input',
        message: 'Please write a statement about what someone should do if they have any questions for you',
        name: 'questions',
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your email address? ', 
        name: 'email',
    },
];

module.exports = questions;