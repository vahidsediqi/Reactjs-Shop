import React from 'react';
import styled from 'styled-components';
import { categories }  from '../data';
import Categoriesitem from './CategoriesItem';

const Container = styled.div `
    display: flex;
    padding: 20px;
`;
const Categories = () => {
    return (
        <Container>
           {
               categories.map(item => (
                   <Categoriesitem item={item}/>
               ))
           }  
        </Container>
    );
}

export default Categories;
