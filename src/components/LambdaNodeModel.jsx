import { NodeModel, DefaultPortModel } from "@projectstorm/react-diagrams";

export class LambdaNodeModel extends NodeModel {
  constructor(options) {
    super({
      ...options,
      type: "lambda-node"
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
    this.addPort(
      new DefaultPortModel({
        in: true,
        name: "out"
      })
    );
  }
}