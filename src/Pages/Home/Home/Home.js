import React from 'react';
import About from '../About/About';
import AdvertisedItems from '../AdvertisedItems/AdvertisedItems';
import Categories from '../Categories/Categories';
import Contact from '../Contact/Contact';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <About></About>
            <AdvertisedItems></AdvertisedItems>
            <Categories></Categories>
            <Contact></Contact>
        </div>
    );
};

export default Home;