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
                                    <Link href="/">Home</Link> / Frontend / Full Stack Engineer
                                </nav>

                                <h1 className="breadcumb-title">
                                    Frontend / Full Stack Engineer
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
                                We are building ID1X — an identity intelligence platform used by enterprise and government investigators. The frontend is the face of a highly complex AI system: analysts use it to search identities, review HITL (Human-in-the-Loop) queues, explore interactive knowledge graphs, visualize geolocation timelines, and generate structured intelligence reports. This is not a marketing site — it is a professional investigative tool that must handle complex data, real-time updates, and strict access control.
                            </p>

                            <p>
                                You will work directly with Figma designs and own full-stack features end to end. We are also exploring AI-assisted Figma-to-code generation (Locofy, Anima, Builder.io) and you should be comfortable evaluating and integrating these workflows.
                            </p>

                            <div className="career-list">
                                <h3>Key Responsibilities</h3>

                                <ul>
                                    <li>
                                        Build production-grade React/TypeScript components for investigative workflows: profile search, HITL review queues, identity graph visualization, geospatial heatmaps, and report generation
                                    </li>
                                    <li>
                                        Implement real-time data feeds using WebSockets and event-driven patterns — live surveillance feeds, alerting UIs, streaming pipeline status
                                    </li>
                                    <li>
                                        Integrate frontend with Keycloak authentication (OAuth2/OIDC) and enforce RBAC at the component level
                                    </li>
                                    <li>
                                        Design and implement RESTful API contracts in collaboration with backend engineers; translate Pydantic schemas into TypeScript types
                                    </li>
                                    <li>
                                        Evaluate and integrate AI-powered Figma-to-code tooling (Locofy, Anima, Builder.io) to accelerate component generation from designer handoffs
                                    </li>
                                    <li>
                                        Write comprehensive test coverage: Jest + React Testing Library for unit, Playwright for E2E — enforced at CI gate
                                    </li>
                                    <li>
                                        Adapt canonical JSON schemas from the data pipeline into frontend data models — working directly with the Bronze/Silver/Gold data architecture
                                    </li>
                                    <li>
                                        Contribute to the design system and component library; maintain consistency across the investigative portal and admin panel
                                    </li>
                                    <li>
                                        Participate in sprint planning, ClickUp task management, and cross-functional technical reviews
                                    </li>
                                </ul>
                            </div>

                            <div className="career-list">
                                <h3>Tech Stack You'll Work With</h3>
                                <ul>
                                    <li>
                                        Frontend React 18+. Next.js (App Router). TypeScript. Tailwind CSS.
                                    </li>
                                    <li>
                                        State / Data React Query (TanStack). Redux Toolkit or Zustand. REST + WebSocket APIs.
                                    </li>
                                    <li>
                                        Testing Jest. React Testing Library. Playwright (E2E, CI-enforced).
                                    </li>
                                    <li>
                                        Auth Keycloak OAuth2/OIDC. Role-based component rendering. Secure token management.
                                    </li>
                                    <li>
                                        Design Figma (source of truth). AI-to-code: Locofy / Anima / Builder.io (evaluation + integration).
                                    </li>
                                    <li>
                                        Backend (collab) Python FastAPI. Pydantic schemas. PostgreSQL. RabbitMQ event feeds.
                                    </li>
                                    <li>
                                        CI/CD GitHub Actions. SonarQube (code quality gate). ArgoCD (deployment). Harbor registry.
                                    </li>
                                    <li>
                                        Visualization Graph visualization (D3 / Cytoscape / React Flow). Geospatial heatmaps. Timeline components.
                                    </li>
                                </ul>
                            </div>

                            <div className="career-list">
                                <h3>Required Qualifications</h3>

                                <ul>
                                    <li>
                                        3–6 years of frontend or full stack engineering experience in production environments
                                    </li>
                                    <li>
                                        Expert proficiency in React and TypeScript — including hooks, context, performance patterns
                                    </li>
                                    <li>
                                        Experience with Next.js (App Router preferred)
                                    </li>
                                    <li>
                                        Strong understanding of REST API design and WebSocket/real-time patterns
                                    </li>
                                    <li>
                                        Testing discipline: meaningful coverage, not box-ticking — Jest, Playwright, or equivalent
                                    </li>
                                    <li>
                                        Proficiency with Git, PR-based workflows, and CI/CD pipelines
                                    </li>
                                    <li>
                                        Ability to read and work from Figma designs independently
                                    </li>
                                </ul>
                            </div>

                            <div className="career-list">
                                <h3>Strong Advantage</h3>

                                <ul>
                                    <li>
                                        Experience with complex data visualization: knowledge graphs, geo heatmaps, timeline/event UIs
                                    </li>
                                    <li>
                                        Keycloak or OAuth2/OIDC integration experience
                                    </li>
                                    <li>
                                        Familiarity with AI-to-code tooling: Locofy, Anima, Builder.io, or similar
                                    </li>
                                    <li>
                                        Exposure to investigative, analytics, or intelligence platform UIs
                                    </li>
                                    <li>
                                        Backend Python (FastAPI) experience — full-stack candidates strongly preferred for one of the two positions
                                    </li>
                                    <li>
                                        Playwright E2E experience in a CI environment
                                    </li>
                                </ul>
                            </div>

                            <div className="career-list">
                                <h3>What We Offer</h3>

                                <ul>
                                    <li>
                                        Competitive remote compensation benchmarked globally
                                    </li>
                                    <li>
                                        Work on a real investigative intelligence product — not another dashboard or admin panel
                                    </li>
                                    <li>
                                        Direct collaboration with designers, data engineers, and AI/ML engineers
                                    </li>
                                    <li>
                                        Async-first culture with strong engineering standards (code review, test coverage, CI gates)
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