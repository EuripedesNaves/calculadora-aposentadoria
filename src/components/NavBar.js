import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
    background-color: #dce0e6;
    display: flex;
    align-items: center;
`;

const Pages = styled(Link)`
   background-color: #1f1f20;
   color: white;
   margin: 20px 5px 20px 20px;
   padding: 5px 20px 5px 20px;
   display: flex;
   justify-content: center;
   text-decoration: none;
   border-radius: 10px;

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

export const NavBar = () => {
  return (
    <Nav>
      <Pages to='/'> Home</Pages>
      <Pages to='/result'> Simular</Pages>
      <Pages to='/about'> Método</Pages>
    </Nav>
  )
}