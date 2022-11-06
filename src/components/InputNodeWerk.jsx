import React from "react";
import { AbstractReactFactory } from "@projectstorm/react-canvas-core";
import { InputNodeModel } from "./InputNodeModel";
import { InputNodeWidget } from "./node-widgets/InputNodeWidget";

// TODO: Refactor to hooks
export class InputNodeWerk extends AbstractReactFactory {
  constructor() {
    super("input-node");
  }

  generateModel(initialConfig) {
    return new InputNodeModel();
  }

  generateReactWidget(event) {
    return <InputNodeWidget engine={this.engine} node={event.model} />;
  }
}