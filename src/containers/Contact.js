import React from "react";
import Card from "../components/Card";
import styled from "styled-components";

const StyledSection = styled.section`
  background-color: black;
  padding: 9rem 0rem;
  h1 {
    color: white;
    text-transform: uppercase;
    text-align: center;
    padding: 0 0 2.75rem 0;
    font-size: 2.5rem;
  }
`;

const StyledContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

export default function Contact() {
  return (
    <StyledSection id="contact">
      <h1>Contact Us</h1>
      <StyledContainer>
        <Card
          heading="Phone number"
          linkText="+917999888625"
          link="tel:+917999888625"
          icon="fa fa-phone-alt"
        />
        <Card
          heading="Email"
          linkText="infinityoutsourcing@gmail.com"
          link="mailto:infinityoutsourcing@gmail.com"
          icon="fas fa-paper-plane"
        />
        <Card
          heading="Address"
          linkText="Lorem ipsum dolor sit amet. Aut labore animi ad illum modi non
                galisum sequi ut soluta nisi."
          link="https://www.google.com/maps/place/VIP+Road,+Bhopal,+Madhya+Pradesh/@23.2609122,77.3785381,17z/data=!3m1!4b1!4m5!3m4!1s0x397c67e3f3bdf80d:0x156e1875b3f5caf0!8m2!3d23.2609073!4d77.3807268"
          icon="fas fa-map-signs"
        />
      </StyledContainer>
    </StyledSection>
  );
}
