/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
            },
            colors: {
                'main-color': '#FFE91D',
                'tag-blue': '#57CDFF',
                'tag-red': '#FF7F57',
                primary: '#FFE457',
                infomenu: '#868686',
                brightgrey: '#F9F9F9',
                lightgrey: '#E5E5E5',
                grey: '#A3A3A3',
                darkgrey: '#666666',
                'kakao-color': '#FAE100'
            },
            width: {
                'box-width': '412px'
            },
            height: {
                'box-height': '424px'
            }
        }
    },
    plugins: []
};
