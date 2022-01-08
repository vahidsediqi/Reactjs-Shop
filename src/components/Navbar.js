import { Routes, Route, Link } from "react-router-dom";
import {Search } from '@material-ui/icons';
import Badge from '@material-ui/core/Badge';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div `
height: 55px;
padding-top: 15px;
${mobile({
    height: 'auto'
})}

`;

const Wrapper = styled.div`
 max-width: 90%;
 margin: auto;
 display: flex;
 align-items: center;
 justify-content: center;

 @media screen and (max-width: 600px) {
     flex-direction: column-reverse;
     width: 100%;
     padding-bottom: 15px;
 }

`;

const Left = styled.div`
 flex: 1;
 display: flex;
 align-items: center;

@media screen and (max-width: 600px) {
   width: 85%;
 }
`;

const Language = styled.span`
 font-size: 14px;
 cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 1px solid lightgrey;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
 
@media screen and (max-width: 600px) {
   width: 85%;
   margin: auto;
 }

`;

const Input = styled.input`
border: none;
&:input:focus {
    border: 0px;
    outline: none;
    }
@media screen and (max-width: 600px) {
   width: 90%;
 }
`;

const Center = styled.div`
 flex: 1;
 text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
`;
const Right = styled.div`
 flex: 1;
 display: flex;
 align-items: center;
 justify-content: flex-end;
@media screen and (max-width: 600px) {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 80px;
  margin-bottom: 15px;
 }
`;

const MenuItem = styled.div`
 font-size: 14px;
 cursor: pointer;
 margin-left: 25px;
@media screen and (max-width: 600px) {
 margin-left: auto;
 }
`;


const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input />
                       <Search style={{ color: "gray", fontSize: '16px'}} />
                    </SearchContainer>
                </Left>
                <Center>
                   <Link to="/"><h1>V- Shop</h1></Link>
                </Center>
                <Right>
                <Link to="Register">
                     <MenuItem>Register</MenuItem>
                </Link>
                <Link to="login">
                     <MenuItem>Login</MenuItem>
                </Link>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <Link to="card">
                                <ShoppingCartOutlinedIcon />
                            </Link>
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    );
}

export default Navbar;
