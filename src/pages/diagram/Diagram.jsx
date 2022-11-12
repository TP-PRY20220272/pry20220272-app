import React from "react";
import createEngine, { DiagramModel } from "@projectstorm/react-diagrams";

import { InputNodeWerk } from ".../components/InputNodeWerk";
import { OutputNodeWerk } from ".../components/OutputNodeWerk";
import { NodeCreatorWidget } from ".../components/node-creator-widget/NodeCreatorWidget";

function Diagram() {
    const engine = createEngine();
    engine.setModel(new DiagramModel());
  
    // Create custom node
    engine.getNodeFactories().registerFactory(new InputNodeWerk());
    engine.getNodeFactories().registerFactory(new OutputNodeWerk());
  
    return (
      <NodeCreatorWidget engine={engine} />
    );
}

export default Diagram