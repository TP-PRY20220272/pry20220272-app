import createEngine, { DiagramModel } from "@projectstorm/react-diagrams";
import { MicroserviceNodeWerk } from "../../components/MicroserviceNodeWerk";
import { LambdaNodeWerk } from "../../components/LambdaNodeWerk";
import { MySqlNodeWerk } from "../../components/MySqlNodeWerk";
import { NodeCreatorWidget } from "../../components/node-creator-widget/NodeCreatorWidget";

function MyDiagram() {
    const engine = createEngine();
    engine.setModel(new DiagramModel());
  
    // Create custom node
    engine.getNodeFactories().registerFactory(new MicroserviceNodeWerk());
    engine.getNodeFactories().registerFactory(new LambdaNodeWerk());
    engine.getNodeFactories().registerFactory(new MySqlNodeWerk());
  
    return (
      <NodeCreatorWidget engine={engine} />
    );

}

export default MyDiagram