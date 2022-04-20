import React from 'react';
import styled from "styled-components";
import { Assignment, AttachMoney, Beenhere, LocalDrink,LocalShipping,Stars  } from '@material-ui/icons';

const Container= styled.div`
background-color:white;

padding:0px;
margin:0px;
padding-top:10%;
padding-bottom:10px;
padding-left:150px;
padding-right:150px;
`
const Button= styled.button`
border:none;
font-size:22px;
padding: 18px;
padding-right:21%;
padding-left:21%;


margin-top:10%;
margin-left:20%;
margin-right:20%;

text-align:center;


border-radius: 15px;
background-color:#BC8F4A;
color:white;
cursor:pointer;

font-weight:600;
font-size:22px;
@media only screen and (max-width:800px){

    font-size:20px;
  }
  @media only screen and (max-width:400px){

    font-size:10px;
  }
  transition:all 0.5s ease;
&:hover{
    background-color:white;
    border:solid;
    color:black;
}
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

const GoodOrderQualities= () => {
  return (
   <Container>
     <DescTitle>OUR ORDERS: </DescTitle>
     <Title>Easy to ship & delivered fast.</Title>
     <Wrapper>
       <Quality>
         <Icon>
         <AttachMoney style={{fontSize:"100px"}}/>
         </Icon>
         <Desc><b>Satisfaction or Your Money Back</b></Desc>
        <Desc>Return within 30 days, no questions asked.</Desc>
       </Quality>
        <Quality>
            <Icon>
         <Beenhere style={{fontSize:"100px"}}/>
         </Icon>
         <Desc><b>Buy Risk-Free</b></Desc>
       <Desc>100% hassle-free refund guarantee.</Desc>
        </Quality>
         <Quality>
          <Icon>
         <LocalShipping style={{fontSize:"100px"}}/>
         </Icon>
         <Desc><b>Free Shipping</b></Desc>
       <Desc>On any order that is $50+ zero shipping cost</Desc>
         </Quality>
     </Wrapper>
     <Button>Try Our Energy Drinks!</Button>
   </Container>
  );
};

export default GoodOrderQualities;
