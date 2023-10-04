import { AuthProviders } from './Providers'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next Adventskalender',
  description: 'Ein Adventskalender erstellt mit Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <AuthProviders>
        {children}
        </AuthProviders>
        </body>

    </html>
  )
}
