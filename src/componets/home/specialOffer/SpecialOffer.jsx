import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SpecalSlider1 from '../../../assets/image/specalSlider1.jpg';
import SpecalSlider2 from '../../../assets/image/specalSlider2.jpg';
import SpecalSlider3 from '../../../assets/image/specalSlider3.jpg';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`slick-prev left-[-2%] sm:left-[-0.5%]  md:left-[1%] rounded-full p-2 transform -translate-y-1/2 top-1/2  flex justify-center items-center z-50 ${className}`}
        style={{ ...style }}
        onClick={onClick}
      >
        <FaAngleLeft className='text-2xl text-black' />
      </div>
    );
  };
  
  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`slick-next rounded-full p-2 transform -translate-y-1/2 top-1/2 right-[4%] sm:right-[3%] flex justify-center items-center z-50 ${className}`}
        style={{ ...style }}
        onClick={onClick}
      >
        <FaAngleRight className='text-2xl text-black' />
      </div>
    );
  };
  

// function SampleNextArrow({ className, style, onClick }) {
//     return (
//         <div
//             className={`${className} rounded-full p-2 transform -translate-y-1/2 top-1/2 right-0 hover:bg-color-primary`}
//             style={{ ...style, display: "flex", justifyContent: "center", alignItems: "center", zIndex: 50 }}
//             onClick={onClick}
//         >
//         </div>
//     );
// }

// function SamplePrevArrow({ className, style, onClick }) {
//     return (
//         <div
//             className={`${className} rounded-full p-2 transform -translate-y-1/2 top-1/2 left-0 hover:bg-color-primary`}
//             style={{ ...style, display: "flex", justifyContent: "center", alignItems: "center", zIndex: 50 }}
//             onClick={onClick}
//         >
//         </div>
//     );
// }

const SpecialOffer = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="container mx-auto">
            <Slider {...settings}>
                {[SpecalSlider1, SpecalSlider2, SpecalSlider3, SpecalSlider1, SpecalSlider2, SpecalSlider3].map((image, index) => (
                    <div key={index}>
                        <img className='w-full px-1' src={image} alt={`Special Slider Img ${index + 1}`} />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default SpecialOffer;
