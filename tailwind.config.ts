import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './components/**/*.{vue,js,ts}',
        './layouts/**/*.{vue,js,ts}',
        './pages/**/*.{vue,js,ts}',
        './app.vue',
        './nuxt.config.{js,ts}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Work Sans"', 'sans-serif'],
                heading: ['Neuton', 'serif'],
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
