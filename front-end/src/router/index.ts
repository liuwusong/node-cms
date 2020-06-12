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
    component: lazy(() => import('../template/index')),
    key: 'Index',
    title: '首页',
    routes: [
      {
        path: '/home',
        key: 'Home',
        title: '首页',
        component: lazy(() => import('../pages/home'))
      },
      {
        path: '/user',
        key: 'User',
        title: '用户管理',
        component: lazy(() => import('../pages/user'))
      }
    ]
  },
  {
    path: '/login',
    component: lazy(() => import('../template/login')),
    title: '登录页',
    key: 'Login'
  }
];
