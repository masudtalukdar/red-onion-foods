import React, { useEffect, useState } from 'react';

import BreakfastItem from './BreakfastItem';

const Breakfast = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`breakfastRecipe.json`)
      .then((result) => result.json())
      .then((data) => setItems(data));
  }, []);
  // console.log('data', items);

  return (
    <section className='item-container'>
      {items.map((item) => (
        <BreakfastItem breakfast={item}></BreakfastItem>
      ))}
    </section>
  );
};

export default Breakfast;
