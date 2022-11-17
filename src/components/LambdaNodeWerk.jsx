import React from "react";
import { AbstractReactFactory } from "@projectstorm/react-canvas-core";
import { LambdaNodeModel } from "./LambdaNodeModel";
import { LambdaNodeWidget } from "./node-widgets/LambdaNodeWidget";

// TODO: Refactor to hooks
export class LambdaNodeWerk extends AbstractReactFactory {
  constructor() {
    super("lambda-node");
  }

  generateModel(initialConfig) {
    return new LambdaNodeModel();
  }

  generateReactWidget(event) {
    return <LambdaNodeWidget engine={this.engine} node={event.model} />;
  }
}