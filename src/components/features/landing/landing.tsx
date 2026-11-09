import Image from 'next/image'
import Link from 'next/link'

import { LandingApps } from './components/landing-apps'
import { LandingCTA } from './components/landing-cta'
import { LandingScreenshots } from './components/landing-screenshots'

export const Landing = () => {
    return (
        <main className="wrapper flex w-full flex-1 flex-col items-center justify-center gap-y-12 bg-white px-4 py-12">
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
                            Save favorite places, addresses, and GPS coordinates. Organize them into lists and trips,
                            then open any location in a supported map, navigation, transit, or rideshare app.
                        </p>

                        <LandingApps />
                    </div>

                    <LandingCTA />
                </div>
            </div>
        </main>
    )
}
