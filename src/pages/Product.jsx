
import { Add, Remove } from "@material-ui/icons";
import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import { useState } from "react";

const Container = styled.div``;

const Wrapper = styled.div`
 padding: 50px;
 display: flex;
 align-items: center;
`;

const ImageContainer = styled.div`flex: 1;`;

const Image = styled.img`
 width: 100%;
`;

const InfoContainer = styled.div`
flex: 1;
padding: 0 50px;
`;

const Title = styled.h1`
 font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0;
  max-width: 65%;
`;

const Price = styled.span`
 font-weight: 100;
 font-size: 40px;
`;


const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover{
      background-color: #f8f4f4;
  }
`;

const ForMouse = styled.div`
    cursor: pointer;
`
export default function Product() {
    let [prodcutCount, setProductCount ] = useState(1);
    const handleAdProduct = () => {

       setProductCount(prodcutCount + 1)
    }

    const handleRemoveProduct = () => {
      if(prodcutCount > 1 ){
          setProductCount(prodcutCount - 1)
      } else (
          setProductCount(prodcutCount)
      )
    }
    return (
        <Container>
            <Announcement />
            <Navbar/>
              <Wrapper>
                <ImageContainer>
                    <Image src="https://i1.wp.com/camix.co.uk/wp-content/uploads/2021/01/canon-eos-r6-24-105-f4-l-is-usm-03.jpg?fit=1934%2C1316&ssl=1" alt="image"/>
                </ImageContainer>

                <InfoContainer>
                    <Title>Canon EOS R3</Title>
                        <Desc>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus doloremque eaque dolores voluptas sit cum omnis totam odio hic temporibus ullam optio, quis, numquam praesentium cumque perspiciatis amet tenetur? Repellat.
                        </Desc>
                        <Price>$550.99</Price>
                     <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="black" />
                            <FilterColor color="darkblue" />
                            <FilterColor color="gray" />
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                  </FilterContainer>
                  <AddContainer>
                    <AmountContainer>
                  <ForMouse><Remove onClick={handleRemoveProduct}/></ForMouse>
                    <Amount>{prodcutCount}</Amount>
                    <ForMouse><Add onClick={handleAdProduct}/></ForMouse>
                    </AmountContainer>
                    <Button>ADD TO CART</Button>
                </AddContainer>
                </InfoContainer>
              </Wrapper>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}
