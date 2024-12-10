import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Narkar Insurance - Your Trusted Insurance Partner',
  description: 'Get the best insurance coverage for your needs with Narkar Insurance.',
}

//Narkar Insurance

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

