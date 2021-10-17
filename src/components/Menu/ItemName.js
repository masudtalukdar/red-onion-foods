import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import './Menu.css';

const ItemName = () => {
  const history = useHistory();
  console.log(history);
  return (
    <nav className='d-flex gap-5 justify-content-center mt-5'>
      <NavLink id='item-names' activeClassName='active-link' to='/breakfast'>
        Breakfast
      </NavLink>
      <NavLink id='item-names' activeClassName='active-link' to='/lunch'>
        Lunch
      </NavLink>
      <NavLink id='item-names' activeClassName='active-link' to='/dinner'>
        Dinner
      </NavLink>
    </nav>
  );
};

export default ItemName;
