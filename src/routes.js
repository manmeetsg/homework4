/* Given by example and edited to match project */
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Index from './components/index';
import New from './components/new';
import Show from './components/show';
import App from './components/app';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={Index} />
    <Route path="posts/new" component={New} />
    <Route path="posts/:id" component={Show} />
  </Route>
);
