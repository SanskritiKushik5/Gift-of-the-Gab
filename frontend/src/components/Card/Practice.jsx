import React from "react";
import Card from "./Card";

const Practice=({cards})  => {
    return(
    <div className="my-5">
      <h3 className="display-6" align="center"><strong>- Exercises -</strong></h3>
      <br />
      <div className="container-fluid mb-5">
        <div className='row'>
          <div className="col-10 mx-auto">
            <div className='row gy-4'>
              {cards.map((card)=>
              // <Card card={card}/>
              <h1>{card.id}</h1>
              )}  
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Practice