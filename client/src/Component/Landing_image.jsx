import React from 'react';
import styled from "styled-components";
import ReactPlayer from "react-player";

const Container= styled.div`
background-color:white;
`
const Image=styled.img`
width:100%;
height:100%;
object-fit:contain;
position:relative;
`
const Info= styled.div`
position: relative;
width:100%;
height:100%;
bottom:300px;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
@media only screen and (max-width:1000px){
    top:100px;
  }
`
const Title= styled.h1`
color:white;
margin-bottom:20px;
text-align:left;
font-size:40px;
display:relative;
@media only screen and (max-width:800px){
    
    font-size:20px;
  }
`
const Button= styled.button`
border:none;
padding: 10px;
border-radius: 15px;
background-color:blue;
color:black;
cursor:pointer;
font-weight:600;
font-size:40px;
@media only screen and (max-width:800px){
    font-size:20px;
  }
  transition:all 0.5s ease;
&:hover{
    background-color:lightblue;
    color:lightblue;
}
`


const Landing_image= () => {
  return (
   <Container>
    <ReactPlayer
  url="https://www.youtube.com/watch?v=o--dP8Um1IE"
     playing={true} 
    loop={true} 
    controls={false}
    muted
  width="100%"
  height="700px"
  
  

/>
     <Info>
           <Title>Explore with the Rainbow Nurses!</Title>
           <Button>SHOP HERE</Button>
        </Info>
   </Container>
  );
};

export default Landing_image;
