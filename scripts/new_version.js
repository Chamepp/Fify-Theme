const { execSync } = require('child_process')
const { version } = require('../package.json')

const terminal = [
  `vsce package`,
  `git add .`,
  `git commit -m ${version}`,
  `git push --follow-tags`
]

terminal.map(
  command => execSync(command, { stdio: 'inherit' })
)