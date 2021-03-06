module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        screens: {
            s: { max: '460px' },
            xs: { max: '640px' },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require('@tailwindcss/forms')],
}
