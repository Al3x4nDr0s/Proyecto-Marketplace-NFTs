import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { Scrollbar, Pagination, Navigation, Autoplay  } from "swiper";
import styled from "styled-components";

import image1 from '../../../assets/img-carousel/img1.webp';
import image2 from '../../../assets/img-carousel/img2.png';
import image3 from '../../../assets/img-carousel/img3.jpg';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const ContainerCarousel = styled.div`
  width: 85%;
  margin: 0 auto;
`;

const SlideMain = styled.div`
  content: "";
  width: 85%;
  margin: 0 auto;
  height: 600px;
  text-align: center;
  background-image: ${(props) => `url(${props.backgroundImage})` || "url('../../../assets/imagen1.png')"};
  background-size: cover;
  background-repeat: no-repeat;
  line-height: 500px;
`;

const Slide = (props) => {
    const {backgroundImage} = props

    return (
        <SlideMain backgroundImage={backgroundImage}/>
    )
}

export const CollectionsCarousel = () => {
  return (
    <ContainerCarousel>
      <Swiper
        modules={[Pagination, Scrollbar, Navigation, Autoplay]}
        navigation
        autoplay={{
            delay: 2500
        }}
        pagination={{ clickable: true }}
        slidesPerView={1}
      >
        <SwiperSlide>
          <Slide backgroundImage={image1}></Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide backgroundImage={image2}></Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide backgroundImage={image3}></Slide>
        </SwiperSlide>
      </Swiper>
    </ContainerCarousel>
  );
};
