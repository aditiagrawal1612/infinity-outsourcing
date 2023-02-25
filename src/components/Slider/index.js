import React from "react";
import Carousel from "react-bootstrap/Carousel";
import styled from "styled-components";

const CoverImage = styled.img`
  object-fit: cover;
  max-height: 90vh;
`;

export default function Slider() {
  return (
    <div id="home">
      <Carousel>
        <Carousel.Item interval={2000}>
          <CoverImage
            className="d-block w-100 carousel-img"
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>You need We feed! </h3>
            {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <CoverImage
            className="d-block w-100 carousel-img"
            src="https://images.unsplash.com/photo-1590212151175-e58edd96185b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbXB1dGVyJTIwc2V0dXB8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>We believe in secure future </h3>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <CoverImage
            className="d-block w-100 carousel-img"
            src="https://images.unsplash.com/photo-1503945438517-f65904a52ce6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Come Grow with us!</h3>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <CoverImage
            className="d-block w-100 carousel-img"
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Not a consultant but a friend</h3>
            {/* <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
