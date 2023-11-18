import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import {Sidebar} from "@/src/shared/components/Sidebar";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GPC Algorithms',
  description: 'Conoce más sobre la programación competitiva con GPC Algorithms, un sitio que centraliza explicaciones, algoritmos y estructuras de datos para que sean utilizados en contests de programación competitiva.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body
        className={`
          ${inter.className} 
          grid grid-cols-[auto_1fr] 
          bg-white dark:bg-neutral-800`
        }
      >
        <Sidebar />
        {children}
      </body>
    </html>
  )
}
