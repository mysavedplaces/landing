import { Metadata } from 'next'

import { WhyMySavedPlaces } from '@/components/features/why-my-saved-places/why-my-saved-places'
import { PageCloseButton } from '@/components/ui/page-close-button'

const description =
    'Save places by address or GPS, organize them into lists and trips, and open them in supported map, navigation, transit, or rideshare apps. No account required.'

export const metadata: Metadata = {
    title: 'Organize Saved Places Across Map Apps',
    description,

    alternates: {
        canonical: '/why-my-saved-places',
    },

    robots: {
        index: true,
        follow: true,
    },

    appleWebApp: {
        title: 'My Saved Places',
    },

    openGraph: {
        title: 'Organize Saved Places Across Map Apps | My Saved Places',
        description,
        type: 'article',
        locale: 'en_US',
        url: '/why-my-saved-places',
        siteName: 'My Saved Places',
        images: [
            {
                url: '/images/og-preview.jpg',
                width: 1200,
                height: 630,
                alt: 'My Saved Places app preview',
            },
        ],
    },

    twitter: {
        card: 'summary_large_image',
        title: 'Organize Saved Places Across Map Apps | My Saved Places',
        description,
        images: ['/images/og-preview.jpg'],
    },
}

export default function WhyMySavedPlacesPage() {
    return (
        <main className="m-auto min-h-full max-w-250 flex-col bg-white px-4 py-10 sm:py-16 md:px-12">
            <PageCloseButton />
            <WhyMySavedPlaces />
        </main>
    )
}
