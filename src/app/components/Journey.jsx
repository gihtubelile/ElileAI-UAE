"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

export const Journey = () => {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".journey-prev",
          prevEl: ".journey-next",
        }}
        breakpoints={{
          320: {
            // Mobile
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            // Tablet
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            // Desktop
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="journey-item mb-30 tp_fade_left">
            <span className="journey-item-number">01</span>
            <h5 className="journey-item-title">
              <a>2019</a>
            </h5>
            <p>We envisioned a future driven by autonomous AI systems.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="journey-item mb-30 tp_fade_left">
            <span className="journey-item-number">02</span>
            <h5 className="journey-item-title">
              <a>2020</a>
            </h5>
            <p>
              Launched and secured pivotal partnerships, most notably with
              Armis.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="journey-item mb-30 tp_fade_left">
            <span className="journey-item-number">03</span>
            <h5 className="journey-item-title">
              <a>2021</a>
            </h5>
            <p>
              Partnerships with US research universities, national labs, and
              govt. agencies.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="journey-item mb-30 tp_fade_left">
            <span className="journey-item-number">04</span>
            <h5 className="journey-item-title">
              <a>2022 </a>
            </h5>
            <p>
              Built AI solutions for gas turbines, solar plants, wind turbines,
              and desalination plants.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="journey-item mb-30 tp_fade_left">
            <span className="journey-item-number">05</span>
            <h5 className="journey-item-title">
              <a>2023</a>
            </h5>
            <p>
              Expanded multi-agent AI and our proprietary AI operating system,
              ElectrOS.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="journey-item mb-30 tp_fade_left">
            <span className="journey-item-number">06</span>
            <h5 className="journey-item-title">
              <a>2024</a>
            </h5>
            <p>
              Driving industrial autonomy and predictive intelligence with
              clients like ACWA Power.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="journey-item mb-30 tp_fade_left">
            <span className="journey-item-number">07</span>
            <h5 className="journey-item-title">
              <a>2025</a>
            </h5>
            <p>
              Scaling AI solutions across data centers, critical infrastructure,
              and new industries.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="journey-item mb-30 tp_fade_left">
            <span className="journey-item-number">08</span>
            <h5 className="journey-item-title">
              <a>2026</a>
            </h5>
            <p>
              Expanding Generative AI and LLM-based models for vendor-agnostic
              operations.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
