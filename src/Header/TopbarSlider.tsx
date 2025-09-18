
import React from 'react';
import Slider from 'react-slick';

interface TopbarSliderProps {
  customClass?: string;
}

const TopbarSlider: React.FC<TopbarSliderProps> = ({ customClass }) => {
  const topBarContent = [
    { content: 'Free shipping on orders over $50' },
    { content: 'New Arrivals! Shop Now!' },
  ];

  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className={`notification-slider ${customClass || ''}`}>
      <Slider {...sliderSettings}>
        {topBarContent.map((elem, i) => (
          <div key={i} className='timer-notification'>
            <h6 dangerouslySetInnerHTML={{ __html: elem.content }} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TopbarSlider;
