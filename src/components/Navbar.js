import {Search } from '@material-ui/icons';
import Badge from '@material-ui/core/Badge';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div `
height: 60px;
`;

const Wrapper = styled.div`
 padding-top: 20px;
 padding-bottom: 20px;
 max-width: 90%;
 margin: auto;
 display: flex;
 align-items: center;
 justify-content: center;
`;

const Left = styled.div`
 flex: 1;
 display: flex;
 align-items: center;
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
`;

const Input = styled.input`
border: none;
&:input:focus {
    border: none;
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
`;

const MenuItem = styled.div`
 font-size: 14px;
 cursor: pointer;
 margin-left: 25px;
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
                    <Logo>VS Shop</Logo>
                </Center>
                <Right>
                    <MenuItem>Register</MenuItem>
                    <MenuItem>Login</MenuItem>
                    <MenuItem>
                    <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlinedIcon />
                    </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    );
}

export default Navbar;
