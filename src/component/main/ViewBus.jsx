import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const ViewBus = () => {

    let location = useLocation()
    
    let bus = location.state;
  return (
    <StyledWrapper className='ml-[32rem] mt-[10rem] '>
      <div className="flip-card ">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <p className="title"></p>
            <p><img src="/assests/images/bus3.jpg" alt="" sizes="" srcset=""  className='object-cover h-[23.8rem] w-[32rem] rounded-2xl'/></p>
          </div>
          <div className="flip-card-back">
            <p className="title">Avaliable Bus Seats : {bus.seats}</p>
            <p></p>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .flip-card {
    background-color: transparent;
    width: 32rem;
    height: 24rem;
    perspective: 1000px;
    font-family: sans-serif;
  }

  .title {
    font-size: 1.5em;
    font-weight: 900;
    text-align: center;
    margin: 0;
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }

  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }

  .flip-card-front, .flip-card-back {
    box-shadow: 0 8px 14px 0 rgba(0,0,0,0.2);
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border: 2px solid coral;
    border-radius: 1rem;
  }

  .flip-card-front {
    background: linear-gradient(120deg, bisque 60%, rgb(255, 231, 222) 88%,
       rgb(255, 211, 195) 40%, rgba(255, 127, 80, 0.603) 48%);
    color: coral;
  }

  .flip-card-back {
    background: linear-gradient(120deg, rgb(255, 174, 145) 30%, coral 88%,
       bisque 40%, rgb(255, 185, 160) 78%);
    color: white;
    transform: rotateY(180deg);
  }`;

export default ViewBus;
