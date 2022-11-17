import React from "react";
import { PortWidget } from "@projectstorm/react-diagrams-core";
import lambda from '../../assets/Lambda.png'

export const LambdaNodeWidget = (props) => {
  return (
    <div className="lambda-node">
      <div
        className="lambda-node-header-container"
        style={{ backgroundColor: props.node.color }}
      >
        <div className="my-icon" />
        <div className="lambda-node-header-text">Lambda</div>
      </div>

       <PortWidget
        className="port-container left-port"
        engine={props.engine}
        port={props.node.getPort("in")}
      >
        <div className="lambda-port" />
      </PortWidget> 

      <div className="lambda-node-content"><img src={lambda} alt="lambda"/></div>

      <PortWidget
        className="port-container right-port"
        engine={props.engine}
        port={props.node.getPort("out")}
      >
        <div className="lambda-port" />
      </PortWidget>
    </div>
  );
};
