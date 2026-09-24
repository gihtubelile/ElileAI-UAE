"use client";
import React from "react";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { TbBriefcaseFilled } from "react-icons/tb";
import { useState } from "react";

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
                  <Link href="/">Home</Link> / Career
                </nav>
                <h1 className="breadcumb-title">Career</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="career-sec section-gap">
        <div className="container">
          <div className="row">
            {/* Systems Engineer / Infrastructure Engineer */}
            <div className="col-lg-6 col-12">
              <div className="jobs-item">
                <h5>Systems Engineer / Infrastructure Engineer</h5>

                <ul className="job-header-info list-unstyled">
                  <li>
                    <FaLocationDot /> Remote / Global
                  </li>
                  <li>
                    <TbBriefcaseFilled /> 4–7 years
                  </li>
                </ul>

                <div className="jobsDesc">
                  <p>
                    We build and operate a large-scale, air-gapped, on-premises intelligence
                    platform deployed into enterprise and government data centers. Our
                    infrastructure spans Kubernetes clusters on bare-metal Dell PowerEdge
                    servers, NVIDIA GPU nodes (H100/H200 SXM), distributed object storage,
                    and a multi-zone network architecture with strict air-gap requirements.
                    You will own the full infrastructure lifecycle — from initial rack-and-stack
                    to observability, security hardening, and GitOps-driven continuous deployment.
                  </p>
                </div>

                <div className="job-footer">
                  <Link
                    className="default-btn"
                    href="/systems-engineer-infrastructure-engineer"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>


            {/* Frontend / Full Stack Engineer */}
            <div className="col-lg-6 col-12">
              <div className="jobs-item">
                <h5>Frontend / Full Stack Engineer</h5>

                <ul className="job-header-info list-unstyled">
                  <li>
                    <FaLocationDot /> Remote / Global
                  </li>
                  <li>
                    <TbBriefcaseFilled /> 3–6 years </li>
                </ul>

                <div className="jobsDesc">
                  <p>
                    We are building ID1X — an identity intelligence platform used by
                    enterprise and government investigators. The frontend is the face of a
                    highly complex AI system: analysts use it to search identities, review
                    HITL (Human-in-the-Loop) queues, explore interactive knowledge graphs,
                    visualize geolocation timelines, and generate structured intelligence
                    reports. This is not a marketing site — it is a professional
                    investigative tool that must handle complex data, real-time updates,
                    and strict access control.
                  </p>
                </div>

                <div className="job-footer">
                  <Link
                    className="default-btn"
                    href="/frontend-full-stack-engineer"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>


            {/* Data Center Engineer */}
            <div className="col-lg-6 col-12">
              <div className="jobs-item">
                <h5>Data Center Engineer</h5>

                <ul className="job-header-info list-unstyled">
                  <li>
                    <FaLocationDot /> Remote / Global
                  </li>
                  <li>
                    <TbBriefcaseFilled /> 5–9 years
                  </li>
                </ul>

                <div className="jobsDesc">
                  <p>
                    We deploy an air-gapped intelligence platform into client-owned data
                    centers across the GCC and broader region. Our hardware footprint
                    includes Dell PowerEdge R750xs and R740xd servers, NVIDIA H100/H200 SXM
                    GPU nodes, Cisco Nexus switching, and 900TB+ of distributed storage —
                    all operating in strict on-premises, air-gapped environments. You will
                    own the physical infrastructure layer: rack-and-stack, commissioning,
                    network configuration, hardware lifecycle, and ongoing site operations.
                    Travel to client sites in the UAE, Pakistan, and potentially other GCC
                    countries is a core part of this role.
                  </p>
                </div>

                <div className="job-footer">
                  <Link
                    className="default-btn"
                    href="/data-center-engineer"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>


            {/* Senior Backend / Data Engineer */}
            <div className="col-lg-6 col-12">
              <div className="jobs-item">
                <h5>Senior Backend / Data Engineer</h5>

                <ul className="job-header-info list-unstyled">
                  <li>
                    <FaLocationDot /> Remote / Global
                  </li>
                  <li>
                    <TbBriefcaseFilled /> 6+ years
                  </li>
                </ul>

                <div className="jobsDesc">
                  <p>
                    We are building ID1X — a large-scale identity intelligence platform
                    that ingests, deduplicates, normalizes, and fuses data from dozens of
                    OSINT vendors into a unified identity graph. The data pipeline processes
                    terabytes of structured and unstructured data monthly through a
                    Medallion architecture (Bronze → Silver → Gold), feeding downstream AI
                    agents, a knowledge graph (Neo4j), a vector database (PGVector), and a
                    unified search engine (OpenSearch/M-Mind).
                  </p>
                </div>

                <div className="job-footer">
                  <Link
                    className="default-btn"
                    href="/senior-backend-data-engineer"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="jobs-item">
                <h5>Product & UI/UX Designer</h5>
                <ul className="job-header-info list-unstyled">
                  <li>
                    <FaLocationDot /> On-Site | Abu Dhabi, UAE
                  </li>
                  <li>
                    <TbBriefcaseFilled /> 3+ years or Portfolio-led
                  </li>
                </ul>
                <div className="jobsDesc">
                  <p>
                    We are not looking for someone who executes briefs. We want someone who
                    interrogates them. This is a senior individual contributor role that
                    sits at the heart of Elile's product and brand experience. You will own
                    the design function end-to-end — from product UI/UX across our
                    enterprise applications, to our corporate and marketing web presence,
                    to digital assets and campaign materials.
                  </p>
                </div>
                <div className="job-footer">
                  <Link className="default-btn" href="/product-ui-ux-designer">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="jobs-item">
                <h5>Executive Assistant / Office Administrator</h5>
                <ul className="job-header-info list-unstyled">
                  <li>
                    <FaLocationDot /> On-Site | Abu Dhabi, UAE
                  </li>
                  <li>
                    <TbBriefcaseFilled /> Minimum 3–5 years
                  </li>
                </ul>
                <div className="jobsDesc">
                  <p>
                    We are looking for a polished and proactive Executive Assistant /
                    Office Administrator to be the operational backbone of our Abu Dhabi
                    headquarters. This is a hands-on, dual-function role - part executive
                    support, part office management, and the right person will be equally
                    comfortable coordinating a leadership meeting and handling a
                    government visa application.
                  </p>
                </div>
                <div className="job-footer">
                  <Link className="default-btn" href="/executive-assistant-office-administrator">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="jobs-item">
                <h5>Financial Controller</h5>
                <ul className="job-header-info list-unstyled">
                  <li>
                    <FaLocationDot /> On-Site | Abu Dhabi, UAE
                  </li>
                  <li>
                    <TbBriefcaseFilled /> 4–5 years
                  </li>
                </ul>
                <div className="jobsDesc">
                  <p>
                    We are looking for a capable and hands-on Financial Controller -
                    someone early in their career but already technically strong,
                    detail-obsessed, and ready to own the full finance and accounting
                    function for a multi-entity technology company. This is a broad and
                    meaningful role. You will handle everything from day-to-day bookkeeping
                    and month-end close to regulatory compliance, payroll, and liaison with
                    our external tax advisors.
                  </p>
                </div>
                <div className="job-footer">
                  <Link className="default-btn" href="/financial-controller">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="jobs-item">
                <h5>Principal Engineer — Complex Systems Architecture</h5>

                <ul className="job-header-info list-unstyled">
                  <li>
                    <FaLocationDot /> Remote, Europe preferred
                  </li>

                  <li>
                    <TbBriefcaseFilled /> Level L5 or L6, based on experience
                  </li>
                </ul>

                <div className="jobsDesc">
                  <p>
                    You are the architect and the engineer. You design a system on
                    paper, then build it yourself, own it in production, and set the
                    standard the rest of the team works toward. You will own one full
                    workstream end-to-end: design → implementation → testing →
                    deployment → operations.
                  </p>
                </div>

                <div className="job-footer">
                  <Link
                    className="default-btn"
                    href="/principal-engineer-complex-systems-architecture"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="jobs-item">
                <h5>Senior AI Deployment Engineer</h5>
                <ul className="job-header-info list-unstyled">
                  <li>
                    <FaLocationDot /> Hybrid or Remote
                  </li>
                  <li>
                    <TbBriefcaseFilled /> 5–8+ years (Senior/Lead level)
                  </li>
                </ul>
                <div className="jobsDesc">
                  <p>
                    We are seeking a Senior AI Deployment Engineer to lead the
                    architecture and delivery of AI-native applications in
                    complex, high-security environments. This is a "Master
                    Builder" role that bridges the gap between state-of-the-art
                    LLM development and hardened, on-premises hardware
                    infrastructure. You will be the primary technical authority
                    for deploying mission-critical AI agents and RAG pipelines
                    within sovereign data infrastructures and air-gapped
                    environments.
                  </p>
                </div>
                <div className="job-footer">
                  <Link
                    className="default-btn"
                    href="/senior-ai-deployment-engineer"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="jobs-item">
                <h5>
                  Senior Intelligence Data Lead – OSINT, Social & External
                  Intelligence{" "}
                </h5>
                <ul className="job-header-info list-unstyled">
                  <li>
                    <FaLocationDot /> Hybrid or Remote
                  </li>
                  <li>
                    <TbBriefcaseFilled /> 6+ years
                  </li>
                </ul>
                <div className="jobsDesc">
                  <p>
                    We are seeking a senior leader to own and evolve Elile’s
                    external intelligence and data acquisition capabilities,
                    spanning open-source intelligence (OSINT), social platforms,
                    dark web sources, Ad-ID, cookies and other publicly or
                    commercially available data environments. This role sits at
                    the intersection of intelligence collection, data
                    structuring, investigative workflows, and platform
                    execution. It is intentionally designed for candidates with
                    either a strong engineering background, a product leadership
                    background, or a hybrid intelligence profile who have built
                    such platforms for digital intelligence in their career.
                  </p>
                </div>
                <div className="job-footer">
                  <Link
                    className="default-btn"
                    href="/senior-intelligence-data-lead"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="jobs-item">
                <h5>Dark Web Researcher / Threat Intel Analyst </h5>
                <ul className="job-header-info list-unstyled">
                  <li>
                    <FaLocationDot /> Remote / Hybrid
                  </li>
                  <li>
                    <TbBriefcaseFilled /> 3+ years
                  </li>
                </ul>
                <div className="jobsDesc">
                  <p>
                    We are seeking a Dark Web Researcher with deep experience in
                    underground ecosystems, threat intelligence collection, and
                    adversarial research. This role focuses on monitoring,
                    investigating, and analyzing illicit online activity across
                    dark web forums, marketplaces, encrypted platforms, and
                    breach ecosystems.You will operate at the intersection of
                    cyber threat intelligence, OSINT, and investigative
                    research, producing insights that support security
                    operations, risk assessment, and strategic decision-making.
                    This is a hands-on role for someone comfortable working in
                    hostile, deceptive, and fast-evolving digital environments.
                  </p>
                </div>
                <div className="job-footer">
                  <Link className="default-btn" href="/dark-web-researcher">
                    Read More
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
