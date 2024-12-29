"use client"
import './globals.css'
import { Rajdhani } from 'next/font/google'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'



const rajdhani = Rajdhani({ subsets: ['latin'], weight: ["400", "500", "600", "700"], // Add weights you need
})

const theme = extendTheme({
  fonts: {
    heading: rajdhani.style.fontFamily, // Use for headings
    body: rajdhani.style.fontFamily,    // Use for body text
  },
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <ChakraProvider theme={theme} className={rajdhani.className}>{children}</ChakraProvider>
      </body>
    </html>
  )
}
