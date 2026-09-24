import React from "react";
import Link from "next/link";
import MonitoringTab from "../components/MonitoringTab";

const Page = () => {
  return (
    <>
      {/* ----------- Page Banner --------- */}
      <section
        className="breadcrumb-area custom-breadcrumb bg-green bg-cover"
        style={{
          backgroundImage: `url('/img/monitoring-alerting-banner.webp')`,
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
                  <Link href="/">Home</Link> / Monitoring & Alerting
                </nav>
                <h1 className="breadcumb-title">
                  Reliability in production & distribution
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
                <MonitoringTab />
              </div>
            </div>
            <div className="col-lg-6 col-md-10">
              <div className="service-tab-img">
                <img
                  src="/img/monitoring-dashboard.webp"
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
                Capabilities for real-time, precision
                <br /> monitoring
              </h3>
            </div>
          </div>
          <div className="row pt-4">
            <div className="col-lg-4 col-md-6">
              <div className="advantage-wrap">
                <h5 className="service-advantage-title">
                  Centralized Dashboards
                </h5>
                <p>
                  Track system-wide performance metrics on one unified platform,
                  providing actionable insights across all operational layers.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="advantage-wrap">
                <h5 className="service-advantage-title">Digital Twin</h5>
                <p>
                  Virtual representation of physical assets to simulate
                  real-world performance, identifying issues before they arise.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="advantage-wrap">
                <h5 className="service-advantage-title">
                  Predictive Algorithms
                </h5>
                <p>
                  Predict and forecast equipment health to reduce downtime and
                  extend asset lifespan through targeted interventions.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="advantage-wrap">
                <h5 className="service-advantage-title">Multi-level Alerts</h5>
                <p>
                  Receive layered alerts based on severity, ensuring immediate
                  attention to high-priority issues without overwhelming
                  operators.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="advantage-wrap">
                <h5 className="service-advantage-title">Customizable KPIs</h5>
                <p>
                  Tailor performance indicators to specific strategic goals for
                  continuously monitoring critical industrial assets.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="advantage-wrap">
                <h5 className="service-advantage-title">Anomaly Detection</h5>
                <p>
                  Advanced ML models detect abnormal patterns in data,
                  triggering early warnings for all potential failures.
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
                    Monitoring solutions that do <br />
                    more and work smarter
                  </h2>
                  <ul className="list-check">
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                      </span>
                      Identify potential system failures before they happen.
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                      </span>
                      Avoid unnecessary repairs and minimize operational costs.
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                      </span>
                      Monitoring with end-to-end encryption for secure data
                      flow.
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                      </span>
                      Immediate detection of anomalies ensures swift responses.
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                      </span>
                      Data-driven monitoring enables operational fine-tuning.
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                      </span>
                      Easily expand monitoring capabilities as the system grows.
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                      </span>
                      Gain 360° view of your systems, from generation to
                      distribution.
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                      </span>
                      Predictive maintenance schedules extend life of key
                      assets.
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
