import styled from "styled-components";
import {
    FavoriteBorderOutlined,
    SearchOutlined,
    ShoppingCartOutlined,
  } from "@material-ui/icons";

  const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0,0,0,0.1);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ease 0.5s all;
  cursor: pointer;
  `;

const Container = styled.div`
  flex:1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  &:hover ${Info}{
      opacity: 1;
  }
`;



const Icon = styled.div`
 width: 40px;
 height: 40px;
 border-radius: 50%;
 border: 1px solid #808080;
 background: white;
 display: flex;
 align-items: center;
 justify-content: center;
 margin: 10px;
 transition: 0.3s ease-in-out all;
 cursor: pointer;
 &:hover{
     background: #e9f5f5;
     transform: scale(1.1);
 }
`;

const Circle = styled.div`
  height: 200px;
  width: 200px;
  background: white;
  position: absolute;
  border-radius: 50%;
`;

const Imgage = styled.img`
height: 75%;
z-index: 2;
`;

const Product = ({ item }) => {
    return (
        <Container>
            <Circle />
            <Imgage src={item.img} />
            <Info>
                <Icon>
                   <ShoppingCartOutlined />
                </Icon>
                <Icon>
                   <SearchOutlined />
                </Icon>
                <Icon>
                   <FavoriteBorderOutlined />
                </Icon>
            </Info>
        </Container>
    );
}

export default Product;
