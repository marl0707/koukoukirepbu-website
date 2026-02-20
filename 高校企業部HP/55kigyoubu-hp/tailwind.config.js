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
          DEFAULT: '#33b5a1', // 放課後NPO Teal
          dark: '#1e8e7b',
          light: '#5ecfc0',
        },
        secondary: {
          DEFAULT: '#e88562', // 放課後NPO Coral (Orange)
          dark: '#c96a4a',
        },
        accent: {
          DEFAULT: '#f0c239', // 放課後NPO Yellow
          dark: '#d4a61c',
        },
        base: {
          DEFAULT: '#f9f9f9', // 淡いグレー背景
          dark: '#333333',
        },
        orange: { // 高校企業部ブランドカラー（アクセントとして残す）
          DEFAULT: '#FF6B35',
        }
      },
      fontFamily: {
        sans: ['"Zen Maru Gothic"', 'sans-serif'],
        logo: ['"Zen Maru Gothic"', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem', // アフタースクール風の大きな角丸
      }
    },
  },
  plugins: [],
}
