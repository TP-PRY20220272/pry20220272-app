import logo from './logo.svg';
import './App.css';
import Login from './pages/login';
import Register from './pages/Register/register';
import ListProjects from './pages/project-list/project-list';
import { InputNodeWerk } from "./components/InputNodeWerk";
import { OutputNodeWerk } from "./components/OutputNodeWerk";
import { NodeCreatorWidget } from "./components/node-creator-widget/NodeCreatorWidget";
import createEngine, { DiagramModel } from "@projectstorm/react-diagrams";

function App() {
  const engine = createEngine();
  engine.setModel(new DiagramModel());

  // Create custom node
  engine.getNodeFactories().registerFactory(new InputNodeWerk());
  engine.getNodeFactories().registerFactory(new OutputNodeWerk());

  return (
    <NodeCreatorWidget engine={engine} />
  );
}

export default App;
