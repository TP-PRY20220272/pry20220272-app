import { NodeModel, DefaultPortModel } from "@projectstorm/react-diagrams";

export class MicroserviceNodeModel extends NodeModel {
  constructor(options) {
    super({
      ...options,
      type: "microservice-node"
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