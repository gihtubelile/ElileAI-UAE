"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay } from "swiper/modules";

export const Testimonial = () => {
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
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="testimonial-item">
            <div className="testimonial-item-top">
              <ul className="testimonial-rating list-unstyled">
                <li>
                  <i className="fa-solid fa-star"></i>
                </li>
                <li>
                  <i className="fa-solid fa-star"></i>
                </li>
                <li>
                  <i className="fa-solid fa-star"></i>
                </li>
                <li>
                  <i className="fa-solid fa-star"></i>
                </li>
                <li>
                  <i className="fa-solid fa-star"></i>
                </li>
              </ul>
              <div className="testimonial-icon">
                <svg
                  width="15"
                  height="12"
                  viewBox="0 0 15 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.49014 10.9091C2.041 10.3704 2.55055 9.72391 3.01878 8.9697C3.45947 8.21549 3.74867 7.46128 3.88638 6.70707C2.86729 6.70707 2.02723 6.42424 1.3662 5.85859C0.67762 5.29293 0.333332 4.49832 0.333332 3.47475C0.333332 2.47811 0.650078 1.6431 1.28357 0.969695C1.88951 0.323231 2.68826 0 3.67981 0C4.67136 0 5.48388 0.336699 6.11737 1.0101C6.72332 1.71044 7.02629 2.55892 7.02629 3.55555C7.02629 5.22559 6.61314 6.82828 5.78685 8.36364C4.96056 9.92593 3.91393 11.138 2.64695 12L1.49014 10.9091ZM9.46385 10.9091C10.0147 10.3704 10.5243 9.72391 10.9925 8.9697C11.4332 8.21549 11.7224 7.46128 11.8601 6.70707C10.841 6.70707 10.0009 6.42424 9.33991 5.85859C8.65133 5.29293 8.30704 4.49832 8.30704 3.47475C8.30704 2.47811 8.62379 1.6431 9.25728 0.969695C9.86322 0.323231 10.662 0 11.6535 0C12.6451 0 13.4576 0.336699 14.0911 1.0101C14.697 1.71044 15 2.55892 15 3.55555C15 5.22559 14.5869 6.82828 13.7606 8.36364C12.9343 9.92593 11.8876 11.138 10.6207 12L9.46385 10.9091Z"
                    fill="currentColor"
                    fillOpacity="1"
                  ></path>
                </svg>
              </div>
              <p>
                Elile AI’s autonomous operations framework has made a big
                difference, cutting down on downtime and boosting energy output.
                The real-time monitoring and predictive maintenance models are
                helping us spot potential issues before they become costly.
                We’ve seen a 90% improvement in our alert systems.
              </p>
            </div>
            <div className="testimonial-head">
              <div className="testimonial-head-info">
                <h6>ACWA, Middle East </h6>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-item">
            <div className="testimonial-item-top">
              <ul className="testimonial-rating list-unstyled">
                <li>
                  <i className="fa-solid fa-star"></i>
                </li>
                <li>
                  <i className="fa-solid fa-star"></i>
                </li>
                <li>
                  <i className="fa-solid fa-star"></i>
                </li>
                <li>
                  <i className="fa-solid fa-star"></i>
                </li>
                <li>
                  <i className="fa-solid fa-star"></i>
                </li>
              </ul>
              <div className="testimonial-icon">
                <svg
                  width="15"
                  height="12"
                  viewBox="0 0 15 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.49014 10.9091C2.041 10.3704 2.55055 9.72391 3.01878 8.9697C3.45947 8.21549 3.74867 7.46128 3.88638 6.70707C2.86729 6.70707 2.02723 6.42424 1.3662 5.85859C0.67762 5.29293 0.333332 4.49832 0.333332 3.47475C0.333332 2.47811 0.650078 1.6431 1.28357 0.969695C1.88951 0.323231 2.68826 0 3.67981 0C4.67136 0 5.48388 0.336699 6.11737 1.0101C6.72332 1.71044 7.02629 2.55892 7.02629 3.55555C7.02629 5.22559 6.61314 6.82828 5.78685 8.36364C4.96056 9.92593 3.91393 11.138 2.64695 12L1.49014 10.9091ZM9.46385 10.9091C10.0147 10.3704 10.5243 9.72391 10.9925 8.9697C11.4332 8.21549 11.7224 7.46128 11.8601 6.70707C10.841 6.70707 10.0009 6.42424 9.33991 5.85859C8.65133 5.29293 8.30704 4.49832 8.30704 3.47475C8.30704 2.47811 8.62379 1.6431 9.25728 0.969695C9.86322 0.323231 10.662 0 11.6535 0C12.6451 0 13.4576 0.336699 14.0911 1.0101C14.697 1.71044 15 2.55892 15 3.55555C15 5.22559 14.5869 6.82828 13.7606 8.36364C12.9343 9.92593 11.8876 11.138 10.6207 12L9.46385 10.9091Z"
                    fill="currentColor"
                    fillOpacity="1"
                  ></path>
                </svg>
              </div>
              <p>
                Their automated fault diagnosis and self-healing features help
                us run operations with minimal human intervention, which has
                significantly cut our operational costs. The real-time insights
                from their customized dashboards allow us to make data-driven
                decisions. Their approach is unlike anything else we’ve
                experienced!
              </p>
            </div>
            <div className="testimonial-head">
              <div className="testimonial-head-info">
                <h6>SK Gulf, Oman</h6>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-item">
            <div className="testimonial-item-top">
              <ul className="testimonial-rating list-unstyled">
                <li>
                  <i className="fa-solid fa-star"></i>
                </li>
                <li>
                  <i className="fa-solid fa-star"></i>
                </li>
                <li>
                  <i className="fa-solid fa-star"></i>
                </li>
                <li>
                  <i className="fa-solid fa-star"></i>
                </li>
                <li>
                  <i className="fa-solid fa-star"></i>
                </li>
              </ul>
              <div className="testimonial-icon">
                <svg
                  width="15"
                  height="12"
                  viewBox="0 0 15 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.49014 10.9091C2.041 10.3704 2.55055 9.72391 3.01878 8.9697C3.45947 8.21549 3.74867 7.46128 3.88638 6.70707C2.86729 6.70707 2.02723 6.42424 1.3662 5.85859C0.67762 5.29293 0.333332 4.49832 0.333332 3.47475C0.333332 2.47811 0.650078 1.6431 1.28357 0.969695C1.88951 0.323231 2.68826 0 3.67981 0C4.67136 0 5.48388 0.336699 6.11737 1.0101C6.72332 1.71044 7.02629 2.55892 7.02629 3.55555C7.02629 5.22559 6.61314 6.82828 5.78685 8.36364C4.96056 9.92593 3.91393 11.138 2.64695 12L1.49014 10.9091ZM9.46385 10.9091C10.0147 10.3704 10.5243 9.72391 10.9925 8.9697C11.4332 8.21549 11.7224 7.46128 11.8601 6.70707C10.841 6.70707 10.0009 6.42424 9.33991 5.85859C8.65133 5.29293 8.30704 4.49832 8.30704 3.47475C8.30704 2.47811 8.62379 1.6431 9.25728 0.969695C9.86322 0.323231 10.662 0 11.6535 0C12.6451 0 13.4576 0.336699 14.0911 1.0101C14.697 1.71044 15 2.55892 15 3.55555C15 5.22559 14.5869 6.82828 13.7606 8.36364C12.9343 9.92593 11.8876 11.138 10.6207 12L9.46385 10.9091Z"
                    fill="currentColor"
                    fillOpacity="1"
                  ></path>
                </svg>
              </div>
              <p>
                Elile AI’s technology is leading the way in energy innovation.
                Their system for alert generation, tracking, and diagnostics has
                made our operations much more reliable and efficient. The
                seamless integration with our existing setup and the ability to
                predict equipment failures have saved us from unexpected
                downtimes.
              </p>
            </div>
            <div className="testimonial-head">
              <div className="testimonial-head-info">
                <h6>KCN Networks</h6>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-item">
            <div className="testimonial-item-top">
              <ul className="testimonial-rating list-unstyled">
                <li>
                  <i className="fa-solid fa-star"></i>
                </li>
                <li>
                  <i className="fa-solid fa-star"></i>
                </li>
                <li>
                  <i className="fa-solid fa-star"></i>
                </li>
                <li>
                  <i className="fa-solid fa-star"></i>
                </li>
                <li>
                  <i className="fa-solid fa-star"></i>
                </li>
              </ul>
              <div className="testimonial-icon">
                <svg
                  width="15"
                  height="12"
                  viewBox="0 0 15 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.49014 10.9091C2.041 10.3704 2.55055 9.72391 3.01878 8.9697C3.45947 8.21549 3.74867 7.46128 3.88638 6.70707C2.86729 6.70707 2.02723 6.42424 1.3662 5.85859C0.67762 5.29293 0.333332 4.49832 0.333332 3.47475C0.333332 2.47811 0.650078 1.6431 1.28357 0.969695C1.88951 0.323231 2.68826 0 3.67981 0C4.67136 0 5.48388 0.336699 6.11737 1.0101C6.72332 1.71044 7.02629 2.55892 7.02629 3.55555C7.02629 5.22559 6.61314 6.82828 5.78685 8.36364C4.96056 9.92593 3.91393 11.138 2.64695 12L1.49014 10.9091ZM9.46385 10.9091C10.0147 10.3704 10.5243 9.72391 10.9925 8.9697C11.4332 8.21549 11.7224 7.46128 11.8601 6.70707C10.841 6.70707 10.0009 6.42424 9.33991 5.85859C8.65133 5.29293 8.30704 4.49832 8.30704 3.47475C8.30704 2.47811 8.62379 1.6431 9.25728 0.969695C9.86322 0.323231 10.662 0 11.6535 0C12.6451 0 13.4576 0.336699 14.0911 1.0101C14.697 1.71044 15 2.55892 15 3.55555C15 5.22559 14.5869 6.82828 13.7606 8.36364C12.9343 9.92593 11.8876 11.138 10.6207 12L9.46385 10.9091Z"
                    fill="currentColor"
                    fillOpacity="1"
                  ></path>
                </svg>
              </div>
              <p>
                Elile has given us the flexibility and security we need to
                manage our systems, thanks to their hybrid cloud architecture
                and cybersecurity solutions. The use of distributed databases
                and serverless architectures means we experience low latency and
                can easily scale up. Elile is truly the best partner for AI
                solutions.
              </p>
            </div>
            <div className="testimonial-head">
              <div className="testimonial-head-info">
                <h6>Truleum Studios</h6>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
