import React from "react";
import Link from "next/link";

const ServiceDetail = () => {
  return (
    <>
      {/* ----------- Page Banner --------- */}
      <section
        className="breadcrumb-area custom-breadcrumb bg-green bg-cover"
        style={{
          backgroundImage: `url('/img/agentic-ai.webp')`,
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
                  <Link href="/">Home</Link> / Agentic AI Solutions
                </nav>
                <h1 className="breadcumb-title">Agentic AI Solutions</h1>
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
                <h2 className="title mb-4">AI that thinks, learns & acts!</h2>
                <p className="desc">
                  AI should do more than process data, it should think,
                  collaborate, and act. Elile’s multi-agentic intelligence
                  creates AI agents that strategize, self-optimize, and make
                  real-time decisions autonomously.
                </p>
                <p className="desc">
                  From industrial automation to mission-critical ecosystems, our
                  AI doesn’t just analyze, it orchestrates seamless, adaptive
                  operations that drive efficiency and eliminate inefficiencies.
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
                <h3>Distributed Intelligence</h3>
                <p>
                  Multi-agent systems coordinate complex tasks dynamically
                  across operations, ensuring seamless decision-making and
                  execution.
                </p>
              </div>
              <div className="whyChooseSec-box">
                <h3>Autonomous Collaboration</h3>
                <p>
                  AI agents communicate, strategize, and optimize processes
                  without human intervention, enhancing operational autonomy.
                </p>
              </div>
              <div className="whyChooseSec-box">
                <h3>Adaptive Learning</h3>
                <p>
                  Reinforcement learning-driven AI evolves continuously based on
                  real-time feedback, adapting to new challenges and conditions.
                </p>
              </div>
              <div className="whyChooseSec-box">
                <h3>Interoperability Engine</h3>
                <p>
                  Seamless integration with SCADA, IoT, cloud, and edge
                  computing systems enables unified, cross-platform
                  intelligence.
                </p>
              </div>
              <div className="whyChooseSec-box">
                <h3>Real-Time Optimization</h3>
                <p>
                  Predictive adjustments ensure peak efficiency across
                  industrial workflows, reducing inefficiencies and maximizing
                  uptime.
                </p>
              </div>
              <div className="whyChooseSec-box">
                <h3>Scalable Multi-Agent Framework</h3>
                <p>
                  AI networks scale dynamically for growing industrial demands,
                  ensuring future-proof, adaptive intelligence.
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
                  Designed for tangible business outcomes
                </h2>
              </div>
            </div>
          </div>
          <div className="benfit-inner">
            <div className="row">
              <div className="col-lg-6">
                <div className="benfit-content me-0 me-lg-5">
                  <p className="desc">
                    Elile’s Agentic AI Solutions leverage multi-agent
                    intelligence, SLM-powered decision-making, and decentralized
                    execution frameworks. Unlike conventional AI, our
                    distributed agent architecture enables adaptive intelligence
                    across mission-critical ecosystems.
                  </p>
                  <p className="desc">
                    Our LLM-integrated SLMs create industry-specific AI agents
                    that self-optimize without human intervention. With
                    SCADA-native interoperability and zero-latency inference via
                    GPU acceleration, our AI agents execute predictive
                    adjustments at sub-millisecond speeds.
                  </p>
                  <p className="desc">
                    The result? Autonomous orchestration, ultra-low failure
                    rates, and industrial-scale scalability, making our system
                    the most robust, adaptable, and self-learning AI framework
                    available today
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
                        <h3>
                          50% higher efficiency via real-time multi-agent
                          coordination
                        </h3>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <img src="/check.webp" />
                      </div>
                      <div className="text">
                        <h3>
                          70% less unplanned downtime with predictive,
                          self-healing AI
                        </h3>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <img src="/check.webp" />
                      </div>
                      <div className="text">
                        <h3>
                          30% lower operational costs by eliminating manual
                          tasks
                        </h3>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <img src="/check.webp" />
                      </div>
                      <div className="text">
                        <h3>
                          99.9% autonomous execution for uninterrupted workflows
                        </h3>
                      </div>
                    </li>
                    <li className="mb-0">
                      <div className="icon">
                        <img src="/check.webp" />
                      </div>
                      <div className="text">
                        <h3>
                          5x faster deployment with vendor-agnostic, scalable AI
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
