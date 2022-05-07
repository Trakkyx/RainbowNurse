import React from 'react'
import styled from "styled-components";
import Contact from '../Component/Contact';
import Footer from '../Component/Footer';
import Navabar from '../Component/Navabar';

const Container = styled.div`


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
padding:50px;
`
const ContactFourm = styled.div`
display:block;
`
const ContactusTitle = styled.h1`

padding-top:200px;
text-align:center; color:lightblue;`
const ContactUs = () => {
  return (
    <Container>
    <Navabar/>
    <ContactusTitle>Get in Touch</ContactusTitle>
    <ContactContainer>
        
        <ContactFourm>
    <Contact/>
    </ContactFourm>
    <ContactDetails>
  <SubDetails><b>ADDRESS:</b><br/>

15A Solopark, Station Road, Pampisford, Cambridge.

Cb22 3HB</SubDetails>
  <SubDetails><b>OPENING HOURS:</b>

8 AM to 9 PM</SubDetails>
  <SubDetails><b>PHONE NUMBERS:</b>

07776 189458</SubDetails>
    </ContactDetails>
    </ContactContainer>
 
     <Footer/>
    </Container>
  )
}

export default ContactUs