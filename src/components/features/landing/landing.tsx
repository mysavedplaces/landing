import Image from 'next/image'
import Link from 'next/link'

import { LandingApps } from './components/landing-apps'
import { LandingCTA } from './components/landing-cta'
import { LandingScreenshots } from './components/landing-screenshots'

export const Landing = () => {
    return (
        <main className="flex w-full flex-1 flex-col items-center justify-center gap-y-12 bg-white">
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
                            Save your favorite places, addresses, and GPS coordinates. Organize them into lists or
                            trips, and open any location in your favorite map, navigation, transit, or taxi app.
                        </p>

                        <LandingApps />
                    </div>

                    <div className="space-y-4">
                        <LandingCTA />

                        <Link
                            href="/legal/app/privacy-policy"
                            className="text-sm text-gray-500 transition hover:text-[#F97316]"
                        >
                            Privacy Policy
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}
