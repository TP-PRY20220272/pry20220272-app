import React from "react";
import { AbstractReactFactory } from "@projectstorm/react-canvas-core";
import { OutputNodeModel } from "./OutputNodeModel";
import { OutputNodeWidget } from "./node-widgets/OutputNodeWidget";

// TODO: Refactor to hooks
export class OutputNodeWerk extends AbstractReactFactory {
  constructor() {
    super("output-node");
  }

  generateModel(initialConfig) {
    return new OutputNodeModel();
  }

  generateReactWidget(event) {
    return <OutputNodeWidget engine={this.engine} node={event.model} />;
  }
}