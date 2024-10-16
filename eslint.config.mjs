import { javascriptPreset } from '@exodus/eslint-config-exodus'

export default [
  ...javascriptPreset,
  {
    rules: {
      'unicorn/prefer-spread': 'off',
      'unicorn/no-new-array': 'off',
      // TODO: fix me
      '@exodus/mutable/no-param-reassign-prop-only': 'off',
    },
  },
]
