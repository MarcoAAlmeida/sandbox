import colors from 'tailwindcss/colors'

export default {
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'bio-doodles': "url('/img/bio_doodles.jpg')",
      },
      colors: {
        primary: colors.gray
      }
    }
  }
}
