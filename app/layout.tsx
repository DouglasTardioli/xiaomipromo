import { Header } from '@/components/header/header'
import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
 })

export const metadata = {
  title: 'Test Links',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={`{poppins.className} bg-zinc-950 overflow-x-hidden`}>
        <Header />
        {children}
        </body>
    </html>
  )
}
