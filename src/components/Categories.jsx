import React from 'react';
import styled from 'styled-components';
import { categories }  from '../data';
import Categoriesitem from './CategoriesItem';

const Container = styled.div `
    display: flex;
    padding: 20px;
    @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const Categories = () => {
    return (
        <Container>
           {
               categories.map(item => (
                   <Categoriesitem item={item} key={item.id}/>
               ))
           }  
        </Container>
    );
}

export default Categories;
