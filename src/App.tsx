import React from 'react';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import { CreateTest } from './components/CreateTest/CreateTest';
import Name from './components/CreateTest/Name/Name';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Test from './components/Test/Test';
import {Dimensions} from "./components/CreateTest/Dimensions/Dimensions";
import TestResults from "./components/CreateTest/TestResults/TestResults";
import Results from "./components/Results/Results";
import LocalHome from "./LocalHome/LocalHome";

function App() {
  return (
    <div className="App">
      <HashRouter>

        <Routes>
          <Route path='/' element={<LocalHome />} />
          <Route path='/test/results' element={<Results />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </HashRouter>

    </div>
  );
}

export default App;
