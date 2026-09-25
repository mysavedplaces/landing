import Image from 'next/image'

const NAVIGATORS = [
    { id: 'dgis', name: '2GIS', icon: '/images/apps/2gis.png' },
    { id: 'here-wego', name: 'HERE', icon: '/images/apps/here-wego.png' },
    { id: 'scenic', name: 'Scenic', icon: '/images/apps/scenic.png' },
    { id: 'sygic', name: 'Sygic', icon: '/images/apps/sygic.png' },
    { id: 'waze', name: 'Waze', icon: '/images/apps/waze.png' },
    { id: 'yandex', name: 'Yandex', icon: '/images/apps/yandex-navi.png' },
    { id: 'apple-maps', name: 'Apple', icon: '/images/apps/apple-maps.png' },
    { id: 'google-maps', name: 'Google', icon: '/images/apps/google-maps.png' },
    { id: 'map-quest', name: 'MapQuest', icon: '/images/apps/mapquest.png' },
    { id: 'mapsme', name: 'Maps.me', icon: '/images/apps/mapsme.png' },
    { id: 'openstreetmap', name: 'OSM', icon: '/images/apps/openstreetmap.png' },
    { id: 'organic-maps', name: 'Organic', icon: '/images/apps/organic-maps.png' },
    { id: 'yandex-maps', name: 'Yandex', icon: '/images/apps/yandex-maps.png' },
    { id: 'citymapper', name: 'Citymapper', icon: '/images/apps/citymapper.png' },
    { id: 'moovit', name: 'Moovit', icon: '/images/apps/moovit.png' },
    { id: 'transit', name: 'Transit', icon: '/images/apps/transit.png' },
    { id: 'lyft', name: 'Lyft', icon: '/images/apps/lyft.png' },
    { id: 'uber', name: 'Uber', icon: '/images/apps/uber.png' },
    { id: 'yandex-go', name: 'Yandex', icon: '/images/apps/yandex-go.png' },
]

export const LandingApps = () => {
    return (
        <div className="mb-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            {NAVIGATORS.map(nav => (
                <div key={nav.id} className="group flex flex-col items-center gap-2">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-orange-100 group-hover:shadow-md">
                        <Image src={nav.icon} width={28} height={28} className="rounded-lg" alt={nav.name} />
                    </div>
                    <span className="text-xs font-semibold text-gray-500">{nav.name}</span>
                </div>
            ))}
        </div>
    )
}
