import React from 'react';
import styled from 'styled-components';
import '../styles/Abouts.css';
import { Titulo } from '../components/Titulo';

const Texto = styled.div`
  background-color: #dce0e6
  padding-bottom: 10px;
`;

const Name = styled.h2`
font-size: 20px;
text-align: center;
padding: 20px;
background-color: #567ebb;
`;

const Contexto = styled.p`
  display: flex;
  text-align: left;
  justify-content: center;
  font-size: 20px;
  line-height: 40px;
  margin-top: 10px;
  @media(max-width:425px) {
  font-size: 10px;
  margin: 0px 10px 0px 10px;
  line-height: 20px;
  }
  @media(min-width:426px) and (max-width:768px) {
  font-size: 15px;
  margin: 15px;
  line-height: 20px;
  justify-content: left;
  }
  @media(min-width:769px) and (max-width:1024px) {
  font-size: 17px;
  margin: 10px;
  line-height: 30px;
  justify-content: left;
  }
  @media(min-width: 1025px) and (max-width: 1440px) {
  font-size: 19px;
  margin: 10px;
  line-height: 35px;
  justify-content: left;
  }
`;

export const About = () => {
  return (
    <div>
      <Titulo></Titulo>
      <Texto>
        <Name>Como funciona?</Name>
        <br />
        <Contexto>A metodologia leva como base a fórmula de juros compostos, compartimentadas em 3 etapas, sendo:
          <br/>
          <br/>
          1 - A partir do formulário apresentado, calcular o montante necessário
          para que viva de renda;
          <br/>
          <br/>
          2 - Estimar na trajetória dos aportes, taxa de juros e com base no seu
          perfil de investidor (sintetizados na proporção de Renda Variável e
          Fixa) em quanto tempo você atingirá esse montante;
          <br/>
          <br/>
          3 - Demonstrar em quanto tempo, ceteris paribus, será capaz de
          alcançar o rendimento esperado;
          <br/>
          <br/>
          A ferramenta lhe trará a possibilidade de comparação de cenários e a
          impressão em pdf dos resultados alcançados.</Contexto>
      </Texto>
      <div className="footer-about">
        <button type="submit">Donate</button>
        <button type="submit">Contact Us</button>
      </div>
    </div>

  )
}