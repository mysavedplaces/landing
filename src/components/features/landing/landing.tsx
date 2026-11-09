import Image from 'next/image'
import Link from 'next/link'

import { LandingApps } from './components/landing-apps'
import { LandingCTA } from './components/landing-cta'
import { LandingScreenshots } from './components/landing-screenshots'

const LandingHeader = () => {
    return (
        <header className="flex h-16 w-full shrink-0 items-center justify-center px-4 sm:fixed sm:inset-x-0 sm:top-0 md:h-20 md:px-12">
            <nav aria-label="Site navigation" className="flex items-center justify-center gap-6 text-sm font-medium">
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
                <Link href="/legal/app/privacy-policy" className="text-gray-500 transition hover:text-[#F97316]">
                    Privacy Policy
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
    )
}

export const Landing = () => {
    return (
        <>
            <LandingHeader />
            <main className="wrapper flex min-h-full w-full flex-col items-center justify-center gap-y-12 bg-white px-4 pt-4 pb-12 md:p-12">
                <div className="flex w-full flex-col-reverse items-center gap-12 md:max-w-6xl lg:flex-row lg:items-center lg:gap-16">
                    <LandingScreenshots />

                    <div className="flex flex-col gap-y-12 text-center lg:text-left">
                        <div className="flex flex-col gap-y-8">
                            <h1 className="mx-auto w-full max-w-64 sm:max-w-98.25 lg:mx-0">
                                <span className="sr-only">My Saved Places</span>
                                <Image
                                    src="/images/logo.svg"
                                    alt=""
                                    width={393}
                                    height={28}
                                    priority
                                    className="h-auto w-full"
                                />
                            </h1>

                            <p className="text-lg text-gray-600 md:text-xl">
                                Save favorite places, addresses, and GPS coordinates. Organize them into lists and
                                trips, then open any location in a supported map, navigation, transit, or rideshare app.
                            </p>

                            <LandingApps />
                        </div>

                        <LandingCTA />
                    </div>
                </div>
            </main>
        </>
    )
}
