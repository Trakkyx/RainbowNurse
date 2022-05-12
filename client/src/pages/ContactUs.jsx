import React from 'react'
import styled from "styled-components";
import Contact from '../Component/Contact';
import Footer from '../Component/Footer';
import Navabar from '../Component/Navabar';

const Container = styled.div`
background-image: url("https://i.ibb.co/RbrNhHm/space.png");
background-color: #cccccc; 
height: 100%; 
background-position: center; 
background-repeat: no-repeat; 
background-size: cover; 

`
const Contained = styled.div`


`
const ContactContainer=styled.div`
padding:400px;
padding-top:5%;
padding-bottom:10%;
align-items:center;
text-align:center;
margin:auto;
display:flex;
@media only screen and (max-width:1700px){

  padding:350px;
 }
 @media only screen and (max-width:1620px){

  padding:300px;
 }
 @media only screen and (max-width:1500px){

  padding:250px;
 }
 @media only screen and (max-width:1400px){

  padding:200px;
 }
 @media only screen and (max-width:1300px){

  padding:150px;
 }
 @media only screen and (max-width:1200px){

  padding:100px;
 }
 @media only screen and (max-width:1100px){

  padding:50px;
 }
 @media only screen and (max-width:1000px){

  padding:0px;
  padding-top:50px;
  padding-bottom:50px;
 }
 @media only screen and (max-width:900px){
 display:block;
 align-items:center;
 padding:20%;
 padding-top:50px;
 padding-bottom:50px;
 }
 @media only screen and (max-width:600px){
  display:block;
  align-items:center;
  padding:9%;
  padding-top:50px;
  padding-bottom:50px;
  }





`
const ContactDetails=styled.h1`
display:block;
font-size:25px;
`
const SubDetails=styled.div`
padding:20px;
padding-left:40px;
`
const SubTitle = styled.div`
padding:20px;
padding-left:40px;
color:darkblue;
`
const ContactFourm = styled.div`
display:block;
`
const ContactusTitle = styled.h1`

padding-top:200px;
text-align:center; color:lightblue;`

const SubContainer = styled.div`
display:flex;
`
const ContactUs = () => {
  return (
    <Container>
      <Contained>
    <Navabar/>
    
    <ContactusTitle>Get in Touch</ContactusTitle>
    <ContactContainer>
        
        <ContactFourm>
    <Contact/>
    </ContactFourm>
    <ContactDetails>
    <SubContainer>
      <SubTitle><b>ADDRESS:</b> </SubTitle>
  <SubDetails>

15A Solopark, Station Road, Pampisford, Cambridge.

Cb22 3HB</SubDetails>
</SubContainer>
<SubContainer>
      <SubTitle><b>OPENING HOURS:</b> </SubTitle>
  <SubDetails>8 AM to 9 PM</SubDetails>
</SubContainer>
<SubContainer>
      <SubTitle><b>PHONE NUMBERS:</b> </SubTitle>
  <SubDetails>
  07776 189458</SubDetails>
</SubContainer>


    </ContactDetails>
    </ContactContainer>
 
     <Footer/>
     </Contained>
    </Container>
  )
}

export default ContactUs