import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Breakfast from './Breakfast';
import Dinner from './Dinner';
import ItemName from './ItemName';
import Lunch from './Lunch';

const Menu = () => {
  return (
    <BrowserRouter>
      <ItemName></ItemName>
      <Switch>
        <Route path='/breakfast'>
          <Breakfast />
        </Route>
        <Route path='/lunch'>
          <Lunch></Lunch>
        </Route>
        <Route path='/dinner'>
          <Dinner></Dinner>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Menu;
