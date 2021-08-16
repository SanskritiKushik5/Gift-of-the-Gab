import React from "react";
import Card from "./Card";

const Practice = ({ cards, details }) => {
  window.scrollTo(0, 0)
  return (
    <div className="my-5">
      <h3 className="display-6" align="center"><strong>- Exercises -</strong></h3>
      <br />
      <div className="container-fluid mb-5">
        <div className='row'>
          <div className="col-10 mx-auto">
            <div className='row gy-2'>
              {cards.map((card) => (
                <Card card={card} details={details} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Practice