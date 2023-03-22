import React from 'react';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar'
import { Route, Routes, NavLink } from 'react-router-dom'
import SampleSurvey from './components/SampleSurvey/SampleSurvey';

function App() {
  return (
    <>
      {/* <h1>Hello From App!</h1> */}
      <NavBar />
      <Routes>
        <Route path="/SampleSurvey" element={<SampleSurvey/>}>
          {/* <SampleSurvey /> */}
        </Route>
        <Route path="/" element={<Home/>}>

        </Route>
      </Routes>
    </>
  );
}

export default App;
