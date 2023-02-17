import React from "react";
import styled from "styled-components";

const StyledSection = styled.section`
  background-color: white;
  padding: 9rem 0rem;
  h1 {
    color: black;
    text-transform: uppercase;
    text-align: center;
    padding: 0 0 2.75rem 0;
    font-size: 2.5rem;
  }
`;

const GoogleForm = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: table;
`;

export default function Registeration() {
  return (
    <StyledSection id="register">
      <h1>Registeration</h1>
      <GoogleForm>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScFaKPaszltKi618KcSylVLTAjj2bfaQdq8cS1h-1AUYl0xQQ/viewform?embedded=true"
          width="640"
          height="1334"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </GoogleForm>
    </StyledSection>
  );
}
