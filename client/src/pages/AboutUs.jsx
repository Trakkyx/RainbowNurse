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
font-size:25px;

`
const NHSInfo = styled.div`
text-align:left;
padding:50px;
color:Black;
font-size:20px;

`
const Points = styled.div`
text-align:left;
padding:50px;
color:Black;
font-size:20px;
line-height:0.1;
`


const Image = styled.img`

align-items:center;
justify-content:center;
display:flex;


`
const NHSImage = styled.img`

align-items:center;
justify-content:center;
display:flex;
width:500px;
padding-top:100px;


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

`
const Contained = styled.div`
display:flex;
align-items:center;
justify-content:left;


`
const PointsContained = styled.div`
display:flex;
align-items:center;
justify-content:left;
text-align:left;
background-color:#fff5d0;
padding:0px;
padding-left:20%;
padding-right:20%;

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
`
const NHSContained = styled.div`
justify-content:center;
align-items:center;
text-align:center;
`
const Button= styled.button`
border:none;
text-align:center;
width:170px;  
padding:20px;
justify-content:center;
align-items:center;
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
        <SubTitle>Our NHS Charities Together Partnership</SubTitle>
        <NHSInfo>We chose to partner up with the NHS Charities Together to help out with the current situation going on in the world. You may know how overworked nurses and doctors are currently and this is where we come in educating children for the future whilst also donating to the NHS Charities Together for the much needed boost they need. </NHSInfo>
        <Button>Find Out More</Button>
        </NHSContained>
        <NHSContained>
        <NHSImage src="https://rainbownurses.com/wp-content/uploads/brizy/imgs/a368f881e3b5e0b62d95192422f6c7d1-456x164x0x1x456x162x1648212911.png"/>
        </NHSContained>
      
      </NHSSECTION>
     </Container>
  <ABOUTUSVIDEOS/>
  <Footer/>
  </div>
  );
};
export default AboutUs;
