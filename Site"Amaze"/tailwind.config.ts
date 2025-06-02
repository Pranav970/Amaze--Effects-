import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'apple-gray': '#1d1d1f',
        'apple-light-gray': '#f5f5f7',
        'apple-blue': '#0071e3',
        'text-primary': '#f5f5f7',
        'text-secondary': '#86868b',
        'highlight-glow': 'rgba(255, 255, 255, 0.3)', // For glowing text
      },
      fontFamily: {
        sans: ['"SF Pro Display"', 'Helvetica Neue', 'Arial', 'sans-serif'], // Mimic Apple's font
      },
      fontSize: {
        'display-2xl': ['72px', { lineHeight: '1.1', fontWeight: '600' }],
        'display-xl': ['56px', { lineHeight: '1.1', fontWeight: '600' }],
        'display-lg': ['40px', { lineHeight: '1.2', fontWeight: '600' }],
        'display-md': ['32px', { lineHeight: '1.25', fontWeight: '600' }],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        fadeInUp: 'fadeInUp 0.8s ease-out forwards',
        glow: 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          'from': { textShadow: '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #0071e3, 0 0 20px #0071e3' },
          'to': { textShadow: '0 0 10px #fff, 0 0 15px #0071e3, 0 0 20px #0071e3, 0 0 25px #0071e3' }
        }
      }
    },
  },
  plugins: [],
}
export default config
