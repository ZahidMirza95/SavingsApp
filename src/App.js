import React from 'react';
import './App.css';
import AchievementsPage from './pages/AchievementsPage';
import HomePage from './pages/HomePage';
import StatsPage from './pages/StatsPage';
import { HashRouter, Link, BrowserRouter, Route, Routes, Switch } from 'react-router-dom';

function App() {
  return (
      <div className="App">
        {/*<Routes>
          <Route exact path = "/" element = {<HomePage/>}/>
          <Route path = "/achievements" element = {<AchievementsPage/>}/>
          <Route path = "/stats" element = {<StatsPage/>}/>
        </Routes>*/}
        <Routes>
          <Route exact path = "/SavingsApp" element = {<HomePage/>}>
            </Route>
          <Route path = "/SavingsApp/achievements" element = {<AchievementsPage/>}>
            </Route>
          <Route path = "/SavingsApp/stats" element = {<StatsPage/>}>
          </Route>
        </Routes>
      </div>
  );
}

export default App;
