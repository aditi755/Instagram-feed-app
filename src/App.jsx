// import { useState } from 'react'
// import './App.css'
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Home from "./components/Home"
// import StoriesComponent from "./components/StoriesComponent"

// function App() {
//   return (
//     <div className="App">
//      <Router>
//   <Routes>
//     <Switch>
//     <Route path="/story" element={<StoriesComponent />} />
//     <Route path="/" element={<Home />} />
//     </Switch>
//   </Routes>
// </Router>
//     </div>
//   )
// }

// export default App

import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import StoriesComponent from './components/StoriesComponent';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/story/:categoryName" element={<StoriesComponent />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

