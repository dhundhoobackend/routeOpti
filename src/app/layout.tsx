import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RouteOpti - Advanced Route Optimization Solutions',
  description: 'Enterprise-grade route optimization solving Traveling Salesman Problem and Capacitated Vehicle Routing Problem with time windows. Reduce costs, improve efficiency.',
  keywords: 'route optimization, TSP, CVRP, traveling salesman, vehicle routing, logistics, supply chain',
  authors: [{ name: 'RouteOpti Team' }],
  openGraph: {
    title: 'RouteOpti - Advanced Route Optimization Solutions',
    description: 'Enterprise-grade route optimization solving TSP and CVRP with time windows.',
    type: 'website',
    url: 'https://routeopti.vercel.app',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
