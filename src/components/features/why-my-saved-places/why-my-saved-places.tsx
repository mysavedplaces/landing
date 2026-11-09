import Link from 'next/link'

import { AppStoreButton } from '@/components/features/landing/components/landing-cta'

const FEATURES = [
    'Save places from a search, an address, a map pin, or exact GPS coordinates.',
    'Add your own names and icons, and pin important places for quick access.',
    'Organize your places into custom lists or trip lists.',
    'Archive places you’ve visited without deleting them.',
    'Pick up to four favorite apps for quick access.',
    'Open places in supported map, navigation, public transit, or rideshare apps.',
    'Show a QR code to open a saved place on another device.',
    'Use optional iCloud sync with supported Apple devices.',
    'You don’t need an account.',
]

export const WhyMySavedPlaces = () => {
    return (
        <div className="mx-auto w-full">
            <article className="space-y-6">
                <header className="space-y-3 sm:space-y-4">
                    <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Why I built My Saved Places</h1>

                    <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                        Hi, I'm Maksim, and I created <strong>My Saved Places</strong>.
                    </p>
                </header>

                <section className="space-y-3 sm:space-y-4">
                    <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                        I used to save the same places in different map and navigation apps. Every time I switched apps,
                        I had to search for them again. I couldn’t find a simple organizer that worked for me, so I
                        built <strong>My Saved Places</strong>.
                    </p>

                    <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                        Notes and bookmarks can save an address, but they don’t make it easy to open that place in the
                        map, navigation, transit, or rideshare app you want.
                    </p>

                    <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                        Every map or navigation app keeps its own list of saved places. This works until you use several
                        apps, plan a trip, or want to open a saved place in another app.
                    </p>

                    <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                        You might save a place in Google Maps but need it in Waze for driving, in a transit app for your
                        commute, or in a rideshare app for a pickup. With separate lists, you have to update the same
                        info in several places.
                    </p>

                    <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                        <strong>My Saved Places</strong> keeps all your locations in one place and still lets you use
                        your favorite map or navigation app.
                    </p>
                </section>

                <section className="space-y-3 sm:space-y-4">
                    <h2 className="text-lg font-semibold sm:text-xl">
                        Save, organize, and manage your favorite places.
                    </h2>

                    <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-700 sm:text-base">
                        {FEATURES.map(feature => (
                            <li key={feature}>{feature}</li>
                        ))}
                    </ul>
                </section>

                <section className="space-y-3 sm:space-y-4">
                    <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                        If you travel, save recommendations, plan trips, or switch between navigation apps, My Saved
                        Places gives you one spot to keep all the locations you want to find again.
                    </p>

                    <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                        I’d love to hear any feedback you have.
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
