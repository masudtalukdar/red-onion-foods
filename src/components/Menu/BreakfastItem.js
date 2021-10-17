import React from 'react';

const BreakfastItem = ({ breakfast }) => {
  const { name, price, description, img } = breakfast;

  return (
    <article className='food-item'>
      <img height='170' src={img} alt='' />
      <h6>{name}</h6>
      <p>{description}</p>
      <h3>
        $<span>{price}</span>
      </h3>
    </article>
  );
};

export default BreakfastItem;
