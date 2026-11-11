import { LayoutGrid, Navigation, Plane, QrCode, Search, Smile } from 'lucide-react'

export const LANDING_FEATURES = [
    {
        id: 'favorite-apps',
        title: 'Choose your favorite apps',
        description:
            'Pick up to four navigation apps you use often. These will show up as quick actions on your map screen.',
        image: '/images/screenshots/home.png',
        imageAlt: 'Choose favorite map and navigation apps in My Saved Places',
        icon: LayoutGrid,
    },
    {
        id: 'directions',
        title: 'Get directions to a place',
        description: 'Open a location in your chosen app to navigate, get transit directions, or request a ride.',
        image: '/images/screenshots/navigation.png',
        imageAlt: 'Open a selected place in a navigation app',
        icon: Navigation,
    },
    {
        id: 'save-places',
        title: 'Search and save places',
        description:
            'Search by address, coordinates, or saved place name. Save a location, add its details, and group it into a list or trip.',
        image: '/images/screenshots/save-place.png',
        imageAlt: 'Search for a place and save it to a list',
        icon: Search,
    },
    {
        id: 'place-icons',
        title: 'Place and list icons',
        description: 'Add icons to saved places and lists to recognize them quickly while browsing your locations.',
        image: '/images/screenshots/save-place-icons.png',
        imageAlt: 'Choose an icon for a saved place or list',
        icon: Smile,
    },
    {
        id: 'trips-and-archive',
        title: 'Plan trips and archive visited places',
        description:
            'Keep trip stops together in a trip list. Archive places you have visited or no longer need in your active lists.',
        image: '/images/screenshots/my-places.png',
        imageAlt: 'Browse trip lists and archived places',
        icon: Plane,
    },
    {
        id: 'qr-sharing',
        title: 'Share places by QR code',
        description: 'Show a QR code for a selected location or saved place so another device can scan and open it.',
        image: '/images/screenshots/qr.png',
        imageAlt: 'Share a saved location using its QR code',
        icon: QrCode,
    },
]

export const LANDING_FAQ = [
    {
        question: 'What is My Saved Places?',
        answer: 'My Saved Places is an iPhone app for saving locations, addresses, and GPS coordinates in one place. Organize them into lists or trips, then open a saved location in a supported map, navigation, transit, or rideshare app.',
    },
    {
        question: 'How do I save a place on my iPhone?',
        answer: 'Choose a location on the map, find it by address or coordinates, or select a search result. Tap Save place to add a name and optional icon, then put it in a list if you like.',
    },
    {
        question: 'Can I open saved places in Google Maps, Waze, or another app?',
        answer: 'Yes. Choose up to four favorite apps from the supported map, navigation, public transit, and rideshare apps. When you select a place, use its quick action to open it in one of your configured apps.',
    },
    {
        question: 'Can I use My Saved Places as a trip planner?',
        answer: 'Yes. Create a list for a trip and add the places you want to visit. My Saved Places works as a simple trip planner and places organizer, with icons for lists, pinned places, and an archive for places you have already visited.',
    },
    {
        question: 'Can I share a saved place with someone?',
        answer: 'Yes. Display a QR code for a selected location or saved place so another device can scan it and open the location.',
    },
    {
        question: 'Does My Saved Places require an account or store my places online?',
        answer: 'No account is required. Saved places and lists are stored on your device, not on My Saved Places servers. On supported iOS devices, you can enable optional iCloud sync to keep them in your private iCloud account across Apple devices.',
    },
    {
        question: 'Is My Saved Places available for Android?',
        answer: 'My Saved Places is currently available for iPhone from the App Store.',
    },
]
