import React, { Suspense } from 'react';
import { Switch, BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { routesConfig } from './router';

function Loading() {
  return <div>Loading...</div>;
}

function App() {
  return (
    <div className='App'>
      <Suspense fallback={Loading}>
        <Router>
          <Switch>{renderRoutes(routesConfig)}</Switch>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
