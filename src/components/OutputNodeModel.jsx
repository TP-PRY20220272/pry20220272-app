import { NodeModel, DefaultPortModel } from "@projectstorm/react-diagrams";

export class OutputNodeModel extends NodeModel {
  constructor(options) {
    super({
      ...options,
      type: "output-node"
    });

    if (options) {
      this.color = options.color || "black";
    }

    // Set ports
    this.addPort(
      new DefaultPortModel({
        in: true,
        name: "in"
      })
    );
  }
}