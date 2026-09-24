import React from "react";
import Link from "next/link";

const ServiceDetail = () => {
  return (
    <>
      {/* ----------- Page Banner --------- */}
      <section
        className="breadcrumb-area custom-breadcrumb bg-green bg-cover"
        style={{
          backgroundImage: `url('/img/predictive-alerts.webp')`,
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
                  <Link href="/">Home</Link> / Predictive Alerts & Fault
                  Prevention
                </nav>
                <h1 className="breadcumb-title">
                  Predictive Alerts & Fault Prevention{" "}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="whyChooseSec section-gap mb-5">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-md-6">
              <div className="whyChoose-caption me-0 me-lg-5 mb-4 mb-lg-0">
                <h2 className="title mb-4">AI-driven risk mitigation</h2>
                <p className="desc">
                  Elile’s predictive intelligence prevents failures before they
                  happen. By analyzing real-time data streams, detecting
                  anomalies, and enabling proactive interventions, our
                  AI-powered fault prevention systems enhance operational
                  reliability, reduce unplanned downtime, and extend asset
                  lifespan.
                </p>
                <p className="desc">
                  Leveraging time-series forecasting and probabilistic
                  modelling, our AI anticipates vulnerabilities before
                  escalation. Deep learning processes high-frequency sensor data
                  to detect deviations, while multi-agent AI networks
                  synchronize predictive maintenance across assets.
                  Reinforcement learning continuously enhances fault detection,
                  adapting dynamically to evolving conditions.
                </p>
                <div className="whyChoose-btn mt-4 mt-lg-5">
                  <Link className="default-btn" href="tel:+9710563292225">
                    Book A Call
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-md-6">
              <div className="whyChooseSec-box">
                <h3>Real-Time Fault Prediction</h3>
                <p>
                  Continuously scans system data to detect anomalies, leveraging
                  predictive modelling for proactive failure mitigation.
                </p>
              </div>
              <div className="whyChooseSec-box">
                <h3>AI-Powered Root Cause Analysis</h3>
                <p>
                  Identifies hidden failure patterns with advanced machine
                  learning, enabling precise diagnostics and faster resolution.
                </p>
              </div>
              <div className="whyChooseSec-box">
                <h3>Automated Response Triggers</h3>
                <p>
                  Instant AI-driven alerts activate mitigation protocols,
                  preventing cascading system failures and costly breakdowns.
                </p>
              </div>
              <div className="whyChooseSec-box">
                <h3>Self-Correcting Mechanisms</h3>
                <p>
                  Autonomous AI adjustments optimize asset performance in real
                  time, reducing long-term maintenance interventions.
                </p>
              </div>
              <div className="whyChooseSec-box">
                <h3>Failure Risk Optimization</h3>
                <p>
                  Predicts, prioritizes, and mitigates risks by dynamically
                  adjusting operational parameters to prevent asset degradation.
                </p>
              </div>
              <div className="whyChooseSec-box">
                <h3>Multi-Layered Protection</h3>
                <p>
                  Integrates real-time analytics, historical failure modelling,
                  and anomaly detection to enhance system resilience and
                  longevity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="benfit-sec section-bg section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="site-heading text-center">
                <h2 className="title">
                  AI that prevents failures before they happen
                </h2>
              </div>
            </div>
          </div>
          <div className="benfit-inner">
            <div className="row">
              <div className="col-lg-6">
                <div className="benfit-content me-0 me-lg-5">
                  <p className="desc">
                    Elile’s Predictive Alerts & Fault Prevention system utilizes
                    real-time anomaly detection, probabilistic risk assessment,
                    and multi-agent AI coordination to eliminate failures before
                    they escalate. Our AI integrates time-series forecasting,
                    deep-learning-driven failure pattern recognition, and
                    adaptive risk mitigation models to anticipate
                    vulnerabilities with near-zero latency.
                  </p>
                  <p className="desc">
                    By leveraging multi-source sensor fusion and reinforcement
                    learning, our system continuously optimizes failure
                    prediction models, automates response triggers, and
                    synchronizes predictive maintenance strategies across
                    assets.
                  </p>
                  <p className="desc">
                    With self-correcting AI-driven mechanisms, we ensure
                    proactive risk mitigation, reduced downtime, and extended
                    asset longevity, delivering industrial-scale resilience.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="benfit-list">
                  <ul className="list-unstyled">
                    <li>
                      <div className="icon">
                        <img src="/check.webp" />
                      </div>
                      <div className="text">
                        <h3>80% fewer system failures with predictive AI</h3>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <img src="/check.webp" />
                      </div>
                      <div className="text">
                        <h3>
                          60% faster issue resolution with AI-powered
                          diagnostics
                        </h3>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <img src="/check.webp" />
                      </div>
                      <div className="text">
                        <h3>
                          50% fewer maintenance costs with proactive fault
                          prevention
                        </h3>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <img src="/check.webp" />
                      </div>
                      <div className="text">
                        <h3>
                          99.9% system uptime with automated risk mitigation
                        </h3>
                      </div>
                    </li>
                    <li className="mb-0">
                      <div className="icon">
                        <img src="/check.webp" />
                      </div>
                      <div className="text">
                        <h3>
                          3x improvement in asset lifespan via self-correcting
                          AI
                        </h3>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cta-sec section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="cta-inner text-center">
                <h2>
                  Need a teammate engineered
                  <br /> for your business?
                </h2>
                <p className="desc">
                  Empower your operations with Agentic AI - autonomous, adaptive
                  <br />
                  teammates that learn and execute at scale.
                </p>
                <div className="mt-2">
                  <Link className="default-btn" href="/contact">
                    Get in Touch
                  </Link>
                  <Link className="default-btn style-two ms-4" href="/about">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetail;
