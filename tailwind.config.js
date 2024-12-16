/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts}', './stories/**/*.stories.{js,ts}'],
  theme: {
    extend: {},
  },
  safelist: [
    'text-4xl', 'font-bold', 'mb-4',
    'text-3xl', 'mb-3',
    'text-2xl', 'mb-2',
    'text-xl',
    'text-lg',
    'text-base',
    'text-sm',
    'text-xs', 'text-gray-600',
  ],
  plugins: [],
};