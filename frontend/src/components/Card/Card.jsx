import React from "react";
import {Nav, OverlayTrigger, Tooltip} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import "./Card.css";
import { LinkContainer } from "react-router-bootstrap";

const Card=({card, details})  => {
  if(details.is_active)
  {
    return(<>
          <div className="col-md-4 col-10 mx-auto container">
            <div class="card" >
              <img src={`http://127.0.0.1:8000${card.thumbnail}`} class="card-img-top" alt="..."/>
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
    )
  }
  else
  {
    return(<>
    
    <div className="col-md-4 col-10 mx-auto container">
          <div class="card" >
          <img src={`http://127.0.0.1:8000${card.thumbnail}`} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title ">{card.exercise_name}</h5>
            <hr></hr>
            <p class="card-text">{card.description}</p>
            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Please Sign-in</Tooltip>}>
              <span className=" rd_activity">
                <Button disabled className=" b_activity" style={{ pointerEvents: 'none' }}>
                    Start Practice
                </Button>
              </span>
                </OverlayTrigger>
          </div>
        </div>
      </div>
    </>
  )
  }
}
export default Card