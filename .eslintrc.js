const createConfig = require('@titicaca/eslint-config-triple/create-config')

module.exports = createConfig({ type: 'frontend', project: './tsconfig.json' })

const allowedNames = ['__DISASTER__CALLBACK', '_triple_no_navbar']
module.exports = createConfig({ type: 'frontend', allowedNames })

const { extends: extendConfigs, overrides } = createConfig({ type: 'frontend' })

module.exports = {
  extends: [...extendConfigs],
  overrides: [...overrides],
  rules: {
    'react/react-in-jsx-scope': 'off',
  },
}
