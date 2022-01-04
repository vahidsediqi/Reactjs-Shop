import React from 'react';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';


const Container = styled.div``;

const Wrapper = styled.div`
 padding: 20px;
`;

const Title = styled.h1`
 font-weight: 300;
 text-align: center;
`;

const Top = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
`;
const TopButton = styled.button `
  padding: 10px;
  font-weight: 600;
  text-transform: uppercase;
  /* background-color: #43415B;
  color: #fff; */
  border: ${props => props.type === "filled" && "none"};
  background-color: ${props => props.type === "filled" ? "#43415B" : "transparent"};
  color: ${props => props.type === "filled" && "white"};

`;

const TopTexts = styled.div``;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
`;


const Bottom = styled.div``;



const Card = () => {
    return (
        <Container>
            <Announcement />
            <Navbar/>
             <Wrapper>
                 <Title>Your Card</Title>
                 <Top>
                   <TopButton>Continue Shopping</TopButton>
                      <TopTexts>
                        <TopText>Shopping Card (2)</TopText>
                        <TopText>Your Wishlist (0)</TopText>
                      </TopTexts>
                   <TopButton type="filled">Checkout Now</TopButton>
                 </Top>

                 <Bottom>

                 </Bottom>
             </Wrapper>

            <Footer/>
        </Container>
    );
}

export default Card;
