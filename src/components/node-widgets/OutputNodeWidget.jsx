import React from "react";
import { PortWidget } from "@projectstorm/react-diagrams-core";

export const OutputNodeWidget = (props) => {
  return (
    <div className="output-node">
      <div
        className="output-node-header-container"
        style={{ backgroundColor: props.node.color }}
      >
        <div className="my-icon" />
        <div className="output-node-header-text">Output</div>
      </div>

      <div className="output-node-content">Output node details</div>

      <PortWidget
        className="port-container left-port"
        engine={props.engine}
        port={props.node.getPort("in")}
      >
        <div className="output-port" />
      </PortWidget>
    </div>
  );
};
