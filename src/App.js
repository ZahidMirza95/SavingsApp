import React from 'react';
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
          <Route exact path = "/" element = {<HomePage/>}/>
          <Route path = "/achievements" element = {<AchievementsPage/>}/>
          <Route path = "/stats" element = {<StatsPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
