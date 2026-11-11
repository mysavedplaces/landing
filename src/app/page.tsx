import { Metadata } from 'next'

import { Landing } from '@/components/features/landing/landing'
import { LANDING_FAQ } from '@/components/features/landing/landing-content'

const description =
    'Save addresses and GPS coordinates with My Saved Places, a places manager and trip planner for iPhone. Organize locations into lists and open them in your favorite map, navigation, transit, or rideshare app.'

export const metadata: Metadata = {
    title: {
        absolute: 'Save, Organize & Manage your favorite places | My Saved Places',
    },
    description,

    alternates: {
        canonical: '/',
    },

    robots: {
        index: true,
        follow: true,
    },

    appleWebApp: {
        title: 'My Saved Places',
    },

    openGraph: {
        title: 'Save Places, Lists & Trips | My Saved Places',
        description,
        type: 'website',
        locale: 'en_US',
        url: '/',
        siteName: 'My Saved Places',
        images: [
            {
                url: '/images/og-preview.jpg',
                width: 1200,
                height: 630,
                alt: 'My Saved Places',
            },
        ],
    },

    twitter: {
        card: 'summary_large_image',
        title: 'Save Places, Lists & Trips | My Saved Places',
        description,
        images: ['/images/og-preview.jpg'],
    },
}

export default function Home() {
    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'My Saved Places',
        applicationCategory: 'NavigationApplication',
        operatingSystem: 'iOS 15.1 or later',
        description,
        url: 'https://mysavedplaces.com/',
        downloadUrl: 'https://apps.apple.com/us/app/my-saved-places/id6767223800',
        offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
        },
    }

    const faqStructuredData = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: LANDING_FAQ.map(item => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
            },
        })),
    }

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
            />
            <Landing />
        </>
    )
}
