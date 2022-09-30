import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
    background-color: #2b4c7e;
    color: white;
    padding: 30px;
    font-size: 40px;
`;

export const Titulo = () => {
    return (
      <div>
        <Title>Simulador Aposentadoria</Title>
      </div>
    )
  }