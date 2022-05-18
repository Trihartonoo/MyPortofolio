import React from 'react';
import Home from './component/Home';
import Profile from './component/Profile';
import Skills from './component/Skills';
import Project from './component/Project';
import Experience from './component/Experience';
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="Profile" element={<Profile />} />
        <Route path="Skills" element={<Skills />} />
        <Route path="Project" element={<Project />} />
        <Route path="Experience" element={<Experience />} />
      </Routes>
    </div>
  );
}

export default App;
