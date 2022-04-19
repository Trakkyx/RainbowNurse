import React from 'react';
import styled from "styled-components";
import ReactPlayer from "react-player";

const Container= styled.div`
background-color:white;


  @media only screen and (max-width:2000px){
    height:1100px;
  }
  @media only screen and (max-width:1830px){
    height:1000px;
  }
  @media only screen and (max-width:1700px){
    height:900px;
  }
  @media only screen and (max-width:1500px){
    height:800px;
  }
  @media only screen and (max-width:1300px){
    height:700px;
  }
  @media only screen and (max-width:1110px){
    height:600px;
  }
  @media only screen and (max-width:1110px){
    height:550px;
  }
  @media only screen and (max-width:1000px){
    height:450px;
  }
  
  
  


    @media only screen and (max-width:700px){
    height:350px;
  }
  @media only screen and (max-width:500px){
    height:300px;
  }

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
bottom:900px;
right:400px;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
@media only screen and (max-width:1420px){
    
    right:300px;
  }
  @media only screen and (max-width:1000px){
    top:100px;
    right:50px;
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
text-align:left;
padding:20px;
padding-left:30px;
padding-right:30px;
border-radius: 15px;
background-color:lightblue;
color:black;
cursor:pointer;
font-weight:600;
font-size:20px;
@media only screen and (max-width:800px){
    font-size:20px;
  }
  transition:all 0.5s ease;
&:hover{
    background-color:darkblue;
    color:white;
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
  height="100%"
  
  

/>
     <Info>
           <Title>Explore with the Rainbow Nurses!</Title>
           <Button>SHOP HERE</Button>
        </Info>
   </Container>
  );
};

export default Landing_image;
