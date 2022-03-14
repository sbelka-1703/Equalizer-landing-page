module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {



    extend: {
      backgroundImage: {
        'main-desktop': "url('/bg-main-desktop.png')",
       
      },
      spacing: {
       'top-right-image': '1128px',
       'bottom-background-image':'860px',
      },

      fontFamily: {
        
        'IBM': 'IBM Plex Sans',
      },
    },
  },
  plugins: [],
}
