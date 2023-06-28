import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import musicalvideo1 from '../../../assets/musicalvideo1.mp4';
import musicalvideo2 from '../../../assets/musicalvideo2.mp4';
import musicalvideo3 from '../../../assets/musicalvideo3.mp4';

const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
  background-color: black;
`;

const MainSlider = styled(Slider)`
  .slick-slide {
    width: 100%;
  }
  .slick-dots {
    bottom: 28px;
    .slick-active {
      button::before {
        color: #c1c1c1;
        font-size: 14px;
      }
    }
    button::before {
      color: #e9e9e9;
    }
  }
`;

const Carousel = () => {
  const Videos = [musicalvideo3, musicalvideo2, musicalvideo1];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Container>
      <MainSlider {...settings}>
        {Videos.map((video, index) => (
          <MovieCard
            key={index}
            width="560"
            height="315"
            src={video}
            frameBorder="0"
            autoPlay
            loop
            muted={(index === 1, 2)}
          />
        ))}
      </MainSlider>
    </Container>
  );
};

export default Carousel;

const MovieCard = styled.video`
  height: 600px;
`;
