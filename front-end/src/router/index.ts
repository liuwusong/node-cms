import { LazyExoticComponent, lazy } from 'react';

export interface routeInterface {
  path: string;
  title: string;
  readonly key: string;
  routes?: routeInterface[];
  exact?: boolean;
  component: LazyExoticComponent<(props: any) => JSX.Element>;
}

export const routesConfig: routeInterface[] = [
  {
    path: '/',
    component: lazy(() => import('../pages/index')),
    key: 'Index',
    title: '首页',
    routes: [
      {
        path: '/home',
        key: 'Home',
        title: '首页',
        component: lazy(() => import('../pages/home'))
      }
    ]
  }
];
