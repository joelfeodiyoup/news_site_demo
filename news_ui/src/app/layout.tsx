import './globals.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss';
import { routes } from './useDataSource';
import { Navigation } from '../../components/navigation';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Conde Nast demo',
  description: 'Simple news page',
  openGraph: {
    siteName: "Conde Nast demo",
    title: "News"
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        style={{
          marginBlock: '0',
          marginInline: "10vw"
        }}
        >
        <Navigation config={routes}
        ></Navigation>
        {children}</body>
    </html>
  )
}
