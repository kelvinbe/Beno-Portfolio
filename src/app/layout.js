"use client"
import './globals.css'
import { Inter } from 'next/font/google'
import { ChakraProvider } from '@chakra-ui/react'



const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <ChakraProvider className={inter.className}>{children}</ChakraProvider>
      </body>
    </html>
  )
}
