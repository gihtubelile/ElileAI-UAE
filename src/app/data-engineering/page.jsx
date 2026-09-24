import React from "react";
import Link from "next/link";
import DataEngineeringTab from "../components/DataEngineeringTab";

const Page = () => {
  return (
    <>
      {/* ----------- Page Banner --------- */}
      <section
        className="breadcrumb-area custom-breadcrumb bg-green bg-cover"
        style={{
          backgroundImage: `url('/img/data-engin-banner.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
        }}
      >
        <div className="container">
          <div className="breadcrumb-item">
            <div className="row">
              <div className="col-lg-8">
                <nav className="woocommerce-breadcrumb" aria-label="Breadcrumb">
                  <Link href="/">Home</Link> / Data Engineering
                </nav>
                <h1 className="breadcumb-title">Utilizing data for energy </h1>
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
                <DataEngineeringTab />
              </div>
            </div>
            <div className="col-lg-6 col-md-10">
              <div className="service-tab-img">
                <img src="/img/data-engineering.webp" className="img-fluid" />
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
                Advanced capabilities
                <br /> for superior data management
              </h3>
            </div>
          </div>
          <div className="row pt-4">
            <div className="col-lg-4 col-md-6">
              <div className="advantage-wrap">
                <h5 className="service-advantage-title">
                  Real-Time Data Ingestion
                </h5>
                <p>
                  Seamlessly capture and process data from multiple sources in
                  real-time, ensuring no delays in critical information flow.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="advantage-wrap">
                <h5 className="service-advantage-title">
                  Advanced Data Buffering
                </h5>
                <p>
                  Use scalable buffering techniques to manage data streams,
                  avoiding loss or duplication during transmission.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="advantage-wrap">
                <h5 className="service-advantage-title">
                  Intelligent Synchronization
                </h5>
                <p>
                  Aligns disparate data streams for consistent analysis,
                  regardless of varying sampling rates.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="advantage-wrap">
                <h5 className="service-advantage-title">
                  ML-Ready Data Pipelines
                </h5>
                <p>
                  Pre-process data for immediate integration with machine
                  learning models, accelerating AI-driven insights.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="advantage-wrap">
                <h5 className="service-advantage-title">
                  Scalable Infrastructure
                </h5>
                <p>
                  Supports high-volume data processing across distributed
                  systems, ensuring flexibility as data needs grow.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="advantage-wrap">
                <h5 className="service-advantage-title">
                  Customizable Workflows
                </h5>
                <p>
                  Tailor data workflows to specific operational needs, enhancing
                  the adaptability and efficiency of energy management.
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
                    Benefits that go beyond <br />
                    reliability and efficiency
                  </h2>
                  <ul className="list-check">
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                      </span>
                      Insights from high-frequency data for rapid
                      decision-making.
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                      </span>
                      Streamlined processes reduce redundant computations.
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                      </span>
                      Advanced encryption and multi-layered access controls for
                      security.
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                      </span>
                      Modular, cloud-based infrastructure adapts to growing data
                      needs.
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                      </span>
                      Unified data integration for cross-platform management.
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                      </span>
                      Comprehensive visibility with structured, synchronized
                      data flows.
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                      </span>
                      AI-ready pipelines for predictive analytics and
                      diagnostics.
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                      </span>
                      High data fidelity for precise, actionable insights in
                      energy management.
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
