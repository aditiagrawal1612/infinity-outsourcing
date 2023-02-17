import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(56, 59, 57);
  height: 20rem;
  padding: 1.6rem;
  margin: 2px;
  transform: scale(0.95);
  transition: 0.7s all;
  gap: 1rem;
  text-align: center;
  border-radius: 10px;
  :hover {
    background-color: #dfd3c3;
    transform: scale(1);
  }
  i {
    background-color: black;
    color: white;
    border-radius: 50%;
    padding: 2rem;
    font-size: 3rem;
  }

  a {
    text-decoration: none;
    color: white;
    font-size: 1.25rem;
  }

  h4 {
    color: white;
    padding: 0rem;
    font-size: 2rem;
  }
`;

export default function Card({ heading, linkText, link, icon, onClick }) {
  return (
    <StyledCard onClick={() => onClick()}>
      <i className={icon}></i>
      <h4>{heading}</h4>
      <span>
        <a className="my-card-link center" href={link}>
          {linkText}
        </a>
      </span>
    </StyledCard>
  );
}
