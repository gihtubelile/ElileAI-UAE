"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";

export const Capability = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="capability-wapper">
            <div className="row">
              <div className="col-xl-6">
                <div className="case-thumb">
                  <img src="/img/gallery/1.webp" alt="Image Not Found" />
                </div>
              </div>
              <div className="col-xl-6">
                <div
                  className="info text-light"
                  // style="background-image: url(assets/img/shape/banner-3.webp);"
                >
                  <h2>Predict</h2>
                  <p>
                    Our predictive capabilities leverage AI models like deep
                    learning, Bayesian networks, and probabilistic graphical
                    models to anticipate failures before they occur. Using
                    high-resolution time-series forecasting, federated learning,
                    and anomaly detection, we process real-time data from SCADA,
                    IoT sensors, and edge computing nodes. Built on
                    domain-specific datasets, our models dynamically
                    recalibrate, enabling millisecond-precision predictive
                    maintenance while continuously improving failure
                    classification and degradation modelling.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="capability-wapper">
            <div className="row">
              <div className="col-xl-6">
                <div className="case-thumb">
                  <img src="/img/gallery/2.webp" alt="Image Not Found" />
                </div>
              </div>
              <div className="col-xl-6">
                <div className="info text-light">
                  <h2>Prevent</h2>
                  <p>
                    We employ decentralized AI and multi-agent reinforcement
                    learning for autonomous management. Edge AI ensures
                    ultra-low latency anomaly detection and rapid response.
                    Reinforcement learning dynamically optimizes maintenance
                    schedules based on probabilistic failure scenarios.
                    AI-driven digital twins simulate real-time stress tests,
                    enabling early interventions before failures cascade. With
                    causal inference, cross-asset correlation analytics, and
                    graph neural networks, we enhance infrastructure resilience
                    while minimizing risk and downtime.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="capability-wapper">
            <div className="row">
              <div className="col-xl-6">
                <div className="case-thumb">
                  <img src="/img/gallery/3.webp" alt="Image Not Found" />
                </div>
              </div>
              <div className="col-xl-6">
                <div className="info text-light">
                  <h2>Perform</h2>
                  <p>
                    We optimize critical infrastructure using convex
                    optimization, deep reinforcement learning, and neural
                    network-based predictive controllers. Model Predictive
                    Control (MPC) ensures real-time operational adjustments,
                    maximizing efficiency. Distributed Ledger Technology (DLT)
                    secures transactions and decentralizes asset management.
                    Genetic algorithms, ensemble learning, and swarm
                    intelligence continuously refine optimization strategies,
                    adapting dynamically to infra conditions and power
                    variability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
