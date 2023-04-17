import React from "react";

// import img-1 from '../images/tour-1.jpeg'
// import img-2 from '../images/tour-2.jpeg'
// import img-3 from '../images/tour-3.jpeg'
// import img-4 from '../images/tour-4.jpeg'
// import img-5 from '../images/tour-5.jpeg'
// import img-6 from '../images/tour-6.jpeg'
import { tours } from "../data";
import Title from "./Title";

const Tour = () => {
  return (
    <section className="section" id="tours">
      <Title title='feature' subtitle='tour' />
      <div className="section-center featured-center">
        {tours.map((tour) => {
          const {
            id,
            img,
            title,
            date,
            description,
            destination,
            duration,
            cost,
          } = tour;
          return (
            <article className="tour-card" key={id}>
              <div className="tour-img-container">
                <img src={img} className="tour-img" alt="" />
                <p className="tour-date">{date}</p>
              </div>
              <div className="tour-info">
                <h4>{title}</h4>
                <p>{description}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>{" "}
                    {destination}
                  </p>
                  <p>{duration} dayssss</p>
                  <p>from ${cost}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Tour;
