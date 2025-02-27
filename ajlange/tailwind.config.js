module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                montserrat: ['Montserrat', 'sans-serif'],
            },
            colors: {
                lime: '#50962F',
            },
            screens: {
                'custom': '850px',
                'custom2': '1050px',
                'custom3' : '700px',
            },
        },
    },
    plugins: [],
};
