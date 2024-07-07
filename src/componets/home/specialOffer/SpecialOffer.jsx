import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SpecalSlider1 from '../../../assets/image/specalSlider1.jpg'
import SpecalSlider2 from '../../../assets/image/specalSlider2.jpg'
import SpecalSlider3 from '../../../assets/image/specalSlider3.jpg'

const SpecialOffer = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        responsive: [
            {
              breakpoint: 922,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 320,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
  return (
    <>
    <div className="container">
    <Slider {...settings}>
      <div>
        <img className='img-fluid px-1' src={SpecalSlider1} alt="SpecalSlider Img" />
      </div>
      <div>
      <img className='img-fluid px-1' src={SpecalSlider2} alt="SpecalSlider Img" />
      </div>
      <div>
      <img className='img-fluid px-1' src={SpecalSlider3} alt="SpecalSlider Img" />
      </div>
      <div>
      <img className='img-fluid px-1' src={SpecalSlider1} alt="SpecalSlider Img" />
      </div>
      <div>
      <img className='img-fluid px-1' src={SpecalSlider2} alt="SpecalSlider Img" />
      </div>
      <div>
      <img className='img-fluid px-1' src={SpecalSlider3} alt="SpecalSlider Img" />
      </div>
    </Slider>
    </div>
    </>
  )
}

export default SpecialOffer