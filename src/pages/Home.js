import React from 'react';
import { Titulo } from '../components/Titulo';
import styled from 'styled-components';
import '../styles/Abouts.css';


const Texto = styled.div`
  background-color: #dce0e6
  padding-bottom: 10px;
`;

const Name = styled.h2`
  display: flex;
  text-align: center;
  justify-content: center;
  margin: 0px 0px 0px 30px;
  padding: 30px 0px 30px 0px;
  background-color: #567ebb;
  font-size: 40px;
  @media(max-width:425px) {
  font-size: 15px;
  margin: 0px;
  padding: 0xp;
  }
  @media(min-width:426px) and (max-width:768px) {
  font-size: 20px;
  margin: 0px;
  padding: 15px 0px 0px 0px;
  }
  @media(min-width:769px) and (max-width:1024px) {
  font-size: 25px;
  margin: 0px;
  padding: 20px 0px 20px 0px
  }
  @media(min-width: 1025px) and (max-width:1440px) {
  font-size: 30px;
  margin: 0px;
  padding: 20px 0px 20px 0px;
  }
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


export const Home = () => {
return(

<>
<Titulo>O que esperar?</Titulo>
      <Texto>
        <Name>Metodologia</Name>
        <br />
        <Contexto>Oi</Contexto>
      </Texto>
</>

)

}
