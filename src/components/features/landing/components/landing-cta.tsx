import Image from 'next/image'
import Link from 'next/link'

const CTA_BUTTONS = [
    {
        id: 'appstore',
        href: 'https://apps.apple.com/us/app/my-saved-places/id6767223800',
        icon: '/images/app-button/app-store-en.svg',
        alt: 'Download on App Store',
        iconSize: { w: 144, h: 48 },
    },
]

export const AppStoreButton = () => {
    const button = CTA_BUTTONS[0]

    return (
        <Link
            href={button.href}
            rel="noopener noreferrer"
            className="transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.12)] active:scale-[0.98]"
        >
            <Image src={button.icon} width={button.iconSize.w} height={button.iconSize.h} alt="" />
        </Link>
    )
}

export const LandingCTA = () => {
    return (
        <div className="flex justify-center gap-4 lg:justify-start">
            <AppStoreButton />
        </div>
    )
}
