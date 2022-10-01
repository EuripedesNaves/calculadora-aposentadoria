import React from 'react';
import styled from 'styled-components';
import Abouts from '../styles/Abouts.css';
import { Titulo } from '../components/Titulo';

const Texto = styled.div`
    background-color: #567ebb;
    padding-bottom: 20px;
`;

const Name = styled.h2`
  display: flex;
  text-align: center;
  justify-content: center;
  margin-left: 30px;
  padding-top: 30px;
  padding-bottom: 30px;
  margin-top: 0px;
  background-color: #567ebb;
  font-size: 40px;
`;

const Metodologia = styled.p`
  display: flex;
  text-align: left;
  justify-content: center;
  font-size: 20px;
  line-height: 40px;
  margin-top: 10px;
  color: white;
`;

export const About = () => {
    return (
      <div>
      <Titulo></Titulo>
        <Texto>
        <Name>Metodologia</Name>
        <Metodologia>A metodologia leva como base a fórmula de juros compostos FV=PVx¿, compartimentadas em 3 etapas, sendo:</Metodologia>
        <Metodologia> 1 - A partir do formulário apresentado, calcular o montante necessário 
para que viva de renda;</Metodologia>
<Metodologia>2 - Estimar na trajetória dos aportes, taxa de juros e com base no seu 
perfil de investidor (sintetizados na proporção de Renda Variável e 
Fixa) em quanto tempo você atingirá esse montante;</Metodologia>
<Metodologia>3 - Demonstrar em quanto tempo, ceteris paribus, será capaz de 
alcançar o rendimento esperado;</Metodologia>
<Metodologia> A ferramenta lhe trará a possibilidade de comparação de cenários e a 
impressão em pdf dos resultados alcançados.</Metodologia>
    </Texto>
    <div className="footer-about">
    <button type="submit">Donate</button>
    <button type="submit">Contact Us</button>
    </div>
    </div>

    )
  }