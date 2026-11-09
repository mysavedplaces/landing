import Image from 'next/image'
import Link from 'next/link'

export const Header = () => {
    return (
        <header className="fixed top-0 right-0 left-0 px-4 py-6">
            <div className="m-auto w-full md:max-w-6xl">
                <nav
                    aria-label="Site navigation"
                    className="flex items-center justify-center gap-6 text-sm font-medium md:justify-center"
                >
                    <Link href="/" className="text-gray-750 text-lg transition hover:text-[#F97316]">
                        Home
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
