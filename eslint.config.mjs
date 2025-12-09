import { fixupPluginRules } from '@eslint/compat';
import js from '@eslint/js';
import typescriptEslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import prettier from 'eslint-config-prettier';

export default typescriptEslint.config(
  js.configs.recommended,
  ...typescriptEslint.configs.recommended,
  {
    plugins: {
      react: fixupPluginRules(react),
      'react-hooks': fixupPluginRules(reactHooks),
      'jsx-a11y': fixupPluginRules(jsxA11y),
    },
    rules: {
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  prettier,
  {
    ignores: ['node_modules/**', '.next/**', 'out/**', 'build/**', '*.config.js'],
  },
  {
    files: ['*.config.js'],
    languageOptions: {
      globals: {
        module: 'readonly',
        require: 'readonly',
        process: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
      },
    },
  }
);

