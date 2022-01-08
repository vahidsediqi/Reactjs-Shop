import styled from "styled-components";
import { useState } from "react";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {sliderItems} from '../data.js'
import { mobile } from '../responsive';
import { Routes, Route, Link } from "react-router-dom";



const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  @media (max-width: 768px) {
    height: auto;
  }
`;

const Arrows = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${props => props.direction === "left" && "10px"};
  right: ${props => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 8;
`;

const Wrapper =  styled.div`
  display: flex;
  height: 100%;
  margin: auto;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  @media (max-width: 768px) {
    height: 'auto'
  }
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  margin: auto;
  padding-right: 5%;
  padding-left: 5%;
  background-color: #${(props) => props.bg};

@media (max-width: 768px) {
    height: auto;
    flex-direction: column;
    padding-top: 50px;
    padding-bottom: 50px;
  }
`;
const ImageContainer = styled.div` 
  height: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

@media (max-width: 768px) {
 display: none;
  }

`;

const Image = styled.img `
width: 100%;

@media (max-width: 768px) {
    width: 95%;
    text-align: center;
  }
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;

@media (max-width: 768px) {
    padding: 0px 25
  }
`;

const Title = styled.h1`
  font-size: 70px;
@media (max-width: 768px) {
   font-size: 35px;
  }
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;


const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
    return (
       <Container>
         <Arrows onClick={()=> handleClick ('left')} direction="left">
             <ChevronLeftIcon/>
         </Arrows>
         <Wrapper slideIndex={slideIndex}>
           {
             sliderItems.map(item => (
                <Slide bg={item.bg} key={item.id}>
                  <ImageContainer>
                  <Image src={item.img}/>
                  </ImageContainer>
                  <InfoContainer>
                  <Title>{item.title}</Title>
                  <Desc>{item.desc}</Desc>
                  <Link to ='/shop' >
                     <Button>SHOW NOW</Button>
                  </Link>
                </InfoContainer>
              </Slide>
             ))
           }
    
         </Wrapper>
         <Arrows onClick={()=> handleClick ('right')} direction="right">
             <ChevronRightIcon/>
         </Arrows>
       </Container>
    );
}

export default Slider;
