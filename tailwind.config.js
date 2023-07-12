/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#5da9cc",
        
"secondary": "#0c8c4e",
        
"accent": "#1bdde8",
        
"neutral": "#3a253c",
        
"base-100": "#ffffff",
        
"info": "#30c1df",
        
"success": "#4ee987",
        
"warning": "#f9b14e",
        
"error": "#fc696c",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

