const createConfig = require('@titicaca/eslint-config-triple/create-config')

module.exports = createConfig({ type: 'frontend' })
module.exports = createConfig({ type: 'node', project: './tsconfig.json' })

const allowedNames = ['__DISASTER__CALLBACK', '_triple_no_navbar']
module.exports = createConfig({ type: 'node', allowedNames })
