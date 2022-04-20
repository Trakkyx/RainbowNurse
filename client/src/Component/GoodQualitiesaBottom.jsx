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
@media only screen and (max-width:600px){
padding:20px;
}
`
const Image=styled.img`

width:40%;
height:40%;
@media only screen and (max-width:1300px){
  width:50%;
  height:50%;
}
@media only screen and (max-width:1000px){
  width:300px;
  height:200px;
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
@media only screen and (max-width:1300px){
    font-size:15px;
  }
  transition:all 0.5s ease;
&:hover{
    background-color:darkblue;
    color:white;
}
`
const Qdesc = styled.div `
display:block;
padding:0px;
margin-left:30%;
text-align:right;
@media only screen and (max-width:1400px){
    
  margin-left:20%;
 
}
@media only screen and (max-width:1000px){
 text-align:center;
 margin:0px;
 padding:3%;
}




`



const Quality = styled.div`
padding:2%;
display:flex;
flex-direction: row-reverse;
@media only screen and (max-width:1000px){
  display:block;
  text-align:center;
  align-items:center;
}

`
const Desc = styled.p`
padding:0px;
padding-top:10px;
padding-bottom:10px;
font-size:20px;
@media only screen and (max-width:1300px){
    
  
  font-size:15px;
}
@media only screen and (max-width:1000px){
  text-align:center;
  margin:0px;
 }
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
          
     
      
       <Qdesc >
        <Desc style={{fontSize:"30px"}}><b>What are we about.</b></Desc>
        <Desc>To learn more about the creation of the Rainbow Nurses click below.</Desc>
        <Button>Read More</Button>
        </Qdesc>
        <Image src="https://rainbownurses.com/wp-content/uploads/brizy/imgs/frame-28-2-611x344x5x0x601x344x1648643462.jpg"/>
        </Quality>
        
     </Wrapper>
   </Container>
  );
};

export default GoodQualitiesBottom;
