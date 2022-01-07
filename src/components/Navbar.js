import {Search } from '@material-ui/icons';
import Badge from '@material-ui/core/Badge';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div `
height: 95px;
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

 ${mobile(
     {
         flexDirection: 'column-reverse',
         paddingBottom: '15px',
         maxWidth: "100%"
     }
 )}

`;

const Left = styled.div`
 flex: 1;
 display: flex;
 align-items: center;
 ${mobile({
      width: '85%'
      
  })}
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
  ${mobile({
      width: '85%',
      marginLeft: '5px',
      margin: 'auto'
  })}

`;

const Input = styled.input`
border: none;
&:input:focus {
    border: 0px;
    outline: none;
    }
    ${mobile({
      width: '90%'
  })}
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
 ${mobile({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: '80px',
    marginBottom: '15px'
 })}
`;

const MenuItem = styled.div`
 font-size: 14px;
 cursor: pointer;
 margin-left: 25px;
 ${mobile({
     marginLeft: 'auto'
 })}
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
                    <h1>VS</h1>
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
