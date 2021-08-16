import React from 'react'
import { Carousel, Alert, Container } from 'react-bootstrap';
import "./Review.css"

const Review = () => {
  return (
    <Container className="col-10">
      <h3 className="display-6" align="center"><strong>- Reviews -</strong></h3>
      <Carousel fade>
        <Carousel.Item>
          <Alert variant="info">
            <p className="car-txt">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt odio vitae eros hendrerit venenatis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt odio vitae eros hendrerit venenatis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt odio vitae eros hendrerit venenatis."
            </p>
            <hr />
            <center>
              <small className="mb-0"> Mrs. Marilyn Swift</small>
              <small className="mb-0">|  ⭐⭐⭐⭐⭐</small>
            </center>
          </Alert>
        </Carousel.Item>
        <Carousel.Item>
          <Alert variant="info">
            <p className="car-txt">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt odio vitae eros hendrerit venenatis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt odio vitae eros hendrerit venenatis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt odio vitae eros hendrerit venenatis."
            </p>
            <hr />
            <center>
              <small className="mb-0"> Mr. Juned Raza</small>
              <small className="mb-0">|  ⭐⭐⭐⭐⭐</small>
            </center>
          </Alert>
        </Carousel.Item>
        <Carousel.Item>
          <Alert variant="info">
            <p className="car-txt">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt odio vitae eros hendrerit venenatis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt odio vitae eros hendrerit venenatis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt odio vitae eros hendrerit venenatis."
            </p>
            <hr />
            <center>
              <small className="mb-0">Ms. Sanskriti Kushik</small>
              <small className="mb-0">|  ⭐⭐⭐⭐⭐</small>
            </center>
          </Alert>
        </Carousel.Item>
      </Carousel>
    </Container>
  )
}

export default Review