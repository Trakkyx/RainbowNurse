import React from 'react';
import styled from "styled-components";
import { Assignment, LocalDrink,Stars  } from '@material-ui/icons';

const Container= styled.div`
background-color:white;

padding:0px;
margin:0px;
padding-top:100px;
padding-bottom:10px;
padding-left:300px;
padding-right:300px;
@media only screen and (max-width:1600px){
  padding-left:200px;
padding-right:200px;
  }
  @media only screen and (max-width:1300px){
    padding-left:100px;
  padding-right:100px;
    }
    @media only screen and (max-width:1070px){
      padding-left:50px;
    padding-right:50px;
      }
      @media only screen and (max-width:900px){
        padding-left:20px;
      padding-right:20px;
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
@media only screen and (max-width:900px){
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
font-size:20px;
`
const Icon = styled.div`
color:#BC8F4A;
text-align:center;
width:100%;
justify-content:center;

 padding-bottom:30px;
`
const Image = styled.img`


`
const NHSDOLLS= () => {
  return (
   <Container>
    
     <Title>Hear what the rainbow nurses have to say</Title>
     <Wrapper>
       <Quality>
         <Icon>
         <Image src="https://rainbownurses.com/wp-content/uploads/brizy/imgs/f2baaf0a4b917097f2da8cda9b505fe4-264x264x27x0x209x264x1648212902.png"/>
         </Icon>
         <Desc><b>Nala wants to share with you that:</b></Desc>
        <Desc>NHS CHARITIES TOGETHER HAS 238 MEMBERS Supporting NHS services throughout the UK</Desc>
       </Quality>
        <Quality>
            <Icon>
            <Image src="https://rainbownurses.com/wp-content/uploads/brizy/imgs/639c5316c034ffbef00022fb4cecf115-270x270x0x0x270x270x1648212907.png"/>
         </Icon>
         <Desc><b>Hope also wants to know that:</b></Desc>
       <Desc>NHS CHARITIES TOGETHER RAISED £150 MILLION Via the NHS Charities Together Covid-19 Appeal</Desc>
        </Quality>
         <Quality>
          <Icon>
          <Image src="https://rainbownurses.com/wp-content/uploads/brizy/imgs/wp-a6e40911bf37aa0969d049a65a14919f-248x248x0x0x248x248x1643983566.png"/>
         </Icon>
         <Desc><b>Sammie will finish off by saying:</b></Desc>
       <Desc>OVER £1MILLION SPENT EVERY DAY By NHS charities throughout the UK.</Desc>
         </Quality>
     </Wrapper>
   </Container>
  );
};

export default NHSDOLLS;
