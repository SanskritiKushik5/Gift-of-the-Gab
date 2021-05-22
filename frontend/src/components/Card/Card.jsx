import React from "react";
import {Nav} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import "./Card.css";
import { LinkContainer } from "react-router-bootstrap";

const Card=({card})  => {
  
    return(<>
          <div className="col-md-4 col-10 mx-auto">
            <div class="card" >
              <img src={`../../../../backend${card.thumbnail}`} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title ">{card.exercise_name}</h5>
                <hr></hr>
                <p class="card-text">{card.description}</p>
                <LinkContainer to={`audioinput/${card.id}`}>
                    <Nav.Link className="rd_activity"><Button variant="primary" className="b_activity">Start Practice</Button></Nav.Link>
                </LinkContainer>
              </div>
            </div>
          </div>
        </>
    );
};
export default Card;