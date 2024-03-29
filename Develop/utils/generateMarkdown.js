// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'No License') {
    license = encodeURIComponent(license.replace('-', ' '))
    return `![License: ${license}](https://img.shields.io/badge/License-${license}-blueviolet)`
  } else {
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'No License') {
    let licenseURL = license.toLowerCase()
    return `[${license}](https://choosealicense.com/licenses/${licenseURL}/)`
  } else {
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'No License') {
    return `
## License

This application is covered under the following license: 

${renderLicenseLink(license)}
    `
  } else {
    return ''
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${renderLicenseBadge(data.license)}
  
  ## Table of Contents

  - [Descripution](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)   
  - [Questions](#questions)
  - [URL](#url)
  
  ## Descripution

  ${data.description}

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.tests}

  ## Questions

  If you have any questions please contact me by:
  - Github: [${data.github}](https://github.com/${data.github})
  - Email: ${data.email}

  ## URL

  Project URL: ${data.url}

  `

}

module.exports = generateMarkdown


// for testing
// console.log(module)