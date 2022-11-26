import React from 'react';
import About from '../About/About';
import AdvertisedItems from '../AdvertisedItems/AdvertisedItems';
import Categories from '../Categories/Categories';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <About></About>
            <AdvertisedItems></AdvertisedItems>
            <Categories></Categories>
        </div>
    );
};

export default Home;