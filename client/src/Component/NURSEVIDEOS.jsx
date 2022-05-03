import React from 'react';
import styled from "styled-components";
import ReactPlayer from "react-player";
import PropTypes from "prop-types";
import { Assignment, LocalDrink,Stars  } from '@material-ui/icons';

const Container= styled.div`
background-color:white;

padding:0px;
margin:0px;
padding-top:10%;
padding-bottom:0px;
padding-left:300px;
padding-right:300px;
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
`
const Image = styled.img`
display: fixed;
z-index:0;
width:100%;

`

const NURSEVIDEOS= () => {
  return (
   <Container>
     
     <Title>Hear what the rainbow nurses have to say</Title>
     <Wrapper>
       <Quality>
       <Desc><b>Watch the Rainbow Nurses Great Theme Song!</b></Desc>
         <Icon>
         <ReactPlayer
  url="https://www.youtube.com/watch?v=o--dP8Um1IE"
     playing={false} 
    loop={true} 
    controls={true}
    
    
  width="100%"
  height="350px"
  
  />
         </Icon>

       </Quality>
         <Quality>
         <Desc><b>Watch How The Rainbow Nurses Were Born!</b></Desc>
          <Icon>
          <ReactPlayer
  url="https://www.youtube.com/watch?v=lO5DpP2TdE0"
     playing={false} 
    loop={true} 
    controls={true}
    
    
  width="100%"
  height="350px"
  
  />
         </Icon>

        
         </Quality>
     </Wrapper>
     <Desc><b>The Rainbow nurses are Nala, Hope and Samme and were sent down from Mother earth herself "Gaia" to help share love, kindness, and caring to our planet earth and everyone and everything on it… which is needed now more than ever!
</b></Desc>
   </Container>
  );
};

export default NURSEVIDEOS;
