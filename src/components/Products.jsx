import styled from "styled-components";
import React from 'react';
import { popularProducts } from '../data.js';
import Product from './Product.jsx';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;



const Products = () => {
    return (
        <Container>
            {
                popularProducts.map(item => (
                    <Product item={item} key={item.id}/>
                ))
            }
        </Container>
    );
}

export default Products;
