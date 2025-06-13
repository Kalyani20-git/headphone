import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { color } from 'motion'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss()
  ],
  theme:{
    extend:{
      color:{
        primary: '#aa6d6d',
        brandDark: "#151616",
      },
      fontFamily:{
        poppins:["poppins", "sans-serif"]
      },
      container:{
        center: true,
        padding:{
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  }
})
