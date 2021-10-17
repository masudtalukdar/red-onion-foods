import React from 'react';
import './About.css';
import img1 from '../../images/Image/adult-blur-blurred-background-687824.png';
import img2 from '../../images/Image/chef-cook-food-33614.png';
import img3 from '../../images/Image/architecture-building-city-2047397.png';
import Bus from '../../images/ICON/bus.png';
import Bell from '../../images/ICON/bell.png';
import Truck from '../../images/ICON/truck.png';
import next1 from '../../images/ICON/next1.png';
const About = () => {
  return (
    <div className='about'>
      <div className='about-info'>
        <h2>Why you chose us</h2>
        <p className='subtitle'>
          We deliver food very fast compare to other food delivery service
          <br />
          in your area. Also we have the best chef's around the city.
        </p>
      </div>
      <div className='service-container'>
        <div className=' service'>
          <img id='heading-img' src={img1} alt='background' />
          <div className='service-bottom'>
            <img src={Bus} alt='bus' className='icon' />
            <div className='service-info'>
              <p className='title'>Fast Delivery</p>
              <p className='description'>
                We deliver food very fast compare to other food delivery service
                in your area. Clients are very satisfied with our delivery
                service.
              </p>
              <p className='link'>
                See more{' '}
                <span className='icon'>{/* <img src={next1} alt='' /> */}</span>
              </p>
            </div>
          </div>
        </div>
        <div className='service'>
          <img
            className='mid-heading'
            id='heading-img'
            src={img2}
            alt='background'
          />
          <div className='service-bottom'>
            <img src={Bell} alt='bus' className='icon' />
            <div className='service-info'>
              <p className='title'>A Good Auto Responder</p>
              <p className='description'>
                You can directly contact with us 24/7. We always try to respond
                to your messages as early as possible.
              </p>
              <p className='link'>
                See more
                <span className='icon'>{/* <img src={next1} alt='' /> */}</span>
              </p>
            </div>
          </div>
        </div>
        <div className='  service'>
          <img id='heading-img' src={img3} alt='background' />
          <div className='service-bottom'>
            <img src={Truck} alt='bus' className='icon' />
            <div className='service-info'>
              <p className='title'>Home Delivery</p>
              <p className='description'>
                Our home delivery service is best. Our riders are very
                professional and work with responsibility. You will surely be
                satisfied.
              </p>
              <p className='link'>
                See more
                <span className='icon'>{/* <img src={next1} alt='' /> */}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
