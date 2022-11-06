import React from "react";
import "./node-type-label.css";

// Nodes Labels (left panel)
export const InputNodeTypeLabel = (props) => {
  return (
    <div
      className="input-node-type-label"
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

export const OutputNodeTypeLabel = (props) => {
  return (
    <div
      className="output-node-type-label"
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