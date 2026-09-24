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
                                    <Link href="/">Home</Link> / Senior Infrastructure Engineer
                                </nav>
                                <h1 className="breadcumb-title">Senior Infrastructure Engineer</h1>
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
                                We are seeking an experienced Senior Infrastructure Engineer to lead the design, deployment, and maintenance of our on-premises Kubernetes-based data center infrastructure. This is a hands-on role encompassing physical hardware, virtualization, and cluster administration. You will ensure high availability, performance, and scalability while enabling secure and efficient workloads for both developers and operations.
                            </p>
                            <div className="career-list">
                                <h3>Key Responsibilities:</h3>
                                <p className="job-subtitle">Infrastructure Management (40%) </p>
                                <ul>
                                    <li>Design and maintain server, storage, and networking infrastructure across 2–4 data center racks</li>
                                    <li>Manage rack layout, power distribution, and cooling systems</li>
                                    <li>Perform hardware lifecycle management and capacity planning</li>
                                    <li>Administer hypervisor environments (e.g., VMware vSphere, Proxmox, KVM)</li>
                                    <li>Implement and maintain software-defined networking (SDN) and storage platforms</li>
                                </ul>
                                <p className="job-subtitle">Kubernetes Cluster Administration (30%)</p>
                                <ul>
                                    <li>Deploy, monitor, and scale production Kubernetes clusters</li>
                                    <li>Implement RBAC, network policies, and secure baseline configurations</li>
                                    <li>Manage persistent storage using solutions such as Rook/Ceph or OpenEBS</li>
                                    <li>Configure container networking layers (e.g., Cilium, Calico)</li>
                                    <li>Ensure high availability, backup, and disaster recovery procedures</li>
                                </ul>

                                <p className="job-subtitle">Monitoring & Performance Optimization (20%)</p>
                                <ul>
                                    <li>Set up observability stacks (Prometheus, Grafana, ELK)</li>
                                    <li>Define alerting, incident response, and SLA compliance (target 99.9%+ uptime)</li>
                                    <li>Conduct regular infrastructure performance tuning and cost/performance analysis</li>
                                    <li>Maintain up-to-date infrastructure documentation</li>
                                </ul>

                                <p className="job-subtitle">Collaboration & Support (10%)</p>
                                <ul>
                                    <li>Collaborate with development teams to optimize app performance and deployment</li>
                                    <li>Participate in on-call rotation and root cause analysis reviews</li>
                                    <li>Mentor junior engineers and promote operational best practices</li>
                                </ul>

                            </div>
                            <div className="career-list">
                                <h3>Required Qualifications </h3>

                                <p className="job-subtitle">Education & Experience</p>
                                <ul>
                                    <li>Bachelor’s degree in Computer Science, Engineering, or equivalent experience</li>
                                    <li>5+ years in infrastructure or systems engineering roles</li>
                                    <li>2+ years managing Kubernetes in production environments</li>
                                    <li>Experience with hands-on data center hardware installation and operations</li>
                                </ul>

                                <p className="job-subtitle">Technical Skills</p>
                                <ul>
                                    <li>Operating Systems: Strong Linux (Ubuntu, RHEL, Rocky)</li>
                                    <li>Virtualization: VMware, KVM, or Proxmox</li>
                                    <li>Containers: Docker, containerd, Kubernetes (CKA preferred)</li>
                                    <li>Networking: VLANs, firewalls, TCP/IP, BGP, load balancing</li>
                                    <li>Storage: SAN, NAS, Ceph, distributed storage systems</li>
                                    <li>Scripting/Automation: Python, Bash, Go</li>
                                    <li>IaC Tools: Terraform, Ansible</li>
                                    <li>Observability: Prometheus, Grafana, ELK</li>
                                </ul>

                                <p className="job-subtitle">Soft Skills</p>
                                <ul>
                                    <li>Analytical and methodical troubleshooting skills</li>
                                    <li>Clear documentation and communication</li>
                                    <li>Ability to independently manage projects and priorities</li>
                                </ul>

                                <p className="job-subtitle">Preferred Qualifications</p>
                                <ul>
                                    <li>Kubernetes certifications (CKA, CKS)</li>
                                    <li>Experience with bare-metal Kubernetes deployments</li>
                                    <li>Familiarity with GitOps (ArgoCD, Flux)</li>
                                    <li>Knowledge of service mesh architectures</li>
                                    <li>Hardware vendor certifications (Dell, HPE, etc.)</li>
                                </ul>

                                <p className="job-subtitle">Compensation & Benefits</p>
                                <ul>
                                    <li>Competitive salary based on experience and skillset</li>
                                    <li>Health, dental, and vision insurance</li>
                                    <li>Annual training and certification budget</li>
                                    <li>Flexible working hours and on-call compensation</li>
                                    <li>Hands-on experience with leading open-source tools and infrastructure</li>
                                </ul>

                                <p className="job-subtitle">Working Conditions</p>
                                <ul>
                                    <li>On-site presence required for hardware maintenance and installation</li>
                                    <li>Participation in on-call rotation (approximately 1 week per month)</li>
                                    <li>Occasional after-hours maintenance windows</li>
                                    <li>Physical ability to lift and rack equipment (up to 50 lbs)</li>
                                </ul>

                            </div>
                            <div className="career-list">
                                <h3>How to Apply</h3>
                                <p>Submit your resume and a cover letter outlining your experience in Kubernetes, infrastructure, or platform engineering. Highlight any relevant projects, open-source contributions, or certifications.
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
