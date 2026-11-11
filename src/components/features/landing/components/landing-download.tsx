import { LandingCTA } from './landing-cta'

export const LandingDownload = () => {
    return (
        <section id="download" aria-labelledby="download-title" className="w-full scroll-mt-28">
            <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-5 px-4 text-center">
                <h2 id="download-title" className="text-2xl font-bold tracking-tight sm:text-3xl">
                    Free, no account required.
                </h2>
                <p className="max-w-2xl leading-relaxed text-gray-600">
                    Download My Saved Places and keep your favorite locations, lists, and trips close at hand.
                </p>
                <LandingCTA />
            </div>
        </section>
    )
}
