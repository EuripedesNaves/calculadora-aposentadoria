import React from 'react';
import styled from 'styled-components';

const Titulo = styled.div`
    background-color: #567ebb;
`;

const Name = styled.h2`
  display: flex;
  text-align: left;
  justify-content: left;
  margin-left: 30px;
`;

const Metodologia = styled.p`
  display: flex;
  text-align: left;
  justify-content: left;
  width: 1000px;
  overflow-wrap: break-word;  
  word-wrap: break-word; 
  word-break: break-word;
  margin-left: 30px;
`;

export const About = () => {
    return (
        <Titulo>
        <Name>Metodologia</Name>
        <Metodologia>A metodologia leva como base a fórmula de juros compostos FV=PVx¿, compartimentadas em 3 etapas, sendo:
        1 - A partir do formulário apresentado, calcular o montante necessário 
para que viva de renda;
2 - Estimar na trajetória dos aportes, taxa de juros e com base no seu 
perfil de investidor (sintetizados na proporção de Renda Variável e 
Fixa) em quanto tempo você atingirá esse montante;
3 - Demonstrar em quanto tempo, ceteris paribus, será capaz de 
alcançar o rendimento esperado.
A ferramenta lhe trará a possibilidade de comparação de cenários e a 
impressão em pdf dos resultados alcançados. </Metodologia>
    <button type="submit">Donate</button>
    <button type="submit">Contact Us</button>
    </Titulo>

    )
  }