import { NodeModel, DefaultPortModel } from "@projectstorm/react-diagrams";

export class InputNodeModel extends NodeModel {
  constructor(options) {
    super({
      ...options,
      type: "input-node"
    });

    if (options) {
      this.color = options.color || "black";
    }

    // Set ports
    this.addPort(
      new DefaultPortModel({
        out: true,
        name: "out"
      })
    );
    this.addPort(
      new DefaultPortModel({
        in: true,
        name: "in"
      })
    );
  }
}