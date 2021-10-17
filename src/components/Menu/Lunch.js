import React, { useEffect, useState } from 'react';

const Lunch = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`lunchRecipe.json`)
      .then((result) => result.json())
      .then((data) => setItems(data));
  }, []);

  // console.log('data', items);

  return (
    <section className='item-container'>
      {items.map((item) => (
        <article key={item.id} className='food-item'>
          <img height='170' src={item.img} alt='' />
          <h6>{item.name}</h6>
          <p>{item.description}</p>
          <h3>
            $<span>{item.price}</span>
          </h3>
        </article>
      ))}
    </section>
  );
};

export default Lunch;
