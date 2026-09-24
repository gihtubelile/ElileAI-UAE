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
                                <nav
                                    className="woocommerce-breadcrumb"
                                    aria-label="Breadcrumb"
                                >
                                    <Link href="/">Home</Link> / principal-engineer-complex-systems-architecture
                                </nav>

                                <h1 className="breadcumb-title">
                                    Principal Engineer — Complex Systems Architecture
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
                            <h3>The Role</h3>

                            <p>
                                You are the architect and the engineer. You design a system on
                                paper, then build it yourself, own it in production, and set
                                the standard the rest of the team works toward. You will own
                                one full workstream end-to-end: design → implementation →
                                testing → deployment → operations.
                            </p>

                            <div className="career-list">
                                <h3>What We Need</h3>

                                <ul>
                                    <li>
                                        <strong>Distributed systems design</strong> Seven or more
                                        years of engineering, with distributed systems you designed
                                        and built at production scale — and can describe precisely.
                                        You define the problem when nobody else has, document
                                        decisions as ADRs, and settle arguments with benchmarks
                                        rather than opinions.
                                    </li>

                                    <li>
                                        <strong>Expert Python</strong> Pydantic models, asyncio,
                                        dataclasses, typing throughout. You understand the GIL and
                                        when it actually matters.
                                    </li>

                                    <li>
                                        <strong>Data pipelines</strong> Dagster orchestration,
                                        medallion architecture, event-driven design.
                                    </li>

                                    <li>
                                        <strong>Declarative configuration</strong> Native fluency
                                        with YAML and configuration-driven design.
                                    </li>

                                    <li>
                                        <strong>Data engineering</strong> Arrow and Parquet,
                                        partitioning, schema versioning, entity resolution,
                                        deduplication, data lineage.
                                    </li>

                                    <li>
                                        <strong>Designing for failure</strong> Retry budgets,
                                        circuit breaking, graceful degradation, replay semantics,
                                        no single points of failure.
                                    </li>

                                    <li>
                                        <strong>Operations</strong> Kubernetes, Docker, Helm,
                                        CI/CD discipline, OpenTelemetry and structured logging.
                                    </li>

                                    <li>
                                        <strong>Technical leadership</strong> You mentor senior
                                        engineers on system design, name technical debt, and tell
                                        product the difference between infeasible and
                                        over-engineered.
                                    </li>
                                </ul>
                            </div>

                            <div className="career-list">
                                <h3>Tech Stack</h3>

                                <ul>
                                    <li>
                                        <strong>Language:</strong> Python, Pydantic, asyncio,
                                        dataclasses, typing.
                                    </li>

                                    <li>
                                        <strong>Orchestration:</strong> Dagster, Ray,
                                        event-driven design.
                                    </li>

                                    <li>
                                        <strong>Data:</strong> Arrow, Parquet, MinIO,
                                        Elasticsearch, Redis, PostgreSQL, Neo4j, Qdrant, Weaviate,
                                        Milvus.
                                    </li>

                                    <li>
                                        <strong>AI Infrastructure:</strong> vLLM, Ollama,
                                        embedding services, H200 SXM cluster.
                                    </li>

                                    <li>
                                        <strong>Platform:</strong> Kubernetes, Docker, Helm,
                                        GitLab CI/CD, GitHub Actions.
                                    </li>

                                    <li>
                                        <strong>Security:</strong> Air-gapped deployment,
                                        Keycloak, OIDC, mTLS, RBAC/ABAC, HSM/KMS, zero trust.
                                    </li>

                                    <li>
                                        <strong>Observability:</strong> OpenTelemetry, Prometheus,
                                        Grafana, Tempo, data lineage.
                                    </li>
                                </ul>
                            </div>

                            <div className="career-list">
                                <h3>Strong Advantage</h3>

                                <ul>
                                    <li>
                                        Knowledge graph design (Neo4j, TigerGraph) or vector
                                        databases.
                                    </li>

                                    <li>
                                        LLM deployment on-prem, air-gapped, or in sovereign
                                        environments.
                                    </li>

                                    <li>
                                        Intelligence, security, or investigative data platforms.
                                    </li>
                                </ul>
                            </div>

                            <div className="career-list">
                                <h3>Not a Fit</h3>

                                <ul>
                                    <li>Architects who don't code, or coders who don't architect.</li>
                                    <li>Engineers who wait for tickets.</li>
                                    <li>
                                        Anyone who would ask Claude what architecture to use instead
                                        of knowing.
                                    </li>
                                </ul>
                            </div>

                            <div className="career-list">
                                <h3>What We Offer</h3>

                                <ul>
                                    <li>
                                        Full ownership of a critical system component, not a queue
                                        of tickets.
                                    </li>

                                    <li>
                                        Small team, direct access to the CEO, no bureaucracy.
                                    </li>

                                    <li>
                                        Remote-first, with structured monthly in-person
                                        collaboration.
                                    </li>

                                    <li>
                                        Compensation for genuine senior talent rather than market
                                        rate for the title.
                                    </li>
                                </ul>
                            </div>

                            <div className="job-footer mt-4">
                                <Link
                                    className="default-btn"
                                    href="mailto:people@elile.ai"
                                >
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