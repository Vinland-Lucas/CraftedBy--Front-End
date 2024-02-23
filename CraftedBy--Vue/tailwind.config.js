import daisyui from "daisyui"

export default {
  content: ['./src/**/*.{vue,js,ts}'],
  plugins: [daisyui],
  theme: {
    fontFamily: {
      'ryman-eco': ['Ryman Eco'],
      'dm-sans': ['DM Sans']
    },
    extend: {
      backgroundImage: {
        'landing-page': "url('./public/landing_page_bg_image.webp')"
      },
      colors: {
        'timberwolf': '#DDD0C8'
      }
    }
  }
};