/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        // primary:'#1D2671',
        // secondary:'#C33764',
        primary:'#516395',
        secondary:'#614385',
        ter:'#fd3368',
        quat:'#aa076b',
        pent:'#61045f',
        warehouseBlue:'#487cea'
      },
      screens:{
        'smrev':{'max':'600px'},
        'mdrev':{'max':'768px'},
        'lgrev':{'max':'1024px'},
      }
    },
  },
  plugins: [],
}

