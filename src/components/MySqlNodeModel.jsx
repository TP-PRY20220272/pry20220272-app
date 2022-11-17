import { NodeModel, DefaultPortModel } from "@projectstorm/react-diagrams";

export class MySqlNodeModel extends NodeModel {
    constructor(options) {
      super({
        ...options,
        type: "mysql-node"
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