import React from 'react'
import { Hero, FeatureCategory, BestSelling, NewRelease } from "../../components/index";

const Home = () => {
    return (
        <>
            <Hero />
            <FeatureCategory />
            <BestSelling />
            <NewRelease />
        </>
    )
}

export { Home }