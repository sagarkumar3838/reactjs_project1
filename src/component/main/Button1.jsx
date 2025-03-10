import React from 'react';
import styled from 'styled-components';

const Button1 = () => {
  return (
    <StyledWrapper>
    <button >edit</button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  button {
    padding: 0.9em 1.8em;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 4px;
    color: transparent;
    border: 3px solid #ff0;
    font-size: 14px;
    position: relative;
    font-family: inherit;
    background: transparent;
    cursor: pointer;
  }

  button::before {
    content: "EDIT";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #363636;
    color: #ff0;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s;
  }

  button:hover::before {
    left: 100%;
    transform: scale(0) rotateY(360deg);
    opacity: 0;
  }

  button::after {
    content: "EDIT";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background-color: #363636;
    color: #ff0;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s;
    transform: scale(0) rotateY(0deg);
    opacity: 0;
  }

  button:hover::after {
    left: 0;
    transform: scale(1) rotateY(360deg);
    opacity: 1;
  }`;

export default Button1;
