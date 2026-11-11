'use client'

import { useState } from 'react'

import Image from 'next/image'

import { LANDING_FEATURES } from '../landing-content'

type LandingFeature = (typeof LANDING_FEATURES)[number]

type LandingFeatureCardProps = {
    feature: LandingFeature
    isActive: boolean
    onSelect: () => void
}

const LandingFeatureCard = ({ feature, isActive, onSelect }: LandingFeatureCardProps) => {
    const Icon = feature.icon

    return (
        <button
            type="button"
            aria-pressed={isActive}
            onClick={onSelect}
            className={`flex w-full items-start gap-3 rounded-2xl p-3 text-left transition sm:gap-4 sm:p-4 ${
                isActive ? 'bg-white shadow-sm ring-1 ring-gray-200' : 'hover:bg-white/70'
            }`}
        >
            <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-[#F97316] sm:size-11">
                <Icon aria-hidden="true" size={20} strokeWidth={1.8} />
            </span>
            <span className="min-w-0">
                <span className="block text-sm leading-snug font-semibold text-gray-900 sm:text-base">
                    {feature.title}
                </span>
                <span className="mt-1 block text-xs leading-relaxed text-gray-600 sm:text-sm">
                    {feature.description}
                </span>
            </span>
        </button>
    )
}

export const LandingFeatures = () => {
    const [activeFeatureId, setActiveFeatureId] = useState(LANDING_FEATURES[0].id)
    const activeFeature = LANDING_FEATURES.find(feature => feature.id === activeFeatureId) ?? LANDING_FEATURES[0]
    const leftFeatures = LANDING_FEATURES.slice(0, 3)
    const rightFeatures = LANDING_FEATURES.slice(3)

    const renderFeatureCard = (feature: LandingFeature) => (
        <LandingFeatureCard
            key={feature.id}
            feature={feature}
            isActive={feature.id === activeFeature.id}
            onSelect={() => setActiveFeatureId(feature.id)}
        />
    )

    return (
        <section id="features" aria-labelledby="features-title" className="w-full scroll-mt-28">
            <div className="mx-auto w-full max-w-6xl space-y-8 px-4 sm:space-y-12">
                <header className="mx-auto max-w-3xl space-y-3 text-center">
                    <h2 id="features-title" className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
                        Your places manager and trip planner
                    </h2>
                    <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
                        My Saved Places helps you manage your favorite spots, save addresses and GPS coordinates, and
                        organize your own lists. You can also use it as a trip planner to keep all the places you want
                        to visit in one place.
                    </p>
                </header>

                <div className="grid items-center gap-3 md:grid-cols-[minmax(0,1fr)_240px_minmax(0,1fr)] md:gap-4 lg:grid-cols-[minmax(0,1fr)_280px_minmax(0,1fr)] lg:gap-8">
                    <div className="hidden flex-col gap-2 md:flex">{leftFeatures.map(renderFeatureCard)}</div>

                    <div className="order-first flex flex-col items-center md:order-none">
                        <div className="relative h-[390px] w-full max-w-[205px] sm:h-[470px] sm:max-w-[245px] lg:h-[520px] lg:max-w-[270px]">
                            <Image
                                key={activeFeature.id}
                                src={activeFeature.image}
                                alt={activeFeature.imageAlt}
                                fill
                                sizes="(max-width: 640px) 205px, (max-width: 1024px) 245px, 270px"
                                className="object-contain"
                            />
                        </div>
                        <div
                            role="group"
                            aria-label="Feature screenshots"
                            className="mt-3 flex items-center justify-center gap-2"
                        >
                            {LANDING_FEATURES.map(feature => (
                                <button
                                    key={feature.id}
                                    type="button"
                                    aria-label={`Show ${feature.title} screenshot`}
                                    aria-pressed={feature.id === activeFeature.id}
                                    onClick={() => setActiveFeatureId(feature.id)}
                                    className={`h-2 rounded-full transition-all ${
                                        feature.id === activeFeature.id ? 'w-7 bg-[#F97316]' : 'w-2 bg-gray-300'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="hidden flex-col gap-2 md:flex">{rightFeatures.map(renderFeatureCard)}</div>

                    <div className="grid grid-cols-2 gap-2 md:hidden">{LANDING_FEATURES.map(renderFeatureCard)}</div>
                </div>
            </div>
        </section>
    )
}
