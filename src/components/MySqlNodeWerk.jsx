import React from "react";
import { AbstractReactFactory } from "@projectstorm/react-canvas-core";
import { MySqlNodeModel } from "./MySqlNodeModel";
import { MySqlNodeWidget } from "./node-widgets/MySqlNodeWidget";

// TODO: Refactor to hooks
export class MySqlNodeWerk extends AbstractReactFactory {
    constructor() {
      super("mysql-node");
    }
  
    generateModel(initialConfig) {
      return new MySqlNodeModel();
    }
  
    generateReactWidget(event) {
      return <MySqlNodeWidget engine={this.engine} node={event.model} />;
    }
  }