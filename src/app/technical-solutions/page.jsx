import React from "react";
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
                            <div className="col-lg-8">
                                <nav className="woocommerce-breadcrumb" aria-label="Breadcrumb">
                                    <Link href="/">Home</Link> / Technical Solutions
                                </nav>
                                <h1 className="breadcumb-title">Technical Solutions</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="whyChooseSec section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-md-6">
                            <div className="whyChoose-caption me-0 me-lg-5 mb-4 mb-lg-0">
                                <h2 className="title mb-4">Solutions built for impact </h2>
                                <p className="desc">
                                    At Elile, we architect ecosystems. Every solution is designed
                                    with systemic integrity, long-term scalability, and
                                    operational resilience in mind. From sovereign infrastructure
                                    stacks to industry-specific AI applications, our engineering
                                    philosophy is grounded in modularity, observability, and
                                    performance under load.
                                </p>
                                <p className="desc">
                                    We bring together deep technical expertise across software
                                    design, infrastructure, and applied machine learning to solve
                                    not just surface problems, but the architecture-level
                                    challenges that hinder scale and sustainability. Whether
                                    you’re migrating legacy systems, building net-new digital
                                    platforms, or integrating AI into mission-critical workflows,
                                    Elile delivers with precision, transparency, and domain
                                    fluency.{" "}
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6">
                            <div className="whyChooseSec-box">
                                <h3>Software Services</h3>
                                <p>
                                    Elile delivers robust Software as a Service (SaaS) offerings,
                                    including AI-Powered Advertising Technology and Cloud-Based
                                    Software Hosting. Our AI-based ad tech platform personalizes
                                    user experiences across channels through behavioural
                                    analytics, while our cloud hosting solutions offer scalable,
                                    secure environments for third-party applications. Both
                                    services are built for operational efficiency and continuous
                                    performance optimization.
                                </p>
                            </div>

                            <div className="whyChooseSec-box">
                                <h3>Software Development & Engineering</h3>
                                <p>
                                    Elile’s Software Development & Engineering services include
                                    Software Design & Development and Software Engineering
                                    Services. We specialize in developing scalable, custom
                                    software aligned with industry standards and client-specific
                                    workflows. Our engineering teams focus on architecture design,
                                    robust implementation, and optimization to ensure long-term
                                    maintainability and adaptability in complex digital
                                    environments.
                                </p>
                            </div>

                            <div className="whyChooseSec-box">
                                <h3>Computer Software Consultancy & Design </h3>
                                <p>
                                    Elile offers comprehensive Computer Software Consultancy &
                                    Design services, encompassing architecture guidance,
                                    development methodologies, and system-level customization. We
                                    deliver tailored software architecture and programming
                                    strategies, ensuring both compliance with industry norms and
                                    alignment with client goals.
                                </p>
                            </div>

                            <div className="whyChooseSec-box">
                                <h3>Custom Software Development </h3>
                                <p>
                                    Elile’s Custom Software Development service focuses on
                                    designing and building tailored applications for specific
                                    business challenges. Our development process emphasizes
                                    scalable architecture, user-centric interfaces, and long-term
                                    flexibility to adapt to changing operational needs.
                                </p>
                            </div>

                            <div className="whyChooseSec-box">
                                <h3>Software Maintenance & Support Services </h3>
                                <p>
                                    Elile’s Software Maintenance & Support Services include
                                    Software Installation & Configuration and Software Maintenance
                                    & Updates. We ensure seamless software deployment,
                                    integration, and continuous performance through regular
                                    updates, bug fixes, and proactive monitoring. Our goal is to
                                    minimize downtime and enhance application reliability.
                                </p>
                            </div>

                            <div className="whyChooseSec-box">
                                <h3>Software Testing & Quality Assurance </h3>
                                <p>
                                    Elile delivers comprehensive Software Testing & Quality
                                    Assurance services, including Comprehensive Software Testing
                                    and Software Troubleshooting & Support. Our QA processes
                                    encompass functional, security, and performance validation,
                                    ensuring that applications are deployment-ready. We also offer
                                    24/7 support for diagnosing and resolving software issues with
                                    efficiency.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="tech-service section-gap section-bg pb-4">
                <div className="container">
                    <div className="row justify-content-center mb-0 mb-lg-4">
                        <div className="col-lg-12 text-center">
                            <h3 className="title">
                                Built for performance. Engineered for tomorrow.
                            </h3>
                        </div>
                    </div>
                    <div className="row pt-4">
                        <div className="col-lg-4 col-md-6">
                            <div className="tech-service-wrap">
                                <h4>Specialized AI Services </h4>
                                <p>
                                    Under Specialized AI Services, Elile offers Advanced AI
                                    Product Research, AI Energy & Grid Management, and AI
                                    Advertising Technology Services. Our research team pushes the
                                    frontier of AI applications, while our AIaaS platforms
                                    optimize energy grids and power highly personalized
                                    advertising campaigns. Each solution leverages predictive
                                    analytics and machine learning for measurable impact.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="tech-service-wrap">
                                <h4>AI Technology Consulting </h4>
                                <p>
                                    Our AI Technology Consulting suite includes AI Software
                                    Customization, AI Technology Consultation, and AI Research &
                                    Development. Elile builds tailored AI models and offers
                                    strategic consultation on AI infrastructure, while our
                                    research initiatives explore advanced applications with
                                    real-world viability. All services are focused on
                                    high-performance, enterprise-ready AI solutions.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="tech-service-wrap">
                                <h4>Technical Consulting Services</h4>
                                <p>
                                    Elile provides high-impact Technical Consulting Services
                                    across Datacenter & Cloud Computing Solutions and Cloud
                                    Computing Systems Management. We advise clients on data center
                                    architecture, public and private cloud strategies, and
                                    technology adoption plans, while also offering 24/7 management
                                    of IT infrastructure. Our goal is to align cloud computing
                                    systems with both business goals and technical demands.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="tech-service-wrap">
                                <h4>AI Technology Consultation Services </h4>
                                <p>
                                    Our AI Technology Consultation Services provide strategic
                                    advisory on AI integration and SaaS-related implementations.
                                    Elile supports clients in navigating the complex AI landscape,
                                    offering insights backed by market analysis and tailored
                                    roadmaps for enterprise-grade AI deployment.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="tech-service-wrap">
                                <h4>E-commerce Payment Gateway Solutions </h4>
                                <p>
                                    Elile functions as an Application Service Provider (ASP),
                                    offering secure E-commerce Payment Gateway Solutions for
                                    merchants. Our system supports credit card and direct payment
                                    processing with PCI-compliant architecture, advanced fraud
                                    detection, and real-time transaction authorization. The
                                    platform is designed for seamless integration and operational
                                    resilience.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="tech-service-wrap">
                                <h4>Business Technology Software Consultation</h4>
                                <p>
                                    Elile’s Business Technology Software Consultation service
                                    assists enterprises in evaluating, selecting, and optimizing
                                    software platforms to enhance operational agility. We help
                                    align IT infrastructure with evolving business objectives,
                                    offering strategic insight and technology assessments to
                                    support digital transformation and competitive edge.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ----------- Our Feature Banner --------- */}
            <section className="feature-style-one-area section-gap pb-0">
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-6 col-md-6 ">
                            <div className="feature-style-one ">
                                <div className="info">
                                    <h4>Emerging Technology Services </h4>
                                    <p>
                                        Under Emerging Technology Services, Elile provides
                                        Blockchain Development Services, Intelligent Voice
                                        Recognition Services, and Game & Virtual Reality Software
                                        Development. We develop secure, scalable blockchain
                                        applications, deliver voice recognition systems with NLP
                                        capabilities, and design immersive digital experiences
                                        through game and VR platforms, pushing the boundaries of
                                        user interaction.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 ">
                            <div className="feature-style-one">
                                <div className="info">
                                    <h4>Software Licensing</h4>
                                    <p>
                                        Elile provides Software Licensing solutions across
                                        Third-Party Software Licensing, Proprietary Software
                                        Licensing, and Software License Management. As a Microsoft
                                        Certified Cloud Partner, we supply licensing for
                                        industry-leading software suites while managing compliance
                                        and procurement. Our proprietary ElectrOS monitoring
                                        platform is also available with flexible licensing models
                                        and comprehensive support.
                                    </p>
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
                                    Elile services are available for direct
                                    <br /> procurement and custom deployment.
                                </h2>
                                <p className="desc">
                                    Contact us to receive our detailed services brochure.
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
export default page;
