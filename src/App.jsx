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

