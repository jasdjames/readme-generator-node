

const buildReadmeTemplate = (userData) =>  {
// async function  display () {
// Object.userData.license2 = '' 
const template = `
${userData.title}${userData.license}

## Description 
${userData.description}

## Table of Contents 

* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [License](#license)

## Installation
${userData.install}


## Usage 
${userData.usage}




## Contributing
${userData.contributing}


## Tests
${userData.tests}

## Questions
${userData.questions}
[${userData.username}]
(github.com/${userData.username})
${userData.email}

## License
${userData.licenseB}
`
console.log('$$$$$$', template)
return template
};

module.exports = buildReadmeTemplate;
