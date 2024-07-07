import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Slider1 from '../../../assets/image/slider1.jpg';
import Slider2 from '../../../assets/image/slider2.jpg';
import Slider3 from '../../../assets/image/slider3.jpg';

const SuperiorSlider = () => {

  const onChange = (index) => {
    console.log(`Slide changed to: ${index}`);
  };

  const onClickItem = (index) => {
    console.log(`Item clicked: ${index}`);
  };

  const onClickThumb = (index) => {
    console.log(`Thumbnail clicked: ${index}`);
  };

  return (
    <div className="contaner my-28 px-2">
    <Carousel
      showArrows={true}
      onChange={onChange}
      onClickItem={onClickItem}
      onClickThumb={onClickThumb}
      showThumbs={true}
      infiniteLoop={true}
      autoPlay={true}
      interval={5000}
      transitionTime={500}
    >
      <div className="relative">
        <img src={Slider1} alt="Slide 1" className="w-full h-auto object-cover" />
        <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white text-center px-4 py-2 rounded-lg text-lg md:text-xl">Book Now</p>
      </div>
      <div className="relative">
        <img src={Slider2} alt="Slide 2" className="w-full h-auto object-cover" />
        <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white text-center px-4 py-2 rounded-lg text-lg md:text-xl">Book Now</p>
      </div>
      <div className="relative">
        <img src={Slider3} alt="Slide 3" className="w-full h-auto object-cover" />
        <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white text-center px-4 py-2 rounded-lg text-lg md:text-xl">Book Now</p>
      </div>
      <div className="relative">
        <img src={Slider1} alt="Slide 4" className="w-full h-full object-cover" />
        <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white text-center px-4 py-2 rounded-lg text-lg md:text-xl">Book Now</p>
      </div>
      <div className="relative">
        <img src={Slider3} alt="Slide 5" className="w-full h-full object-cover" />
        <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white text-center px-4 py-2 rounded-lg text-lg md:text-xl">Book Now</p>
      </div>
      <div className="relative">
        <img src={Slider2} alt="Slide 6" className="w-full h-full object-cover" />
        <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white text-center px-4 py-2 rounded-lg text-lg md:text-xl">Book Now</p>
      </div>
    </Carousel>
    </div>
  );
};

export default SuperiorSlider;
