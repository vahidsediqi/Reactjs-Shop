import React from 'react';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';


const Container = styled.div`

`;

const Wrapper = styled.div`
 padding: 20px;
 max-width: 90%;
 margin: auto;
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


const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
 flex: 3;
`;

const Summary = styled.div`
flex: 1;
`;

const Prodcut = styled.div`

`;

const ProductDetail = styled.div`

`;

const PriceDestil = styled.div`

`;

const Image = styled.img`
  width: 100%;
`;

const Details = styled.div`

`;

const ProductName = styled.h1`

`;

const ProductId = styled.h1`

`;


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
                    <Info>
                      <Prodcut>
                        <ProductDetail>
                             <Image src="https://i1.wp.com/camix.co.uk/wp-content/uploads/2021/01/canon-eos-r6-24-105-f4-l-is-usm-03.jpg?fit=1934%2C1316&ssl=1" alt="image"/>
                             <Details>
                               <ProductName><b>Prodcut:</b> Canon EOS R6</ProductName>
                               <ProductId><b>ID:</b> VSO-1235</ProductId>
                             </Details>
                        </ProductDetail>
                        <PriceDestil></PriceDestil>
                      </Prodcut>
                    </Info>
                    <Summary>Samary</Summary>
                </Bottom>
             </Wrapper>

            <Footer/>
        </Container>
    );
}

export default Card;
