module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    'astro',
    '@typescript-eslint',
    'react',
    'react-hooks',
    'tailwindcss',
    'prettier',
  ],
  extends: [
    'plugin:astro/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:tailwindcss/recommended',
    'plugin:prettier/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
      rules: {
        // Puedes agregar reglas específicas para archivos .astro aquí
        'react/no-unknown-property': 'off',
        'react/jsx-no-target-blank': 'off',
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
      rules: {
        // Puedes agregar reglas específicas para TS/TSX aquí
      },
    },
    {
      files: ['*.tsx'],
      rules: {
        'react/prop-types': 'off', // Usamos TypeScript para los tipos
      },
    },
  ],
  rules: {
    // Reglas generales
    'prettier/prettier': 'error',
    'tailwindcss/no-custom-classname': 'off', // Permite nombres de clase personalizados
    'react/react-in-jsx-scope': 'off', // No es necesario con React 17+
    'react/jsx-uses-react': 'off',
    'react/jsx-uses-vars': 'error',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
  },
};
