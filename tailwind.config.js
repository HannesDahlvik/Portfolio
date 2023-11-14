/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,svelte}'],
    theme: {
        fontFamily: {
            sans: ['Montserrat']
        },
        extend: {
            colors: {
                background: 'rgba(var(--background))',
                foreground: 'rgba(var(--foreground))',
                primary: {
                    DEFAULT: 'rgba(var(--primary))',
                    foreground: 'rgba(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'rgba(var(--secondary))',
                    foreground: 'rgba(var(--secondary-foreground))'
                },
                muted: {
                    DEFAULT: 'rgba(var(--muted))',
                    foreground: 'rgba(var(--muted-foreground))'
                }
            }
        }
    },
    plugins: []
}
