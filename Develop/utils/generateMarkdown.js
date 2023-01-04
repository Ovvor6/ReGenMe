// generates questions for user to input and apply to README
export default function generateMarkdown(data) {
// returns template string 
  return `
  ${data.license.badge}
  # ${data.title}

  ## Table of Contents
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [Credits](#credits)
  5. [License](#license)
  6. [Test](#test)
  7. [Questions](#questions)

  ## Description
   - ${data.motivation}
   - ${data.reasoning}
   - ${data.solve}
   - ${data.learn}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Credits 
  ${data.credits}

  ## License
  This project is covered under the [${data.license.name}](${data.license.link}) license

  ## Test 
  ${data.test}

  ## Questions
   - Email me: ${data.email}
   - Reach out to me on github: (https://github.com/${data.github})
`;
}
