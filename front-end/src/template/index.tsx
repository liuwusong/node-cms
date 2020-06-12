import React from 'react';
import { Layout, Menu, PageHeader } from 'antd';
import { ClickParam } from 'antd/lib/menu';
import { BreadcrumbProps } from 'antd/lib/breadcrumb';
import { History, Location } from 'history';
import { renderRoutes } from 'react-router-config';
import { routeInterface } from '../router/index';
import config from '../config';
import '../stylesheels/index.css';

const { SubMenu } = Menu;

interface Props {
  children: JSX.Element[];
  history: History;
  route: routeInterface;
  location: Location;
}

interface MenuInterface {
  title: string;
  id: number;
  url: string;
  children?: MenuInterface[];
}

const menu: MenuInterface[] = [
  {
    title: ' 系统设置',
    url: '',
    id: 1,
    children: [
      {
        title: '用户管理',
        url: '/user',
        id: 2
      }
    ]
  }
];
let history: History;
let location: Location;
let currentKey: string;
function navigate(item: MenuInterface, event: ClickParam): void {
  if (location.pathname !== item.url) {
    currentKey = String(item.id);
    history.push(item.url);
  }
}
// 渲染左侧栏
function renderMenu(menu: MenuInterface[]) {
  return menu.map((item) => {
    if (item.children && item.children.length) {
      return (
        <SubMenu title={item.title} key={item.id}>
          {renderMenu(item.children)}
        </SubMenu>
      );
    } else {
      return (
        <Menu.Item key={item.id} onClick={(ev: ClickParam) => navigate(item, ev)}>
          {item.title}
        </Menu.Item>
      );
    }
  });
}
// 获取面包屑
function breadcrumbArray(props: Props): { current: routeInterface; route: BreadcrumbProps } {
  const { pathname } = props.location;
  const { routes = [] } = props.route;
  const current = routes.find((item: routeInterface) => {
    return item.path === pathname;
  });
  let route: routeInterface[] = [props.route];
  current && route.push(current);
  return {
    current: current || props.route,
    route: { routes: route.map((item) => ({ path: item.path, breadcrumbName: item.title })) }
  };
}

function Index(props: Props) {
  const breadcrumb = breadcrumbArray(props);
  history = props.history;
  location = props.location;
  return (
    <Layout style={{ height: '100%' }}>
      <Layout>
        <Layout.Sider>
          <div className='logo'>{config.sysName}</div>
          <Menu mode='inline' defaultOpenKeys={[currentKey]}>
            {renderMenu(menu)}
          </Menu>
        </Layout.Sider>
        <Layout.Content>
          <PageHeader
            title={breadcrumb.current.title}
            ghost={false}
            onBack={() => history.goBack()}
            breadcrumb={breadcrumb.route}
          ></PageHeader>
          <div style={{ padding: '20px 30px' }}>{renderRoutes(props.route.routes)}</div>
        </Layout.Content>
      </Layout>
    </Layout>
  );
}

export default Index;
