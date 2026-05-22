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
        // Brand colors
        navy: {
          DEFAULT: '#0C1B33',
          50: '#E8EDF5',
          100: '#C5D0E3',
          200: '#9BADC8',
          300: '#6C86AC',
          400: '#456898',
          500: '#1A4C84',
          600: '#143D6B',
          700: '#0E2E52',
          800: '#0C1B33',
          900: '#060E1A',
        },
        gold: {
          DEFAULT: '#C9A84C',
          50: '#FAF4E3',
          100: '#F5E8BA',
          200: '#EDD88C',
          300: '#E8C97A',
          400: '#DFBA55',
          500: '#C9A84C',
          600: '#A88A3A',
          700: '#8A6B1A',
          800: '#5C4610',
          900: '#3A2C0A',
        },
        cream: {
          DEFAULT: '#F8F3EC',
          50: '#FDFAF7',
          100: '#F8F3EC',
          200: '#EDE8DF',
          300: '#E3DDD4',
          400: '#D4CCC0',
        },
        teal: {
          DEFAULT: '#1A8C7A',
          50: '#D0F0EA',
          100: '#A1E1D5',
          200: '#5ECABF',
          300: '#22B89E',
          400: '#1A8C7A',
          500: '#136B5D',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        brand: '12px',
      },
      boxShadow: {
        card: '0 4px 24px rgba(12,27,51,0.08)',
        'card-hover': '0 8px 32px rgba(12,27,51,0.12)',
        nav: '0 1px 8px rgba(12,27,51,0.06)',
      },
      animation: {
        ticker: 'ticker 32s linear infinite',
        'fade-up': 'fadeUp 0.6s ease both',
        pulse: 'pulse 2s ease-in-out infinite',
      },
      keyframes: {
        ticker: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
