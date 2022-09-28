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
`;

export const NavBar = () => {
  return (
    <Nav>
      <Pages to='/'> Home</Pages>
      <Pages to='/about'> About</Pages>
    </Nav>
  )
}