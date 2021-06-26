import React from 'react';
import NotFound from '../../components/NotFound';

export const routerConfig = [
  {
    id: 'dashboard',
    exact: true,
    component: React.lazy(() => import('@modules/Dashboard')),
    isPrivate: false,
    path: '/'
  },
  {
    id: 'notepad',
    exact: true,
    component: React.lazy(() => import('@modules/Notepad')),
    isPrivate: false,
    path: '/notepad'
  },
  {
    id: 'create-notepad',
    exact: true,
    component: React.lazy(() => import('@modules/CreateNotepad')),
    isPrivate: false,
    path: '/create-notepad'
  },
  {
    id: 'not_found',
    exact: true,
    component: NotFound,
    isPrivate: false,
    path: '*'
  }
];