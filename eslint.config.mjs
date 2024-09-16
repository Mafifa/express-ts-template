import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from '@typescript-eslint/eslint-plugin'
import parser from '@typescript-eslint/parser'

export default [
  {
    // Definimos los archivos que queremos analizar
    files: ['**/*.{js,mjs,cjs,ts}'],
    languageOptions: {
      globals: globals.browser,
      parser, // Especificamos el parser de TypeScript
      parserOptions: {
        project: './tsconfig.json', // Agregamos el archivo tsconfig.json
        sourceType: 'module', // Si usas módulos de ECMAScript
        ecmaVersion: 2020, // Compatibilidad con ECMAScript moderno
      },
    },
    plugins: {
      '@typescript-eslint': tseslint, // Agregamos el plugin de TypeScript
      prettier: 'prettier', // Agregamos el plugin de Prettier
    },
    extends: [
      'plugin:prettier/recommended', // Activa Prettier como regla de ESLint
    ],
    rules: {
      'prettier/prettier': 'error', // Para que los problemas de Prettier sean tratados como errores
      // Puedes agregar otras reglas aquí si lo necesitas
    },
  },
  pluginJs.configs.recommended, // Reglas recomendadas por ESLint para JS
  tseslint.configs.recommended, // Reglas recomendadas por @typescript-eslint
  {
    ignores: ['node_modules', 'build'], // Ignoramos ciertos directorios
  },
]
