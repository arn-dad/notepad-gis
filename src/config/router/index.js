import React from 'react';
import NotFound from '../../components/NotFound';

export const routerConfig = [
  {
    id: 'home',
    exact: true,
    component: React.lazy(() => import('@modules/GistsChart')),
    isPrivate: false,
    path: '/'
  },
  {
    id: 'not_found',
    exact: true,
    component: NotFound,
    isPrivate: false,
    path: '*'
  }
];