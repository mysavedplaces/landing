import { LandingAbout } from './components/landing-about'
import { LandingDownload } from './components/landing-download'
import { LandingFAQ } from './components/landing-faq'
import { LandingFeatures } from './components/landing-features'
import { LandingSupportedApps } from './components/landing-supported-apps'

export const Landing = () => {
    return (
        <main>
            {/* <div className="py-16 sm:py-24">
                <div className="m-auto w-full px-4 md:max-w-6xl">
                    <div className="flex w-full flex-col-reverse items-center gap-12 md:max-w-6xl lg:flex-row lg:items-center lg:gap-16">
                        <div className="relative h-[390px] w-full shrink-0 sm:h-166 sm:w-100">
                            <Image
                                src="/images/screenshots/home.png"
                                alt="My Saved Places"
                                fill
                                className="object-contain transition-opacity duration-900 ease-in-out"
                                fetchPriority="high"
                            />
                        </div>

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
                                    Save your favorite places, addresses, and GPS coordinates. Organize them into lists
                                    or trips, and open any location in your favorite map, navigation, transit, or taxi
                                    app.
                                </p>

                                <LandingApps />
                            </div>

                            <div className="space-y-2">
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
                </div>
            </div> */}
            <div className="py-16 sm:py-24">
                <div className="m-auto w-full md:max-w-6xl">
                    <LandingFeatures />
                </div>
            </div>
            <div
                className="py-16 sm:py-24"
                style={{ background: 'linear-gradient(180deg, #FFAC00 0%, #FF6800 100%)' }}
            >
                <div className="m-auto w-full md:max-w-6xl">
                    <LandingSupportedApps />
                </div>
            </div>
            <div className="py-16 sm:py-24">
                <LandingAbout />
            </div>
            <div className="bg-gray-50 py-16 sm:py-24">
                <div className="m-auto w-full md:max-w-6xl">
                    <LandingFAQ />
                </div>
            </div>
            <div className="py-16 sm:py-24">
                <div className="m-auto w-full md:max-w-6xl">
                    <LandingDownload />
                </div>
            </div>
        </main>
    )
}
