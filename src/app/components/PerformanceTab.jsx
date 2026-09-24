"use client";
import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const PerformanceTab = () => {
  const [key, setKey] = useState("home");

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3 service-tab-top"
    >
      <Tab eventKey="home" title="Peak performance">
        <div className="service-tab-content">
          <h3 className="service-tab-content-title">
            Optimized performance for sustainable energy solutions
          </h3>
          <p>
            Our Performance Optimization services leverage advanced AI and
            machine learning algorithms to enhance the efficiency of energy
            production and distribution. By analyzing real-time data and
            identifying inefficiencies, we optimize workflows and resource
            allocation to ensure maximum operational performance. Our solutions
            are designed to reduce energy loss, lower operational costs, and
            improve asset longevity, making large-scale energy infrastructure
            more sustainable and reliable.
          </p>
        </div>
      </Tab>
      <Tab eventKey="profile" title="Applications">
        <div className="service-tab-content">
          <h3 className="service-tab-content-title">
            Applications that boost performance and sustainability
          </h3>
          <p>
            Elile’s performance optimization services are vital for energy
            producers, distributors, and operators aiming to improve system-wide
            efficiency. Applications include energy consumption forecasting,
            dynamic resource allocation, and optimizing system loads. By
            streamlining processes, we enable energy providers to operate more
            efficiently, minimize waste, and maximize the return on energy
            investments.
          </p>
        </div>
      </Tab>
    </Tabs>
  );
};

export default PerformanceTab;
