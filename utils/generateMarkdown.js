


// function renderLicenseBadge(license) {}
const userData = require('./questions')

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  console.log('Lisence coming into generate links!!!!', license)
  if (license === 'MIT') {
  
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } else if (license === 'Apache 2.0') {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  } else if (license === 'GNU GPLv.3') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  } else { return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)' }
}

// function renderLicenseSection () {
  
//   if (userData.licenseB === 'MIT') {
//   //  Object.userData.licenseB = "Testing"
//     return "[mit infor]"
//   } else if (userData.licenseB === 'Apache 2.0') {
//     return "[mit 2]"
//   } else if (userData.licenseB === 'GNU GPLv.3') {
//     return '[![License: GPL v3]' 
//   } else { return '[![License: Unlicense]' }

// }


//   } 

//     return `we did it`
//   } else if (userData.licenseB === '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'){
//       return 'What did you do?>!!?'
//   } else { return "What?!"
// }
// //    renderLicenseSection
  
  





module.exports = renderLicenseLink 
