"use client";
import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const DiagnosticsTab = () => {
  const [key, setKey] = useState("home");

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3 service-tab-top"
    >
      <Tab eventKey="home" title="Automation & Maintenance">
        <div className="service-tab-content">
          <h3 className="service-tab-content-title">
            Automated diagnostics for <br />
            cost-effective maintenance
          </h3>
          <p>
            Elile’s diagnostics & remediation solutions leverage automated tools
            to perform real-time root cause analysis across large-scale energy
            systems. By integrating digital twins and predictive models, we can
            precisely forecast efficiency losses and provide actionable insights
            for immediate remediation. Our diagnostics tools generate detailed
            reports pinpointing inefficiencies, ensuring energy assets maintain
            peak performance. These processes are validated through rigorous
            methodologies to guarantee reliability and accuracy, minimizing
            downtime and extending asset life.
          </p>
        </div>
      </Tab>
      <Tab eventKey="profile" title="Applications">
        <div className="service-tab-content">
          <h3 className="service-tab-content-title">
            Production, distribution & performance optimization
          </h3>
          <p>
            Elile’s services are vital for energy producers, grid operators, and
            infrastructure managers who need to maintain optimal performance.
            With real-time diagnostic insights, operators can detect performance
            degradation, enabling pre-emptive action before minor issues become
            major problems. These services facilitate efficient energy
            distribution, optimize production processes, and reduce the risk of
            unexpected outages. Our diagnostics tools provide an accurate
            assessment of system health, offering both short-term fixes and
            long-term maintenance strategies.
          </p>
        </div>
      </Tab>
    </Tabs>
  );
};

export default DiagnosticsTab;
