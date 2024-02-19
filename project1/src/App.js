import './App.css';
import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import SiteRoutes from './routes/SiteRoutes';

function App() {

  return (
    <Router>
      <div className="App">
        <SiteRoutes />
      </div>
    </Router>
  );
}

export default App;
