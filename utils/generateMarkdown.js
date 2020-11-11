// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Title
  ## Table of Contents
  -[Description](#Description)
  -[Installation](#Installation)
  -[Usage](#Usage)
  -[Liscense](#Liscense)
  -[Contribution](#Contribution)
  -[Tests](#Tests)
  -[Questions](#Questions)
  ## Description
  $(data.description)
  ## Installation
  $(data.installation)
  ## Usage
  $(data.usage)
  ## License
  $(data.license)
  ## Contribution
  $(data.contribution)
  ## Tests
  $(data.tests)
  ## Questions
  $(data.questions)

`;
}

module.exports = generateMarkdown;
