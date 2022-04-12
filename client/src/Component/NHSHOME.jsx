import React from 'react';
import styled from "styled-components";
import { Assignment, LocalDrink,Stars  } from '@material-ui/icons';

const Container= styled.div`
background-color:lightgrey;

padding:0px;
margin:0px;
padding-top:10%;
padding-bottom:10%;
padding-left:150px;
padding-right:150px;
`
const Image=styled.img`

width:100%;
height:100%;

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



`
const Button= styled.button`
border:none;
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
const Qdesc = styled.div `
display:flex;


`



const Quality = styled.div`
padding:2%;
display:block;

`
const Desc = styled.p`
padding-top:10px;
padding-bottom:10px;

margin:2%;


`
const Icon = styled.div`
color:#BC8F4A;
text-align:center;
width:100%;
justify-content:center;

 padding-bottom:30px;
`
const Rdesc = styled.div`
display:block:
`
const NHSHOME= () => {
  return (
   <Container>
     <Wrapper>
       <Quality>
        <Image src="https://i0.wp.com/rainbownurses.com/wp-content/uploads/2022/03/a368f881e3b5e0b62d95192422f6c7d1.png?fit=1100%2C395&ssl=1"/>
       <Qdesc style={{textAlign:"center"}}>
       <Rdesc>
        <Desc style={{fontSize:"15px"}}><b>Helping Lighten The Load.</b></Desc>
         <Desc style={{fontSize:"15px"}}>Helping fund new equipment to make work easier for eveyone</Desc>
        </Rdesc>
        <Rdesc>
                  <Desc style={{fontSize:"15px"}}><b>Save Our NHS Together</b></Desc>
         <Desc style={{fontSize:"15px"}}>Help us protect our NHS together for generations to come</Desc> 
         </Rdesc>
        </Qdesc>
      
       </Quality>
       <Quality style={{margin:"0px",textAlign:"left"}}>
        <Desc style={{fontSize:"30px", margin:"3%"}}><b>Our Partnership with the NHS Charities Together.</b></Desc>
        <Desc style={{margin:"3%"}}>We got in-touch with Charities together as we feel the NHS is owed a lot for all it's work through the pandemic. </Desc>
        <Button>Read More</Button>
         
       </Quality>
     </Wrapper>
   </Container>
  );
};

export default NHSHOME;
