import { defineConfig } from 'eslint-define-config';
import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import ts from '@typescript-eslint/eslint-plugin';
import prettier from 'eslint-plugin-prettier';

export default defineConfig({
    ignores: ['node_modules', 'dist', 'build'],
    extends: [
        js.configs.recommended, // Base JS rules
        'plugin:react/recommended', // React-specific rules
        'plugin:react-hooks/recommended', // React Hooks-specific rules
        'plugin:@typescript-eslint/recommended', // TypeScript-specific rules
        'prettier', // Integrates Prettier to disable conflicting rules
        'plugin:prettier/recommended', // Runs Prettier as ESLint rule
    ],
    parser: '@typescript-eslint/parser', // Using TypeScript parser
    parserOptions: {
        ecmaVersion: 2020, // Use ES2020 features
        sourceType: 'module', // Enable module resolution
    },
    plugins: {
        react,
        reactHooks,
        '@typescript-eslint': ts,
        prettier,
    },
    rules: {
        'prettier/prettier': [
            'error',
            {
                singleQuote: true, // Use single quotes
                trailingComma: 'all', // Add trailing commas where possible
                semi: true, // Use semicolons
                tabWidth: 2, // Use 2 spaces per tab
                endOfLine: 'auto', // Handle line endings across platforms
            },
        ],
        'react/jsx-indent': ['error', 2], // Indentation of JSX (2 spaces)
        'react/jsx-indent-props': ['error', 2], // Indentation for props (2 spaces)
        '@typescript-eslint/no-unused-vars': ['error'], // No unused variables
        '@typescript-eslint/explicit-module-boundary-types': 'off', // Disable explicit return types (if desired)
        'no-console': 'warn', // Warn about console.log statements
        'react/react-in-jsx-scope': 'off', // Not needed with React 17 JSX Transform
        'react/jsx-uses-react': 'off', // React 17 JSX Transform rule
    },
    settings: {
        react: {
            version: 'detect', // Automatically detect React version
        },
    },
});
