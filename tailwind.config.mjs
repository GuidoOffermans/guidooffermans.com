import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            fontFamily: {
                mono: ["Recursive", ...defaultTheme.fontFamily.mono],
                sans: ['"Public Sans"', ...defaultTheme.fontFamily.sans],

            },
            colors: {
                'go-blue': '#067BC2',
                'go-darkblue': '#4059AD',
                'go-orange': '#EF8354',
                'go-green': '#709775',
                'go-purple': '#8783D1',
                'go-yellow': '#E8EC67',
                'go-dark': '#1E1E1E',
            },
        },
    },
    plugins: [function ({addUtilities}) {
        addUtilities({
            '.recursive': {
                'font-variation-settings': '"MONO" 1, "CASL" 0,"wght" 370, "CRSV" 0.5, "slnt" 0' ,
            },
            '.font-wght-370': {
                'font-variation-settings': '"wght" 300',
            }, '.font-wght-400': {
                'font-variation-settings': '"wght" 400',
            }, '.font-wght-750': {
                'font-variation-settings': '"wght" 750',
            }, '.font-wght-1000': {
                'font-variation-settings': '"wght" 1000',
            }, '.font-wdth-75': {
                'font-variation-settings': '"wdth" 75',
            }, '.font-italic': {
                'font-variation-settings': '"ital" 1',
            },
        });
    },],
};
