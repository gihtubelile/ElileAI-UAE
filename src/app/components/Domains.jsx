"use client";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";

export const Domains = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        loop={true}
        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: false,
        // }}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="row">
            <div className="col-xl-4">
              <div className="choose-us-style-two">
                <h2 className="title mb-3 mb-lg-5">
                  AI-optimized solar <br /> performance
                </h2>
                <div className="domain-desc">
                  <p className="desc">
                    Maximize solar energy yield with AI-driven photovoltaic
                    efficiency modelling, predictive fault detection, and
                    real-time grid balancing. Our multi-agent AI optimizes panel
                    orientation, mitigates shading losses, and autonomously
                    adjusts power distribution, ensuring higher energy output,
                    lower maintenance costs, and seamless grid
                    integration-making solar farms more resilient, adaptive, and
                    scalable.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-7 offset-xl-1 text-end">
              <div className="choose-us-style-two-thumb">
                <div className="curve-text">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 150 150"
                    version="1.1"
                  >
                    <path id="textPath" d="M 0,75 a 75,75 0 1,1 0,1 z"></path>
                    <text>
                      <textPath href="#textPath">
                        AI-optimized solar performance
                      </textPath>
                    </text>
                  </svg>
                </div>
                <h2 className="text-path">Solar PV</h2>
                <img
                  src="/img/domain/1.webp"
                  alt="Image Not Found"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="row">
            <div className="col-xl-4">
              <div className="choose-us-style-two">
                <h2 className="title mb-3 mb-lg-5">
                  Intelligent wind farm
                  <br /> optimization
                </h2>
                <div className="domain-desc">
                  <p className="desc">
                    Transform wind operations with AI-powered aerodynamic
                    control, self-optimizing yaw adjustments, and predictive
                    blade maintenance. Our adaptive multi-agent AI mitigates
                    wind turbulence losses, prevents mechanical failures, and
                    ensures real-time grid synchronization. With reinforcement
                    learning-driven energy forecasting, we boost power output,
                    extend turbine lifespan, and eliminate inefficiencies in
                    dynamic wind conditions.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-7 offset-xl-1 text-end">
              <div className="choose-us-style-two-thumb">
                <div className="curve-text">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 150 150"
                    version="1.1"
                  >
                    <path id="textPath" d="M 0,75 a 75,75 0 1,1 0,1 z"></path>
                    <text>
                      <textPath href="#textPath">
                        Intelligent wind farm optimization
                      </textPath>
                    </text>
                  </svg>
                </div>
                <h2 className="text-path">Wind Farms</h2>
                <img
                  src="/img/domain/2.webp"
                  alt="Image Not Found"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="row">
            <div className="col-xl-4">
              <div className="choose-us-style-two">
                <h2 className="title mb-3 mb-lg-5">
                  AI-driven turbine <br /> intelligence
                </h2>
                <div className="domain-desc">
                  <p className="desc">
                    Enhance turbine performance with real-time anomaly
                    detection, predictive maintenance, and AI-optimized
                    combustion efficiency. Our multi-agent AI autonomously
                    adjusts fuel-air ratios, prevents thermal degradation, and
                    optimizes operational loads, reducing downtime, emissions,
                    and maintenance costs. With self-learning diagnostics, gas
                    turbines achieve unparalleled reliability, longevity, and
                    energy efficiency.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-7 offset-xl-1 text-end">
              <div className="choose-us-style-two-thumb">
                <div className="curve-text">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 150 150"
                    version="1.1"
                  >
                    <path id="textPath" d="M 0,75 a 75,75 0 1,1 0,1 z"></path>
                    <text>
                      <textPath href="#textPath">
                        AI-driven turbine intelligence
                      </textPath>
                    </text>
                  </svg>
                </div>

                <h2 className="text-path">Gas Turbines</h2>
                <img
                  src="/img/domain/3.webp"
                  alt="Image Not Found"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="row">
            <div className="col-xl-4">
              <div className="choose-us-style-two">
                <h2 className="title mb-3 mb-lg-5">
                  AI-powered desal <br /> operations
                </h2>
                <div className="domain-desc">
                  <p className="desc">
                    Enhance turbine performance with real-time anomaly
                    detection, predictive maintenance, and AI-optimized
                    combustion efficiency. Our multi-agent AI autonomously
                    adjusts fuel-air ratios, prevents thermal degradation, and
                    optimizes operational loads, reducing downtime, emissions,
                    and maintenance costs. With self-learning diagnostics, gas
                    turbines achieve unparalleled reliability, longevity, and
                    energy efficiency.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-7 offset-xl-1 text-end">
              <div className="choose-us-style-two-thumb">
                <div className="curve-text">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 150 150"
                    version="1.1"
                  >
                    <path id="textPath" d="M 0,75 a 75,75 0 1,1 0,1 z"></path>
                    <text>
                      <textPath href="#textPath">
                        AI-powered desal operations
                      </textPath>
                    </text>
                  </svg>
                </div>

                <h2 className="text-path">Reverse Osmosis</h2>
                <img
                  src="/img/domain/4.webp"
                  alt="Image Not Found"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="row">
            <div className="col-xl-4">
              <div className="choose-us-style-two">
                <h2 className="title mb-3 mb-lg-5">
                  Autonomous data center optimization
                </h2>
                <div className="domain-desc">
                  <p className="desc">
                    Drive zero-downtime, energy-efficient data centers with
                    AI-powered cooling intelligence, predictive failure
                    mitigation, and adaptive workload distribution. Our AI
                    autonomously regulates thermal loads, optimizes power usage,
                    and prevents hardware failures, achieving 50% greater energy
                    efficiency, 70% lower downtime, and scalable infrastructure
                    resilience. The future of self-sustaining, AI-driven data
                    operations starts here.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-7 offset-xl-1 text-end">
              <div className="choose-us-style-two-thumb">
                <div className="curve-text">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 150 150"
                    version="1.1"
                  >
                    <path id="textPath" d="M 0,75 a 75,75 0 1,1 0,1 z"></path>
                    <text>
                      <textPath href="#textPath">
                        Autonomous data center optimization
                      </textPath>
                    </text>
                  </svg>
                </div>

                <h2 className="text-path">Data Centers</h2>
                <img
                  src="/img/domain/5.webp"
                  alt="Image Not Found"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
