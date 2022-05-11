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
padding:500px;
padding-top:5%;
padding-bottom:10%;
align-items:center;
text-align:center;
margin:auto;
display:flex;
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