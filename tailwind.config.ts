import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      red: "#FC3434",
      black: "#000000",
      'text-main': "#353535",
      "text-gray": "#979797",
      "text-light": "#DDDDDD"
    },
    boxShadow: {
      sm: '0px 20px 50px 0px rgba(203, 203, 203, 0.46)',
      lg: "0px 14.569314956665039px 36.42328643798828px 0px rgba(203, 203, 203, 0.46)",

    },
    fontSize: {
      '4xl': '60px',
      '3xl': '48px',
      '2xl': '34px',
      xl: '24px',
      lg: '20px',
      sm: '16px',
      xs: '14px',
      xxs: '12px'
    },
    fontFamily: {
      roboto: 'Roboto, sans-serif',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },

  },
  plugins: [],
}
export default config




