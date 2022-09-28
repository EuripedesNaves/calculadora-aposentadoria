import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
    background-color: #2b4c7e;
    color: white;
    padding: 20px;
`;

export const Home = () => {
    return (
      <div>
        <Title>Simulador Aposentadoria</Title>
      </div>
    )
  }