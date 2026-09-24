"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="custom-navbar">
      <nav className={`navbar navbar-expand-lg ${scrolled ? "scrolled" : ""}`}>
        <div className="container-fluid">
          <a className="navbar-brand py-0" href="/">
            <img src="/logo.png" width={110} height={80} alt="Elile Logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded={isOpen ? "true" : "false"}
            aria-label="Toggle navigation"
            onClick={toggleNavbar}
          >
            <span
              className={`navbar-toggler-icon ${isOpen ? "close" : ""}`}
            ></span>
          </button>
          <div
            className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
            id="navbarSupportedContent"
          >
            <Image
              src="/logo.webp"
              width={110}
              height={80}
              alt="Elile Logo"
              className="mobile-logo"
            />
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  href="/"
                  onClick={closeNavbar}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/about" onClick={closeNavbar}>
                  Why Elile
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  AI Solutions
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item"
                      href="/agentic-ai-solutions"
                      onClick={closeNavbar}
                    >
                      Agentic AI Solutions
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      href="/autonomous-operations"
                      onClick={closeNavbar}
                    >
                      Autonomous Operations
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      href="/ai-driven-adaptive-systems"
                      onClick={closeNavbar}
                    >
                      AI-Driven Adaptive Systems
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      href="/predictive-alerts-and-fault-prevention"
                      onClick={closeNavbar}
                    >
                      Predictive Alerts & Fault Prevention
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      href="/critical-industrial-and-energy-systems"
                      onClick={closeNavbar}
                    >
                      Critical Industrial & Energy Systems
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      href="/ai-strategy-and-deployment"
                      onClick={closeNavbar}
                    >
                      AI Strategy & Deployment
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  href="/domains"
                  onClick={closeNavbar}
                >
                  Domains
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Energy Efficiency
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item"
                      href="/data-engineering"
                      onClick={closeNavbar}
                    >
                      Data Engineering
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      href="/monitoring-alerting"
                      onClick={closeNavbar}
                    >
                      Monitoring & Alerting
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      href="/diagnostics-remediation"
                      onClick={closeNavbar}
                    >
                      Diagnostics & Remediation
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      href="/performance-optimization"
                      onClick={closeNavbar}
                    >
                      Performance Optimization
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="d-flex">
              <Link
                href="/contact"
                className="default-btn bg-white text-green"
                onClick={closeNavbar}
              >
                Contact Now
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
