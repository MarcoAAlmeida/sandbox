import colors from 'tailwindcss/colors'

export default {
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'bio-doodles': "url('/img/OIG.jpg')",
      },
      colors: {
        primary: colors.gray
      }
    }
  }
}
