import React from "react";
import "./page.css";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

const page = () => {
  return (
    <>
      {/* ----------- Page Banner --------- */}
      <section
        className="breadcrumb-area custom-breadcrumb bg-green bg-cover"
        style={{
          backgroundImage: `url('/img/about-banner.webp')`,
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
                  <Link href="/">Home</Link> / Our CEO
                </nav>
                <h1 className="breadcumb-title">Our CEO</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------- Page Banner --------- */}

      <section className="about-ceo section-gap section-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="about-image custom-layout">
                <div className="image">
                  <img
                    src="/img/profile.webp"
                    alt="About Me"
                    className="img-fluid"
                  />
                </div>
                <div className="about-content">
                  <h3 className="title">Dr. Muhammad Mehdi</h3>
                  <p className="desc">Founder & CEO of Elile AI </p>
                </div>
                <div className="about-social">
                  <ul className="list-unstyled">
                    <li>
                      <Link href="https://x.com/drmuhamadmehdi" traget="_blank">
                        <BsTwitterX />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.linkedin.com/in/dr-muhammad-mehdi01/"
                        target="_blank"
                      >
                        <FaLinkedinIn />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="about-details custom-layout text-start">
                <p className="desc">
                  Dr. Muhammad Mehdi is the Founder and CEO of Elile AI, an
                  energy and compute technology company specializing in AI
                  powered infrastructure powering next generation data centers
                  and collocated energy infrastructure. Prior to Elile AI, Dr.
                  Mehdi spent over 20 years working with industry giants. He was
                  GM, AI Media for Amazon Ad Tech, and Head of AI at Microsoft
                  Research, Autonomous AI team, and Head of Microsoft Azure
                  Cloud Reliability and Capacity Planning.
                </p>
                <p className="desc">
                  With an extensive experience in artificial intelligence, and
                  data center management, Dr. Mehdi is a pioneer in large
                  language model (LLM) infrastructure. Notably, he was one of
                  the early engineers in Microsoft Azure Cloud, and the first
                  architect to build the OpenAI infrastructure within Microsoft,
                  significantly shaping the AI and data center landscape.
                </p>
                <p className="desc">
                  Dr. Mehdi focuses on sustainable AI systems and sustainable
                  computing, by optimizing power, cooling, and workload
                  orchestration in data centers. His commitment to climate tech
                  has driven Elile AI to innovate in power management systems,
                  digital twins, and advanced asset performance management,
                  particularly in renewable energy integration.
                </p>
                <p className="desc">
                  He is driven by the mission to bring energy and compute for
                  every person on the planet by removing the systemic barriers
                  prevalent today.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-ceo section-gap">
        <div className="container">
          <div className="row justify-content-center mb-0 mb-lg-5">
            <div className="col-lg-6 text-center">
              <h3 className="title">Academic background & research</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 ">
              <div className="feature-style-one">
                <div className="info">
                  <p>
                    Doctor of Philosophy (Ph.D.) in Operations Research from
                    Boston University (2011), with a
                    <Link
                      className="me-1"
                      href="https://www.proquest.com/openview/3d2e2c713e481828eff4c140dda29734/1?pq-origsite=gscholar&amp;cbl=18750"
                      target="_blank"
                    >
                      thesis
                    </Link>
                    on applying ML & AI models to business, engineering,
                    healthcare, and social sciences.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 ">
              <div className="feature-style-one">
                <div className="info">
                  <p>
                    Lead author of a research paper in the INFORMS Journal of
                    Applied Analytics (2022), focusing on optimization
                    algorithms for steel manufacturing. The paper is published
                    <Link
                      className="ms-1"
                      href="https://pubsonline.informs.org/doi/abs/10.1287/inte.2021.1086"
                      target="_blank"
                    >
                      here.
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 ">
              <div className="feature-style-one">
                <div className="info">
                  <p>
                    Served as a Lecturer in Financial <br />
                    Optimization at Harvard University, <br />
                    taught courses on optimization
                    <br /> techniques and their
                    <br /> applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="experience section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 ">
              <div className="single-resume mb-3 mb-lg-0">
                <h3 className="title">Decades in technology leadership</h3>
                <div className="experience-list">
                  <div className="resume-item wow fadeInUp delay-0-3s">
                    <div className="content">
                      <h4>Amazon Global AI – General Manager </h4>
                      <ul className="mb-0 mt-3">
                        <li>
                          Launched multiple flagship media planning AI tools
                          that are part of Amazon Ad Console.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="resume-item">
                  <div className="content">
                    <h4>Microsoft Autonomous AI – Head of AI </h4>
                    <ul className="mb-0 mt-3">
                      <li className="mb-3">
                        Achieved penta-nine (99.999%) reliability by overhauling
                        the infrastructure from batch processing to a scalable,
                        container-based system, enabling vast deployment of
                        simulations &amp; AI models for industrial applications.
                      </li>
                      <li>
                        Drove the adoption of Deep Reinforcement Learning in
                        autonomous systems by connecting the Internet of Things
                        (IoT) to Simulators.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="resume-item border-0">
                  <div className="content">
                    <h4>Microsoft Azure - Head of AI </h4>
                    <ul className="mb-0 mt-3">
                      <li className="mb-3">
                        Transformed Azure Cloud from a few remotely located
                        servers to becoming the world’s most reliable cloud and
                        datacenter offering today.
                      </li>
                      <li>Architected OpenAI (ChatGPT) infrastructure </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 ">
              <div className="single-resume mb-3 mb-lg-0">
                <h3 className="title">
                  Driving force behind the growth of Elile AI
                </h3>
                <div className="resume-item pt-3 border-0">
                  <div className="content">
                    <p>
                      Under his leadership, Elile AI has grown into a key player
                      in the Gulf region, supporting clients like Oman Data
                      Park, Oman Ministry of Science, and establishing strategic
                      partnerships with industry giants like ACWA Power,
                      aiXplain, and a consortium of Arabic LLMs.
                    </p>
                    <ul className="mb-0 mt-3">
                      <li className="mb-3">
                        We are reaching multiple million dollars in annual
                        recurring revenue (ARR) by the end of 2024, driven by
                        the successful deployment of ElectrOS, our AI platform
                        that transforms energy infrastructure management.
                      </li>
                      <li className="mb-3">
                        Targeting $10 million in ARR within the next 18 months,
                        with plans to expand indirect sales channels and
                        partnerships to achieve $100 million in ARR within the
                        next five years.
                      </li>
                      <li className="mb-3">
                        Spearheading key partnerships with energy industry
                        leaders to integrate AI-driven solutions that enable
                        energy demand shaping, peak shaving, and predictive
                        maintenance.
                      </li>
                      <li className="mb-3">
                        Leading Elile AI's geographical expansion into the US,
                        Europe, and the Middle East, positioning the company as
                        a top provider of AI-powered infrastructure solutions.
                      </li>
                      <li className="mb-4">
                        Building a highly skilled team, scaling the company by
                        50% in the first year, while continuously driving
                        innovation.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-ceo section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 ">
              <div className="feature-style-one">
                <div className="info">
                  <h4>Innovation & Patents</h4>
                  <p>
                    Named Inventor of two significant patents in cloud
                    computing:
                  </p>
                  <ol className="mt-3">
                    <li> Network traffic management system (US10574536B2) </li>
                    <li>
                      Intelligent network traffic management (US10785107B2){" "}
                    </li>
                  </ol>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 ">
              <div className="feature-style-one">
                <div className="info">
                  <h4>Advisory Roles</h4>
                  <p>Advisor in following and many more institutes.</p>
                  <ol className="mt-3">
                    <li>
                      <Link
                        href="https://www.xprize.org/about/people/dr-muhammad-mehdi"
                        target="_blank"
                      >
                        Global Brain Trust Member, XPrize{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.uscoalitiononsustainability.org/"
                        target="_blank"
                      >
                        Global Technical Advisor, United Nations Sustain Chain{" "}
                      </Link>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default page;
