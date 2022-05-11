import React from 'react';
import styled from "styled-components";
import ReactPlayer from "react-player";
import PropTypes from "prop-types";
import { Assignment, LocalDrink,Stars  } from '@material-ui/icons';

const Container= styled.div`
background-color:lightblue;

padding:50px;
margin:0px;

margin-bottom:120px;
margin-left:300px;
margin-right:300px;
@media only screen and (max-width:1340px){
  margin-left:200px;
margin-right:200px;
 
}
@media only screen and (max-width:1130px){
  margin-left:100px;
margin-right:100px;
 
}
@media only screen and (max-width:920px){
margin:0px;
}
@media only screen and (max-width:730px){
padding:0px;
  }
`
const Title = styled.h1`
text-align:center;
color:darkblue;
padding-left:26%;
padding-right:26%;
padding-bottom:70px;
@media only screen and (max-width:990px){

  font-size:20px;
}
`
const DescTitle= styled.p`
text-align:center;
color:#BC8F4A;
font-size:20px;
padding-bottom:10px;
`

const Wrapper = styled.div`
display:flex;
justify-content:space-between;
justify:content:center;
align-items:center;
@media only screen and (max-width:500px){
  display:block;
}


`
const Quality = styled.div`
padding:3%;
@media only screen and (max-width:920px){
  padding:0px;
  }


`
const Desc = styled.p`
text-align:center;
padding-top:10px;
padding-bottom:10px;
font-size:20px;
`
const Icon = styled.div`

 display: block;
 margin-left: auto;
 margin-right: auto;
 width:600px;
 @media only screen and (max-width:600px){
  width:100%;
  }
 justify-content:center;
align-items:center;
text-align:center;
`
const Button= styled.button`
border:none;
text-align:center;
width:170px;  
padding:20px;
justify-content:center;
align-items:center;
padding-left:30px;
padding-right:30px;
border-radius: 15px;
background-color:darkblue;
color:white;
cursor:pointer;
font-weight:600;
font-size:16px;

  transition:all 0.5s ease;
&:hover{
    border:solid;
    background-color:lightblue;
    color:white;
}
`

const ButtonDiv = styled.div`
Padding:5%;
`

const ABOUTUSVIDEOS= () => {
  return (
   <Container>
    
     <Title>Discover More Below!</Title>

       <Quality>
       <Desc><b>Watch How the Rainbow Nurses Were Born!</b></Desc>
         <Icon>
         <ReactPlayer
  url="https://www.youtube.com/watch?v=lO5DpP2TdE0"
     playing={false} 
    loop={true} 
    controls={true}
    
    
  width="100%"
  height="400px"
  
  />
  <ButtonDiv>
    <Button>Find Out More</Button>
    </ButtonDiv>
         </Icon>
       

       </Quality>
  
  
   </Container>
  );
};

export default ABOUTUSVIDEOS;
