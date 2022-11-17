import React from "react";
import { CanvasWidget } from "@projectstorm/react-canvas-core";
import { NodesTypesContainer } from "../nodes-types-container/NodesTypesContainer";
import { MicroserviceNodeTypeLabel } from "../node-type-label/NodeTypeLabel";
import { LambdaNodeTypeLabel } from "../node-type-label/NodeTypeLabel";
import { MySqlNodeTypeLabel } from "../node-type-label/NodeTypeLabel";
import { DiagramCanvas } from "../DiagramCanvas";
import { MicroserviceNodeModel } from "../MicroserviceNodeModel";
import { LambdaNodeModel } from "../LambdaNodeModel";
import { MySqlNodeModel } from "../MySqlNodeModel";
import "./my-creator-widget.css";

//import { DefaultPortModel } from "@projectstorm/react-diagrams";

// Node Creator Widget
export const NodeCreatorWidget = (props) => {
  // Force canvas update
  const forceUpdate = React.useReducer((bool) => !bool)[1];
  // The engine
  const diagramEngine = props.engine;

  // Drop a node on canva on event
  const onMicroserviceNodeDrop = (event) => {
    const node = new MicroserviceNodeModel({ color: "#277da1" });
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

  const onLambdaNodeDrop = (event) => {
    const node = new LambdaNodeModel({ color: "#f94144" });
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

  const onMySqlNodeDrop = (event) => {
    const node = new MySqlNodeModel({ color: "#B3EB8F" });
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
          <MicroserviceNodeTypeLabel model={{ ports: "out" }} name="Microservice" />
          <LambdaNodeTypeLabel model={{ ports: "in" }} name="Lambda" />
          <MySqlNodeTypeLabel model={{ ports: "on" }} name="MySQL" />
        </NodesTypesContainer>

        <div
          className="creator-layer"
          onDrop={(event) => {
            var data = JSON.parse(
              event.dataTransfer.getData("storm-diagram-node")
            );
            if (data.ports === "out") {
              console.log("out ports");
              onMicroserviceNodeDrop(event);
            } else if(data.ports === "in"){
              console.log("in ports");
              onLambdaNodeDrop(event);
            } else{
              console.log("on ports");
              onMySqlNodeDrop(event);
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