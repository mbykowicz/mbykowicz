import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '400px',
      },
      colors: {
        'mountain-meadow': {
          '50': 'hsl(152, 81%, 96%)',
          '100': 'hsl(151, 76%, 90%)',
          '200': 'hsl(153, 74%, 80%)',
          '300': 'hsl(157, 69%, 67%)',
          '400': 'hsl(159, 62%, 52%)',
          '500': 'hsl(161, 81%, 38%)',
          '600': 'hsl(163, 91%, 30%)',
          '700': 'hsl(164, 90%, 24%)',
          '800': 'hsl(164, 86%, 20%)',
          '900': 'hsl(165, 83%, 16%)',
          '950': 'hsl(168, 87%, 9%)',
        },
      },
      backgroundImage: {
        'hero-bg-image': 'url("../public/bg.png")',
        'hero-text-gradient': 'linear-gradient(to bottom, #12AF7E, #0E5D6E)',
      },
    },
  },
  plugins: [],
}
export default config
