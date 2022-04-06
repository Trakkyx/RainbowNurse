import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Send, Twitter } from '@material-ui/icons';
import React from 'react';
import styled from "styled-components"

const Container = styled.div`
display:flex;
background-color:#282728;
color:white;
padding-left:10%;
padding-right:10%;
@media only screen and (max-width:1000px){
  display:block;
}

`
const Left = styled.div`
flex:1;
flex-direction:column;
padding:15px;

`

const Center = styled.div`
flex:1;
padding:15px;
padding-top:50px;
`
const Right = styled.div`
flex:1;
padding:15px;
padding-top:50px;
`
const Logo = styled.h1`
`
const Title=styled.h3`
margin-bottom:30px;
`
const List = styled.ul`
margin:0;
padding:0;
list-style:none;
display:flex;
flex-wrap:wrap;
`

const ListItem= styled.li`
width: 50%;
margin-bottom:10px;
`
const SocialContainer = styled.div`
display:flex;
`

const Payment = styled.img`
width:50%;
`

const SocialIcon = styled.div`
width:40px;
height:40px;
border-radius:50%;
color:white;
background-color: #${props=>props.color};
align-items:center;
justify-content:center;
display:flex;
margin-right:20px;

`

const Button = styled.button`
flex:1;
border:none;
background-color:#BC8F4A;
color:white;
cursor:pointer;
transform:scale(1.05);
`


const Desc = styled.p`
margin:20px 0px;
`

const ContactItem = styled.div`
margin-bottom:20px;
display: flex;
align-iems:center;
`

const Img = styled.img`
width:20%;
`

const Input = styled.input`
border:none;
flex:8;
padding-left:30px;
`

const InputContainer = styled.div`
width:50%;

background-color:white;
display:flex;
justify-content:space-between;
border:1px solid lightgray;
margin-bottom:5%;
margin-top:5%;


`


const Footer = () => {
  return (

    <Container>
     <Left>
         <Img src="https://i.ibb.co/XWdKgrm/Next-Level-Logo-removebg-preview-1.png"></Img>
         <Desc>
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
         </Desc>
         <Desc>Get timely updates for all your favorite products!</Desc>
         <InputContainer>
         <Input placeholder="Enter Your Email Here"/>
         <Button>
          <Send/>
         </Button>
         </InputContainer>
         <SocialContainer>
         <SocialIcon color="3B5999">
             <Facebook/>
         </SocialIcon>
         <SocialIcon color="55ACEE">
             <Twitter/>
         </SocialIcon>
         <SocialIcon color="E4405F">
             <Instagram/>
         </SocialIcon>
         <SocialIcon color="E60023">
             <Pinterest/>
         </SocialIcon>
     </SocialContainer>
     </Left>
     <Center>  
     <Title>Useful Links</Title>
     <List>
      <ListItem>Order Tracking</ListItem>
      <ListItem>Terms</ListItem>
      <ListItem>T&Cs</ListItem>
      <ListItem>Shipping & Returns</ListItem>
      <ListItem>Reviews</ListItem>
      <ListItem>Party Drinks</ListItem>
      <ListItem>Energy Drinks</ListItem>
      <ListItem>Gift Cards</ListItem>
     </List>
     </Center>
     <Right>
    <Title>Contact Us</Title>
     <ContactItem>
      <Room style={{marginRight:"10px"}}/>
      Flixton Road 432, Manchester
     </ContactItem>
     <ContactItem>
      <Phone style={{marginRight:"10px"}}/>
      0777898374
     </ContactItem>
     <ContactItem>
      <MailOutline style={{marginRight:"10px"}}/>
      Contact@gmail.com
     </ContactItem>

     </Right>
    </Container>
  );
};

export default Footer;
