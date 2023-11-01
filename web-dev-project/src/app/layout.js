import { Inter } from 'next/font/google'
import './globals.css'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pet Love Box',

}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head> <link rel="icon" href="./logo.svg" sizes="any" /> </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
