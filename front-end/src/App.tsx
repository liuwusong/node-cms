import React, { Suspense } from 'react';
import { Switch, BrowserRouter as Router } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import { renderRoutes } from 'react-router-config';
import { routesConfig } from './router';

import 'antd/dist/antd.dark.css';

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <ConfigProvider locale={zhCN}>
          <Switch>{renderRoutes(routesConfig)}</Switch>
        </ConfigProvider>
      </Router>
    </Suspense>
  );
}

export default App;
