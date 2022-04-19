import React from 'react';
import styled from "styled-components";
import { Assignment, LocalDrink,Stars  } from '@material-ui/icons';

const Container= styled.div`
background-color:white;

padding:0px;
margin:0px;
padding-top:10px;
padding-bottom:10px;
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

const GoodQualities= () => {
  return (
   <Container>
     <Wrapper>
       <Quality>

       <Qdesc style={{textAlign:"left"}}>
        <Desc style={{fontSize:"30px"}}><b>Who are the Rainbow Nurses.</b></Desc>
        <Desc>The Rainbow Nurses are Hope, Nala and Sammie. They are here to heal the human race and teach us everything they have learnt exploring the galaxy.</Desc>
        <Button>Read More</Button>
        </Qdesc>
       <Image src="https://rainbownurses.com/wp-content/uploads/brizy/imgs/wp-0e1e286abe7a622b80fa8aaad8d79bc3-655x368x0x0x655x368x1643983566.jpg"/>
       </Quality>
     </Wrapper>
   </Container>
  );
};

export default GoodQualities;
