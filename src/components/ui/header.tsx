import Link from 'next/link'

export const Header = () => {
    return (
        <header className="fixed top-0 right-0 left-0 z-20 border-b border-gray-100 bg-white/95 px-4 py-4 backdrop-blur-sm">
            <div className="m-auto w-full md:max-w-6xl">
                <nav
                    aria-label="Site navigation"
                    className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs font-medium sm:gap-x-6 sm:text-sm"
                >
                    <Link href="/#features" className="text-gray-750 transition hover:text-[#F97316]">
                        Features
                    </Link>
                    <Link href="/#supported-apps" className="text-gray-750 transition hover:text-[#F97316]">
                        Apps
                    </Link>
                    <Link href="/#faq" className="text-gray-750 transition hover:text-[#F97316]">
                        FAQ
                    </Link>
                    <Link href="/#download" className="text-gray-750 transition hover:text-[#F97316]">
                        Download
                    </Link>
                    <Link href="/why-my-saved-places" className="text-gray-750 transition hover:text-[#F97316]">
                        About
                    </Link>
                    <Link
                        href="https://medium.com/@mysavedplaces"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-750 transition hover:text-[#F97316]"
                    >
                        Blog
                    </Link>
                    <Link href="/legal/app/privacy-policy" className="text-gray-750 transition hover:text-[#F97316]">
                        Privacy
                    </Link>
                    <Link
                        href="https://x.com/mysavedplaces"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-750 transition hover:text-[#F97316]"
                    >
                        Follow us on X
                    </Link>
                </nav>
            </div>
        </header>
    )
}
