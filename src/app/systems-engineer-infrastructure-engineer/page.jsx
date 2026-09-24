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
                                    <Link href="/">Home</Link> / Systems Engineer / Infrastructure Engineer
                                </nav>

                                <h1 className="breadcumb-title">
                                    Systems Engineer / Infrastructure Engineer
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
                                We build and operate a large-scale, air-gapped, on-premises intelligence platform deployed into enterprise and government data centers. Our infrastructure spans Kubernetes clusters on bare-metal Dell PowerEdge servers, NVIDIA GPU nodes (H100/H200 SXM), distributed object storage, and a multi-zone network architecture with strict air-gap requirements. You will own the full infrastructure lifecycle — from initial rack-and-stack to observability, security hardening, and GitOps-driven continuous deployment.
                            </p>

                            <p>
                                This is not a cloud-native role. We run on-prem first, with Azure DR as a secondary layer. You need to be comfortable at the hardware level and in the Kubernetes control plane simultaneously.
                            </p>

                            <div className="career-list">
                                <h3>Key Responsibilities</h3>

                                <ul>
                                    <li>
                                        Deploy, manage, and scale RKE2 Kubernetes clusters on bare-metal Dell R750xs/R740xd servers, including control plane hardening and CIS benchmark compliance
                                    </li>

                                    <li>
                                        Manage distributed storage infrastructure: MinIO erasure-coded object storage (300TB+), OpenSearch/Elasticsearch hot/warm/cold tiers, and NVMe-backed stateful workloads
                                    </li>

                                    <li>
                                        Build and maintain GitOps pipelines using ArgoCD, GitHub Actions, and Harbor private registry — with full air-gap support for offline image lifecycle management
                                    </li>

                                    <li>
                                        Configure and administer Keycloak for enterprise SSO, RBAC, OAuth2/OIDC, and LDAP federation across all platform services
                                    </li>

                                    <li>
                                        Implement and operate the full observability stack: OpenTelemetry Collector → Loki (logs) + Prometheus (metrics) + Tempo (traces) + Grafana (dashboards)
                                    </li>

                                    <li>
                                        Manage HashiCorp Vault in offline Raft mode for secrets, certificates, and encryption key lifecycle
                                    </li>

                                    <li>
                                        Configure and troubleshoot Istio service mesh for inter-service mTLS, traffic policies, and distributed tracing propagation
                                    </li>

                                    <li>
                                        Support GPU cluster operations: NVIDIA driver management, CUDA toolkit versioning, MIG partitioning on H100/H200 SXM nodes
                                    </li>

                                    <li>
                                        Manage network infrastructure: Cisco Nexus spine-leaf topology, 100GbE Intel E810 NICs, VLAN segmentation, BGP, and OOB management via iDRAC/IPMI
                                    </li>

                                    <li>
                                        Run disaster recovery operations across dual on-prem sites (Abu Dhabi primary / Dubai secondary) and Azure DR cloud fallback
                                    </li>

                                    <li>
                                        Participate in on-call; lead incident response, post-mortems, and RCA documentation
                                    </li>
                                </ul>
                            </div>

                            <div className="career-list">
                                <h3>Tech Stack You'll Own</h3>

                                <ul>
                                    <li>
                                        Kubernetes RKE2 — air-gapped, CIS-hardened. Helm, ArgoCD (GitOps). Istio service mesh.
                                    </li>

                                    <li>
                                        Storage MinIO (distributed object storage, 300TB+). OpenSearch (hot/warm/cold). Neo4j (Graph DB). PGVector. PostgreSQL HA.
                                    </li>

                                    <li>
                                        Observability OpenTelemetry Collector. Loki. Prometheus. Tempo. Grafana. OPIK. Arize AI (ML observability).
                                    </li>

                                    <li>
                                        Security / Auth Keycloak (SSO, RBAC, OAuth2/OIDC). HashiCorp Vault (offline Raft). CIS benchmarks. Network policies.
                                    </li>

                                    <li>
                                        Registry / CI Harbor (private, air-gap). GitHub Actions. GitLab CI. ArgoCD. SonarQube (code quality gates).
                                    </li>

                                    <li>
                                        Messaging RabbitMQ. Confluent Kafka. Redis (dedup, caching).
                                    </li>

                                    <li>
                                        Hardware Dell R750xs / R740xd. NVIDIA H100/H200 SXM. Intel E810 100GbE. Cisco Nexus N9K. iDRAC/IPMI.
                                    </li>

                                    <li>
                                        DR / Cloud Azure (secondary DR only). Dual on-prem sites. Offline-first architecture.
                                    </li>
                                </ul>
                            </div>

                            <div className="career-list">
                                <h3>Required Qualifications</h3>

                                <ul>
                                    <li>
                                        4–7 years of hands-on infrastructure, systems, or DevOps engineering experience
                                    </li>

                                    <li>
                                        Kubernetes — deep operational experience (CKA/CKAD preferred); RKE2 or k3s experience a strong plus
                                    </li>

                                    <li>
                                        Linux systems administration at depth: systemd, networking stack, storage, kernel tuning
                                    </li>

                                    <li>
                                        Experience operating MinIO or comparable distributed object storage at scale
                                    </li>

                                    <li>
                                        GitOps workflows: ArgoCD or Flux, Helm, private registry management
                                    </li>

                                    <li>
                                        Strong networking: Cisco switching, BGP, VLAN, firewall rules, service mesh (Istio/Linkerd)
                                    </li>

                                    <li>
                                        Scripting proficiency: Python and Bash minimum; Go is a bonus
                                    </li>

                                    <li>
                                        Familiarity with Keycloak or comparable IAM/SSO platforms
                                    </li>
                                </ul>
                            </div>

                            <div className="career-list">
                                <h3>Strong Advantage</h3>

                                <ul>
                                    <li>
                                        Air-gapped or on-prem-first deployment experience — this is not optional in our client environments
                                    </li>

                                    <li>
                                        NVIDIA GPU infrastructure: driver management, CUDA, MIG partitioning, InfiniBand/NVLink
                                    </li>

                                    <li>
                                        HashiCorp Vault in offline/Raft mode
                                    </li>

                                    <li>
                                        Istio distributed tracing and mTLS configuration
                                    </li>

                                    <li>
                                        OpenTelemetry instrumentation and full observability stack ownership
                                    </li>

                                    <li>
                                        Dell PowerEdge hardware (R750xs, R740xd) hands-on experience
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
                                        Work on one of the most technically complex on-prem AI deployments in the region
                                    </li>

                                    <li>
                                        GPU infrastructure exposure (H100/H200 SXM) you won't find at most companies
                                    </li>

                                    <li>
                                        Async-first culture with strong engineering discipline
                                    </li>
                                </ul>
                            </div>

                            <div className="career-list">
                                <h3>How to Apply</h3>

                                <p>
                                    Submit your resume and a cover letter outlining your experience
                                </p>
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