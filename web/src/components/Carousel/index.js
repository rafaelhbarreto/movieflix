import React from 'react';
import Slider from 'react-slick';

import CardSlide from '../Card';

import { SlideStyle } from './styles';

const Carousel = ({ items }) => {
  var sliderSettings = {
    className: 'center',
    centerMode: true,
    dots: true,
    infinite: true,
    centerPadding: '80px',
    slidesToShow: 4,
    speed: 1000,
  };

  return (
    <Slider {...sliderSettings}>
      {items.map((item, index) => (
        <SlideStyle key={index}>
          <CardSlide item={item} />
        </SlideStyle>
      ))}
    </Slider>
  );
};

export default Carousel;
