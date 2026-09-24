import React from "react";
import Link from "next/link";
import PerformanceTab from "../components/PerformanceTab";

const Page = () => {
  return (
    <>
      {/* ----------- Page Banner --------- */}
      <section
        className="breadcrumb-area custom-breadcrumb bg-green bg-cover"
        style={{
          backgroundImage: `url('/img/performance-optimization-banner.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
        }}
      >
        <div className="container">
          <div className="breadcrumb-item">
            <div className="row">
              <div className="col-lg-8 ">
                <nav className="woocommerce-breadcrumb" aria-label="Breadcrumb">
                  <Link href="/">Home</Link> / Performance Optimization
                </nav>
                <h1 className="breadcumb-title">
                  Operational efficiency in energy production
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="service-tab section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="service-tab-wrap">
                <PerformanceTab />
              </div>
            </div>
            <div className="col-lg-6 col-md-10">
              <div className="service-tab-img">
                <img
                  src="/img/performance-dashboard.webp"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-advantage">
        <div className="container">
          <div className="row justify-content-center mb-0 mb-lg-5">
            <div className="col-lg-12 text-center">
              <h3 className="title">
                Advanced features for performance
                <br /> enhancement
              </h3>
            </div>
          </div>
          <div className="row pt-4">
            <div className="col-lg-4 col-md-6">
              <div className="advantage-wrap">
                <h5 className="service-advantage-title">
                  AI-Driven Load Balancing
                </h5>
                <p>
                  Automatically adjust energy loads based on real-time demand to
                  ensure efficient energy distribution.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="advantage-wrap">
                <h5 className="service-advantage-title">
                  Predictive Analytics
                </h5>
                <p>
                  Forecast future energy demands and adjust production processes
                  to maintain optimal performance levels.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="advantage-wrap">
                <h5 className="service-advantage-title">
                  Dynamic Resource Allocation
                </h5>
                <p>
                  Leverage data to dynamically allocate resources and minimize
                  energy loss during peak and off-peak hours.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="advantage-wrap">
                <h5 className="service-advantage-title">
                  Energy Efficiency Modelling
                </h5>
                <p>
                  Simulate energy production scenarios to identify
                  inefficiencies and implement targeted optimizations.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="advantage-wrap">
                <h5 className="service-advantage-title">
                  Real-Time Monitoring
                </h5>
                <p>
                  Continuously track system performance to detect and address
                  inefficiencies before they impact production.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="advantage-wrap">
                <h5 className="service-advantage-title">
                  Data-Driven Decisions
                </h5>
                <p>
                  Utilize AI insights to make informed decisions on asset
                  performance, reducing unnecessary expenditures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="why-choose section-gap section-bg ">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-5 col-lg-5">
              <div className="achivement-counter">
                <ul className="list-unstyled">
                  <li>
                    <div className="icon">
                      <img src="/img/1.webp" className="img-fluid" />
                    </div>
                    <div className="fun-fact">
                      <div className="counter">
                        <div className="timer" data-to="500" data-speed="2000">
                          80
                        </div>
                        <div className="operator">+</div>
                      </div>
                      <span className="medium">
                        Assets under management <br /> totalling SAR 317.8 B
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <img src="/img/2.webp" className="img-fluid" />
                    </div>
                    <div className="fun-fact">
                      <div className="counter">
                        <div className="timer" data-to="30" data-speed="2000">
                          11
                        </div>
                        <div className="operator">+</div>
                      </div>
                      <span className="medium">
                        Countries have <br /> our strong presence
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 d-flex">
              <div className="align-self-center">
                <div className="choose-caption">
                  <h2 className="title">
                    Benefits that extend beyond <br />
                    performance gains
                  </h2>
                  <ul className="list-check">
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                      </span>
                      Reduce operational costs with efficient resource
                      management.
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                      </span>
                      Increase energy output while minimizing energy loss.
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                      </span>
                      Better system reliability with predictive performance
                      optimization.
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                      </span>
                      Seamless integration into existing energy infrastructure.
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                      </span>
                      Modular solutions scale with your infrastructure, at every
                      stage.
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                      </span>
                      Actionable insights for improvements across all
                      operational layers.
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                      </span>
                      Optimize asset utilization to extend the lifecycle of key
                      equipment.
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                      </span>
                      Boost sustainability efforts and reduce carbon emissions.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Page;
