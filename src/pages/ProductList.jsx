import { Send } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';
import { Routes, Route, Link } from "react-router-dom";

const Container = styled.div``;

const Title = styled.h1`
margin: 20px;
`;

const FilterContainer = styled.div`
 display: flex;
 justify-content: space-between;
`;

const Filter = styled.div`margin: 20px;`;

const FilterText = styled.span`
 font-size: 20px;
 font-weight: 600;
 margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right:20px;
  border-radius: 8px;
`;
const Option = styled.option`
padding-top: 35px;
`;


export default function ProductList() {
    return (
        <Container>
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products</FilterText>
                    <Select>
                        <Option disabled selected>
                            Color
                        </Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Green</Option>
                        <Option>Dark Gray</Option>
                    </Select>
                    <Select>
                        <Option disabled selected>
                            Size
                        </Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                        <Option>XXL</Option>
                        <Option>XXXL</Option>
                    </Select>
                </Filter>
                 <Filter>
                   <FilterText>Sort Products</FilterText>
                   <Select>
                        <Option selected>
                            NEWEST
                        </Option>
                        <Option>Price (asc)</Option>
                        <Option>Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Link to="/product">
              <Products/>
            </Link>
            <Newsletter/>
        </Container>
    )
}

