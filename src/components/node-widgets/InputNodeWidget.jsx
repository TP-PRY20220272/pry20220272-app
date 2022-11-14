import React from "react";
import { PortWidget } from "@projectstorm/react-diagrams-core";

export const InputNodeWidget = (props) => {
  return (
    <div className="input-node">
      <div
        className="input-node-header-container"
        style={{ backgroundColor: props.node.color }}
      >
        <div className="my-icon" />
        <div className="input-node-header-text">Input</div>
      </div>

      <div className="input-node-content"><img src="../../assets/microservice.png" alt="microservicio"/></div>

      <PortWidget
        className="port-container right-port"
        engine={props.engine}
        port={props.node.getPort("out")}
      >
        <div className="input-port" />
      </PortWidget>
    </div>
  );
};