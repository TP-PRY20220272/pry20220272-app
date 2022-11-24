import logo from './logo.svg';
import './App.css';

import { InputNodeWerk } from "./components/InputNodeWerk";
import { OutputNodeWerk } from "./components/OutputNodeWerk";
import { NodeCreatorWidget } from "./components/node-creator-widget/NodeCreatorWidget";
import createEngine, { DiagramModel } from "@projectstorm/react-diagrams";
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';

import Login from './pages/login/login';
import Register from './pages/Register/register';
import MyNavbar from './components/my-navbar/my-navbar';
import ProjectsList from './pages/projects-list/projects-list';
import Search from './pages/search/search';
import CreateProject from './pages/create-project/create-project';
import ProjectDetails from './pages/project-details/project-details';
import RdsConfiguration from './pages/rds-configuration/rds-configuration';
import EntitiesList from './pages/entities-list/entities-list';
import EntityAttributes from './pages/entity-attributes/entity-attributes';
import MethodsAssignment from './pages/methods-assignment/methods-assignment';
import MethodsAssignmentConfirmation from './pages/methods-assignment/methods-assignment-confirmation';
import { proyects } from './pages/projects-list/proyects-data';
import { entities } from './pages/entities-list/entities-data';


function App() {
  const engine = createEngine();
  engine.setModel(new DiagramModel());

  // Create custom node
  engine.getNodeFactories().registerFactory(new InputNodeWerk());
  engine.getNodeFactories().registerFactory(new OutputNodeWerk());

  return (
    <BrowserRouter>
      <MyNavbar>
        <Routes>
          <Route path='/create-proyect' element={<CreateProject/>}/>
          <Route path='/' element={<ProjectsList/>}/>
          <Route path='/projects/:id' element={<ProjectDetails/>}/>
          <Route path='/search' element={<Search/>}/>
          <Route path='/rds-configuration' element={<RdsConfiguration/>}/>
          <Route path='/entities-list' element={<EntitiesList entities={entities}/>}/>
          <Route path='/methods-assignment' element={<MethodsAssignment entities={entities}/>}/>
          <Route path='/methods-assignment-confirmation' element={<MethodsAssignmentConfirmation entities={entities}/>}/>
          <Route path='/entity/:id/attributes' element={<EntityAttributes/>}/>

          <Route path='*' element={<Navigate replace to="/"/>}/>
        </Routes>
      </MyNavbar>
    </BrowserRouter>
  );
}

export default App;
