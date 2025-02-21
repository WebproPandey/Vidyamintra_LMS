/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      fontSize : {
        'course-details-heading-small' : ['26px ' , '36px'],
        'course-details-heading-large' : ['36px' , '44px'],
        'home-heading-small' : ['28px' , '34px'],
        'home-heading-larger' : ['44px' , '50px'],
        'default': ['15px' ,'21px']
      }
    },
  },
  plugins: [],
}

