import type { Config } from 'tailwindcss'

const config: Config = {
    content: ['./app/**/*.{vue,js,ts}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Work Sans"', 'sans-serif'],
                heading: ['"Source Code Pro"', 'serif'],
            },
            colors: {
                text: '#000',
                background: '#fff',
                link: {
                    hover: '#1e25bb',
                },
            },
        },
    },
    plugins: [],
}

export default config
