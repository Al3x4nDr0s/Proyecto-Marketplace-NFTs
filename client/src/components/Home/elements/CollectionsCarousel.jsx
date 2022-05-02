import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { Scrollbar, Pagination, Navigation, Autoplay } from "swiper";
import styled from "styled-components";

import image1 from "../../../assets/img-carousel/img1.webp";
import image2 from "../../../assets/img-carousel/img2.png";
import image3 from "../../../assets/img-carousel/img3.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const ContainerCarousel = styled.div`
  width: 85%;
  margin: 0 auto;
  position: relative;
`;

const SlideMain = styled.div`
  width: 90%;
  max-width: 85%;
  margin: 0 auto;
  height: 75vh;
  text-align: center;
  background-image: ${(props) =>
    `url(${props.backgroundImage})` || "url('../../../assets/imagen1.png')"};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  line-height: 500px;
`;

const ContainerDataCollections = styled.div`
  width: 71%;
  position: absolute;
  bottom: 0;
  right: 120px;
  z-index: 1000;
  margin: 0 auto;
`;

const Slide = (props) => {
  const { backgroundImage } = props;

  return <SlideMain backgroundImage={backgroundImage} />;
};

export const CollectionsCarousel = () => {
  return (
    <div>
      <ContainerCarousel>
        <Swiper
          modules={[Pagination, Scrollbar, Navigation, Autoplay]}
          navigation
          autoplay={{
            delay: 2500,
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
        {/* <ContainerDataCollections>
          <h1 style={{ color: "var(--secondFontColor)", fontSize: "45px" }}>
            Collections
          </h1>
        </ContainerDataCollections> */}
      </ContainerCarousel>
    </div>
  );
};
