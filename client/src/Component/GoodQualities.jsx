import React from 'react';
import styled from "styled-components";
import { Assignment, LocalDrink,Stars  } from '@material-ui/icons';

const Container= styled.div`
background-color:white;

padding:0px;
margin:0px;
padding-top:10%;
padding-bottom:10%;
padding-left:150px;
padding-right:150px;
`
const Title = styled.h1`
text-align:center;
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
padding:2%;

`
const Desc = styled.p`
text-align:center;
padding-top:10px;
padding-bottom:10px;

`
const Icon = styled.div`
color:#BC8F4A;
text-align:center;
width:100%;
justify-content:center;

 padding-bottom:30px;
`

const GoodQualities= () => {
  return (
   <Container>
     <DescTitle>Our Formula: </DescTitle>
     <Title>Packed with Lots of energy & 100% naturally sourced ingredients.</Title>
     <Wrapper>
       <Quality>
         <Icon>
         <Assignment style={{fontSize:"100px"}}/>
         </Icon>
         <Desc><b>Essential daily Energy</b></Desc>
        <Desc>Get your essential dose of energy & vitamins: our energy drinks contain only what the body needs.</Desc>
       </Quality>
        <Quality>
            <Icon>
         <LocalDrink style={{fontSize:"100px"}}/>
         </Icon>
         <Desc><b>Energy drinks made easy</b></Desc>
       <Desc>With Next Level, you’ll never forget to our energy drinks- they’re delicious and easy to consume.</Desc>
        </Quality>
         <Quality>
          <Icon>
         <Stars style={{fontSize:"100px"}}/>
         </Icon>
         <Desc><b>available and effective</b></Desc>
       <Desc>We are proud to present the world's most powerful natural ingredients in a form of delicious drink.</Desc>
         </Quality>
     </Wrapper>
   </Container>
  );
};

export default GoodQualities;
