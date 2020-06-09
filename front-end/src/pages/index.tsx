import React from 'react';
import { renderRoutes } from 'react-router-config';

interface Props {
  children: JSX.Element[];
  route: {
    routes: [];
  };
}
function Index(props: Props) {
  return <div>{renderRoutes(props.route.routes)}</div>;
}

export default Index;
