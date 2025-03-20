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
                main: '#2C93F3',
                primary: '#2F2E30',
                green:'#00FF66'
            },
        },
    },
    plugins: [],
};

