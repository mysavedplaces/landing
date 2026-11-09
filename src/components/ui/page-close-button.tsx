import { X } from 'lucide-react'

import Link from 'next/link'

export const PageCloseButton = () => {
    return (
        <Link
            href="/"
            aria-label="Close and return to the home page"
            title="Close"
            className="absolute top-4 right-4 z-50 text-gray-500 transition hover:text-[#F97316] focus-visible:ring-2 focus-visible:ring-[#F97316] focus-visible:outline-none"
        >
            <X aria-hidden="true" size={20} strokeWidth={2} />
        </Link>
    )
}
