import Image from 'next/image'

const SUPPORTED_APPS = [
    { name: '2GIS', image: '/images/apps/2gis.png' },
    { name: 'HERE WeGo', image: '/images/apps/here-wego.png' },
    { name: 'Scenic', image: '/images/apps/scenic.png' },
    { name: 'Sygic', image: '/images/apps/sygic.png' },
    { name: 'Waze', image: '/images/apps/waze.png' },
    { name: 'Yandex Navi', image: '/images/apps/yandex-navi.png' },
    { name: 'Amap', image: '/images/apps/amap.png' },
    { name: 'Apple Maps', image: '/images/apps/apple-maps.png' },
    { name: 'Baidu Maps', image: '/images/apps/baidu-maps.png' },
    { name: 'Google Maps', image: '/images/apps/google-maps.png' },
    { name: 'MapQuest', image: '/images/apps/mapquest.png' },
    { name: 'Maps.me', image: '/images/apps/mapsme.png' },
    { name: 'Open Street Map', image: '/images/apps/openstreetmap.png' },
    { name: 'Organic Maps', image: '/images/apps/organic-maps.png' },
    { name: 'Yandex Maps', image: '/images/apps/yandex-maps.png' },
    { name: 'Citymapper', image: '/images/apps/citymapper.png' },
    { name: 'Moovit', image: '/images/apps/moovit.png' },
    { name: 'Transit', image: '/images/apps/transit.png' },
    { name: 'Lyft', image: '/images/apps/lyft.png' },
    { name: 'Uber', image: '/images/apps/uber.png' },
    { name: 'Yandex Go', image: '/images/apps/yandex-go.png' },
]

export const LandingSupportedApps = () => {
    return (
        <section id="supported-apps" aria-labelledby="supported-apps-title" className="w-full scroll-mt-28">
            <div className="mx-auto w-full max-w-6xl space-y-8 px-4 text-white sm:space-y-10">
                <header className="mx-auto mb-8 max-w-2xl space-y-2 text-center sm:mb-10">
                    <h2 id="supported-apps-title" className="text-2xl font-bold tracking-tight sm:text-3xl">
                        Integrated apps
                    </h2>
                    <p className="text-sm leading-relaxed text-white/95 sm:text-base">
                        Open a saved place in your favorite navigation, map, public transit, or rideshare app.
                    </p>
                </header>

                <ul className="mx-auto grid max-w-5xl grid-cols-3 justify-items-center gap-x-2 gap-y-6 sm:grid-cols-4 sm:gap-4 md:grid-cols-7 md:gap-x-4 md:gap-y-8">
                    {SUPPORTED_APPS.map(app => (
                        <li key={app.name} className="flex w-full flex-col items-center gap-2 text-center">
                            <Image
                                src={app.image}
                                alt=""
                                width={72}
                                height={72}
                                className="size-16 rounded-2xl object-cover shadow-sm sm:size-[72px]"
                            />
                            <span className="min-h-8 text-xs font-medium leading-4 text-white sm:text-sm">
                                {app.name}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
