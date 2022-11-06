import React from "react";
import { CanvasWidget } from "@projectstorm/react-canvas-core";
import { NodesTypesContainer } from "../nodes-types-container/NodesTypesContainer";
import { InputNodeTypeLabel } from "../node-type-label/NodeTypeLabel";
import { OutputNodeTypeLabel } from "../node-type-label/NodeTypeLabel";
import { DiagramCanvas } from "../DiagramCanvas";
import { InputNodeModel } from "../InputNodeModel";
import { OutputNodeModel } from "../OutputNodeModel";
import "./my-creator-widget.css";

//import { DefaultPortModel } from "@projectstorm/react-diagrams";

// Node Creator Widget
export const NodeCreatorWidget = (props) => {
  // Force canvas update
  const forceUpdate = React.useReducer((bool) => !bool)[1];
  // The engine
  const diagramEngine = props.engine;

  // Drop a node on canva on event
  const onInputNodeDrop = (event) => {
    const node = new InputNodeModel({ color: "#277da1" });
    const point = diagramEngine.getRelativeMousePoint(event);
    node.setPosition(point);
    node.registerListener({
      selectionChanged: () => {
        console.log("InputselectionChanged");
      }
    });
    // add node to engine
    diagramEngine.getModel().addNode(node);
    forceUpdate();
  };

  const onOutputNodeDrop = (event) => {
    const node = new OutputNodeModel({ color: "#f94144" });
    const point = diagramEngine.getRelativeMousePoint(event);
    node.setPosition(point);
    node.registerListener({
      selectionChanged: () => {
        console.log("OutputselectionChanged");
      }
    });
    // add node to engine
    diagramEngine.getModel().addNode(node);
    forceUpdate();
  };

  return (
    // Return code
    <div className="creator-body">
      <header className="creator-header">
        <div className="creator-title">Workflow Builder 1.0</div>
      </header>

      <div className="creator-content">
        <NodesTypesContainer>
          <InputNodeTypeLabel model={{ ports: "out" }} name="Input Node" />
          <OutputNodeTypeLabel model={{ ports: "in" }} name="Output Node" />
        </NodesTypesContainer>

        <div
          className="creator-layer"
          onDrop={(event) => {
            var data = JSON.parse(
              event.dataTransfer.getData("storm-diagram-node")
            );
            if (data.ports === "out") {
              console.log("out ports");
              onInputNodeDrop(event);
            } else {
              console.log("in ports");
              onOutputNodeDrop(event);
            }
          }}
          onDragOver={(event) => {
            event.preventDefault();
          }}
        >
          <DiagramCanvas>
            <CanvasWidget engine={diagramEngine} />
          </DiagramCanvas>
        </div>
      </div>
    </div>
  );
};