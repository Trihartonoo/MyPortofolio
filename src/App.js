import React from 'react';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Skills from './pages/Skills';
import Project from './pages/Project';
import Experience from './pages/Experience';
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<Navigate replace to="Home" />} />
        <Route path="Profile" element={<Profile />} />
        <Route path="Skills" element={<Skills />} />
        <Route path="Project" element={<Project />} />
        <Route path="Experience" element={<Experience />} />
      </Routes>
    </div>
  );
}

export default App;
