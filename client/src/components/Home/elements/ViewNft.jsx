import React from "react";

import styled from "styled-components";

import { Pagination, Autoplay, Navigation, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// import {IoIosMenu} from "react-icons/io";

import { ImStack } from "react-icons/im";




import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const ContainerNFT = styled.div`
  width: 90%;
  margin: 0 auto;
  /* background-color: var(--mainContainersColor); */
`;

const NftTitle = styled.h1`
  font-size: 1.5rem;
  color: var(--secondFontColor);
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid var(--mainBackGroundButtonColor);
`;

const ContainerCards = styled.div`
  display: flex;
  gap: 20px;
`;

const Cards = styled.div`
  content: "";
  width: 240px;
  text-align: center;
  line-height: 300px;
  height: 300px;
  color: var(--secondFontColor);
  border-radius: 1rem;
  background-color: #50505068;
  /* background-color: var(--mainContainersColor); */
`;

export const ViewNft = () => {
  return (
    <ContainerNFT>
      <NftTitle>Gaming</NftTitle>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={20}
        slidesPerView={5}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        a11y={{
          prevSlideMessage: "Previous slide",
          nextSlideMessage: "Next slide",
        }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <Cards>Slide 1 <ImStack /></Cards>
        </SwiperSlide>
        <SwiperSlide>
          <Cards>Slide 2</Cards>
        </SwiperSlide>
        <SwiperSlide>
          <Cards>Slide 3</Cards>
        </SwiperSlide>
        <SwiperSlide>
          <Cards>Slide 4</Cards>
        </SwiperSlide>
        <SwiperSlide>
          <Cards>Slide 5  <ImStack /></Cards>
        </SwiperSlide>
        <SwiperSlide>
          <Cards>Slide 6</Cards>
        </SwiperSlide>
        <SwiperSlide>
          <Cards>Slide 7</Cards>
        </SwiperSlide>
        <SwiperSlide>
          <Cards>Slide 8</Cards>
        </SwiperSlide>
        <SwiperSlide>
          <Cards>Slide 9</Cards>
        </SwiperSlide>
      </Swiper>
      <NftTitle>Deportes</NftTitle>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={20}
        slidesPerView={5}
        // navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <Cards>Slide 1</Cards>
        </SwiperSlide>
        <SwiperSlide>
          <Cards>Slide 2</Cards>
        </SwiperSlide>
        <SwiperSlide>
          <Cards>Slide 3</Cards>
        </SwiperSlide>
        <SwiperSlide>
          <Cards>Slide 4</Cards>
        </SwiperSlide>
        <SwiperSlide>
          <Cards>Slide 5</Cards>
        </SwiperSlide>
        <SwiperSlide>
          <Cards>Slide 6</Cards>
        </SwiperSlide>
        <SwiperSlide>
          <Cards>Slide 7</Cards>
        </SwiperSlide>
        <SwiperSlide>
          <Cards>Slide 8</Cards>
        </SwiperSlide>
        <SwiperSlide>
          <Cards>Slide 9</Cards>
        </SwiperSlide>
      </Swiper>

      <NftTitle>Multiverse</NftTitle>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={20}
        slidesPerView={5}
        // navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <Cards>Slide 1</Cards>
        </SwiperSlide>
        <SwiperSlide>
          <Cards>Slide 2</Cards>
        </SwiperSlide>
        <SwiperSlide>
          <Cards>Slide 3</Cards>
        </SwiperSlide>
        <SwiperSlide>
          <Cards>Slide 4</Cards>
        </SwiperSlide>
        <SwiperSlide>
          <Cards>Slide 5</Cards>
        </SwiperSlide>
        <SwiperSlide>
          <Cards>Slide 6</Cards>
        </SwiperSlide>
        <SwiperSlide>
          <Cards>Slide 7</Cards>
        </SwiperSlide>
        <SwiperSlide>
          <Cards>Slide 8</Cards>
        </SwiperSlide>
        <SwiperSlide>
          <Cards>Slide 9</Cards>
        </SwiperSlide>
      </Swiper>

      {/* 
      <ContainerCards>
        
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
      </ContainerCards>
      
      <ContainerCards>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
      </ContainerCards>
      <NftTitle>Deportes</NftTitle>
      <ContainerCards>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
      </ContainerCards> */}
    </ContainerNFT>
  );
};
