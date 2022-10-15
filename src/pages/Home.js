import React from 'react';
import { Titulo } from '../components/Titulo';
import styled from 'styled-components';
import Dolar from '../images/Dolar.jpg'
import { Link } from 'react-router-dom';

const Texto = styled.div`
  background-color: #C8CDB6;
`;

const Name = styled.h2`
font-size: 22px;
text-align: center;
color: white;
padding: 40px;
background-color:#2b4c7e;
font-weight: bold;

@media(max-width:425px) {
    font-size: 16px;
    }
`;

const Pages = styled(Link)`
text-decoration: none;
border-radius: 10px;
border-color: #ffc220;
font-size: 3vh;
background-color: #ffc220;
color: black;
font-weight: bold;
padding: 0px 20px 5px 20px;

@media(max-width:320px) {
    margin: 10px 0px 10px 5px;
    allign-itens: center;
    }
   @media(min-width: 321px) and (max-width:375px) {
    margin: 10px 0px 10px 5px;
   }
   @media(min-width: 376px) and (max-width:425px) {
    margin: 10px 0px 10px 5px;
   }
   @media(min-width:426px) and (max-width:768px) {
    margin: 10px 0px 10px 5px;
  }
    @media(min-width:769px) and (max-width:1024px) {
      margin: 10px 0px 10px 5px;
    }
    @media(min-width: 1025px) and (max-width: 1440px) {
      margin: 10px 0px 10px 5px;
    }
`;


export const Home = () => {
    return (

        <>
            <Titulo />
            <Texto>
                <img src={Dolar} width="90%" height="90%" />
                <Name>Seja bem vindo ao simulador de aposentadoria, esperamos te ajudar alcançar sua independência financeira</Name>
            </Texto>
                <Pages to='/result'> Simular</Pages>
        </>

    )

}
