import Link from 'next/link'

export const LandingAbout = () => {
    return (
        <section id="about" aria-labelledby="about-title" className="w-full scroll-mt-28">
            <article className="mx-auto w-full max-w-3xl space-y-5 px-4 sm:space-y-6">
                <header className="space-y-3 sm:space-y-4">
                    <h2 id="about-title" className="text-2xl font-bold tracking-tight sm:text-3xl">
                        Why I built My Saved Places
                    </h2>

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
            </article>
        </section>
    )
}
