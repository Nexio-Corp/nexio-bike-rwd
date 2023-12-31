import { Inter } from 'next/font/google'
import '@/styles/index.css'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Porto Seguro Bike',
    description: 'Uma experiencia Nexio Bike',
    
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navbar />
                {children}
            </body>
        </html>
    )
}
