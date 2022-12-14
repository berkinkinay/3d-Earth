module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
     '3xl': {'max': '21250px'},
      
     '2xl': {'max': '1640px'},

      'xl': {'max': '1279px'},

     'lg': {'max': '1024px'},

     'md': {'max': '768px'},

     'sm': {'max': '640px'},

      'ms': {'max': '425px'},

      'xs': {'max': '375px'},
     },
    extend: {
      colors: {
        indigo: {
          900: '#312e81',
          800: '#3730a3',
          700: '##4338ca',
          600: '#4f545c',
          400: '#d4d7dc',
          300: '#e3e5e8',
          200: '#ebedef',
          100: '#f2f3f5',
        },
      },
    },
  },
}
