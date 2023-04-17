import React from 'react'

import { services } from '../data'
import Title from './Title';

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" subtitle="services" />
      <div className="section-center services-center">
        {services.map((service) => {
          const { id, title, iconClass, description } = service;
          return (
            <article className="service" key={id}>
              <span className="service-icon">
                <i className={iconClass}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{title}</h4>
                <p className="service-text">{description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Services