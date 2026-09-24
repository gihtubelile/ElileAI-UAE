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
                                    <Link href="/">Home</Link> / Dark Web Researcher / Threat Intelligence Analyst
                                </nav>
                                <h1 className="breadcumb-title">Dark Web Researcher / Threat Intelligence Analyst</h1>
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
                                We are seeking a Dark Web Researcher with deep experience in underground ecosystems,
                                threat intelligence collection, and adversarial research. This role focuses on monitoring,
                                investigating, and analyzing illicit online activity across dark web forums, marketplaces,
                                encrypted platforms, and breach ecosystems.
                                You will operate at the intersection of cyber threat intelligence, OSINT, and investigative
                                research, producing insights that support security operations, risk assessment, and strategic
                                decision-making.
                                This is a hands-on role for someone comfortable working in hostile, deceptive, and
                                fast-evolving digital environments.
                            </p>
                            <div className="career-list">
                                <h3>Key Responsibilities</h3>
                                <p className="job-subtitle">Dark Web & Underground Research</p>
                                <ul>
                                    <li>
                                        Monitor dark web forums, marketplaces, and invite-only communities for emerging
                                        threats, leaks, and malicious activity.
                                    </li>
                                    <li>
                                        Track threat actors, aliases, and behavioral patterns across multiple platforms.
                                    </li>
                                    <li>
                                        Identify and analyze data breaches, credential dumps, malware discussions,
                                        fraud schemes, and illicit services.
                                    </li>
                                </ul>

                                <p className="job-subtitle">Threat Intelligence Collection & Analysis</p>
                                <ul>
                                    <li>
                                        Collect, validate, and enrich intelligence from underground sources.
                                    </li>
                                    <li>
                                        Correlate dark web activity with open-source, technical, and contextual data.
                                    </li>
                                    <li>
                                        Assess credibility, intent, and potential impact of observed threats.
                                    </li>
                                    <li>
                                        Identify data breaches from dark web marketplaces and surface relevant findings.
                                    </li>
                                </ul>

                                <p className="job-subtitle">Research Integrity & Tradecraft</p>
                                <ul>
                                    <li>
                                        Maintain strict operational security (OPSEC) while conducting research.
                                    </li>
                                    <li>
                                        Use anonymization, secure tooling, and compartmentalization best practices.
                                    </li>
                                    <li>
                                        Document sources, confidence levels, and analytical reasoning clearly.
                                    </li>
                                </ul>


                            </div>
                            <div className="career-list">
                                <h3>Required Skills & Experience</h3>

                                <p className="job-subtitle">Core Experience</p>
                                <ul>
                                    <li>
                                        3+ years of experience in dark web research, cyber threat intelligence, or
                                        underground monitoring.
                                    </li>
                                    <li>
                                        Proven ability to navigate and analyze:
                                        <ul>
                                            <li>Dark web forums and marketplaces</li>
                                            <li>Encrypted messaging platforms</li>
                                            <li>Breach and leak ecosystems</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Experience working with sensitive or adversarial content.
                                    </li>
                                </ul>

                                <p className="job-subtitle">Technical & Analytical Skills</p>
                                <ul>
                                    <li>
                                        Strong understanding of:
                                        <ul>
                                            <li>Cybercrime ecosystems</li>
                                            <li>Data breaches and credential exposure</li>
                                            <li>Fraud, ransomware, and underground services</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Ability to evaluate source reliability and detect misinformation or deception.
                                    </li>
                                    <li>
                                        Comfortable working with large volumes of unstructured data.
                                    </li>
                                </ul>

                                <p className="job-subtitle">Tools & Methods</p>
                                <ul>
                                    <li>
                                        Experience using threat intelligence platforms, OSINT tools, and custom research
                                        workflows.
                                    </li>
                                    <li>
                                        Familiarity with anonymization tools, secure browsers, and research environments.
                                    </li>
                                    <li>
                                        Ability to document findings clearly for both technical and non-technical audiences.
                                    </li>
                                </ul>
                            </div>

                            <div className="career-list">
                                <h3>Nice to Have</h3>
                                <ul>
                                    <li>
                                        Background in cybersecurity, intelligence analysis, or digital forensics.
                                    </li>
                                    <li>Experience collaborating with SOC, DFIR, or risk teams.</li>
                                    <li>Understanding of financial crime, crypto markets, or illicit marketplaces.</li>
                                    <li>Multilingual capabilities for non-English forums.</li>
                                </ul>
                            </div>
                            <div className="career-list">
                                <h3>What Success Looks Like</h3>
                                <ul>
                                    <li>You build trusted, accurate assessments in uncertain environments.</li>
                                    <li>Your work strengthens organizational awareness and preparedness.</li>
                                </ul>
                            </div>
                            <div className="career-list">
                                <h3>Professional Expectations</h3>
                                <ul>
                                    <li>Comfort working independently with minimal supervision.</li>
                                    <li>Strong written communication and analytical discipline.</li>
                                    <li>Ability to operate calmly in high-noise, high-risk information environments.</li>
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
