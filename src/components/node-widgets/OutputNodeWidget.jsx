import React from "react";
import { PortWidget } from "@projectstorm/react-diagrams-core";
import lambda from '../../assets/Lambda.png'

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

       <PortWidget
        className="port-container left-port"
        engine={props.engine}
        port={props.node.getPort("in")}
      >
        <div className="output-port" />
      </PortWidget> 

      <div className="output-node-content"><img src={lambda} alt="lambda"/></div>

      <PortWidget
        className="port-container right-port"
        engine={props.engine}
        port={props.node.getPort("out")}
      >
        <div className="output-port" />
      </PortWidget>
    </div>
  );
};
