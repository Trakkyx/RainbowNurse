import React from 'react';
import Annoncement from '../Component/Annoncement';
import Categories from '../Component/Categories';
import Navabar from '../Component/Navabar';
import Slider from '../Component/Slider';
import Products from "../Component/Products"
import Newsletter from '../Component/Newsletter';
import Footer from '../Component/Footer';
import Upsale from '../Component/Upsale';
import styled from "styled-components"
import { Check } from '@material-ui/icons';
import NHS from './NHS';
import ABOUTUSVIDEOS from '../Component/ABOUTUSVIDEOS';


const Info = styled.div`
text-align:left;
padding:50px;
color:Black;
font-size:20px;
@media only screen and (max-width:1600px){
  
  font-size:18px;
 
}
@media only screen and (max-width:1300px){
  
  font-size:15px;
  
}
@media only screen and (max-width:1100px){
  
  font-size:12px;
  
}
@media only screen and (max-width:930px){
  
  text-align:center;
  
}



`
const NHSInfo = styled.div`
text-align:left;
padding:50px;
color:Black;
font-size:20px;
@media only screen and (max-width:1600px){
 
  font-size:15px;
}

`
const Points = styled.div`
text-align:left;
padding:50px;
color:Black;
font-size:20px;
line-height:0.1;
@media only screen and (max-width:1440px){
 
  font-size:17px;
}
@media only screen and (max-width:1270px){
 
  font-size:15px;
}
@media only screen and (max-width:930px){
 
  font-size:14px;
  line-height:1;
}
`


const Image = styled.img`

align-items:center;
justify-content:center;
display:flex;
@media only screen and (max-width:1600px){
 
  width:70%;
}
@media only screen and (max-width:930px){
 
  display: block;
  margin-left: auto;
  margin-right: auto;
 
}
@media only screen and (max-width:1430px){
   width:60%;
}


`

const BackgroundImage = styled.img`
position:fixed;
width:3000px;
align-items:center;
justify-content:center;
margin-bottom:500px;

`
const NHSImage = styled.img`

align-items:center;
justify-content:center;
display:flex;
width:500px;
padding-top:100px;
@media only screen and (max-width:1400px){
  width:400px;
 


}

@media only screen and (max-width:900px){
  width:300px;
 


`


const Title= styled.h1`
text-align:center;
padding:5%;
padding-bottom:5%;
font-size:50px;
color:darkblue;
`
const SubTitle= styled.h1`

padding:5%;
padding-bottom:5%;
font-size:30px;
color:darkblue;
text-align:center;
`




const Container = styled.div`
padding:20%;
padding-top:10%;
padding-bottom:120px;



`
const Contained = styled.div`
display:flex;
align-items:center;
justify-content:left;
@media only screen and (max-width:930px){
  
  display:block;
  align-items:center;
justify-content:center;

  
}


`
const PointsContained = styled.div`
display:flex;
align-items:center;
justify-content:left;
text-align:left;
background-color:#fff5d0;
padding:0px;
padding-left:15%;
padding-right:15%;
@media only screen and (max-width:1700px){
  padding-left:10%;
  padding-right:10%; 
  
}
@media only screen and (max-width:1170px){
 padding:0px;
 
}


`

const Icon= styled.div`
color:green;
`
const About= styled.div`
padding-bottom:10%;
`
const NHSSECTION = styled.div`
padding-top:10%;
display:flex;
flex-direction: row-reverse;

@media only screen and (max-width:1300px){
  display:block;
 
}
`
const NHSContained = styled.div`
justify-content:center;
align-items:center;
padding:20px;
@media only screen and (max-width:700px){
  padding:5px;
 
}

`
const ButtonContainer = styled.div`
padding:50px;
padding-top:5px;
padding-bottom:5px;
`
const Button= styled.button`
border:none;

width:170px;  
padding:20px;


padding-left:30px;
padding-right:30px;
border-radius: 15px;
background-color:lightblue;
color:black;
cursor:pointer;
font-weight:600;
font-size:17px;

  transition:all 0.5s ease;
&:hover{
    background-color:darkblue;
    color:white;
}
`




const AboutUs = () => {
  return(
  <div>
  <Annoncement/>
  <Navabar/>
 
   <Container>
     <About>
     <Title>Some Things About Us</Title>
     <Contained>
     <Image src="https://rainbownurses.com/wp-content/uploads/brizy/imgs/3a5c7d76db74bd4e9885d6b446a76368-496x496x0x12x496x472x1648212897.jpg"/>
     <Info><b>Our Story<br/><br/><br/>
    

Rainbow Nurses ™ was created by Dean Jacobs whilst locked down in England, in 2020. Inspired by all working within the NHS, with his 20 years in youth education, coaching and growth mindset mentoring he went on a creative journey during the lockdown and came out with stories encompassing the positive growth mindsets that we hope to inspire moving forward into the new ‘normal’ and beyond. </b> </Info>
</Contained>
</About>

<SubTitle style={{backgroundColor:"#fff5d0"}}>Our Standards</SubTitle>
 
   <PointsContained>
     <Icon><Check/></Icon>
     
     <Points>Positive learning to reinforce a healthy mindset</Points>
   </PointsContained>
   <PointsContained>
   <Icon><Check/></Icon>
     <Points>Friendly and responsive customer service</Points>
     </PointsContained>
     <PointsContained>
     <Icon><Check/></Icon>
     <Points>Fast delivery that we can assure you is reliable</Points>
     </PointsContained>
     <PointsContained>
     <Icon><Check/></Icon>
     <Points>A team that is willing to go above and beyond for our customers</Points>
     </PointsContained>
      <NHSSECTION>
      <NHSContained>
        <NHSImage src="https://rainbownurses.com/wp-content/uploads/brizy/imgs/a368f881e3b5e0b62d95192422f6c7d1-456x164x0x1x456x162x1648212911.png"/>
        </NHSContained>
        <NHSContained>
        <SubTitle>Our NHS Charities Together Partnership</SubTitle>
        <NHSInfo>We chose to partner up with the NHS Charities Together to help out with the current situation going on in the world. You may know how overworked nurses and doctors are currently and this is where we come in educating children for the future whilst also donating to the NHS Charities Together for the much needed boost they need. </NHSInfo>
        <ButtonContainer>
        <Button>Find Out More</Button>
        </ButtonContainer>
        </NHSContained>
       
      
      </NHSSECTION>
     </Container>
  <ABOUTUSVIDEOS/>
  <Footer/>
  </div>
  );
};
export default AboutUs;
