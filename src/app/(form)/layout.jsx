import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import '@/styles/index.css'
import { metadata as _metadata } from '../(base)/layout'
export const metadata = _metadata

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    )
}
