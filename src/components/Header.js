import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Nav from "./Nav"; 
const Header =()=> {
  return (<MainHeader>
    <NavLink to="/">
    <img src="./images/logo.png"alt="my logo img" width="220px"/>
    </NavLink>
    <Nav/>
  </MainHeader>);
};
const MainHeader =styled.header`
padding:0 4.8 rem;
height:11rem;
background-color:${({theme})=>theme.colors.bg};
display:flex;
justify-content:space-between;
align-items:center;
position:relative;

.logo{
  height: 0.5rem;
  
}
`
export default Header;
