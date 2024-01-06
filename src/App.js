import { useState } from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import SearchBar from './Navigation/SearchBar';
import NavView from './Navigation/NavView';
import Analytics from './Analytics/Analytics';
import './App.scss';

Chart.register(CategoryScale);

function App() {
  const [isNavViewOpen, toggleNavView] = useState(false);

  return (
    <div id='App'>
      <NavView isNavViewOpen={isNavViewOpen} />
      <div className={(isNavViewOpen ? 'main-content':'main-content nav-closed')}>
        <SearchBar isNavViewOpen={isNavViewOpen} toggleNavView={toggleNavView} />
        <Analytics />
      </div>
    </div>
  );
}

export default App;
