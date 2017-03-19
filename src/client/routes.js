import React from 'react';
import Home from './components/Home'
import Projects from './components/Projects'
import Contact from './components/Contact'

const Tt = () =>
  <div>
  on progress
  </div>
;

const routes = [
  {
    path: '/',
    exact: true,
    auth: true,
    component: Home,
  },
  {
    path: '/home',
    exact: true,
    auth: true,
    component: Home,
  },
  {
    path: '/projects',
    component: Projects,
    exact: true,
    auth: true,
  },
  {
    path: '/projects/:id',
    component: Tt,
    exact: true,
    auth: true,
  },
  {
    path: '/contact',
    component: Contact,
    exact: true,
    auth: true,
  },
];

export const defaultRoute = () => routes.filter(r => r.default)[0];
export default routes;