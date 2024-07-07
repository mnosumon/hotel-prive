import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import SpecalSlider1 from '../../../assets/image/specalSlider1.jpg';
import SpecalSlider2 from '../../../assets/image/specalSlider2.jpg';
import SpecalSlider3 from '../../../assets/image/specalSlider3.jpg';

function SampleNextArrow({ className, style, onClick }) {
    return (
        <div
            className={`${className} rounded-full p-2 transform -translate-y-1/2 top-1/2 right-0 hover:bg-color-primary`}
            style={{ ...style, display: "flex", justifyContent: "center", alignItems: "center", zIndex: 50 }}
            onClick={onClick}
        >
            <FaArrowRight className="text-black" />
        </div>
    );
}

function SamplePrevArrow({ className, style, onClick }) {
    return (
        <div
            className={`${className} rounded-full p-2 transform -translate-y-1/2 top-1/2 left-0 hover:bg-color-primary`}
            style={{ ...style, display: "flex", justifyContent: "center", alignItems: "center", zIndex: 50 }}
            onClick={onClick}
        >
            <FaArrowLeft className="text-black" />
        </div>
    );
}

const SpecialOffer = () => {
    const settings = {
        dots: true,
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
