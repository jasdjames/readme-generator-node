

const buildReadmeTemplate = (userData) =>  
async function  display () {
    

`
${userData.title}

## Description 
${userData.description}

## Table of Contents 

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)


## Installation
${userData.install}


## Usage 
${userData.usage}

## License
${userData.licence}




## Contributing
${userData.contributing}


## Tests
${userData.tests}

## Questions
${userData.questions}
[${userData.username}]
(github.com/${userData.username})
${userData.email}

`
};

module.exports = buildReadmeTemplate;
