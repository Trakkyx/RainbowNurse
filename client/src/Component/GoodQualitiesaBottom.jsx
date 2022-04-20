import React from 'react';
import styled from "styled-components";
import { Assignment, LocalDrink,Stars  } from '@material-ui/icons';

const Container= styled.div`
background-color:lightgrey;

padding:0px;
margin:0px;
padding-top:10px;
padding-bottom:10%;
padding-left:150px;
padding-right:150px;
`
const Image=styled.img`

width:30%;
height:30%;

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
display:block;
justify-content:space-between;
justify:content:center;
align-items:center;



`
const Button= styled.button`
border:none;
margin-right:1.2%;
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
display:block;


`



const Quality = styled.div`
padding:2%;
display:flex;

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

const GoodQualitiesBottom= () => {
  return (
   <Container>
     <Wrapper>

        <Quality >
          <Image src="https://rainbownurses.com/wp-content/uploads/brizy/imgs/frame-28-2-611x344x5x0x601x344x1648643462.jpg"/>
     
      
       <Qdesc style={{textAlign:"right", marginLeft:"40%"}}>
        <Desc style={{fontSize:"30px"}}><b>What are we about.</b></Desc>
        <Desc>To learn more about the creation of the Rainbow Nurses click below.</Desc>
        <Button>Read More</Button>
        </Qdesc>
        </Quality>
     </Wrapper>
   </Container>
  );
};

export default GoodQualitiesBottom;
