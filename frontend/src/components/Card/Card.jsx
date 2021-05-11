import React from "react";
import {Nav} from 'react-bootstrap';
import web from "../Images/sample.jpg";
import Button from 'react-bootstrap/Button';
import "./Card.css";
import { LinkContainer } from "react-router-bootstrap";

const Card=()  => {
    return(<>
          <div className="col-md-4 col-10 mx-auto">
            <div class="card" >
              <img src={web} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title ">Breathing Exercises</h5>
                <hr></hr>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <LinkContainer to="/audioinput">
                    <Nav.Link className="rd_activity"><Button variant="primary" className="b_activity">Start Practice</Button></Nav.Link>
                </LinkContainer>
              </div>
            </div>
          </div>
        </>
    );
};
export default Card;