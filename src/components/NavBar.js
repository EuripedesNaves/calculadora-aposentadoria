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
   margin: 20px 30px 20px 40px;
   }
   @media(min-width: 321px) and (max-width:375px) {
   margin: 20px 30px 20px 60px;
   }
   @media(min-width: 376px) and (max-width:425px) {
   margin: 20px 30px 20px 80px;
   }
   @media(min-width:426px) and (max-width:768px) {
    margin: 20px 0px 20px 200px;
  }
    @media(min-width:769px) and (max-width:1024px) {
    margin: 20px 0px 30px 300px;
    }
    @media(min-width: 1025px) and (max-width: 1440px) {
    margin: 20px 0px 30px 420px;
    }
`;

export const NavBar = () => {
  return (
    <Nav>
      <Pages to='/'> Home</Pages>
      <Pages to='/about'> About</Pages>
    </Nav>
  )
}