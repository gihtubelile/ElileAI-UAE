import React from "react";
import Link from "next/link";
import DiagnosticsTab from "../components/DiagnosticsTab";

const Page = () => {
  return (
    <>
      {/* ----------- Page Banner --------- */}
      <section
        className="breadcrumb-area custom-breadcrumb bg-green bg-cover"
        style={{
          backgroundImage: `url('/img/diagnostics-remediation-banner.webp')`,
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
                  <Link href="/">Home</Link> / Diagnostics & Remediation
                </nav>
                <h1 className="breadcumb-title">
                  Proactive diagnostics for energy efficiency{" "}
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
                <DiagnosticsTab />
              </div>
            </div>
            <div className="col-lg-6 col-md-10">
              <div className="service-tab-img">
                <img
                  src="/img/diagnostics-dashboard.webp"
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
                Features for precise diagnostics
                <br /> & timely remediation
              </h3>
            </div>
          </div>
          <div className="row pt-4">
            <div className="col-lg-4 col-md-6">
              <div className="advantage-wrap">
                <h5 className="service-advantage-title">Automated RCA</h5>
                <p>
                  AI-powered diagnostics to identify underlying causes of
                  inefficiencies and failures in real time.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="advantage-wrap">
                <h5 className="service-advantage-title">
                  Digital Twin Integration
                </h5>
                <p>
                  Simulate physical systems in a virtual environment to diagnose
                  and predict potential disruptions before they occur.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="advantage-wrap">
                <h5 className="service-advantage-title">
                  Models for Efficiency Loss
                </h5>
                <p>
                  Predictive models to predict potential drops, allowing
                  operators to address issues before they impact performance.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="advantage-wrap">
                <h5 className="service-advantage-title">
                  Detailed Actionable Reports
                </h5>
                <p>
                  Receive reports with actionable recommendations for resolving
                  detected inefficiencies and improving system response.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="advantage-wrap">
                <h5 className="service-advantage-title">Rigorous Validation</h5>
                <p>
                  Benefit from robust testing and validation processes to ensure
                  highly accurate diagnostics and reliable for all assets.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="advantage-wrap">
                <h5 className="service-advantage-title">
                  Customizable Diagnostics
                </h5>
                <p>
                  Tailored diagnostic processes to meet specific operational
                  goals, aligning assessments with critical KPIs.
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
                    Our diagnostics solutions offer <br />
                    proactive advantages
                  </h2>
                  <ul className="list-check">
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                      </span>
                      Accurately forecast performance degradation.
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                      </span>
                      Minimize downtime through constant monitoring.
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                      </span>
                      Ensure operational reliability with real-time diagnostics.
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                      </span>
                      Less operational costs with targeted maintenance.
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                      </span>
                      Peak performance across large-scale energy assets.
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                      </span>
                      Seamless integration with existing control systems.
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                      </span>
                      Generate precise, actionable reports for remediation.
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                      </span>
                      Extend asset life by addressing issues before they
                      escalate.
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
