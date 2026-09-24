"use client";
import { useRef, useState } from "react";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { BsArrowRight } from "react-icons/bs";
import { Testimonial } from "./components/Testimonial";
import Link from "next/link";
function page() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = (e) => {
    e.preventDefault(); // Prevents page navigation when clicking the Link

    const video = videoRef.current;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  return (
    <>
      <section className="hero">
        <div className="hero-banner">
          <video autoPlay muted loop>
            <source src="/banner-video.mp4" type="video/mp4" />
          </video>
          <div className="overlay"></div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <div className="home-content text-center">
                  <span className="sub-title">
                    AI-POWERED OPERATIONS FOR TRUE AUTONOMY
                  </span>
                  <h1>Go Beyond Automation with Elile Agentic AI Solutions</h1>
                  <p className="mb-lg-5 mb-4">
                    Elile builds self-learning, multi-agentic AI models that
                    predict, adapt, and optimize in real time, delivering
                    reliable performance across mission-critical operations.
                  </p>

                  <Link href="tel:+9710563292225" className="default-btn">
                    Schedule Call
                    <GoArrowUpRight />
                  </Link>
                  <Link
                    href="/about"
                    className="default-btn style-two ms-lg-4 ms-3"
                  >
                    Learn More
                    <BsArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="our-story section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="story-wapper text-light">
                <ul className="check-list-item list-unstyled">
                  <li>
                    <div className="icon-wapper">
                      <i className="fa-solid fa-check"></i>
                    </div>
                    <div className="content">
                      <h5>Solving Industrial Inefficiencies</h5>
                      <p className="mb-0">
                        Traditional models lack adaptability, creating data
                        silos & operational blind spots. Without real-time
                        intelligence, failures go undetected, leading to delays
                        & rising costs.
                      </p>
                    </div>
                  </li>
                  <li className="border-0 pb-0 mb-0">
                    <div className="icon-wapper">
                      <i className="fa-solid fa-check"></i>
                    </div>
                    <div className="content">
                      <h5>From Automation to Autonomy</h5>
                      <p className="mb-0">
                        Elile’s multi-agentic intelligence enables real-time
                        collaboration, eliminating inefficiencies, predicting
                        failures, and ensuring autonomous operations.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-8 col-md-6">
              <div className="story-title">
                <h3>
                  From inefficiency to performance
                  <br /> With the best
                  <span> of AI</span>
                </h3>
              </div>

              <div className="video-wapper">
                <video ref={videoRef} className="video-live" autoPlay loop>
                  <source src="/video.mp4" type="video/mp4" />
                </video>
                {/* Play/Pause Button */}
                <button
                  onClick={togglePlayPause}
                  className="popup-youtube video-play-button with-text"
                  type="button"
                >
                  <div className="effect"></div>
                  <span>
                    <i
                      className={`fa-solid ${
                        isPlaying ? "fa-pause" : "fa-play"
                      }`}
                    ></i>
                  </span>
                  <span className="ms-2 top-9">Our Story</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="why-choose section-gap section-bg ">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-5 col-lg-5 col-md-5">
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
            <div className="col-lg-6 d-flex col-md-7">
              <div className="align-self-center">
                <div className="choose-caption">
                  <h2 className="title">
                    Pioneering multi-agent AI <br />
                    for truly autonomous operations
                  </h2>
                  <p className="desc">
                    Elile builds LLM-powered, agentic AI systems for predictive
                    intelligence, autonomous decision-making, and real-time
                    optimization. Our AI-driven dashboards integrate digital
                    twins and self-healing capabilities to eliminate
                    inefficiencies and predict failures in mission-critical
                    industries.
                  </p>
                  <ul className="list-check">
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                      </span>
                      Real-Time Root Cause Analysis (RCA)
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                      </span>
                      Self-Healing & Asset Performance Management
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                      </span>
                      Interoperability & Multi-Agentic AI
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="our-services section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="service-caption">
                <h2 className="title">
                  Possibilities with autonomous AI systems
                </h2>
                <div className="service-btn">
                  <Link href="/about">Explore More</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="service-box">
                <div className="icon">
                  <img src="/img/service-1.webp" className="img-fluid" />
                </div>
                <div className="content">
                  <h4>
                    <Link href="/agentic-ai-solutions">
                      Agentic AI <br />
                      Solutions
                    </Link>
                  </h4>
                  <p>
                    Deploy interconnected AI agents that collaborate,
                    strategize, and optimize.
                  </p>
                  <Link href="/agentic-ai-solutions" className="icon-btn">
                    <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="service-box">
                <div className="icon">
                  <img src="/img/service-2.webp" className="img-fluid" />
                </div>
                <div className="content">
                  <h4>
                    <Link href="/autonomous-operations">
                      Autonomous <br />
                      Operations
                    </Link>
                  </h4>
                  <p>
                    AI solutions to eliminate inefficiencies and reduce human
                    intervention.
                  </p>
                  <Link href="/autonomous-operations" className="icon-btn">
                    <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="service-box">
                <div className="icon">
                  <img src="/img/service-3.webp" className="img-fluid" />
                </div>
                <div className="content">
                  <h4>
                    <Link href="/ai-driven-adaptive-systems">
                      AI- Driven Adaptive Systems
                    </Link>
                  </h4>
                  <p>
                    Solutions that evolve with real-time data and changing
                    operational conditions.
                  </p>
                  <Link href="/ai-driven-adaptive-systems" className="icon-btn">
                    <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="service-box">
                <div className="icon">
                  <img src="/img/service-4.webp" className="img-fluid" />
                </div>
                <div className="content">
                  <h4>
                    <Link href="/predictive-alerts-and-fault-prevention">
                      Predictive Alerts & <br />
                      Fault Prevention
                    </Link>
                  </h4>
                  <p>
                    Proactive anomaly detection, reducing failures and
                    maximizing asset lifespan.
                  </p>
                  <Link
                    href="/predictive-alerts-and-fault-prevention"
                    className="icon-btn"
                  >
                    <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="service-box">
                <div className="icon">
                  <img src="/img/service-5.webp" className="img-fluid" />
                </div>
                <div className="content">
                  <h4>
                    <Link href="/critical-industrial-and-energy-systems">
                      Critical Industrial & Energy Systems
                    </Link>
                  </h4>
                  <p>
                    Solutions for data centers, renewable energy, and
                    mission-critical industries.
                  </p>
                  <Link
                    href="/critical-industrial-and-energy-systems"
                    className="icon-btn"
                  >
                    <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="service-box">
                <div className="icon">
                  <img src="/img/service-6.webp" className="img-fluid" />
                </div>
                <div className="content">
                  <h4>
                    <Link href="/ai-strategy-and-deployment">
                      AI Strategy & Deployment
                    </Link>
                  </h4>
                  <p>
                    AI products built for large-scale scalability, and
                    measurable industry impact.
                  </p>
                  <Link href="/ai-strategy-and-deployment" className="icon-btn">
                    <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="brand section-gap">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 text-center">
              <h3 className="title">
                Trusted by
                <br />
                global industry leaders
              </h3>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="brand-wrap">
                <div className="brand-item tp_fade_bottom">
                  <img src="/img/brand/1.webp" alt="Image Not Found" />
                </div>
                <div className="brand-item tp_fade_bottom">
                  <img src="/img/brand/6.webp" alt="Image Not Found" />
                </div>
                <div className="brand-item tp_fade_bottom">
                  <img src="/img/brand/3.webp" alt="Image Not Found" />
                </div>
                <div className="brand-item tp_fade_bottom">
                  <img src="/img/brand/4.webp" alt="Image Not Found" />
                </div>
                <div className="brand-item tp_fade_bottom">
                  <img src="/img/brand/5.webp" alt="Image Not Found" />
                </div>
                <div className="brand-item tp_fade_bottom">
                  <img src="/img/brand/2.webp" alt="Image Not Found" />
                </div>
                <div className="brand-item tp_fade_bottom">
                  <img src="/img/brand/7.webp" alt="Image Not Found" />
                </div>
                <div className="brand-item tp_fade_bottom">
                  <img src="/img/brand/8.webp" alt="Image Not Found" />
                </div>
                <div className="brand-item tp_fade_bottom">
                  <img src="/img/brand/9.webp" alt="Image Not Found" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tetimonial section-bg pt-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h3 className="title">
                Here’s what they say <br />
                <img src="/img/testimonial/author.webp" className="img-fluid" />
                about us!
              </h3>
            </div>
          </div>
          <div className="row section-gap pt-0">
            <div className="col-lg-12">
              <div className="testimonial-carousel">
                <Testimonial />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="faq-caption">
                <h2 className="title">
                  Have questions? <br />
                  Get answers!
                </h2>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="faq-content">
                <div className="accordion" id="Expp">
                  <div className="accordion-item mb-4">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        What makes Elile different from traditional AI
                        solutions?
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#Expp"
                    >
                      <div className="accordion-body">
                        <p>
                          Elile moves beyond dashboards and analytics. Static AI
                          models analyze data - Elile acts on it. Unlike
                          traditional AI, which relies on human input, our
                          multi-agentic AI enables real-time decision-making,
                          adaptive control, and autonomous fault prevention.
                          This unlocks self-optimization, seamless coordination,
                          and human-free decision-making.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item mb-4">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        How does multi-agentic AI enhance industrial operations?
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#Expp"
                    >
                      <div className="accordion-body">
                        <p>
                          Multi-agentic AI uses a network of intelligent agents
                          that communicate and coordinate actions across complex
                          systems. This ensures faster problem resolution,
                          improved efficiency, and seamless adaptability in
                          real-time.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item mb-4">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Can Elile integrate with existing industrial
                        infrastructure?
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#Expp"
                    >
                      <div className="accordion-body">
                        <p>
                          Yes. Elile’s AI solutions seamlessly integrate with
                          legacy systems, SCADA architectures, and IoT
                          frameworks. Our proprietary AI works alongside
                          existing control systems, ensuring smooth
                          adoption.ontinuous uptime and optimized energy
                          distribution.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item mb-4">
                    <h2 className="accordion-header" id="headingFour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        Does AI improve energy efficiency in large-scale infra?
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFour"
                      data-bs-parent="#Expp"
                    >
                      <div className="accordion-body">
                        <p>
                          AI for energy efficiency helps industries minimize
                          energy losses, enhance asset performance, and reduce
                          operational costs. By analyzing consumption patterns
                          and applying predictive analytics, AI dynamically
                          adjusts energy flows, ensures peak load balancing, and
                          improves the overall sustainability of power systems.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item mb-4">
                    <h2 className="accordion-header" id="headingFive">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        What is Reliability as a Service (RaaS)?
                      </button>
                    </h2>
                    <div
                      id="collapseFive"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFive"
                      data-bs-parent="#Expp"
                    >
                      <div className="accordion-body">
                        <p>
                          Our meshed operating system, built by experts in Cloud
                          Reliability, Digital Twins, and AI-powered automation,
                          delivers Reliability as a Service (RaaS). This means
                          energy plants and critical infrastructure can
                          autonomously detect, diagnose, and resolve issues with
                          minimal human intervention, ensuring continuous uptime
                          and optimized energy distribution.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item mb-4">
                    <h2 className="accordion-header" id="headingSix">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSix"
                        aria-expanded="false"
                        aria-controls="collapseSix"
                      >
                        How does AI support renewable energy systems?
                      </button>
                    </h2>
                    <div
                      id="collapseSix"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingSix"
                      data-bs-parent="#Expp"
                    >
                      <div className="accordion-body">
                        <p>
                          Artificial intelligence for renewable energy systems
                          is critical for managing Solar PV, Wind Farms, Gas
                          Turbines, and Water Desalination plants. AI integrates
                          real-time weather forecasts, energy demand patterns,
                          and asset health data to stabilize energy output,
                          optimize storage, and improve efficiency.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item mb-4">
                    <h2 className="accordion-header" id="headingSeven">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSeven"
                        aria-expanded="false"
                        aria-controls="collapseSeven"
                      >
                        Can AI reduce downtime and prevent failures?
                      </button>
                    </h2>
                    <div
                      id="collapseSeven"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingSeven"
                      data-bs-parent="#Expp"
                    >
                      <div className="accordion-body">
                        <p>
                          Yes. Our AI-driven self-healing systems predict
                          failures before they happen, enabling proactive
                          diagnostics, real-time root cause analysis (RCA), and
                          automated remediation. This significantly reduces
                          downtime, enhances asset lifespan, and maintains
                          uninterrupted energy supply.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item mb-4">
                    <h2 className="accordion-header" id="headingEight">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseEight"
                        aria-expanded="false"
                        aria-controls="collapseEight"
                      >
                        What industries can benefit from AI-powered solutions?
                      </button>
                    </h2>
                    <div
                      id="collapseEight"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingEight"
                      data-bs-parent="#Expp"
                    >
                      <div className="accordion-body">
                        <p>
                          Elile’s AI-powered solutions cater to a wide range of
                          industries, including Data Centers, Renewable Energy,
                          Industrial Manufacturing, Petrochemical Plants, Smart
                          Cities, Healthcare Facilities, Government Projects,
                          etc. Any industry reliant on intensive operations can
                          benefit from our solutions to improve performance and
                          reliability.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item mb-4">
                    <h2 className="accordion-header" id="headingNine">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseNine"
                        aria-expanded="false"
                        aria-controls="collapseNine"
                      >
                        How does Elile ensure interoperability across energy
                        ecosystems?
                      </button>
                    </h2>
                    <div
                      id="collapseNine"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingNine"
                      data-bs-parent="#Expp"
                    >
                      <div className="accordion-body">
                        <p>
                          Elile’s intelligent energy management system
                          seamlessly integrates with OEMs, EPCs, and O&M
                          partners, ensuring compatibility across diverse energy
                          assets. Our multi-agent AI architecture enables energy
                          operators to monitor, optimize, and automate processes
                          across hybrid infrastructures, from legacy grids to
                          modern AI-driven smart networks.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTen">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTen"
                        aria-expanded="false"
                        aria-controls="collapseTen"
                      >
                        How does Elile leverage AI in energy industry
                      </button>
                    </h2>
                    <div
                      id="collapseTen"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTen"
                      data-bs-parent="#Expp"
                    >
                      <div className="accordion-body">
                        <p>
                          Elile’s proprietary technology, ElectrOS, is an
                          advanced AI-driven operating system designed to
                          resolve challenges of all sectors including energy. It
                          is engineered to collect data, control systems, detect
                          faults and anomalies, optimize algorithms and manage
                          energy resources efficiently. With self-learning
                          algorithms and autonomous decision-making, it prevents
                          failures before they happen, making energy systems
                          future-ready.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default page;
