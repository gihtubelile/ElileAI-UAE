"use client";
import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const MonitoringTab = () => {
  const [key, setKey] = useState("home");

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3 service-tab-top"
    >
      <Tab eventKey="home" title="Energy Management">
        <div className="service-tab-content">
          <h3 className="service-tab-content-title">
            Cost-effective monitoring for smart energy management!
          </h3>
          <p>
            Elile’s monitoring and alerting solutions provide real-time insights
            into operational parameters, helping maintain large-scale power
            production and distribution infrastructure. We continuously monitor
            KPIs and system metrics with advanced algorithms, and digital twins
            that simulate the physical systems in a virtual environment,
            providing a comprehensive view of system health. Our centralized
            dashboards offer full transparency, while predictive maintenance
            models pre-emptively identify potential equipment failures,
            optimizing maintenance schedules to reduce unplanned downtimes.
          </p>
        </div>
      </Tab>
      <Tab eventKey="profile" title="Applications">
        <div className="service-tab-content">
          <h3 className="service-tab-content-title">
            Production, distribution, and everything in between
          </h3>
          <p>
            Elile’s monitoring and alerting services are critical for energy
            producers, distribution companies, and grid operators aiming to
            maximize operational efficiency. These services provide real-time
            oversight of complex energy systems, enabling swift action in case
            of anomalies, and facilitating predictive insights that optimize
            performance. By proactively monitoring system health, we ensure
            large-scale operations remain uninterrupted, efficient, and
            cost-effective.
          </p>
        </div>
      </Tab>
    </Tabs>
  );
};

export default MonitoringTab;
