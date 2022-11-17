import React from "react";
import { PortWidget } from "@projectstorm/react-diagrams-core";
import mysql from '../../assets/MySQL.png'

export const MySqlNodeWidget = (props) => {
    return (
      <div className="mysql-node">
        <div
          className="mysql-node-header-container"
          style={{ backgroundColor: props.node.color }}
        >
          <div className="my-icon" />
          <div className="mysql-node-header-text">MySQL</div>
        </div>
  
         <PortWidget
          className="port-container left-port"
          engine={props.engine}
          port={props.node.getPort("in")}
        >
          <div className="mysql-port" />
        </PortWidget> 
  
        <div className="mysql-node-content"><img src={mysql} alt="mysql"/></div>
  
        <PortWidget
          className="port-container right-port"
          engine={props.engine}
          port={props.node.getPort("out")}
        >
          <div className="mysql-port" />
        </PortWidget>
      </div>
    );
  };