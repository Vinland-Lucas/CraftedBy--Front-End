import daisyui from "daisyui"

export default {
  content: ['./src/**/*.{vue,js,ts}'],
  plugins: [daisyui],
  theme: {
    fontFamily: {
      'ryman-eco': ['Ryman Eco'],
      'dm-sans': ['DM Sans'],
      'dm-sans-light': ['DM Sans Light'],
      'dm-sans-extralight': ['DM Sans ExtraLight'],
      'dm-sans-thin': ['DM Sans Thin'],
    },
    extend: {
      backgroundImage: {
        'landing-page': "url('./public/landing_page_bg_image.webp')"
      },
      colors: {
        'timberwolf': '#DDD0C8'
      },
      padding: {
        '27px': '27px'
      },
      spacing: {
        '38px': '38px',
        'pc-width': '9.538rem',
        'pc-height': '22.458rem',
      }
    }
  }
};