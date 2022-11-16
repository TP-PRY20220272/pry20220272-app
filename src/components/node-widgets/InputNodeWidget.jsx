import React from "react";
import { PortWidget } from "@projectstorm/react-diagrams-core";
import microservice from '../../assets/Microservice.png'

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

       <PortWidget
        className="input-port-container left-port"
        engine={props.engine}
        port={props.node.getPort("in")}
      >
        <div className="input-port" />
      </PortWidget> 

      <div className="input-node-content"><img src={microservice} alt="microservicio"/></div>

      <PortWidget
        className="input-port-container right-port"
        engine={props.engine}
        port={props.node.getPort("out")}
      >
        <div className="input-port" />
      </PortWidget>
    </div>
  );
};