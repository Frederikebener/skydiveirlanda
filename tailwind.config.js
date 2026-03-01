/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#0056b3', // SkyDive Blue
                    dark: '#004494',
                    light: '#3378c2',
                },
                secondary: {
                    DEFAULT: '#ffc107', // Yellow accent
                },
                white: '#ffffff',
                dark: '#1a1a1a',
                light: '#f8f9fa',
            },
            fontFamily: {
                heading: ['Montserrat', 'sans-serif'],
                body: ['Open Sans', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
