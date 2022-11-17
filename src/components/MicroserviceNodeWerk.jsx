import React from "react";
import { AbstractReactFactory } from "@projectstorm/react-canvas-core";
import { MicroserviceNodeModel } from "./MicroserviceNodeModel";
import { MicroserviceNodeWidget } from "./node-widgets/MicroserviceNodeWidget";

// TODO: Refactor to hooks
export class MicroserviceNodeWerk extends AbstractReactFactory {
  constructor() {
    super("microservice-node");
  }

  generateModel(initialConfig) {
    return new MicroserviceNodeModel();
  }

  generateReactWidget(event) {
    return <MicroserviceNodeWidget engine={this.engine} node={event.model} />;
  }
}