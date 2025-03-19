/* eslint-disable */
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        container: {
            center: true,
        },
        extend: {
            colors: {
                'second-white': '#FAFAFA',
                'txt-red': '#DB4444',
            },
        },
    },
    plugins: [],
};

