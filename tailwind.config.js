module.exports = {
  content: ['./views/**/*.{html,js,ejs}'],
  theme: {
    extend: {
      colors:{
        primary: {
          100: '#F4F4F2',
          200: '#E8E8E8'
        },
        secondary:{
          100: '#BBBFCA',
          200: '#495464'
        },
      },
      fontFamily: {
        josefin: ['Josefin Slab', 'serif'],
        arap:['Arapey', 'serif']
      }
    },
  },
  plugins: [],
}
