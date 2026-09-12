import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = { title: 'Reto 45 · Vuelve a moverte', description: 'Un plan progresivo de 45 días para recuperar el movimiento y construir una base para esquiar.', generator: 'v0.app', manifest: '/manifest.webmanifest', icons: { icon: '/icons/icon-192.png', apple: '/icons/apple-touch-icon.png' }, appleWebApp: { capable: true, title: 'Reto 45', statusBarStyle: 'black-translucent' } }
export const viewport: Viewport = { width: 'device-width', initialScale: 1, viewportFit: 'cover', themeColor: '#f6f7f5', colorScheme: 'light', userScalable: false }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="es"><body>{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html> }
