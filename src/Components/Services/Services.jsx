import React, { useState } from 'react';
import './Services.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import Services_Data from '../../assets/services_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleReadMoreClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div id='services' className='services'>
      <div className='services-title'>
        <h1>My Services</h1>
        <img src={theme_pattern} alt="Theme Pattern" />
      </div>

      <div className='services-container'>
        {Services_Data.map((service, index) => (
          <div key={index} className='services-format'>
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            <p>{service.s_desc}</p>
            
            <div className='services-readmore' onClick={() => handleReadMoreClick(index)}>
              <p>{activeIndex === index ? 'Read Less' : 'Read More'}</p>
              <img src={arrow_icon} alt="Arrow Icon" style={{ transform: activeIndex === index ? 'rotate(180deg)' : 'rotate(0deg)' }} />
            </div>
            
            {activeIndex === index && (
              <div className='services-expanded-desc'>
                <p>{service.detailed_desc}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
