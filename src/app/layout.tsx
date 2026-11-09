import { ReactNode } from 'react'

import classNames from 'classnames'
import type { Metadata, Viewport } from 'next'

import { GoogleAnalytics } from '@next/third-parties/google'
import { Roboto } from 'next/font/google'
import Link from 'next/link'

import { CookieConsent } from '@/components/ui/cookie-consent'
import { TailwindIndicator } from '@/components/ui/tailwind-indicator'

import './globals.css'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://mysavedplaces.com'

const roboto = Roboto({
    subsets: ['latin'],
})

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: 'My Saved Places',
        template: '%s | My Saved Places',
    },
}

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    viewportFit: 'cover',
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <html lang="en" className={classNames('h-full', roboto.className)}>
            <head>
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="default" />
                <link rel="icon" href="/favicon.ico" type="image/x-icon" />
            </head>
            <body className="flex min-h-dvh flex-col bg-white antialiased">
                <header className="p-4">
                    <nav
                        aria-label="Site navigation"
                        className="flex items-center justify-center gap-6 text-sm font-medium md:justify-end"
                    >
                        <Link href="/" className="text-gray-500 transition hover:text-[#F97316]">
                            Home
                        </Link>
                        <Link href="/why-my-saved-places" className="text-gray-500 transition hover:text-[#F97316]">
                            About
                        </Link>
                        <Link
                            href="https://medium.com/@mysavedplaces"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 transition hover:text-[#F97316]"
                        >
                            Blog
                        </Link>
                        <Link
                            href="/legal/app/privacy-policy"
                            className="text-gray-500 transition hover:text-[#F97316]"
                        >
                            Privacy
                        </Link>
                        <Link
                            href="https://x.com/mysavedplaces"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 transition hover:text-[#F97316]"
                        >
                            Follow us on X
                        </Link>
                    </nav>
                </header>
                <div className="flex flex-1 flex-col p-4">{children}</div>
                <CookieConsent />
                <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID as string} />
                <TailwindIndicator />
            </body>
        </html>
    )
}
