import React from "react";
import { PortWidget } from "@projectstorm/react-diagrams-core";
import microservice from '../../assets/Microservice.png'

export const MicroserviceNodeWidget = (props) => {
  return (
    <div className="microservice-node">
      <div
        className="microservice-node-header-container"
        style={{ backgroundColor: props.node.color }}
      >
        <div className="my-icon" />
        <div className="microservice-node-header-text">Microservice A</div>
      </div>

       <PortWidget
        className="port-container left-port"
        engine={props.engine}
        port={props.node.getPort("in")}
      >
        <div className="microservice-port" />
      </PortWidget> 

      <div className="microservice-node-content, image-responsive"><img src={microservice} alt="microservicio"/></div>

      <PortWidget
        className="port-container right-port"
        engine={props.engine}
        port={props.node.getPort("out")}
      >
        <div className="microservice-port" />
      </PortWidget>
    </div>
  );
};