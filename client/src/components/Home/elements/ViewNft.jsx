import React, { useEffect } from "react";

import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { Autoplay, Navigation, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Pagination } from "swiper/core";

import {
  ContainerNFT,
  NftTitle,
  ContainerCardNft,
} from "./StylesHome/ViewNftStyles.jsx";

import { Link } from "react-router-dom";

import { CardNft } from "./CardNft.jsx";

import { getAllNft } from "../../../redux/actions/index";

import {
  FcSteam,
  FcSportsMode,
  FcStumbleupon,
  FcSignature,
} from "react-icons/fc";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const ContainerTitleCategory = styled.div`
  border-bottom: 1px solid var(--mainBackGroundButtonColor);
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;

  a {
    text-decoration: none;
    font-size: var(--large);
    color: var(--secondFontColor);

    &:hover {
      text-decoration-line: underline;
      text-decoration-thickness: 3px;
    }
  }
`;

SwiperCore.use([Pagination]);

export const ViewNft = () => {
  const nft = useSelector((state) => state.nfts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllNft());
  }, []);

  return (
    <ContainerNFT>
      <h2 style={{textAlign: "center", color: "var(--secondFontColor)", fontSize: '2rem', margin: "2.2rem 0 2.2rem 0"}}>Categories</h2>
      <ContainerTitleCategory>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <NftTitle>Gaming</NftTitle>
          <FcSteam style={{ width: "30px", height: "30px" }} />
        </div>
        <Link to={`category/gaming`}>All Category</Link>
      </ContainerTitleCategory>
      <Swiper
        modules={[Navigation, Scrollbar, A11y, Autoplay]}
        // spaceBetween={125}
        // slidesPerView={(ancho > 1300) ? 5 : 2}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        // centeredSlides={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          980: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1400: {
            slidesPerView: 4,
            width: "1260",
            spaceBetween: 45,
          },
        }}
        a11y={{
          prevSlideMessage: "Previous slide",
          nextSlideMessage: "Next slide",
        }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        {nft.length ? (
          nft
            .filter((x) => x.category.name === "Gaming")
            .map((x) => (
              <SwiperSlide>
                <CardNft
                  image={x.image}
                  name={x.name}
                  price={x.price}
                  files={x.files_types.name}
                  category={x.category}
                  currency={x.currencies}
                  salestype={x.sales_types.name}
                  id={x._id}
                  key={x._id}
                />
              </SwiperSlide>
            ))
        ) : (
          <>
            <SwiperSlide>
              <CardNft />
            </SwiperSlide>
            <SwiperSlide>
              <CardNft />
            </SwiperSlide>
            <SwiperSlide>
              <CardNft />
            </SwiperSlide>
            <SwiperSlide>
              <CardNft />
            </SwiperSlide>
            <SwiperSlide>
              <CardNft />
            </SwiperSlide>
            <SwiperSlide>
              <CardNft />
            </SwiperSlide>
          </>
        )}
      </Swiper>
      <ContainerTitleCategory>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <NftTitle>Deportes</NftTitle>
          <FcSportsMode style={{ width: "30px", height: "30px" }} />
        </div>
        <Link to={`category/deport`}>All Category</Link>
      </ContainerTitleCategory>
      <Swiper
        modules={[Navigation, Scrollbar, A11y, Autoplay]}
        // spaceBetween={125}
        // slidesPerView={5}
        // navigation
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          980: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1400: {
            slidesPerView: 4,
            width: "1260",
            spaceBetween: 45,
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {nft
          ?.filter((x) => x.category.name === "Sports")
          .map((x) => (
            <SwiperSlide>
              <CardNft
                image={x.image}
                name={x.name}
                price={x.price}
                files={x.files_types.name}
                category={x.category}
                currency={x.currencies}
                salestype={x.sales_types.name}
                id={x._id}
                key={x._id}
              />
            </SwiperSlide>
          ))}
      </Swiper>
      <ContainerTitleCategory>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <NftTitle>Multiverse</NftTitle>
          <FcStumbleupon style={{ width: "30px", height: "30px" }} />
        </div>
        <Link to={`category/multiverse`}>All Category</Link>
      </ContainerTitleCategory>
      <Swiper
        modules={[Navigation, Scrollbar, A11y, Autoplay]}
        // spaceBetween={125}
        // slidesPerView={5}
        // navigation
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          980: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1400: {
            slidesPerView: 4,
            width: "1260",
            spaceBetween: 45,
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {nft
          ?.filter((x) => x.category.name === "Entertainment")
          .map((x) => (
            <SwiperSlide>
              <CardNft
                image={x.image}
                name={x.name}
                price={x.price}
                files={x.files_types.name}
                category={x.category}
                currency={x.currencies}
                salestype={x.sales_types.name}
                id={x._id}
                key={x._id}
              />
            </SwiperSlide>
          ))}
      </Swiper>
      <ContainerTitleCategory>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <NftTitle>Arte</NftTitle>
          <FcSignature style={{ width: "30px", height: "30px" }} />
        </div>
        <Link to={`category/art`}>All Category</Link>
      </ContainerTitleCategory>
      <Swiper
        modules={[Navigation, Scrollbar, A11y, Autoplay]}
        // spaceBetween={125}
        // slidesPerView={5}
        // navigation
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          980: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1400: {
            slidesPerView: 4,
            width: "1260",
            spaceBetween: 45,
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {nft
          ?.filter((x) => x.category.name === "Art")
          .map((x) => (
            <SwiperSlide>
              <CardNft
                image={x.image}
                name={x.name}
                price={x.price}
                files={x.files_types.name}
                category={x.category}
                currency={x.currencies}
                salestype={x.sales_types.name}
                id={x._id}
                key={x._id}
              />
            </SwiperSlide>
          ))}
      </Swiper>
      <ContainerTitleCategory>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <NftTitle>eSports</NftTitle>
          <FcStumbleupon style={{ width: "30px", height: "30px" }} />
        </div>
        <Link to={`category/multiverse`}>All Category</Link>
      </ContainerTitleCategory>
      <Swiper
        modules={[Navigation, Scrollbar, A11y, Autoplay]}
        // spaceBetween={125}
        // slidesPerView={5}
        // navigation
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          980: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1400: {
            slidesPerView: 4,
            width: "1260",
            spaceBetween: 45,
          },
        }}
        // width=
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {nft
          ?.filter((x) => x.category.name === "eSports")
          .map((x) => (
            <SwiperSlide>
              <CardNft
                image={x.image}
                name={x.name}
                price={x.price}
                files={x.files_types.name}
                category={x.category}
                currency={x.currencies}
                salestype={x.sales_types.name}
                id={x._id}
                key={x._id}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </ContainerNFT>
  );
};
