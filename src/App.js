import React, { useState, useEffect } from 'react';
import './App.css';
import AchievementsPage from './pages/AchievementsPage';
import HomePage from './pages/HomePage';
import StatsPage from './pages/StatsPage';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';

function App() {
  return (
  <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path = "/" element = {<HomePage/>}>
          </Route>
          <Route path = "/achievements" element = {<AchievementsPage/>}>
          </Route>
          <Route path = "/stats" element = {<StatsPage/>}>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
