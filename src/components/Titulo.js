import React from 'react';
import styled from 'styled-components';


const Title = styled.h1`
    background-color: #2b4c7e;
    color: white;
    padding: 30px;
    font-size: 40px;
    @media(max-width:425px) {
    padding: 10px;
    font-size: 15px;
    }
    @media(min-width:426px) and (max-width:768px) {
    padding: 20px;
    font-size: 20px;
    }
    @media(min-width:769px) and (max-width:1024px) {
    padding: 25px;
    font-size: 25px;
    }
    @media(min-width:1025px) and (max-width:1440px) {
    padding: 35px;
    font-size: 30px;
    }
`;

export const Titulo = () => {
    return (
      <div>
        <Title>SIMULADOR APOSENTADORIA</Title>
      </div>
    )
  }