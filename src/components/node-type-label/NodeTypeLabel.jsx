import React from "react";
import "./node-type-label.css";

// Nodes Labels (left panel)
export const MicroserviceNodeTypeLabel = (props) => {
  return (
    <div
      className="microservice-node-type-label"
      color={props.color}
      draggable
      onDragStart={(event) => {
        event.dataTransfer.setData(
          "storm-diagram-node",
          JSON.stringify(props.model)
        );
      }}
    >
      {props.name}
    </div>
  );
};

export const LambdaNodeTypeLabel = (props) => {
  return (
    <div
      className="lambda-node-type-label"
      color={props.color}
      draggable
      onDragStart={(event) => {
        event.dataTransfer.setData(
          "storm-diagram-node",
          JSON.stringify(props.model)
        );
      }}
    >
      {props.name}
    </div>
  );
};