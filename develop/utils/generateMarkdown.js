// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === undefined) {
    return ''
  } else {
    return `[![License](https://img.shields.io/badge/License-${license}-blue)](${renderLicenseLink(license)})`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// switch below
function renderLicenseLink(license) {
  switch (license) {
    case "Apache":
      return 'https://opensource.org/licenses/Apache-2.0'
      break;
  
    case "GNU":
      return 'https://www.gnu.org/licenses/gpl-3.0'
      break;
  
    case "MIT":
      return 'https://opensource.org/licenses/MIT'
      break;
  
    case "GPLv3":
      return 'https://www.gnu.org/licenses/gpl-3.0'
      break;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === undefined) {
    return ''
  } else {
    return `This project is covered under ${license}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ${renderLicenseBadge(data.license)}
  # ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#install)
  * [Usage](#usage)
  * [Contributions](#contribute)
  * [Test](#test)
  * [Credits](#credits)
  * [License](#license)
  * [Link](#link)
  * [Questions](#question)
  
  ## Installation
  ${data.install}

  ## Usage 
  ${data.usage}

  ## Contributions
  ${data.contribute}

  ## Test
  ${data.test}

  ## Credits
  ${data.credits}

  ## License
  ${data.license}

  ## Link to deployed site
  ${data.link}

  ## Question
  Please refer to my github for other awesome project! https://github.com/${data.github}

  If you have any questions regarding this application or any others. You can reach me at: ${data.email}
`;
}

module.exports = generateMarkdown
