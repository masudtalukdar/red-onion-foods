import React from 'react';
import './Banner.css';
import { Button, FormControl, InputGroup } from 'react-bootstrap';

const Banner = () => {
  return (
    <div className='banner d-flex flex-column align-items-center justify-content-center '>
      <>
        <div className='container'>
          <h3>Best food waiting for your belly</h3>
          <div className='pt-3 row d-flex justify-content-center'>
            <div className='col-md-3'>
              <InputGroup className=''>
                <FormControl
                  placeholder='Search food items'
                  aria-label="Recipient's username"
                  aria-describedby='basic-addon2'
                />
                <Button variant='danger'>Button</Button>
              </InputGroup>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Banner;
