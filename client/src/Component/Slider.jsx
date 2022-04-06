import { ArrowLeftOutlined, ArrowRightOutlined, Star } from '@material-ui/icons';
import React from 'react';
import {useState} from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components"
import {sliderItems} from "../data"


const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
position:relative;
overflow:hidden;
color:black;
`

const Arrow = styled.div`
width:50px;
height:50px;
background-color:#fff7f7;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
position:absolute;
color:#DAA520;
top:0;
bottom:0;
margin:auto;
left: ${(props)=> props.direction === "left" && "20px"};
right: ${(props)=> props.direction === "right" && "20px"};
cursor:pointer;
opacity:0.5;
z-index:2;
`

const Wrapper = styled.div`
height:100%;
display:flex;
transition:all 1.5s ease;
transform:translateX(${(props)=>props.slideIndex*-100}vw);

`

const Slide = styled.div`
display:flex;
align-items:center;
width:100vw;
height:100vh;
background-color:#${(props)=>props.bg};

`

const ImgContainer = styled.div`
flex:1;

`

const ReviewStars=styled.div`
padding:0px;
margin:0px;
padding-top:10px;
padding-bottom:10px;
color:gold;


`



const InfoContainer = styled.div`
flex:1;
padding: 50px;
`
const Image= styled.img`
height:80%;
padding:50px;
@media only screen and (max-width:958px){

    width:50%;
  }
`

const Title = styled.h1`font-size:70px;
@media only screen and (max-width:958px){

    font-size:35px;
  }

`
const Desc = styled.p`
margin:30px 0px;
font-size: 20px;
font-weight:500;
letter-spacing:3px;
@media only screen and (max-width:958px){

    font-size:10px;
  }

`
const Button = styled.button`
padding: 10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;
color:white;
transition:all 0.5s ease;
&:hover{
    background-color: black;
    color:#DAA520;
      
}
@media only screen and (max-width:958px){

    font-size:10px;
  }
`



const Slider = () => {

    
/*This controls the carasol on the main page*/ 
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {

    if (direction === "left" && slideIndex != 0) {
      setSlideIndex(slideIndex - 1)
      console.log(slideIndex);


    } else if (slideIndex != 2) {
      setSlideIndex(slideIndex + 1)
      console.log(slideIndex);



    }
  };
  return (
   <Container>
       <Arrow direction = "left" onClick={()=>handleClick("left")}>
        <ArrowLeftOutlined/>
       </Arrow>
       <Wrapper slideIndex={slideIndex}>
           {sliderItems.map((item) => (
       <Slide bg ={item.bg}>
       <ImgContainer>
       <Image src={item.img}/>
       </ImgContainer>
       <InfoContainer>
         <Title style={{color:"white", marginBottom:"70px",textDecoration:"underline",marginTop:"30px"}}>Reviews</Title>
       <Title>{item.title}</Title>
       <Desc>{item.desc}</Desc>
       <ReviewStars>
       <Desc style={{color:"black",marginBottom:"10px"}}><b>Review Score:  </b></Desc>
        <Star style={{fontSize:"50px"}}/>
        <Star  style={{fontSize:"50px"}}/>
        <Star  style={{fontSize:"50px"}}/>
        <Star  style={{fontSize:"50px"}}/>
        <Star  style={{fontSize:"50px"}}/>
       
       </ReviewStars>
       </InfoContainer>
       </Slide>
           ))};
       </Wrapper>
       <Arrow direction= "right"  onClick={()=>handleClick("right")}> 
       <ArrowRightOutlined/>
       </Arrow>
   </Container>
  );
};

export default Slider;
