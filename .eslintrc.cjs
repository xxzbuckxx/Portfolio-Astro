module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:tailwindcss/recommended',
    'plugin:astro/recommended',
    'prettier',
  ],
  overrides: [
    {
      files: ['*.astro'],
      plugins: ['astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
    },
  ],
  rules: {
    'tailwindcss/no-custom-classname': [
      2,
      {
        config: 'tailwind.config.cjs',
      },
    ],
  },
};
