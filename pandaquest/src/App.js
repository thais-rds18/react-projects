import React from 'react';
import Home from './pages/home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Quest from './pages/quest';
import Quest2 from './pages/quest2';
import {MyContextProvider} from './context';

function App() {
  return (
    <MyContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quest" element={<Quest />} />
          <Route path="/quest2" element={<Quest2 />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </Router>
    </MyContextProvider>

  );
}

export default App;
