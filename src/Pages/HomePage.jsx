import React from 'react'
import Slider from '../Components/Home/Slider/Slider'
import HomeCategorie from '../Components/Home/HomeCategorie/HomeCategorie'
import CardProductsCon from '../Components/CardProductsCon/CardProductsCon'
import DiscountBanner from '../Components/Home/DiscountBanner/DiscountBanner'
import BrandFeatured from '../Components/Brand/BrandFeatured'

const HomePage = () => {
    return (
        <div>
            <Slider />
            <HomeCategorie />
            <CardProductsCon title="Best Seller" btnTitle="More" />
            <DiscountBanner />
            <CardProductsCon title="Latest Fashion" btnTitle="More" />
            <BrandFeatured title="Brand Featured" btnTitle="More" />
        </div>
    )
}

export default HomePage