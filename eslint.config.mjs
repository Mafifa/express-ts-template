import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from '@typescript-eslint/eslint-plugin'
import parser from '@typescript-eslint/parser'

export default [
  {
    // We define the files we want to lint
    files: ['**/*.{js,mjs,cjs,ts}'],
    languageOptions: {
      globals: globals.browser,
      parser, // We specify the TypeScript parser
      parserOptions: {
        project: './tsconfig.json', // We add the tsconfig.json file
        sourceType: 'module', // If you use ECMAScript modules
        ecmaVersion: 2020, // Compatibility with modern ECMAScript
      },
    },
    plugins: {
      '@typescript-eslint': tseslint, // We add the TypeScript plugin
      prettier: 'prettier', // We add the Prettier plugin
    },
    extends: [
      'plugin:prettier/recommended', // Enables Prettier as an ESLint rule
    ],
    rules: {
      'prettier/prettier': 'error', // Make Prettier issues be treated as errors
      // You can add other rules here if needed
    },
  },
  pluginJs.configs.recommended, // Recommended ESLint rules for JS
  tseslint.configs.recommended, // Recommended rules for @typescript-eslint
  {
    ignores: ['node_modules', 'build'], // We ignore certain directories
  },
]
