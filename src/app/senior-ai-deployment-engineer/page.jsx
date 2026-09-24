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
                            <div className="col-lg-8 ">
                                <nav className="woocommerce-breadcrumb" aria-label="Breadcrumb">
                                    <Link href="/">Home</Link> / senior-ai-deployment-engineer
                                </nav>
                                <h1 className="breadcumb-title">
                                    Senior AI Deployment Engineer
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="career-detail section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h3>About the Role</h3>
                            <p>
                                We are seeking a Senior AI Deployment Engineer to lead the
                                architecture and delivery of AI-native applications in complex,
                                high-security environments. This is a "Master Builder" role that
                                bridges the gap between state-of-the-art LLM development and
                                hardened, on-premises hardware infrastructure. You will be the
                                primary technical authority for deploying mission-critical AI
                                agents and RAG pipelines within sovereign data infrastructures
                                and air-gapped environments.
                            </p>
                            <div className="career-list">
                                <h3>Key Responsibilities</h3>
                                <ul>
                                    <li>
                                        <strong>External Intelligence Strategy:</strong> Define and
                                        lead the strategy for sourcing, structuring, and
                                        operationalizing external intelligence data across OSINT,
                                        social platforms, dark web, and advertising domains for
                                        strategic, tactical and operational profiling and tracking
                                        of identities.
                                    </li>
                                    <li>
                                        <strong>Data Source Identification:</strong> Identify
                                        high-value data sources and collection approaches aligned
                                        with investigative, intelligence, and analytical use cases.
                                    </li>
                                    <li>
                                        <strong>Platform Alignment:</strong> Ensure alignment
                                        between intelligence data capabilities and broader
                                        investigative or analytical platforms.
                                    </li>
                                    <li>
                                        <strong>On-Prem AI Architecture:</strong> Design and deploy
                                        end-to-end AI solutions—from prototype to
                                        production—specifically optimized for on-premise data
                                        centers and private clouds.
                                    </li>
                                    <li>
                                        <strong>Hardware & Networking Optimization:</strong> Lead
                                        the selection and optimization of hardware (GPUs/TPUs,
                                        high-performance storage) and networking configurations
                                        (RDMA, InfiniBand, load balancing) to ensure low-latency
                                        model inference.
                                    </li>
                                    <li>
                                        <strong>Hybrid RAG & Agentic Systems:</strong> Build
                                        advanced Retrieval-Augmented Generation (RAG) and
                                        multi-capable AI agents using models like GPT-4, Claude, and
                                        Gemini, while ensuring they function seamlessly within local
                                        security constraints.
                                    </li>
                                    <li>
                                        <strong>Model Orchestration:</strong> Fine-tune and deploy
                                        open-source LLMs (Llama, Mistral, etc.) on local
                                        infrastructure, optimizing for memory efficiency and
                                        throughput.
                                    </li>
                                    <li>
                                        <strong>Customer Engagement & Advisory:</strong> Act as the
                                        technical face for customers, educating their executive and
                                        engineering teams on best practices for AI deployment, data
                                        privacy, and infrastructure scaling.
                                    </li>
                                    <li>
                                        <strong>Mentorship:</strong> Provide technical leadership
                                        and mentorship to junior engineers, fostering a culture of
                                        high-performance shipping and continuous learning.
                                    </li>
                                    <li>
                                        <strong>System Resilience:</strong> Architect highly
                                        available, scalable AI-native infrastructure using
                                        Kubernetes and containerization in on-prem environments.
                                    </li>
                                </ul>
                            </div>

                            <div className="career-list">
                                <h3>Required Experience & Capabilities</h3>
                                <ul>
                                    <li>
                                        5+ years of proven experience in AI Systems Engineering,
                                        Data Infrastructure, or High-Performance Computing (HPC).
                                    </li>
                                    <li>
                                        Deep understanding of bare-metal deployments, hardware-level
                                        optimization (NVIDIA/AMD), and localized networking
                                        configurations.
                                    </li>
                                    <li>
                                        Hands-on experience with LangChain, LangGraph, or LlamaIndex
                                        for building complex agentic workflows.
                                    </li>
                                    <li>
                                        Expertise with vector databases and managing real-world
                                        "messy" datasets through robust ETL pipelines.
                                    </li>
                                    <li>
                                        Proficiency in Python, Kubernetes, Docker, and modern CI/CD
                                        for on-premise or hybrid cloud environments.
                                    </li>
                                    <li>
                                        Exceptional verbal and written communication skills with a
                                        proven ability to simplify complex technical concepts for
                                        customers.
                                    </li>
                                </ul>
                            </div>

                            <div className="career-list">
                                <h3>Nice-to-Have</h3>
                                <ul>
                                    <li>Experience in multi-agent systems and AI observability frameworks.</li>
                                    <li>Background in highly regulated industries such as Defense, Energy, or Finance.</li>
                                    <li>Familiarity with air-gapped security protocols and sovereign data infrastructure.</li>
                                </ul>
                            </div>
                            <div className="career-list">
                                <h3>Key Skills</h3>
                                <ul>
                                    <li>
                                        <strong>AI/ML:</strong> LLMs, RAG, Semantic Search, Fine-tuning, Multi-Agent Systems.
                                    </li>
                                    <li>
                                        <strong>Infrastructure:</strong> Hardware Acceleration (GPUs), Networking Optimization, Kubernetes, On-Prem Deployment, Data Infrastructure.
                                    </li>
                                    <li>
                                        <strong>Engineering:</strong> Python, ETL, Vector Databases, LangChain, LangGraph.
                                    </li>
                                </ul>
                            </div>

                            <div className="career-list">
                                <h3>How to Apply</h3>
                                <p>
                                    Submit your resume and a cover letter outlining your
                                    experience
                                </p>
                            </div>
                            <div className="job-footer mt-4">
                                <Link className="default-btn" href="mailto:people@elile.ai">
                                    Apply Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default page;
