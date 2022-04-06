import { CheckCircle, Favorite, FlashOn, HighQuality, Search } from '@material-ui/icons';
import React from 'react';
import styled from "styled-components";
const Container= styled.div`
background-color:#EBD3B1;
padding-left:220px;
padding-right:80px;
height:530px;
@media only screen and (max-width:1423px){
    
    height:500px;
  }
  @media only screen and (max-width:1243px){
    
    height:480px;
  }
  @media only screen and (max-width:990px){
    
    height:auto;
    padding-left:40px;
     padding-right:40px;
  }
`
const Wrapper = styled.div`
display:flex;
justify-content:space-around;
@media only screen and (max-width:990px){
    
    display:block;
  }

`
const Image=styled.img`
align-items:left;
object-fit:contain;
position:relative;
`
const Info= styled.div`

padding:10px;
padding-top:100px;
background-color:#EBD3B1;
color:black;

  align-items: center;
  justify-content: center;
@media only screen and (max-width:990px){
    
    text-align:center;
  }
  @media only screen and (max-width:500px){
    
    padding-top:60px;
  }

`
const Title= styled.h1`
color:black;
text-align:center;
margin-bottom:20px;
font-size:55px;
display:relative;

@media only screen and (max-width:1423px){
    
    font-size:40px;
  }
  @media only screen and (max-width:1333px){
    
    font-size:30px;
  }

`
const Desc = styled.p`
padding-bottom:10%;
font-size:16px;
`
const Button= styled.button`
border:none;
font-size:22px;
padding: 18px;
padding-right:20%;
padding-left:20%;
position:relative;
left:0px;
border-radius: 15px;
background-color:#BC8F4A;
color:white;
cursor:pointer;

font-weight:600;
font-size:22px;
@media only screen and (max-width:1423px){

    font-size:15px;
  }
  @media only screen and (max-width:1000px){
    
    padding-right:10%;
    padding-left:10%;  
  }
  transition:all 0.5s ease;
&:hover{
    background-color:#EBD3B1;
    border:solid;
    color:black;
}
`


const Left = styled.div`
flex:1;
display:flex;
align-items:left;
justify-content:space-between;
`

const Right = styled.div`
flex:1;
display flex;
align-items:center;
justify-content:space-between;
`
const Img = styled.img`
width:700px;
height:auto;
@media only screen and (max-width:1423px){
    
    width:650px;
  }

  @media only screen and (max-width:1243px){
    
    width:600px;
  }
   @media only screen and (max-width:990px){
    
   
   width:50%;
   margin-left: 25%;


     margin-right: 10%;
   align-items:center;
   justify-content:center;

  }
 


`

const ImgContainer = styled.div`
flex:4;
position:relative;
top:85px;
  @media only screen and (max-width:990px){
    padding-top:30px;
    top:0px;
    top:40px;
    position:static;
    
  }




`
const Icons = styled.div`
display:flex;
justify-content:space-between;
padding-top:30px;
opacity:0.4;
margin-right:15%;
padding:2%;
@media only screen and (max-width:990px){
    
    margin:0px;
  }

`

const IconDesc = styled.div`
text-align:center;
`


const Landing_image= () => {
  return (
   <Container>
      
     <Wrapper>
      
     <Info>
      <Title>The Tasty Boost Of Health</Title>
       <Desc>
       <p style={{color:"black"}}>Next level energy drinks are the best. You'll never forget to take them. For the healthier, happier, and thriving You.</p>
       </Desc>
       <Button><b>Try our Energy Drinks!</b></Button>
       <Icons>
         <IconDesc>
        <CheckCircle style={{fontSize:"30px"}}/>
        <p>Made in Germany</p>
        </IconDesc>
        <IconDesc>
        <Favorite style={{fontSize:"30px"}}/>
        <p>Trust Worthy</p>
        </IconDesc>
        <IconDesc>
        <FlashOn style={{fontSize:"30px"}}/>
        <p>Packed With Energy</p>
        </IconDesc>
        <IconDesc>
        <HighQuality style={{fontSize:"30px"}}/>
        <p>High in Quality</p>
        </IconDesc>
       </Icons>
        </Info>
               <ImgContainer>
       <Img src="https://i.ibb.co/p267TTt/Hero-Section-Image-Draft-removebg-preview.png"/>
       </ImgContainer>

     </Wrapper>
  

   </Container>
  );
};

export default Landing_image;
