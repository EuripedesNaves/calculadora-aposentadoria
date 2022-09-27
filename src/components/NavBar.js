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
   margin: 10px;
   padding: 5px 10px 5px 10px;
   display: flex;
   justify-content: center;

`;

export const NavBar = () => {
  return (
    <Nav>
      <h1>NavBar</h1>
      <Pages to='/'> Home</Pages>
      <Pages to='/about'> About</Pages>
    </Nav>
  )
}