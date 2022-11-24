import React from 'react';
import guitar from '../../../assets/slider-image/guitar.jpg';
import piano from '../../../assets/slider-image/piano.jpg';
import saxophone from '../../../assets/slider-image/saxophone.jpg';
import leadGuitar from '../../../assets/slider-image/leadGuitar.jpg';
import drum from '../../../assets/slider-image/drum.jpg';
import { Carousel } from 'flowbite-react';

const Slider = () => {
    return (
        <div className="h-56 sm:h-64 xl:h-[500px] 2xl:h-96">
            <Carousel>
                <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                    <img src={guitar} alt="guitar" className='w-full' />
                </div>
                <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                    <img src={piano} alt="piano" className='w-full' />
                </div>
                <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                    <img src={saxophone} alt="saxophone" className='w-full' />
                </div>
                <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                    <img src={leadGuitar} alt="leadGuitar" className='w-full' />
                </div>
                <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                    <img src={drum} alt="drum" className='w-full' />
                </div>
            </Carousel>
        </div>
    );
};

export default Slider;