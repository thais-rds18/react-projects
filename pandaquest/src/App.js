import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import Home from './pages/home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Quest from './pages/quest';
import Quest2 from './pages/quest2';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/quest" element={<Quest />} />
          <Route path="/quest2" element={<Quest2 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
