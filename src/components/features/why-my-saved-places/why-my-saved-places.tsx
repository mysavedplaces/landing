import Link from 'next/link'

import { AppStoreButton } from '@/components/features/landing/components/landing-cta'

const FEATURES = [
    'Save places from search, an address, a map pin, or exact GPS coordinates',
    'Add custom names and icons, and pin important locations for quick access',
    'Organize places into custom lists and trip lists',
    'Archive visited places without deleting them',
    'Choose up to four preferred apps for quick access',
    'Open places in supported map, navigation, public transit, and rideshare apps',
    'Display a QR code to open a saved place on another device',
    'Use optional iCloud sync on supported Apple devices',
    'No account is required',
]

export const WhyMySavedPlaces = () => {
    return (
        <div className="mx-auto w-full">
            <article className="space-y-6">
                <header className="space-y-3 sm:space-y-4">
                    <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Why I built My Saved Places</h1>

                    <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                        Hi, my name is Maksim, and I created <strong>My Saved Places</strong>.
                    </p>
                </header>

                <section className="space-y-3 sm:space-y-4">
                    <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                        I kept saving the same destinations in different map and navigation apps, then searching for
                        them again whenever I switched apps. I couldn&apos;t find a simple place organizer that fit this
                        workflow, so I built <strong>My Saved Places</strong>.
                    </p>

                    <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                        Notes and bookmarks can store an address, but they don&apos;t make it easy to open the same
                        destination in the map, navigation, public transit, or rideshare app that suits the moment.
                    </p>

                    <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                        Each map or navigation service keeps its own saved places. That works until you use several
                        apps, plan a trip, or want to open a saved location in a different service.
                    </p>

                    <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                        A place saved in Google Maps may be needed in Waze for driving, in a transit app for a commute,
                        or in a rideshare app when you need a pickup. Keeping separate lists means maintaining the same
                        information in several places.
                    </p>

                    <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                        My Saved Places keeps your saved locations together while giving you the freedom to use your
                        favorite map or navigation app.
                    </p>
                </section>

                <section className="space-y-3 sm:space-y-4">
                    <h2 className="text-lg font-semibold sm:text-xl">Save, Organize and Manage your favorite places</h2>

                    <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-700 sm:text-base">
                        {FEATURES.map(feature => (
                            <li key={feature}>{feature}</li>
                        ))}
                    </ul>
                </section>

                <section className="space-y-3 sm:space-y-4">
                    <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                        If you travel, save recommendations, plan trips, or switch between navigation apps, My Saved
                        Places gives you one place to keep the locations you want to find again.
                    </p>

                    <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                        I&apos;d be happy to hear any constructive feedback.
                    </p>
                    <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                        Read the{' '}
                        <Link href="/legal/app/privacy-policy" className="text-[#F97316] underline">
                            My Saved Places privacy policy
                        </Link>
                        .
                    </p>
                </section>

                <div className="pt-2">
                    <AppStoreButton />
                </div>
            </article>
        </div>
    )
}
