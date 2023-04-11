import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/new' element={<Name />} />
          <Route path='/new/questions/:docId' element={<CreateTest />} />
          <Route path='/new/dimensions/:docId' element={<Dimensions />} />
          <Route path='/new/results/:docId' element={<TestResults />} />
          <Route path='/test/results' element={<Results />} />
          <Route path='/login' element={<Login />} />
          <Route path="/test/:docId" element={<Test />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
