"use client";
import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const DataEngineeringTab = () => {
  const [key, setKey] = useState("home");

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3 service-tab-top"
    >
      <Tab eventKey="home" title="Solutions">
        <div className="service-tab-content">
          <h3 className="service-tab-content-title">
            Data-driven energy insights <br /> for a sustainable future!
          </h3>
          <p>
            Elile’s data engineering solutions efficiently manage and
            synchronize out-of-sync energy data streams from diverse energy
            systems. By leveraging AI in energy management, cloud computing, and
            advanced ingestion techniques, we ensure consistent, reliable
            insights for energy-efficient monitoring and cost-effective
            infrastructure optimization. This approach powers advanced machine
            learning models and actionable intelligence, enabling data-driven
            decision-making for sustainable, large-scale power production and
            distribution.
          </p>
        </div>
      </Tab>
      <Tab eventKey="profile" title="Applications">
        <div className="service-tab-content">
          <h3 className="service-tab-content-title">
            Applications that maximize efficiency and performance
          </h3>
          <p>
            Our data engineering services are essential for large-scale energy
            production and distribution companies looking to enhance energy data
            management and operational efficiency. Applications include
            predictive maintenance, demand forecasting, real-time energy
            monitoring, and optimizing energy distribution networks. By
            structuring and synchronizing data, we enable energy operators to
            make informed, timely decisions that improve reliability, reduce
            waste, and drive energy-efficient monitoring for smarter
            infrastructure.
          </p>
        </div>
      </Tab>
    </Tabs>
  );
};

export default DataEngineeringTab;
