import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Slider1 from '../../../assets/image/slider1.jpg';
import Slider2 from '../../../assets/image/slider2.jpg';
import Slider3 from '../../../assets/image/slider3.jpg';
import Heading3 from '../../utilities/Heading3';
import Paeragrap1 from '../../utilities/Paeragrap1';
import Button from '../../utilities/Button';

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
        <div className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white text-center px-4 py-2 rounded-lg text-lg md:text-xl w-[90%] md:w-[70%] lg:w-1/2">
            <Heading3 className="!text-color-neutral-0 !text-xl !md:text-[36px]" content="Superior Dubble Room"/>
            <Paeragrap1 className="!text-color-neutral-0 my-3 md:my-8 hidden sm:block" content="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse sollicitudin velit sed leo. Ut pharetra augue nec augue. Nam elit agna, endrerit sit amet." />
            <div className="">
                <Button className="md:mr-8 mr-3" content="Book Now" />
                <Button content="details" />
            </div>
        </div>
      </div>
      <div className="relative">
        <img src={Slider2} alt="Slide 2" className="w-full h-auto object-cover" />
        <div className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white text-center px-4 py-2 rounded-lg text-lg md:text-xl w-[90%] md:w-[70%] lg:w-1/2">
            <Heading3 className="!text-color-neutral-0 !text-xl !md:text-[36px]" content="Superior Dubble Room"/>
            <Paeragrap1 className="!text-color-neutral-0 my-3 md:my-8 hidden sm:block" content="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse sollicitudin velit sed leo. Ut pharetra augue nec augue. Nam elit agna, endrerit sit amet." />
            <div className="">
                <Button className="md:mr-8 mr-3" content="Book Now" />
                <Button content="details" />
            </div>
        </div>
      </div>
      <div className="relative">
        <img src={Slider3} alt="Slide 3" className="w-full h-auto object-cover" />
        <div className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white text-center px-4 py-2 rounded-lg text-lg md:text-xl w-[90%] md:w-[70%] lg:w-1/2">
            <Heading3 className="!text-color-neutral-0 !text-xl !md:text-[36px]" content="Superior Dubble Room"/>
            <Paeragrap1 className="!text-color-neutral-0 my-3 md:my-8 hidden sm:block" content="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse sollicitudin velit sed leo. Ut pharetra augue nec augue. Nam elit agna, endrerit sit amet." />
            <div className="">
                <Button className="md:mr-8 mr-3" content="Book Now" />
                <Button content="details" />
            </div>
        </div>
      </div>
      <div className="relative">
        <img src={Slider1} alt="Slide 4" className="w-full h-full object-cover" />
        <div className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white text-center px-4 py-2 rounded-lg text-lg md:text-xl w-[90%] md:w-[70%] lg:w-1/2">
            <Heading3 className="!text-color-neutral-0 !text-xl !md:text-[36px]" content="Superior Dubble Room"/>
            <Paeragrap1 className="!text-color-neutral-0 my-3 md:my-8 hidden sm:block" content="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse sollicitudin velit sed leo. Ut pharetra augue nec augue. Nam elit agna, endrerit sit amet." />
            <div className="">
                <Button className="md:mr-8 mr-3" content="Book Now" />
                <Button content="details" />
            </div>
        </div>
      </div>
      <div className="relative">
        <img src={Slider3} alt="Slide 5" className="w-full h-full object-cover" />
        <div className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white text-center px-4 py-2 rounded-lg text-lg md:text-xl w-[90%] md:w-[70%] lg:w-1/2">
            <Heading3 className="!text-color-neutral-0 !text-xl !md:text-[36px]" content="Superior Dubble Room"/>
            <Paeragrap1 className="!text-color-neutral-0 my-3 md:my-8 hidden sm:block" content="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse sollicitudin velit sed leo. Ut pharetra augue nec augue. Nam elit agna, endrerit sit amet." />
            <div className="">
                <Button className="md:mr-8 mr-3" content="Book Now" />
                <Button content="details" />
            </div>
        </div>
      </div>
      <div className="relative">
        <img src={Slider2} alt="Slide 6" className="w-full h-full object-cover" />
        <div className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white text-center px-4 py-2 rounded-lg text-lg md:text-xl w-[90%] md:w-[70%] lg:w-1/2">
            <Heading3 className="!text-color-neutral-0 !text-xl !md:text-[36px]" content="Superior Dubble Room"/>
            <Paeragrap1 className="!text-color-neutral-0 my-3 md:my-8 hidden sm:block" content="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse sollicitudin velit sed leo. Ut pharetra augue nec augue. Nam elit agna, endrerit sit amet." />
            <div className="">
                <Button className="md:mr-8 mr-3" content="Book Now" />
                <Button content="details" />
            </div>
        </div>
      </div>
    </Carousel>
    </div>
  );
};

export default SuperiorSlider;
