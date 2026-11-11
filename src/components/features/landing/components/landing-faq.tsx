import { LANDING_FAQ } from '../landing-content'

export const LandingFAQ = () => {
    return (
        <section id="faq" aria-labelledby="faq-title" className="w-full scroll-mt-28">
            <div className="mx-auto w-full max-w-3xl space-y-16">
                <header className="text-center">
                    <h2 id="faq-title" className="text-2xl font-bold tracking-tight sm:text-3xl">
                        Frequently asked questions
                    </h2>
                </header>

                <div className="divide-y divide-gray-200 border-y border-gray-200">
                    {LANDING_FAQ.map(item => (
                        <details key={item.question} className="group py-5">
                            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium marker:hidden">
                                {item.question}
                                <span
                                    aria-hidden="true"
                                    className="text-xl font-normal text-gray-500 transition group-open:rotate-45"
                                >
                                    +
                                </span>
                            </summary>
                            <p className="mt-3 max-w-2xl pr-8 leading-relaxed text-gray-600">{item.answer}</p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    )
}
