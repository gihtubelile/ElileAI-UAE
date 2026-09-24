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
                                    <Link href="/">Home</Link> / Senior Backend / Data Engineer
                                </nav>

                                <h1 className="breadcumb-title">
                                    Senior Backend / Data Engineer
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
                                We are building ID1X — a large-scale identity intelligence platform that ingests, deduplicates, normalizes, and fuses data from dozens of OSINT vendors into a unified identity graph. The data pipeline processes terabytes of structured and unstructured data monthly through a Medallion architecture (Bronze → Silver → Gold), feeding downstream AI agents, a knowledge graph (Neo4j), a vector database (PGVector), and a unified search engine (OpenSearch/M-Mind).
                            </p>

                            <p>
                                This is a senior individual contributor role. You will architect and build the backend services and data pipelines that power the entire platform — and you will mentor junior engineers on engineering standards, data modeling, and system design. The role has meaningful architectural influence from day one.
                            </p>

                            <div className="career-list">
                                <h3>Key Responsibilities</h3>

                                <ul>
                                    <li>
                                        Design and implement Dagster-orchestrated data pipelines across the full Medallion stack: Bronze (raw ingestion) → Silver (normalization, dedup, enrichment) → Gold (identity graph population, vector embedding generation)
                                    </li>
                                    <li>
                                        Build and own the vendor data middleware layer: normalize OSINT vendor outputs (District4, IntelliX, Bright Data, Social Links, Constella) to a canonical internal schema with mandatory fields, source quality scores, and confidence weighting
                                    </li>
                                    <li>
                                        Implement deduplication and identity resolution logic: Redis-backed fingerprinting for idempotent ingestion, Confluent Kafka for high-throughput streaming at 1TB+/month inbound
                                    </li>
                                    <li>
                                        Design and optimize PostgreSQL schemas for job state management, identity tracking, and audit logging; implement read replicas, partitioning, and migration strategies
                                    </li>
                                    <li>
                                        Build and maintain the ACP (API Control Plane): query planner, normalization layer, adapter pattern for provider-agnostic data access, Swagger documentation, P99 ≤ 20ms performance baseline
                                    </li>
                                    <li>
                                        Integrate with Neo4j knowledge graph: design entity/relationship schemas, Cypher query optimization, graph enrichment pipeline
                                    </li>
                                    <li>
                                        Integrate with PGVector for semantic embedding storage and similarity search; coordinate with AI/ML engineers on embedding generation models
                                    </li>
                                    <li>
                                        Implement OpenTelemetry trace propagation (Trace ID / Flow ID / UUID) end-to-end across all backend services — critical for support and incident debugging
                                    </li>
                                    <li>
                                        Enforce backend engineering standards: code review, SonarQube quality gates, test coverage, CI/CD discipline via GitHub Actions
                                    </li>
                                    <li>
                                        Mentor junior and mid-level engineers; contribute to architecture decision records (ADRs) and system design documentation
                                    </li>
                                </ul>
                            </div>

                            <div className="career-list">
                                <h3>Tech Stack You'll Own</h3>
                                <ul>
                                    <li>
                                        Language Python (primary) — expert level. FastAPI. Pydantic v2. asyncio. Type annotations throughout.
                                    </li>
                                    <li>
                                        Pipeline Dagster (orchestration). Medallion architecture (Bronze/Silver/Gold). Provider-agnostic ingestion design.
                                    </li>
                                    <li>
                                        Messaging Confluent Kafka (streaming, 1TB+/month). RabbitMQ (job queuing). Redis (dedup fingerprinting, caching).
                                    </li>
                                    <li>
                                        Storage PostgreSQL (HA, partitioning, read replicas). MinIO (object storage).
                                    </li>
                                    <li>
                                        OpenSearch/Elasticsearch (hot/warm/cold).
                                    </li>
                                    <li>
                                        Graph / Vector Neo4j (knowledge graph, entity relationships). PGVector (semantic embeddings, similarity search).
                                    </li>
                                    <li>
                                        AI Integration Langraph (agent orchestration). Claude API (primary LLM). Kimi K2. HITL pipeline gates.
                                    </li>
                                    <li>
                                        Observability OpenTelemetry (trace propagation). Loki. Prometheus. Tempo. OPIK. Arize AI (ML pipeline observability).
                                    </li>
                                    <li>
                                        Quality / CI SonarQube (quality gates). GitHub Actions (CI/CD). Playwright (E2E). Swagger/OpenAPI. ArgoCD.
                                    </li>
                                </ul>
                            </div>

                            <div className="career-list">
                                <h3>Required Qualifications</h3>

                                <ul>
                                    <li>
                                        6+ years of backend engineering experience, with at least 2 years in a senior or lead capacity
                                    </li>
                                    <li>
                                        Expert-level Python: FastAPI, Pydantic, asyncio, dataclasses — production code, not scripts
                                    </li>
                                    <li>
                                        Production experience with Dagster or a comparable pipeline orchestrator (Airflow, Prefect) — Dagster strongly preferred
                                    </li>
                                    <li>
                                        Deep PostgreSQL proficiency: query optimization, indexing, partitioning, HA configuration
                                    </li>
                                    <li>
                                        Kafka or comparable streaming platform at meaningful throughput (100GB+/month minimum)
                                    </li>
                                    <li>
                                        Redis operational experience: deduplication patterns, caching, pub/sub
                                    </li>
                                    <li>
                                        Strong distributed systems fundamentals: idempotency, retry budgets, backpressure, exactly-once semantics
                                    </li>
                                    <li>
                                        OpenTelemetry or comparable distributed tracing implementation — end-to-end trace ID propagation
                                    </li>
                                </ul>
                            </div>

                            <div className="career-list">
                                <h3>Strong Advantage</h3>

                                <ul>
                                    <li>
                                        Neo4j and Cypher — graph schema design, relationship modeling, query optimization
                                    </li>
                                    <li>
                                        PGVector or comparable vector database for semantic similarity search
                                    </li>
                                    <li>
                                        OpenSearch/Elasticsearch — hot/warm/cold tier management, index lifecycle policies, mapping design
                                    </li>
                                    <li>
                                        Langraph, LangChain, or comparable agent orchestration framework
                                    </li>
                                    <li>
                                        HITL pipeline design: human review gate implementation, feedback loop architecture, negative linking enforcement
                                    </li>
                                    <li>
                                        Medallion data lake architecture at production scale
                                    </li>
                                    <li>
                                        Data quality, lineage, and confidence scoring system design
                                    </li>
                                    <li>
                                        Air-gapped deployment experience — all services must run fully offline
                                    </li>
                                </ul>
                            </div>

                            <div className="career-list">
                                <h3>What We Offer</h3>

                                <ul>
                                    <li>
                                        Senior-level remote compensation benchmarked globally
                                    </li>
                                    <li>
                                        Architectural influence on a complex, multi-TB intelligence pipeline from day one
                                    </li>
                                    <li>
                                        Exposure to graph databases, vector search, multi-agent AI orchestration, and OSINT data at scale
                                    </li>
                                    <li>
                                        Mentorship opportunities and a clear path to Staff / Principal Engineer
                                    </li>
                                    <li>
                                        A team that values depth, ownership, and directness
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